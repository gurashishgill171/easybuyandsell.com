import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Buy from './Components/Buy/Buy';
import Signup from './Components/Signup/Signup';
import Sell from './Components/Sell/Sell';
import Login from './Components/Login/Login';
import Checkout from './Components/Checkout/Checkout';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {CurrentUser} from './Components/Firebase/currentUser'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#df78ef',
      main: '#ab47bc',
      dark: '#790e8b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#c0cfff',
      main: '#8c9eff',
      dark: '#5870cb',
      contrastText: '#fafafa',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CurrentUser>
          <Router>
              <div>
                <Switch>
                  <Route exact path="/">
                      <Navbar />
                  </Route>
                  
                  <Route exact path="/buy">
                    <Navbar />
                      <Buy />
                  </Route>

                  <Route exact path="/sell">
                      <Navbar />
                      <Sell />
                  </Route>

                  <Route exact path="/signup">
                    <Signup />
                  </Route>

                  <Route exact path="/login">
                    <Login />
                  </Route>

                  <Route exact path="/checkout">
                    <Checkout />
                  </Route>

                </Switch>
              </div>
          </Router>
        </CurrentUser>
    </ThemeProvider>
  );
}

export default App;
