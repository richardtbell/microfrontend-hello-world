import React from 'react';
import HelloReactApp from './components/HelloReactApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>home</Link><br />
        <Link to='/react'>use react</Link>
    </div >
)

export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/' component={HelloReactApp} />
            </Switch>
        </Router>
    )
}