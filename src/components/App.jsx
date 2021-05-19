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

  var isCookieSet = cookies.sassuser !== '' && typeof cookies.sassuser !== 'undefined';  
  if(isCookieSet) {
    console.log(cookies.sassuser);
  } else {
    console.log("No cookies set");
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
          { isCookieSet ? <Multicmd /> : <Login />}
        </Route>
        <Route path="/settings">
          { isCookieSet ? <Settings /> : <Login />}
        </Route>
        <Route path="/history">
          { isCookieSet ? <History /> : <Login />}
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;