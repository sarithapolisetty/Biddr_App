import React, { Component } from 'react';
import AuctionDetails from './AuctionDetails';
import BidList from './BidList';
import Auction from '../requests/auction';
import Bid from '../requests/bid'

class AuctionShowPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            question: props.auction
        };

        this.createBid = this.createBid.bind(this);
    };

    createBid(event) {
        event.preventDefault();
        const { currentTarget } = event;

        const formData = new FormData(currentTarget);

        Bid
            .create({
                bid: formData.get('bid')
            }).then(data => {
                console.log(data)
            })
    }

    componentDidMount() {
        const auctionId = this.props.match.params.id;

        Auction
            .one(auctionId)
            .then(auction => {
                this.setState({ loading: false, auction: auction })
            })
            .catch(() => {
                this.setState({ loading: false })
            })
    };

    render() {
        const { loading, auction } = this.state;

        if (!auction) {
            return (
                <main><h2>Question doesn't exist</h2></main>
            )
        };

        if (loading) {
            return (
                <main><h2>Loading...</h2></main>
            )
        };

        return (
            <main>
                <AuctionDetails {...auction} />
                <form onSubmit={this.createBid}>
                    <div>
                        <input name="bid" id="bid" type="number" />
                    </div>

                    <div>
                        <input type="submit" value="Bid!" />
                    </div>
                </form>
                <BidList bids={auction.bids} />
            </main>
        );
    }
};

export default AuctionShowPage;
