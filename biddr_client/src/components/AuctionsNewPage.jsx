import React, { Component } from 'react';
import Auction from '../requests/auction';


class AuctionsNewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            validationErrors: []
        };

        this.createAuction = this.createAuction.bind(this);
    };

    createAuction(event) {
        event.preventDefault();
        const { currentTarget } = event;

        const formData = new FormData(currentTarget);

        Auction
            .create({
                title: formData.get('title'),
                details: formData.get('details'),
                end_date: formData.get('ends_on'),
                reserve_price: formData.get('reserve_price')
            }).then(data => {
                if (data.status === 422) {
                    this.setState({
                        validationErrors: data.errors
                    });
                } else {
                    const auctionId = data.id;
                    this.props.history.push(`/auctions/${auctionId}`);
                };
            });
    }

    render() {
       

        return (
            <main>
                <h2>Create New Auction</h2>
                <form onSubmit={this.createAuction}>
                    <div>
                        <label htmlFor="title">Title</label> <br />
                      
                        <input name="title" id="title" />
                    </div>

                    <div>
                        <label htmlFor="details">Details</label> <br />
                        
                        <textarea name="details" id="details" cols="60" rows="4" />
                    </div>

                    <div>
                        <label htmlFor="ends_on">Ends On</label> <br />
                        
                        <input name="ends_on" id="end_date" type="date" />
                    </div>

                    <div>
                        <label htmlFor="reserve_price">Reserve Price</label> <br />
                       
                        <input name="reserve_price" id="reserve_price" type="number" />
                    </div>

                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </form>
            </main>
        );
    };
};

export default AuctionsNewPage;