import React from "react";

const BidDetails = props => {
  return (
    <div>
      <p>
        ${props.bid} on {new Date(props.created_at).toLocaleString()}
      </p>
    </div>
  );
};

export default BidDetails;
