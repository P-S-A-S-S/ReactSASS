/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/multi-cmd.css';
// import redot from '../media/images/red-dot.svg'
// import greendot from '../media/images/green-dot.svg'
import {useState, useEffect} from 'react'
import {connect} from '../helpers/connect';
import {sendCommands} from '../helpers/sendCommands';
import Header from './Header';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
//import { w3cwebsocket as W3CWebSocket } from "websocket";

function Multicmd() {

        const [ sKey, setSKey ] = useState("");
        const [ command, setCommand ] = useState("");
        const [ display, setDispaly ] = useState("endpoints");
        const [ endpoints, setEndpoints ] = useState([]);
        const [ checks, setChecks ] = useState([]);
        const [ outArr, setOutArr ] = useState({});

        const appendChecked = (e) => {
                if (e.target.checked){
                        console.log("Checked")
                        setChecks([...checks, e.target.value])
                } else {
                        if (checks.includes(e.target.value)){
                                for( var i = 0; i < checks.length; i++){ 
                                        const index = checks.indexOf(e.target.value);
                                        if (index > -1) {
                                        setChecks(checks.filter(item => item !== e.target.value));                                        }  
                                }
                        }
                }
        }

        useEffect(() => {
                connect(endpoints, setEndpoints, outArr, setOutArr);
        }, []);
        
   return (

        <div className="main">
                <Header/>
                <div className="banner">
                        <h2>Multi-CMD</h2> 
                </div>

                <div>
                        <NotificationContainer/>
                        <div className="banner" id="endpoints" onClick={()=>{setDispaly("endpoints")}}>
                                <h2>Select endpoints</h2>
                        </div>
                        <div className="endpointsDiv" id={display ==="endpoints" ? "openEndpointsDiv" : "" }>
                                <div className="container">
                                        <div className="itemSelect cell">Select</div>
                                        <div className="itemStatus cell">Status</div>
                                        <div className="itemEndpointID cell">Endpoint ID</div>
                                        <div className="itemHostname cell">Hostname</div>
                                
                        
                                { 
                                        endpoints.map((endp) => {
                                                return(                                                       
                                                        <>
                                                                <label className="checkboxPadding cell">
                                                                        <input onChange={e=>{appendChecked(e); console.log(checks)}} type="checkbox" value={endp._id} />
                                                                        <span className="customCheckbox"></span>
                                                                </label>
                                                                <div className="cell dotPadding">
                                                                        <div className={ endp.status.alive ? "greenDot" : "redDot"}></div>
                                                                </div>
                                                                <div className="cell">{endp._id}</div>
                                                                <div className="cell">{endp.ip}</div> 
                                                        </>
                                                )             
                                        })
                                }
                                </div>
                        </div>

                </div>

                <div>
                        <div className="banner" id="commands" onClick={()=>{setDispaly("cmd")}}>
                                <h2>Command sender</h2>
                        </div>
                        <form className="cmdDiv" id={display ==="cmd" ? "openCommandsDiv" : "" }>
                                <input className="mainCmd textboxCmd" type="text" placeholder="Insert Command" text="command" onChange={(e)=>{setCommand(e.target.value)}} />
                                <h3>OR</h3>
                                <div className="scriptUploadBtn">
                                        
                                        <input type="file" id="actual-btn" hidden/>
                                        <span id="file-chosen">No .sh script loaded</span>
                                        <label className="loadBtn" htmlFor="actual-btn">Load File</label>
                                </div>
                                <button className="mainCmd buttonCmd" onClick={ async (e)=>{e.preventDefault(); await sendCommands(command, checks); NotificationManager.success("Command sent")}} type="submit" value="Submit" text="btn">Send</button>
                        </form>
                </div>

                <div>
                        <div className={display !== 'output' ? 'fixed banner' : 'banner' } id="output" onClick={()=>{setDispaly("output")}}>
                                <h2>Output result</h2>
                        </div>
                        <div className="outputDiv" id={display ==="output" ? "openOutputDiv" : "" }> 
                                <div className="botList">
                                        {
                                                Object.keys(outArr).map((key)=>{
                                                        return <div onClick={()=>{setSKey(key)}} className="botsListed">{key}</div>
                                                }) 
                                        }
                                        
                                </div>
                                
                                <div className="outPuts">
                                {
                                        sKey !== ""
                                        &&
                                        outArr[sKey].map(data=>{
                                                return(
                                                <div className="botOutput">
                                                        <p>Command: {data.command}</p>
                                                        <p>Output: <br/>{data.output}</p>
                                                </div>
                                                )
                                        })
                                        
                                }
                                </div>
                        </div>
                </div>
        </div>
    );
  }
  
  export default Multicmd;  