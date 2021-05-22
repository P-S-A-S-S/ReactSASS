var logged = false;

const modifyCredentials =  async (user, passwd) => {
    const jsonData = { username: user, password: passwd }
    await fetch('https://sass-project.ddns.net/modify', {
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
      })
        .then(res => res.json()) // expecting a json response
          .then( (json) => {
            logged = json.modified;
          });
          console.log(logged)
          return logged;
      }
export{modifyCredentials};