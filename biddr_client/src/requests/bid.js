const Bid = {
    create(id, params) {
        return fetch(`http://localhost:3000//auctions/${id}/bids`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
}

export default Bid;