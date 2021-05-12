const DEBUG = false;

function connect(endpoints, setEndpoints, outArr, setOutArr) {
    var ws = new WebSocket('ws://localhost:8081');
    ws.onopen = function() {
            if(DEBUG) console.log("Connection started");
            
            // Send specific message to backend for endpoint loading
            ws.send("GET botList")
    };

    ws.onmessage = function(e) {
            var dataArgs = e.data.split(': ');
            if(dataArgs[0] === "botlist"){
                    /* JSON.parse(dataArgs[1]).forEach( (elem) => {
                            //endpointsArr.push(elem)
                            setEndpoints([...endpoints,elem] );
                    }) */
                    setEndpoints(JSON.parse(dataArgs[1]));
            }
            try{
                    if(JSON.parse(dataArgs[0]).hasOwnProperty("endp")){
                        const { endp, command, output } = JSON.parse(dataArgs[0]);
                        if(!outArr.hasOwnProperty(endp)){
                                setOutArr({...outArr, [endp] : [ {command : command, output : output } ]})
                        } else {
                                const newArray = outArr[endp];
                                newArray.push({ command : command, output : output });
                                console.log(newArray);
                                setOutArr({...outArr, [endp] : newArray});
                        }
                    }
            } catch {
                    console.log("Error parsing json: ", dataArgs[0])
            }
            if(DEBUG) console.log('Backend says:', e.data);
    };
    
    ws.onclose = function(e) {
        if(DEBUG){
            console.log("Connection closed");
            console.log('Reconnect will be attempted in 1 second.', e.reason);
        }
        setTimeout(function() {
        connect();
        }, 1000);
    };
    
    ws.onerror = function(err) {
        if(DEBUG) console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
        };
    }
export{connect};