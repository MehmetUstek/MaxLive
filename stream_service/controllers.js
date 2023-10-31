const axios = require('axios');

async function getStatus(req, res) {
    const status = {
        cpu: `${Math.floor(Math.random() * 100) + 1}%`, 
        memory: `${Math.floor(Math.random() * 100) + 1}% (64Gb)`, 
        bandwidth: `${Math.floor(Math.random() * 100) + 1}Mbps`, 
    };
    res.json(status);
}

async function streamContent(req, res) {
    const token = req.query.token;
    if (!token) {
        res.status(401).send({ error: 'no token' });
        return;
    }
    const userType = await getUserType(token);
    if (!userType) {
        res.status(401).send({ error: 'invalid token' });
        return;
    }
    let message = '';
    switch (userType) {
        case 'basic':
            message = 'start stream with low quality';
            break;
        case 'standard':
            message = 'start stream with medium quality';
            break;
        case 'premium':
            message = 'start stream with high quality';
            break;
        default:
            res.status(500).send({ error: 'unknown user type' });
    }
    res.send({ message: message });
}

async function getUserType(token) {
    try {
        const response = await axios.post(`http://${userService}/usertype`, { token: token });
        return response.data.userRole;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = {
    getStatus,
    streamContent,
    getUserType
};
