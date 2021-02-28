import React,{Component} from 'react';
import './styles/_style.scss';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppHeader from './cmps/AppHeader/AppHeader';
import AppFooter from './cmps/AppFooter/AppFooter';
import HomePage from './pages/HomePage/HomePage';
import { MusixApp } from './pages/MusixApp/MusixApp';
import { Mixes } from './pages/Mixes/Mixes';
import UserProfile from './pages/UserProfile/UserProfile';
import {MixDetails} from './pages/MixDetails/MixDetails';
import SignUp from './pages/SignUp/SignUp';
import { connect } from 'react-redux';


class _App extends Component  {
  render(){
    const {user} = this.props
    const PrivateRoute = (props) => {
      return user ? <Route { ...props } /> : <Redirect to="/signup" />
    }
  return (
    <div className='App'>
      <Router>
        <AppHeader  />
        <main>
        <Switch>
          <PrivateRoute path='/app/mix/:id' component={MixDetails} />
          <PrivateRoute path='/app/mixes' component={Mixes} />
          <PrivateRoute path='/app' component={MusixApp} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute path='/user/:id' component={UserProfile} />
          <Route path='/' component={HomePage} />
        </Switch>
        </main>
        <AppFooter />
      </Router>
    </div>
  );
}

}

function mapStateToProps(state) {
  return {
    user: state.userReducer.loggedInUser
  }
}

export const App = connect(mapStateToProps)(_App);
