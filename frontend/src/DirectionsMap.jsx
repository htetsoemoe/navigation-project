import React, { useState } from "react";
import { GoogleMap, DirectionsRenderer, useLoadScript, Marker } from '@react-google-maps/api';

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

    const [markers, setMarkers] = useState([])
    const [address, setAddress] = useState('')

    // Add a marker where the user double clicked
    const handleMapDoubleClick = async (event) => {
        try {
            const lat = event.latLng.lat()
            const lng = event.latLng.lng()
            setMarkers((current) => [...current, { lat, lng }])

            // get the address from the lat and lng using the google maps geocoding api
            // const response = await fetch(`http://localhost:3500/api/v1/address/info?lat=${lat}&lng=${lng}`)
            // const data = await response.json()
            // if (data.address) {
            //     setAddress(data.address)
            //     alert(`Address: ${data.address}`)
            // } else {
            //     alert(data.error || 'Unable to fetch address.');
            // }
        } catch (error) {
            alert('Error fetching directions.');
        }
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ENV_GOOGLE_MAPS_API_KEY,
    })
    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap
            onDblClick={handleMapDoubleClick}
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
        >
            <DirectionsRenderer directions={directions} />

            {markers.map((marker, index) => (
                <Marker key={index} position={marker} />
            ))}
        </GoogleMap>
    )
}

export default DirectionMap;