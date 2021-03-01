import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Buy from './Components/Buy/Buy';
import Sell from './Components/Sell/Sell';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/">
                <Navbar />
            </Route>
            
            <Route exact path="/buy">
                <Buy />
            </Route>

            <Route exact path="/sell">
                <Sell />
            </Route>
          </Switch>
          
        </div>
    </Router>
  );
}

export default App;
