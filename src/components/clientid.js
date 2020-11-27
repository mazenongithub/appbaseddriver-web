import React from 'react';
import { MyStylesheet } from './styles';
import { appleID, googlesign } from './svg';
import AppBasedDriver from './appbaseddriver';
class ClientID {

    showclientid(type) {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const loginButton = appbaseddriver.getgoogleicon.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const signinmessage = () => {
            if (this.state.client && this.state.clientid) {
                return `Your Signin is secure with ${this.state.client}`
            } else {
                return `Secure your Sign in`
            }
        }
        const apple = () => {
            if(!this.state.client || !this.state.clientid) {
                return( 
                    <button style={{ ...styles.generalButton, ...loginButton }} onClick={() => { appbaseddriver.appleSignIn.call(this, type) }}>
                        {appleID()}
                    </button>)
            }
        }
        const google = () => {
            if(!this.state.client || !this.state.clientid) {
                return(
                    <button style={{ ...styles.generalButton, ...loginButton }} onClick={() => { appbaseddriver.googleSignIn.call(this, type) }}>
                        {googlesign()}
                    </button>)
            }
        }

        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{...styles.flex1}}>

                    <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1,...styles.generalFont,...regularFont }}>
                            {signinmessage()}
                        </div>
                    </div>

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
    }

}
export default ClientID;