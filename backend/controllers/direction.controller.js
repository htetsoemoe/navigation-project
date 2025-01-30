require('dotenv').config();
const axios = require('axios');

const getDirection = async (req, res) => {
    try {
        const { origin, destination, mode = 'driving' } = req.query;
        if (!origin || !destination) {
            return res.status(400).json({
                success: false,
                message: "Origin and destination are required",
            })
        }
        const apiKey = process.env.GOOGLE_MAPS_API_KEY; // this key must be 'Google Maps Routes API Key'
        console.log(`apiKey: ${apiKey}`);
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=${mode}&key=${apiKey}`;

        const response = await axios.get(url);

        if (response.data.status !== 'OK') {
            return res.status(400).json({
                success: false,
                message: response.data.error_message,
            })
        }

        res.status(200).json({
            data: response.data,
            success: true,
            message: "GET_DIRECTION_SUCCESS",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "GET_DIRECTION_ERROR",
            error: error.message,
        })
    }
}

module.exports = {
    getDirection,
}