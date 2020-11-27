export async function CheckEmailAddress(emailaddress) {


    var APIURL = `${process.env.REACT_APP_SERVER_API}/appbaseddriver/${emailaddress}/checkemailaddress`

    return fetch(APIURL, {
        credentials: 'include'

    })
        .then(resp => {

            if (!resp.ok) {

                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {

                        throw data.message;
                    })
                }

            }

            return resp.json();
        })
}
export async function  CheckUser() {

    let APIURL = `${process.env.REACT_APP_SERVER_API}/appbaseddriver/checkuser`
    console.log(APIURL)

    return fetch(APIURL, { credentials: 'include' }).then(resp => {

        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                    throw data.message;
                })
            }
            else {
                let err = { errorMessage: 'Please try again later, server is not responding' };
                throw err;
            }
        }

        return resp.json();
    })
}

export async function AppleLogin(values) {

    const APIURL = `${process.env.REACT_APP_SERVER_API}/appbaseddriver/clientlogin`
  
    return fetch(APIURL, {
        method: 'post',
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),

        body: JSON.stringify(values)
    })
        .then(resp => {

            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {

                        throw data.message;
                    })
                }

            }

            return resp.json();
        })
}

export async function SaveDriver(values) {
   
    const driverid = values.myuser.driverid;
    let APIURL = `${process.env.REACT_APP_SERVER_API}/appbaseddriver/${driverid}/savedriver`
    console.log(APIURL)
    return fetch(APIURL, {
        method: 'post',
        credentials: 'include',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),

        body: JSON.stringify(values)
    })
        .then(resp => {

            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {

                        throw data.message;
                    })
                }
                else {
                    let err = { errorMessage: 'Please try again later, server is not responding' };
                    throw err;
                }
            }

            return resp.json();
        })

}

export async function LogoutUser(driverid) {

    let APIURL = `${process.env.REACT_APP_SERVER_API}/appbaseddriver/${driverid}/logout`
    
    return fetch(APIURL, { credentials: 'include' }).then(resp => {

        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                return resp.json().then(data => {
                    let err = { errorMessage: data.message };
                    throw err;
                })
            }
            else {
                let err = { errorMessage: 'Please try again later, server is not responding' };
                throw err;
            }
        }

        return resp.json();
    })
}

export async function CheckDriverID(driverid) {

    var APIURL = `${process.env.REACT_APP_SERVER_API}/appbaseddriver/${driverid}/checkdriverid`

    return fetch(APIURL, { credentials: 'include' })
        .then(resp => {

            if (!resp.ok) {
            
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {

                        throw data.message;
                    })
                }
                
            }

            return resp.json();
        })
}
