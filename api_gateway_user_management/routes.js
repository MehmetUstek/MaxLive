const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/subscription_service", async (req, res) => {
  try {
    const response = await axios.get("http://subscription_service:3000/");
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
    const response = await axios.get("http://account_service:8000/");
    res.json({
      message: "Response from Account Service",
      dataFromService2: response.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
