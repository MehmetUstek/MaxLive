const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;
const contentManagerHost = process.env.CONTENT_MANAGER_HOST || 'localhost';


// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + uuidv4();
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// Set up multer upload
const upload = multer({ storage: storage });

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Set up index route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set up route for file upload
app.post('/upload', upload.single('file'), async (req, res, next) => {
    try {
        const contentId = uuidv4();
        await axios.post(`http://${contentManagerHost}/content`, { contentId: contentId });
        res.json({ contentId: contentId, success: true });
    } catch (error) {
        res.status(500).json({ success: false })
    }
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});