import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
//REDUX 
import { Provider } from 'react-redux';
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/type'
import { logoutUser, getUserData } from './redux/actions/userAction';
// IMPORTING PAGES
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

// IMPORTING COMPONENTS
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';
import axios from 'axios';

// IMPORT MUI COMPONENTS
// import MuiThemeProvider from '@material-ui/core/styles/createMuiTheme';
// import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser())
    window.location.href = '/login';
  }else{
    store.dispatch({ type: SET_AUTHENTICATED })
    axios.defaults.headers.common['Athorization'] = token
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <Router>
      <Navbar /> 
      <div className = 'container'>
          <Switch>

            <Route 
              exact 
              path = '/' 
              component={home}
            />

            <AuthRoute 
              exact 
              path = '/login' 
              component={login} 
            />

            <AuthRoute 
              exact 
              path = '/signup'
              component={signup} 
            />

          </Switch>
        </div>
      </Router>
      </div>
      </Provider>
  );
}

export default App;
