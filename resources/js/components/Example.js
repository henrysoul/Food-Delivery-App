import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './website/Home';
import { Signup } from './website/Signup';
import { Login } from './website/Login';
import { NoMatch } from './website/NoMatch';
import { NavigationBar }  from './Layouts/NavigationBar';

export default class Example extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route  path="/signup" component={Signup} />
                        <Route  path="/login" component={Login} />
                        <Route   component={NoMatch} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
