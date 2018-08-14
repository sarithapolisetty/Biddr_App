import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuctionIndexPage from "./AuctionIndexPage";
import AuctionsNewPage from "./AuctionsNewPage";
import AuctionShowPage from "./AuctionShowPage";
import NavBar from "./NavBar";
import User from "../requests/user";
import SignInPage from "./SignInPage";
import Session from "../requests/session";
import AuthRoute from "./AuthRoute";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            currentUser: undefined
        };

        this.destroySession = this.destroySession.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    destroySession() {
        Session.destroy().then(() => {
            this.setState({ currentUser: undefined });

        });

    }

    getUser() {
        return User.current().then(data => {
            if (data.id) {
                this.setState({
                    currentUser: data
                });
            }
        });
    }

    componentDidMount() {
        this.getUser().then(() => {
            this.setState({ loading: false });
        })
    }

    render() {
        const { currentUser } = this.state;

        return (
            <Router>
                <div>
                    <NavBar
                        onSignOut={this.destroySession}
                        currentUser={currentUser} />
                    <Switch>
                        
                        <Route path="/auctions" exact component={AuctionIndexPage} />
                        <AuthRoute isAuth={currentUser} path="/auctions/new" exact
                        component = { AuctionsNewPage }
                            render={props => <AuctionsNewPage {...props} />}
                        />
                    
                        <Route path="/auctions/:id"
                            component = {AuctionShowPage} />}
                        />
                        <Route path="/sign_in"
                            render={props => <SignInPage {...props} onSignIn={this.getUser} />}
                        />
                        
                    </Switch>
                </div>
            </Router>
        );
    }
};

export default App;