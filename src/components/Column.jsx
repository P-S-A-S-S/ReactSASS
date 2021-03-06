import '../styles/column.css';
import logo from '../media/images/logo.png';
import cmdlogo from '../media/images/cmdlogo.png';
import historylogo from '../media/images/history.png';
import logoutlogo from '../media/images/logout.png';
import settingslogo from '../media/images/settings.png';
import { useHistory } from 'react-router-dom';

function Column(props) {
    const history = useHistory();
  return (
    <div className="mainColumn" onClick={(e)=>{e.preventDefault(); if(e.target === e.currentTarget){props.toggleColumn(false)} }}>
      <div className="Column">
          <div className="colheader">
                <img src={logo} alt="logo"/>
          </div>
          <div className="colbody">
            <div className="colOptions">
                <div className="colmulticmd" onClick={()=>{history.push("/multi-cmd")}}>
                    <div className="cmdlogo">
                        <img src={cmdlogo} alt="logo"/>
                    </div>
                    <p>Multi-CMD</p>
                </div>
                <div className="colhistory" onClick={()=>{history.push("/history")}}>
                    <div className="historylogo">
                        <img src={historylogo} alt="logo"/>
                    </div>
                    <p>History</p>
                </div>
                <div className="colsettings" onClick={()=>{history.push("/settings")}}>
                    <div className="settingslogo">
                        <img src={settingslogo} alt="logo"/>
                    </div>
                    <p>Settings</p>
                </div>
            </div>
            <div className="colLogout" onClick={()=>{history.push("/")}}>
                <div className="logoutlogo">
                    <img src={logoutlogo} alt="logo"/>
                </div>
                <p>Logout</p>
            </div>
          </div>
          <div className="colfooter">
              <p>SASS</p>
          </div>
      </div>
    </div>
  );
}

export default Column;
