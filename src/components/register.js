import React from 'react';
import AppBasedDriver from './appbaseddriver';
import { MyStylesheet } from './styles'
import { Link } from 'react-router-dom'
import ClientID from './clientid'
import DriverID from './driverid';

class Register {


    showregister() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const clientid = new ClientID();
        const driverid = new DriverID();
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const showclientid = () => {
            if(this.state.driveridcheck) {
                return(clientid.showclientid.call(this, "register"))
            }
        }
    

        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin10 }}>
                                <Link to={`/register`} style={{ ...styles.generalLink, ...styles.headerStyle, ...headerFont, ...styles.boldFont, ...styles.logoOutline, ...styles.logoColor }}>/register</Link>
                            </div>

                            {driverid.showdriverid.call(this)}

                            {showclientid()}

                            <div style={{...styles.generalContainer, ...styles.alignCenter}}>
                                <span style={{...styles.generalFont, ...regularFont}}>{this.state.message}</span>
                            </div>

                           


                        </div>
                    </div>


                </div>
            </div>
        )


    }
}

export default Register;