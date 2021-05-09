import '../styles/multi-cmd.css'
import redot from '../media/images/red-dot.svg'
import greendot from '../media/images/green-dot.svg'
import {useState, useEffect} from 'react'
//import { w3cwebsocket as W3CWebSocket } from "websocket";

function Multicmd() {

        const [display, setDispaly] = useState("endpoints");
        //const client = new W3CWebSocket('ws://127.0.0.1:5000');
        useEffect(()=>{
                /*client.onopen = () => {
                        client.send("elpepe");
                        console.log('WebSocket Client Connected');
                };
                client.onmessage = (message) => {
                        console.log(message);
                };*/
                connect();
        });

        function connect() {
        var ws = new WebSocket('wss://localhost:5000');
        ws.onopen = function() {
                console.log("ONOPEN");
                // subscribe to some channels
                ws.send(JSON.stringify({
                //.... some message the I must send when I connect ....
                }));
        };
        
        ws.onmessage = function(e) {
                console.log('Message:', e.data);
        };
        
        ws.onclose = function(e) {
                console.log("ONCLOSE");
                console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
                setTimeout(function() {
                connect();
                }, 1000);
        };
        
        ws.onerror = function(err) {
                console.error('Socket encountered error: ', err.message, 'Closing socket');
                ws.close();
                };
        }
   return (
        <div class="main">
                <div class="banner">
                        <h2>Multi-CMD</h2> 
                </div>

        <div>
                <div class="banner" id="endpoints" onClick={()=>{setDispaly("endpoints")}}>
                        <h2>Select endpoints</h2>

                </div>
                <div class="endpointsDiv" id={display ==="endpoints" ? "openEndpointsDiv" : "" }>
                        <div class="container">
                                        <cell class="itemSelect">Select</cell>
                                        <cell class="itemStatus">Status</cell>
                                        <cell class="itemEndpointID tableSeparator">Endpoint ID</cell>
                                        <cell class="itemHostname">Hostname</cell>
                                        <cell class="tableSeparator"><input type="checkbox"></input></cell>
                                        <cell>
                                                <object className="status-dot" src={redot}>reddot</object>
                                        </cell>
                                        <cell>e31253-124532</cell>
                                        <cell class="tableSeparator">Osmar</cell>
                                         
                                        <cell class="tableSeparator"><input type="checkbox"></input></cell>
                                        <cell>
                                                <object className="status-dot" src={greendot}>greendot</object>
                                        </cell>
                                        <cell>e31253-124535</cell>
                                        <cell class="tableSeparator">Marti</cell>
                                </div>
                        </div>
                </div>



        <div>
                <div class="banner" id="commands" onClick={()=>{setDispaly("cmd")}}>
                        <h2>Command sender</h2>
                </div>
                <div class="cmdDiv" id={display ==="cmd" ? "openCommandsDiv" : "" } >
                        <input class="mainCmd textboxCmd" type="text" placeholder="Insert Command" text="command"></input>
                        <h3>OR</h3>
                        <div class="scriptUploadBtn">
                                
                                <input type="file" id="actual-btn" hidden/>
                                
                                <span id="file-chosen">No .sh script loaded</span>
                                
                                <label for="actual-btn">Load File</label>
                        </div>
                        <button class="mainCmd buttonCmd" type="submit" value="Submit" text="btn">Send</button>
                </div>

            </div>
            <div>
                <div class={display !== 'output' ? 'fixed banner' : 'banner' } id="output" onClick={()=>{setDispaly("output")}}>
                        <h2>Output result</h2>
                </div>
                <div class="outputDiv" id={display ==="output" ? "openOutputDiv" : "" }> 
                        <div class="botList">
                                <div class="botsListed">e31253-124532/Osmar</div>
                                <div class="botsListed">e31253-124535/Marti</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                                <div class="botsListed">e31253-124534/Other</div>
                        </div>
                        <div class="botOutput">
                                <p>Command: ifconfig</p>
                                <p>Output: blablalba</p>
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Multicmd;  