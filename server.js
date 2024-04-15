const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/rankUser', async (req, res) => {
    const { userId, newRank } = req.body;
    try {
        const response = await axios.post('https://apis.roblox.com/groups/v1/groups/{groupId}/users/{userId}/rank', {
            userId,
            newRank
        }, {
            headers: { 'x-api-key': 'YOUR_OPEN_CLOUD_API_KEY' }
        });
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
