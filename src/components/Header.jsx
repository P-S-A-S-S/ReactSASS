import '../styles/header.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';
import Column from './Column';
import { useState } from 'react';
import logout from '../media/images/logout.png'


function Header() {
    const history = useHistory();
    const [ column, setColumn ] = useState(false);
    return (
        <div className="header">
            <div className="sandwich" onClick={()=>{setColumn(!column)}}>
                <div className="lineSandv"></div>
                <div className="lineSandv"></div>
                <div className="lineSandv"></div>
            </div>
            <div className="sassLogo">
                <img src={logo} alt="SASS"></img>
            </div>
            <div className="exitBtn" onClick={()=>{history.push('/')}}>
                <img src={logout} alt="logout" />
            </div>
            { column && <Column toggleColumn={setColumn}/> }
        </div>
    );
}

export default Header;