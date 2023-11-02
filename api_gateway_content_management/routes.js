const express = require("express");
const router = express.Router();
const axios = require("axios");

const subscriptionService = "http://subscription_service:3000"; // Subscription Service URL
const accountService = "http://account_service:8000"; // Account Service URL

const analyticsService = "http://analytics_service:3000";
const authorizationService = "http://authorization_service:3000";
const contentStorageService = "http://content_storage_service:3000";
const paymentGatewayService = "http://payment_gateway_service:3000";
const personalizationService = "http://personalization_service:3000";
const ratingService = "http://rating_service:3000";
const streamService = "http://stream_service:3000";
const uploadService = "http://upload_service:3000";

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

router.get("/content_storage_service", async (req, res) => {
  try {
    const response = await axios.get(contentStorageService);
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

router.get("/personalization_service", async (req, res) => {
  try {
    const response = await axios.get(personalizationService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/rating_service", async (req, res) => {
  try {
    const response = await axios.get(ratingService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/stream_service", async (req, res) => {
  try {
    const response = await axios.get(streamService);
    res.json({
      message: "Response from Subscription Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/upload_service", async (req, res) => {
  try {
    const response = await axios.get(uploadService);
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
