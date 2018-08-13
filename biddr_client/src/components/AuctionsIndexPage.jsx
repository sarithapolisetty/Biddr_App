import React, { Component } from "react";
import Auction from "../requests/auction";

class AuctionIndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            questions: []
        };

    }
    componentDidMount() {
        Auction.all()
            .then(auctions => {
                this.setState({ loading: false, auctions: auctionss });
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }
    render() {
        const { loading, auctions } = this.state;

        if (loading) {
            return (
                <main>
                    <h1>Auctions</h1>
                    <h2>Loading...</h2>
                </main>
            );
      
        }}
    }
        return (
            <main>
                <h1>Auctions</h1>
            </main>
        );
    
      
export default AuctionIndexPage;
