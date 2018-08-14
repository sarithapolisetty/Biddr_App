import React from "react";

const AuctionDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.details}</p>
      <p>By {props.seller.first_name}</p>
    </div>
  );
};

export default AuctionDetails;
