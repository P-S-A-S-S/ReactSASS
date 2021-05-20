import '../styles/history.css';
import Header from './Header';
import { getHistory } from '../helpers/getHistory';
import { useEffect, useState } from 'react'

function History() {
        
        const [ hist, setHist ] = useState([])

        useEffect( async()=>{
                await setHist(await getHistory())
                await console.log(hist)
        }, [])
        return (
                <div className="main">
                        <Header/>
                        <div>
                                <div className="banner" id="History">
                                        <h2>History</h2>
                                </div>
                                <div className="HistoryDiv" id="openHistoryDiv">
                                        <div className="containerHistory">
                                                <div className="itemSelectHistory cellHistory">Endpoint</div>
                                                <div className="itemStatusHistory cellHistory">Command</div>
                                                <div className="itemEndpointIDHistory cellHistory">Output</div>
                                                <div className="itemHostnameHistory cellHistory">Date</div>
                                                { hist.map( row => {
                                                        return(
                                                        
                                                                <>
                                                                        <div className="hdata">{row.client}</div>
                                                                        <div className="hdata">{row.cmd}</div>
                                                                        <div className="otput hdata">{row.output}</div>
                                                                        <div className="hdata">{row.data}</div>
                                                                        
                                                                </>
                                                        )
                                                }) }
                                        </div>
                                </div>

                        </div>
                </div>
        );
        }
  
  export default History;  