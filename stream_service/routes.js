const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.get('/', (req, res) => {
    const message = {
        "message": "Welcome to stream server!",
    };
    res.send(message);
});

router.get('/stream', controllers.getStatus);
router.get('/stream/:contentid/:quality', controllers.streamContent);

module.exports = router;

