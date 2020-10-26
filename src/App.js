import React, { Component } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Components/BurderBuilder/BurgerBuilder";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Orders from "./Components/Orders/Orders";
import Checkout from "./Components/Checkout/Checkout";
import Authentication from './Components/Authentication/Auth'
import Logout from "./Components/Authentication/Logout/Logout";
import * as actions from './store/action'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')
      this.props.getAuthData(token, userId)
    }
  }


  render() {

    let routes = (
      <Switch>
        <Route exact path='/auth' component={Authentication} />
        <Route exact path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route exact path='/auth' component={Authentication} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path="/orders" component={Orders} />
          <Route path="/checkout" component={Checkout} />
          <Route exact path="/" component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <Router>
        <div className="App">
          <Layout>
            {routes}
          </Layout>
        </div>
      </Router>
    );
  }
}

const mapState = state => {
  return {
    isAuth: state.token !== null
  }
}

const mapDispatch = dispatch => {
  return {
    getAuthData: (token, userId) => dispatch({type: actions.GET_LOCAL_AUTH, token: token, userId: userId})
  }
}


export default connect(mapState, mapDispatch) (App);
