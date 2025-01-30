require('dotenv').config();
const axios = require('axios');

const getAddress = async (req, res) => {
    try {
        const { lat, lng } = req.query;
        if (!lat || !lng) {
            return res.status(400).json({
                success: false,
                message: "Lat and lng are required",
            })
        }

        // const apiKey = process.env.GOOGLE_MAPS_GEOCODING_API_KEY;
        // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

        // const response = await axios.get(url);
        // if (response.data.status !== 'OK') {
        //     return res.status(400).json({
        //         success: false,
        //         message: response.data.error_message,
        //     })
        // }
        // const address = response.data.results[0]?.formatted_address || "No address found";
        const address = 'Mars Planet'

        res.status(200).json({
            data: { address, lat, lng },
            success: true,
            message: "GET_ADDRESS_SUCCESS",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "GET_ADDRESS_ERROR",
            error: error.message,
        })
    }
}

module.exports = {
    getAddress,
}