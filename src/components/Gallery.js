import React from "react";
import NoPhotos from "./NoPhotos";
import Photo from "./Photo";

const Gallery = props => {
    const results = props.data;
    let photos;
    let noPhotos;
    // map variables to each item in fetched image array and return image component
    if (results.length > 0) {
        photos = results.map(photoDto => {
            let id = photoDto.id;
            return <Photo key={id} id={id}/>;
        });
    } else {
        noPhotos = <NoPhotos/>; // return 'not found' component if no images fetched
    }
    return (
        <div>
            <ul>{photos}</ul>
            {noPhotos}
        </div>
    );
};

export default Gallery;
