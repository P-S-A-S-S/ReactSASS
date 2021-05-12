import '../styles/settings.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';
import Header from './Header';

function Settings() {
    const history = useHistory();
    return (
        <div className="Settingscontainer">
            <Header/>
            <div className="Settingspage">
                <h2 className="subtitle">Settings</h2>
                <h1 className="title">SASS</h1>
                <form className="Settings">
                    <input className="inputField" type="text" name="username" placeholder="New username"/>
                    <input className="inputField" type="password" name="password" placeholder="New password"/>
                    <button className="sendform" type="button" name="submit" value="Send" onClick={()=>{history.push("/")}}>Send</button>
                </form>
                <img className="sasslogo" src={logo} alt="sasslogo"/>
            </div>
        </div>
    );
}

export default Settings;