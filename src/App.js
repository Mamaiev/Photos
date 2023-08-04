import React, {Component} from "react";
import PhotoContextProvider from "./context/PhotoContext";
import Header from "./components/Header";
import Container from "./components/Container";

class App extends Component {

    render() {
        return (
            <div>
                <PhotoContextProvider>
                    <div>
                        <Header/>
                        <Container/>
                    </div>
                </PhotoContextProvider>
            </div>
        );
    }
}

export default App;
