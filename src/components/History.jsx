import '../styles/history.css';
import Header from './Header';
function History() {        
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
                                </div>
                        </div>

                </div>
        </div>
    );
  }
  
  export default History;  