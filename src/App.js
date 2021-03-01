import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Buy from './Components/Buy/Buy';
import Signup from './Components/Signup/Signup';
import Sell from './Components/Sell/Sell';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
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

          </Switch>
        </div>
    </Router>
  );
}

export default App;
