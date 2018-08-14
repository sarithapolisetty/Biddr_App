import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
    const { currentUser, onSignOut = () => { } } = props;

    const handleClick = event => {
        event.preventDefault();
        onSignOut();
    }

    return (
        <nav>
            
            <NavLink exact to="/auctions">Auctions</NavLink>{" | "}
            {currentUser ? (
                <NavLink exact to="/auctions/new">New Auction</NavLink>
            ) : null}
            {currentUser ? (
                <React.Fragment>
                    <span> | Welcome, {currentUser.full_name} | </span>
                    <a onClick={handleClick} href="#not-used">Sign Out</a>
                </React.Fragment>
            ) : (
                    <NavLink exact to="/sign_in">Sign In</NavLink>
                )}
        </nav>
    );
};

export default NavBar;