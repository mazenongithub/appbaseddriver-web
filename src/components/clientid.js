import React from 'react';
import { MyStylesheet } from './styles';
import { appleID, googlesign } from './svg';
import AppBasedDriver from './appbaseddriver';
import Spinner from './spinner'
class ClientID {
    appleSignIn(type) {
        const appbaseddriver = new AppBasedDriver();
        if(type === 'register') {
            if(window.confirm(`Are you sure you want to register ${this.state.driverid}?`)) {
             appbaseddriver.appleSignIn.call(this, type)
            }
        } else {
            appbaseddriver.appleSignIn.call(this, type)
        }
    }

    googleSignIn(type) {
        const appbaseddriver = new AppBasedDriver();
        if(type === 'register') {
            if(window.confirm(`Are you sure you want to register ${this.state.driverid}?`)) {
                appbaseddriver.googleSignIn.call(this, type)
            } else {
                appbaseddriver.googleSignIn.call(this, type)
            }
        }
    }

    showclientid(type) {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const loginButton = appbaseddriver.getgoogleicon.call(this)
        const clientid = new ClientID();
     
     
        const apple = () => {
            if(!this.state.client || !this.state.clientid) {
                return( 
                    <button style={{ ...styles.generalButton, ...loginButton }} onClick={() => { clientid.appleSignIn.call(this, type) }}>
                        {appleID()}
                    </button>)
            }
        }
        const google = () => {
            if(!this.state.client || !this.state.clientid) {
                return(
                    <button style={{ ...styles.generalButton, ...loginButton }} onClick={() => { clientid.googleSignIn.call(this, type) }}>
                        {googlesign()}
                    </button>)
            }
        }
        if(!this.state.spinner) {
        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{...styles.flex1}}>

                   

                    <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            {apple()}
                        </div>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            {google()}
                        </div>
                    </div>

                </div>



            </div>)

        } else {
            return(<Spinner/>)
        }
    }

}
export default ClientID;