import '../styles/multi-cmd.css'
import redot from '../media/images/red-dot.svg'
import greendot from '../media/images/green-dot.svg'
import {useState} from 'react'

function Multicmd() {

    const [display, setDispaly] = useState("endpoints");

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
                                                    <object className="status-dot" src={redot}></object>
                                            </cell>
                                            <cell>e31253-124532</cell>
                                            <cell class="tableSeparator">Osmar</cell>
                                            
                                            <cell class="tableSeparator"><input type="checkbox"></input></cell>
                                            <cell>
                                                    <object className="status-dot" src={greendot}></object>
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
                <div class="banner" id="output" onClick={()=>{setDispaly("output")}}>
                        <h2>Output result</h2>
                </div>
                <div class="outputDiv" id={display ==="output" ? "openOutputDiv" : "" }> 
                        
                </div>
            </div>
        </div>
    );
  }
  
  export default Multicmd;  