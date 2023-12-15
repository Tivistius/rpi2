// GoogleMapComponent.js
import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapComponent = withGoogleMap(({ coordinates }) => (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: coordinates[0], lng: coordinates[1] }}
    >
        <Marker position={{ lat: coordinates[0], lng: coordinates[1] }} />
    </GoogleMap>
));

// Добавьте ваш ключ API в googleMapURL
GoogleMapComponent.defaultProps = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%` }} />,
};

export default GoogleMapComponent;
