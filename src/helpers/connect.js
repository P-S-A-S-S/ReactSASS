const DEBUG = false;

function connect(endpoints, setEndpoints, outArr, setOutArr) {
    var ws = new WebSocket(`wss://${process.env.REACT_APP_FRONT_URL}:443`);
    ws.onopen = function() {
            if(DEBUG) console.log("Connection started");
            
            // Send specific message to backend for endpoint loading
            ws.send("GET botList")
    };

    ws.onmessage = async function(e) {
            await e.data.text().then( async text =>{
                var dataArgs = text.split(': ');
            if(dataArgs[0] === "botlist"){
                    /* JSON.parse(dataArgs[1]).forEach( (elem) => {
                            //endpointsArr.push(elem)
                            setEndpoints([...endpoints,elem] );
                    }) */
                    await setEndpoints( await JSON.parse(dataArgs[1]));
            }
            try{
                    if(JSON.parse(text).hasOwnProperty("endp")){
                        const { endp, command, output } = await JSON.parse(text);
                        if(!outArr.hasOwnProperty(endp)){
                                let oldValue = outArr;
                                oldValue[endp] = [ { command : command, output : output} ];
                                console.log(oldValue)
                                //await setOutArr({...outArr, [endp] : [ {command : command, output : output } ]})
                                await setOutArr(oldValue);
                                console.log("1st Output: ", output)
                        } else {
                                //const newArray = outArr[endp];
                                let oldObj = outArr;
                                await oldObj[endp].push({ command : command, output : output });
                                //await newArray.push({ command : command, output : output });
                                console.log("more outputs: ", output)
                                if(DEBUG) console.log(oldObj);
                                await setOutArr(oldObj);
                        }
                    }
            } catch {
                if(DEBUG) console.log("Error parsing json: ", text)
            }
            if(DEBUG) console.log('Backend says:', text);
            })
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
