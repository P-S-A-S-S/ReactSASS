const sendCommands =  (command, endpoints) => {

    const cleanEndpoints = endpoints.join();
    const jsonData = { cmd: command, endp: cleanEndpoints }

    fetch(`https://${process.env.REACT_APP_FRONT_URL}/sendcommands`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      });
    }
export{sendCommands};
