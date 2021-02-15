import React from 'react';
import logo from './logo.svg';
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
import {MusixApp} from './pages/MusixApp/MusixApp';
import {Mixes} from './pages/Mixes/Mixes';
import UserProfile from './pages/UserProfile/UserProfile';
import MixDetails from './pages/MixDetails/MixDetails';
import SignUp from './pages/SignUp/SignUp';
function App() {
  return (
    <div className='App'>
      <Router>
        <AppHeader />
        <Switch>
          <Route path='/app/mix/:id' component={MixDetails} />
          <Route path='/app/mixes' component={Mixes} />
          <Route path='/app' component={MusixApp} />
          <Route path='/signup' component={SignUp} />
          <Route path='/user/:id' component={UserProfile} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
