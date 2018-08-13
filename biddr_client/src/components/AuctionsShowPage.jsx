import React, { Component } from "react";
import Auction from "../requests/auction";

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            auction: undefined
        };
    }
    componentDidMount() {

        const auctionId = this.props.match.params.id;

        Auction.one(auctionId)
            .then(auction => {
                console.log(auction);

                this.setState({ loading: false, auction: auction });
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }
    render() {
        const { loading, auction } = this.state;

        if (loading) {
            return (
                <main>
                    <h2>Loading...</h2>
                </main>
            );
        }

        if (!auction) {
            return (
                <main>
                    <h2>Auction doesn't exist</h2>
                </main>
            );
        }

        return (
            <main>
                <AuctionDetails {...auction} />
                </main>
        );
    }
}

export default AuctionShowPage;