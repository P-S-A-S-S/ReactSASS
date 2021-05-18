import Login from './Login';
import Multicmd from './Multicmd';
import Settings from './Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import History from './History';
import { useCookies } from 'react-cookie';


function App() {
  const [ cookies ] = useCookies(['sassuser']);
  console.log(typeof cookies.sassuser); 
  if(typeof cookies.sassuser !== 'undefined') {
    console.log(cookies.sassuser);
  } else {
    console.log("No cookies set")
  }

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <div>
            <Login/>
          </div>
        </Route>
        <Route path="/multi-cmd">
          { typeof cookies.sassuser !== 'undefined' ? <Multicmd /> : <Login />}
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