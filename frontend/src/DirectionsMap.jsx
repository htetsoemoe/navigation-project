import React from "react";
import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
}

const center = {
    lat: 21.939634032513027,
    lng: 96.09596069717787,
}

function DirectionMap({ directions }) {
    const ENV_GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    console.log(ENV_GOOGLE_MAPS_API_KEY)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ENV_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        >
            <DirectionsRenderer directions={directions} />
        </GoogleMap>
    )
}

export default DirectionMap;