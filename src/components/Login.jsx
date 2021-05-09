import '../styles/login.css'
import logo from '../media/images/sasslogo.png'

function Login() {
    return (
        <div className="logincontainer">
            <div className="loginpage">
                <h1 className="title">SASS</h1>
                <h2 className="subtitle">Login</h2>
                <form className="login">
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button className="sendform" type="submit" name="submit" value="Send">Send</button>
                </form>
                <img className="sasslogo" src={logo} alt="sasslogo"/>
            </div>
        </div>
    );
}

export default Login;