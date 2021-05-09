import '../styles/login.css'
import logo from '../media/images/sasslogo.png'
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    return (
        <div className="logincontainer">
            <div className="loginpage">
                <h1 className="title">SASS</h1>
                <h2 className="subtitle">Login</h2>
                <form className="login">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button className="sendform" type="button" name="submit" value="Send" onClick={()=>{history.push("/multi-cmd")}}>Send</button>
                </form>
                <img className="sasslogo" src={logo} alt="sasslogo"/>
            </div>
        </div>
    );
}

export default Login;