import React, {useContext, useEffect} from "react";
import {PhotoContext} from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";
import Map from "./Map";
import NoPhotos from "./NoPhotos";

const Container = ({searchTerm}) => {
    const {photos, loading, runSearch} = useContext(PhotoContext);
    useEffect(() => {
        runSearch(searchTerm);
        // eslint-disable-next-line
    }, [searchTerm]);

    return (
        <div className="photo-container">
            {loading ? <NoPhotos/> :
                <div>
                    {/*<Gallery data={photos} />*/}
                    <Map data={photos}/>
                </div>
            }
        </div>
    );
};

export default Container;
