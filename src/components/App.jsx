//import Multicmd from './Multicmd'
import Login from './Login';
import Multicmd from './Multicmd';
import Settings from './Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import History from './History';

function App() {
  const [ column, setColumn ] = useState(false)
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <div>
            <Login/>
          </div>
        </Route>
        <Route path="/multi-cmd">
          <Multicmd/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/history">
          <History/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;