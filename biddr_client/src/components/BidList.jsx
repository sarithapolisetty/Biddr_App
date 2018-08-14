import React from 'react';
import BidDetails from './BidDetails'

const BidList = props => {
    const { bids = [] } = props;

    return (
        <ul style={{ padding: 0, listStyle: "none" }}>
            <h4>Previous Bids</h4>
            {bids.map((bid) => (
                <li key={bid.id}>
                    <BidDetails bid={bid.bid} created_at={bid.created_at} />
                </li>
            ))}
        </ul>
    );
};

export default BidList;