const express = require("express");
const app = express();
const axios = require("axios");
const CircuitBreaker = require("opossum");
const routes = require("./routes");

// Implements Circuit Breaking and API Gateway
const subscriptionService = "http://subscription_service:3000"; // Subscription Service URL
const accountService = "http://account_service:8000"; // Account Service URL

// Circuit Breaker Configuration
const circuitBreakerOptions = {
  timeout: 5000, // Time in milliseconds to wait for the function to execute before considering it a failure
  errorThresholdPercentage: 50, // Error rate percentage at which the circuit should open
  resetTimeout: 30000, // Time in milliseconds after which the circuit will attempt to half-open
};

// Circuit Breaker for Subscription Service
const subscriptionServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(subscriptionService);
  return response.data;
}, circuitBreakerOptions);

// Circuit Breaker for Account Service
const accountServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(accountService);
  return response.data;
}, circuitBreakerOptions);

// API Gateway Routes
app.get("/", async (req, res) => {
  try {
    const subscriptionData = await subscriptionServiceCircuit.fire();
    const accountData = await accountServiceCircuit.fire();
    const responseData = {
      subscription: subscriptionData,
      account: accountData,
    };

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error, circuit is open." });
  }
});

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway started on port ${PORT}`);
});
