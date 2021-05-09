import '../styles/settings.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';

function Settings() {
    const history = useHistory();
    return (
        <div className="Settingscontainer">
            <div className="Settingspage">
                <h1 className="title">SASS</h1>
                <h2 className="subtitle">Settings</h2>
                <form className="Settings">
                    <input type="text" name="username" placeholder="New username"/>
                    <input type="password" name="password" placeholder="New password"/>
                    <button className="sendform" type="button" name="submit" value="Send" onClick={()=>{history.push("/")}}>Send</button>
                </form>
                <img className="sasslogo" src={logo} alt="sasslogo"/>
            </div>
        </div>
    );
}

export default Settings;