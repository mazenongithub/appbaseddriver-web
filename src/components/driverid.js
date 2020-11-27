import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { goCheckIcon } from './svg';
import { validateDriverID } from './functions'
import { CheckDriverID } from './actions/api'

class DriverID {
    handledriverid(driverid) {
        driverid = driverid.toLowerCase();
        const errmsg = validateDriverID(driverid);
        if (errmsg) {
            this.setState({ driverid, driveridcheck: false, message: errmsg })
        } else {
            this.setState({ driverid, driveridcheck: true, message: "" })
        }
    }

    async verifyDriverID() {
        if (this.state.driveridcheck) {
            let driverid = this.state.driverid;
            try {
                let response = await CheckDriverID(driverid)
                console.log(response)
                if (response.hasOwnProperty("valid")) {
                    this.setState({ driveridcheck: true });
                }
                else {
                    this.setState({ driveridcheck: false, message: response.invalid });
                }

            } catch (err) {

                alert(err)
            }

        }


    }

    showdriverid() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this);

        const goIcon = () => {
            if (this.state.width > 1200) {
                return ({
                    width: '69px'
                })
            } else if (this.state.width > 600) {
                return ({
                    width: '59px'
                })
            } else {
                return ({
                    width: '49px'
                })
            }
        } 
        const driverid = new DriverID();
        const goCheck = () => {
            if (this.state.driverid && this.state.driveridcheck) {
                return (<button style={{ ...styles.generalButton, ...goIcon() }}>{goCheckIcon()}</button>)
            } else {
                return (<span>&nbsp;</span>)
            }
        }
        

        if (this.state.width > 800) {
            return (
                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                    <div style={{ ...styles.flex2, ...styles.generalFont, ...regularFont }}>
                        Create A DriverID
                    </div>
                    <div style={{ ...styles.flex3 }}>
                        <input type="text"
                            value={this.state.driverid}
                            onBlur={() => { driverid.verifyDriverID.call(this) }}
                            onChange={event => { driverid.handledriverid.call(this, event.target.value) }} 
                            style={{ ...styles.generalFont, ...styles.generalField, ...regularFont }} />
                    </div>
                    <div style={{ ...styles.flex1 }}>
                        {goCheck()}
                    </div>

                </div>
            )

        } else {

            return (

                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                    <div style={{ ...styles.flex1 }}>

                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1, ...styles.generalFont, ...regularFont }}>
                                Create A DriverID
                            </div>
                        </div>
                        <div style={{ ...styles.generalFlex }}>

                            <div style={{ ...styles.flex2 }}>
                                <input type="text" 
                                    style={{ ...styles.generalFont, ...styles.generalField, ...regularFont }}
                                    value={this.state.driverid}
                                    onBlur={() => { driverid.verifyDriverID.call(this) }}
                                    onChange={event => { driverid.handledriverid.call(this, event.target.value) }}  />
                                    
                            </div>
                            <div style={{ ...styles.flex1 }}>
                                {goCheck()}

                            </div>
                        </div>
                    </div>

                </div>
            )

        }

    }


}
export default DriverID;