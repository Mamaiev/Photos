import React from "react";
import {useMemo} from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";

const Map = props => {
    const center = useMemo(() => ({lat: 50.46, lng: 30.54}), []);
    const results = props.data;

    return (
        <div id="idMap">
            <h2>Mapssss2 </h2>
            <GoogleMap zoom={5} center={center} id={'valera'} mapContainerClassName="map-container">
                {results.map((photo) => (
                    <Marker key={photo.id} position={{lat: photo.latitude, lng: photo.longitude}}/>
                ))}
            </GoogleMap>
        </div>
    );
};

export default Map;


