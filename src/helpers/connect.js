function connect(endpoints, setEndpoints, outArr, setOutArr) {
    var ws = new WebSocket('ws://localhost:8081');
    ws.onopen = function() {
            console.log("Connection started");
            

            // Send test message to backend
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
export{connect};