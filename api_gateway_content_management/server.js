const express = require("express");
const app = express();
const axios = require("axios");
const CircuitBreaker = require("opossum");
const routes = require("./routes");

// Implements Circuit Breaking and API Gateway
const subscriptionService = "http://localhost:3009"; // Subscription Service URL
const accountService = "http://localhost:8000"; // Account Service URL

const analyticsService = "http://localhost:3000";
const authorizationService = "http://localhost:3002";
const contentStorageService = "http://localhost:3003";
const paymentGatewayService = "http://localhost:3004";
const personalizationService = "http://localhost:3006";
const ratingService = "http://localhost:3007";
const streamService = "http://localhost:3008";
const uploadService = "http://localhost:3010";

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

const analyticsServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(analyticsService);
  return response.data;
}, circuitBreakerOptions);
const authorizationServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(authorizationService);
  return response.data;
}, circuitBreakerOptions);

const contentStorageServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(contentStorageService);
  return response.data;
}, circuitBreakerOptions);

const paymentGatewayServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(paymentGatewayService);
  return response.data;
}, circuitBreakerOptions);
const personalizationServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(personalizationService);
  return response.data;
}, circuitBreakerOptions);

const ratingServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(ratingService);
  return response.data;
}, circuitBreakerOptions);

const streamServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(streamService);
  return response.data;
}, circuitBreakerOptions);

const uploadServiceCircuit = new CircuitBreaker(async () => {
  const response = await axios.get(uploadService);
  return response.data;
}, circuitBreakerOptions);

// API Gateway Routes
app.get("/", async (req, res) => {
  try {
    const subscriptionData = await subscriptionServiceCircuit.fire();
    const accountData = await accountServiceCircuit.fire();
    const analyticsServiceData = await analyticsServiceCircuit.fire();
    const authorizationData = await authorizationServiceCircuit.fire();
    const contentStorageData = await contentStorageServiceCircuit.fire();
    const paymentGatewayData = await paymentGatewayServiceCircuit.fire();
    const personalizationData = await personalizationServiceCircuit.fire();
    const ratingServiceData = await ratingServiceCircuit.fire();
    const streamServiceData = await streamServiceCircuit.fire();
    const uploadServiceData = await uploadServiceCircuit.fire();

    const responseData = {
      subscription: subscriptionData,
      account: accountData,
      analyticsServiceData,
      authorizationData,
      contentStorageData,
      paymentGatewayData,
      personalizationData,
      ratingServiceData,
      streamServiceData,
      uploadServiceData,
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
  console.log(`Content Management API Gateway started on port ${PORT}`);
});
