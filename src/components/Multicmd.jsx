import '../styles/multi-cmd.css'
import redot from '../media/images/red-dot.svg'
import greendot from '../media/images/green-dot.svg'
import {useState, useEffect} from 'react'
import Column from './Column';
//import { w3cwebsocket as W3CWebSocket } from "websocket";

function Multicmd() {

        const [ column, setColumn ] = useState(false)
        const [display, setDispaly] = useState("endpoints");
        // const [endpoints, setEndpoints] = useState([]);
        var endpointsArr = [];

        useEffect(() => {
                connect();
        });

        function connect() {
        var ws = new WebSocket('ws://localhost:8081');
        ws.onopen = function() {
                console.log("Connection started");
                

                // Send test message to backend
                ws.send("GET botList")
        };
        
        ws.onmessage = function(e) {
                var dataArgs = e.data.split(': ');
                if(dataArgs[0] === "botlist"){
                        JSON.parse(dataArgs[1]).forEach( (elem) => {
                                endpointsArr.push(elem)
                        })
                }
                
                console.log(endpointsArr)
                console.log('Backend says:', e.data);
        };
        
        ws.onclose = function(e) {
                console.log("Connection closed");
                console.log('Reconnect will be attempted in 1 second.', e.reason);
                setTimeout(function() {
                connect();
                }, 1000);
        };
        
        ws.onerror = function(err) {
                console.error('Socket encountered error: ', err.message, 'Closing socket');
                ws.close();
                };
        }
        
        console.log(endpointsArr)
   return (

        <div className="main">
                <button onClick={()=>{setColumn(!column)}}></button>
                { column && <Column toggleColumn={setColumn}/> }
                <div className="banner">

                        <h2>Multi-CMD</h2> 
                </div>

            <div>
                <div className="banner" id="endpoints" onClick={()=>{setDispaly("endpoints")}}>
                        <h2>Select endpoints</h2>

                </div>
                <div className="endpointsDiv" id={display ==="endpoints" ? "openEndpointsDiv" : "" }>
                        <div className="container">
                                        <div className="itemSelect cell">Select</div>
                                        <div className="itemStatus cell">Status</div>
                                        <div className="itemEndpointID tableSeparator cell">Endpoint ID</div>
                                        <div className="itemHostname cell">Hostname</div>

                                        
                                        <div className="tableSeparator cell"><input type="checkbox"></input></div>
                                        <div className="cell">
                                                <object className="status-dot" src={redot}>reddot</object>
                                        </div>
                                        <div className="cell">e31253-124532</div>
                                        <div className="tableSeparator cell">Osmar</div>
                                         
                                        <div className="tableSeparator cell"><input type="checkbox"></input></div>
                                        <div className="cell">
                                                <object className="status-dot" src={greendot}>greendot</object>
                                        </div>
                                        <div className="cell">e31253-124535</div>
                                        <div className="tableSeparator cell">Marti</div>
                                </div>
                        </div>
            </div>



            <div>
                <div className="banner" id="commands" onClick={()=>{setDispaly("cmd")}}>
                        <h2>Command sender</h2>
                </div>
                <div className="cmdDiv" id={display ==="cmd" ? "openCommandsDiv" : "" } >
                        <input className="mainCmd textboxCmd" type="text" placeholder="Insert Command" text="command"></input>
                        <h3>OR</h3>
                        <div className="scriptUploadBtn">
                                
                                <input type="file" id="actual-btn" hidden/>
                                
                                <span id="file-chosen">No .sh script loaded</span>
                                
                                <label htmlFor="actual-btn">Load File</label>
                        </div>
                        <button className="mainCmd buttonCmd" type="submit" value="Submit" text="btn">Send</button>
                </div>

            </div>
            <div>
                <div className={display !== 'output' ? 'fixed banner' : 'banner' } id="output" onClick={()=>{setDispaly("output")}}>
                        <h2>Output result</h2>
                </div>
                <div className="outputDiv" id={display ==="output" ? "openOutputDiv" : "" }> 
                        <div className="botList">
                                <div className="botsListed">e31253-124532/Osmar</div>
                                <div className="botsListed">e31253-124535/Marti</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                                <div className="botsListed">e31253-124534/Other</div>
                        </div>
                        <div className="botOutput">
                                <p>Command: ifconfig</p>
                                <p>Output: blablalba</p>
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Multicmd;  