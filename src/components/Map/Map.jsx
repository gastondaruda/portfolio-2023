import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
    const defaultProps = {
        center: {
        lat: -34.66599597553595,
        lng: -58.5315886980697
        },
        zoom: 8
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
            />
        </GoogleMapReact>
        </div>
    );
}