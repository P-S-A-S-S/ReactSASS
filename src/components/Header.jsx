/* eslint-disable no-unused-vars */
import '../styles/header.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';
import Column from './Column';
import { useState } from 'react';
import logout from '../media/images/logout.png'
import { useCookies } from 'react-cookie';


function Header() {
    const history = useHistory();
    const [ column, setColumn ] = useState(false);
    const [ cookie, removeCookie ] = useCookies(['sass-user']);

    const handleLogout = () => {
        removeCookie('sassuser', '', { path: '/' });
        history.push('/');
    }

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
            <div className="exitBtn" onClick={ () => {handleLogout()} }>
                <img src={logout} alt="logout" />
            </div>
            { column && <Column toggleColumn={setColumn}/> }
        </div>
    );
}

export default Header;