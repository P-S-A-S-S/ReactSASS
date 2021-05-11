import '../styles/header.css';
import logo from '../media/images/sasslogo.png';
import { useHistory } from 'react-router-dom';
import Column from './Column';
import { useState } from 'react';


function Header() {
    const history = useHistory();
    const [ column, setColumn ] = useState(false);
    return (
        <div class="header">
            <div class="sandwich" onClick={()=>{setColumn(!column)}}>
                <div className="lineSandv"></div>
                <div className="lineSandv"></div>
                <div className="lineSandv"></div>
            </div>
            <div class="sassLogo">
                <img src={logo} alt="SASS"></img>
                <h2 class="sassText">SASS</h2>
            </div>
            <div class="exitBtn">
                <img src="../images/logut.png" alt="Image" width="40px" height="40px"></img>
            </div>
            { column && <Column toggleColumn={setColumn}/> }
        </div>
    );
}

export default Header;