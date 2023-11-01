const express = require("express");
const router = express.Router();
const axios = require("axios");

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
