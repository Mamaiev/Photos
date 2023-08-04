import React from "react";
import {useMemo} from "react";
import {GoogleMap, Marker, MarkerClusterer} from "@react-google-maps/api";

export default function Map(props) {
    const center = useMemo(() => ({lat: 50.46, lng: 30.54}), []);
    const results = props.data;

    return (
        <div id="idMap">
            <h2>Photos</h2>
            <GoogleMap id={'googleMap'}
                       zoom={5}
                       center={center}
                       mapContainerClassName="map-container">

                <MarkerClusterer>
                    {(clusterer) =>
                        results.map((photo) => (
                            <Marker key={photo.id}
                                    position={{lat: photo.latitude, lng: photo.longitude}}
                                    clusterer={clusterer}/>
                        ))
                    }
                </MarkerClusterer>
            </GoogleMap>
        </div>
    );
};
