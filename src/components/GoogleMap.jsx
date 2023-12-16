import React from 'react';

const GoogleMap = ({link}) => {
    console.log('asdasdasgdasgdjasgdasgdasghasghdgashdgashdgas',link);
    return (
        <iframe
            className = "MapContainer"
            style={{
                marginTop: "1em",
                border: '0',
                boxShadow: '-moz-initial',
                WebkitBoxShadow: '5px 6px 50px grey'
            }}
            width= "70%"
            height="50%"
            src = {link}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    );
};

export default GoogleMap;