import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

export default class Example extends Component {
    render() {
        return (
            <React.Fragment>
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
