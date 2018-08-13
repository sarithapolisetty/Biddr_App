import React, { Component } from "react";
import AuctionIndexPage from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";

class App extends Component {
    render() {
        return (
            <div>
                <AuctionIndexPage />
                <AuctionShowPage />
            </div>

        );
    }
}
export default App;

