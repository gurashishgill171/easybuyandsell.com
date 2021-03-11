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
      light: '#fafafa',
      main: '#eeeeee',
      dark: '#9e9e9e',
      contrastText: '#212121',
    },
    secondary: {
      light: '#b2ff59',
      main: '#25F55D',
      dark: '#64dd17',
      contrastText: '#212121',
    },
  },
  typography: {
    fontFamily: "sans-serif",
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <CurrentUser>
            <Router>
                <div>
                <Navbar /> 
                  <Switch>
                    <Route exact path="/sell">
                        <Sell />
                    </Route>

                    <Route exact path="/signup">
                      <Signup />
                    </Route>

                    <Route exact path="/login">
                      <Login />
                    </Route>

                    <Route exact path="/buy">
                    
                        <Buy />
                    </Route>

                    <Route exact path="/checkout">
                      <Checkout />
                    </Route>

                  </Switch>
                </div>
            </Router>
          </CurrentUser>
      </ThemeProvider>
    </div>
  );
}

export default App;
