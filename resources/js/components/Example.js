import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './website/Home';
import  Signup  from './website/Signup';
import  Login  from './website/Login';
import { NoMatch }  from './website/NoMatch';
import { NavigationBar }  from './Navigation/NavigationBar';
import axios from 'axios';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import reducer from '../store/reducer/auth';
import thunk from 'redux-thunk';
import Dashboard from './Pages/Partials/Dashboard';
import auth from '../store/reducer/auth';
import AddMenuItems from './Pages/Admin/AddMenuItems';
import AddDeliveryGuy from './Pages/Admin/AddDeliveryGuy';
import DeliveryGuys from './Pages/Admin/DeliveryGuys';
import setAuthorizationToken from './Auth/setAuthorizationToken';
import MenuItems from './Pages/Admin/MenuItems';


axios.defaults.baseURL = 'http://localhost:8000/api';

class Example extends Component {
    
    componentDidMount() {
        document.body.style.backgroundColor = "#ededed";
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route  path="/signup" component={Signup} />
                        <Route  path="/login" component={Login} />
                        <Route  path="/dashboard" component={Dashboard} />
                        <Route  path="/add_menu_items" component ={AddMenuItems}/>
                        <Route  path="/menu_items" component ={MenuItems}/>
                        <Route  path="/add_delivery_guy" component ={AddDeliveryGuy}/>
                        <Route  path="/delivery_guys" component ={DeliveryGuys}/>
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

const rootReducer = combineReducers({
    auth: auth
});

setAuthorizationToken(localStorage.bearer);
const store = createStore(rootReducer,applyMiddleware(thunk));
if (document.getElementById('example')) {
    ReactDOM.render(<Provider store={store}><Example /></Provider>, document.getElementById('example'));
}
export default Example
