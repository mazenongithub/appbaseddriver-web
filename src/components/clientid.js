import React from 'react';
import { MyStylesheet } from './styles';
import { appleID, googlesign } from './svg';
import AppBasedDriver from './appbaseddriver';
import Spinner from './spinner'
class ClientID {


    showclientid() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const loginButton = appbaseddriver.getgoogleicon.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)


        if (!this.state.spinner && (!this.state.apple && !this.state.google)) {
            return (
                <div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>



                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                <button style={{ ...styles.generalButton, ...loginButton }} onClick={() => { appbaseddriver.appleSignIn.call(this) }}>
                                    {appleID()}
                                </button>
                            </div>
                            <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                <button style={{ ...styles.generalButton, ...loginButton }} onClick={() => { appbaseddriver.googleSignIn.call(this) }}>
                                    {googlesign()}
                                </button>
                            </div>
                        </div>

                    </div>



                </div>)

        } else if (this.state.google || this.state.apple) {
            let client = "";
            if (this.state.google) {
                client = 'google'
            } else if (this.state.apple) {
                client = ' apple'
            }

            return (<div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin15 }}>
                <span style={{ ...styles.generalFont, ...regularFont }}>
                    Your Client is {client}


                </span>

            </div>)


        } else if (this.state.spinner) {
            return (<Spinner />)
        }
    }

}
export default ClientID;