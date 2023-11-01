const express = require("express");
const router = express.Router();
const axios = require("axios");

const subscriptionService = "http://subscription_service:3009"; // Subscription Service URL
const accountService = "http://account_service:8000"; // Account Service URL

const analyticsService = "http://analytics_service:3000";
const authorizationService = "http://authentication_service:3002";
const paymentGatewayService = "http://payment_gateway_service:3004";

router.get("/subscription_service", async (req, res) => {
  try {
    const response = await axios.get(subscriptionService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/account_service", async (req, res) => {
  try {
    const response = await axios.get(accountService);
    res.json({
      message: "Response from Account Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/analytics_service", async (req, res) => {
  try {
    const response = await axios.get(analyticsService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/authorization_service", async (req, res) => {
  try {
    const response = await axios.get(authorizationService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/payment_gateway_service", async (req, res) => {
  try {
    const response = await axios.get(paymentGatewayService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
