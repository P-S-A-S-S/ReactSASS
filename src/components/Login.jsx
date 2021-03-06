import '../styles/login.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';
import { sendCredentials } from '../helpers/sendCredentials';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useCookies } from 'react-cookie';

function Login() {
    const history = useHistory();
    const [ user, setUser ] = useState("");
    const [ passwd, setPasswd ] = useState("");
    const [ cookie, setCookie ] = useCookies(['sass-user']);

    const loginHandler = async () => {
        if(await sendCredentials(user, passwd)){
            setCookie('sassuser', 'successfulLogin', { path: '/' })
            console.log(cookie);
            history.push("/multi-cmd") 
        } else { 
            NotificationManager.error("Invalid Credentials, try again.") 
        }
    }

    return (
        <div className="logincontainer">
            <NotificationContainer/>
            <div className="loginpage">
                <h1 className="Ltitle">SASS</h1>
                <h2 className="subtitle">Login</h2>
                <form className="login" action="POST">
                    <input className="inputField" type="text" name="username" placeholder="Username" onChange={ (e) => { setUser(e.target.value)}} />
                    <input className="inputField" type="password" name="password" placeholder="Password" onChange={ (e) => { setPasswd(e.target.value)}} />
                    <button className="sendform" type="submit" name="submit" value="Send" onClick={ (e) => {loginHandler(); e.preventDefault()}}>Send</button>
                </form>
                <img className="sasslogo" src={logo} alt="sasslogo"/>
            </div>
        </div>
    );
}

export default Login;