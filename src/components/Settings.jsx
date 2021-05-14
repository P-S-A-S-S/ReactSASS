import '../styles/settings.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';
import { modifyCredentials } from '../helpers/modifyCredentials';
import Header from './Header';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function Settings() {
    const history = useHistory();
    const [ user, setUser ] = useState("");
    const [ passwd, setPasswd ] = useState("");

    return (
        <div className="Settingscontainer">
            <NotificationContainer/>
            <Header/>
            <div className="Settingspage">
                <h2 className="subtitleS">Settings</h2>
                <h1 className="Stitle">SASS</h1>
                <form className="Settings">
                    <input className="inputField" type="text" name="username" placeholder="Current username" onChange={ (e) => { setUser(e.target.value)}} />
                    <input className="inputField" type="password" name="password" placeholder="New password" onChange={ (e) => { setPasswd(e.target.value)}} />
                    <button className="sendform" type="button" name="submit" value="Send" onClick={ async ()=> { if(await modifyCredentials(user, passwd)){ NotificationManager.success("Successfully modified!") }}}>Send</button>
                </form>
                <img className="sasslogo" src={logo} alt="sasslogo"/>
            </div>
        </div>
    );
}

export default Settings;