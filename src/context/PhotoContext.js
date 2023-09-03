import React, {createContext, useState} from "react";
import axios from "axios";

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const runSearch = query => {
        axios
            .get(`http://localhost:8080/all`, {
                    timeout: 5000
                }
            )
            .then(response => {
                setPhotos(response.data);
                setLoading(false);
            })
            .catch(error => {
                if (error.code !== 200) {
                    console.log('Request timeout! Please get request again.');
                } else {
                    console.log(
                        "Encountered an error with fetching and parsing data",
                        error
                    );
                }
            });
    };
    return (
        <PhotoContext.Provider value={{photos, loading, runSearch}}>
            {props.children}
        </PhotoContext.Provider>
    );
};

export default PhotoContextProvider;
