import React from 'react';
import AppBasedDriver from './appbaseddriver';
import { MyStylesheet } from './styles'
import { Link } from 'react-router-dom'
import ClientID from './clientid';

class Login {

    showlogin() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const clientid = new ClientID();

        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin10 }}>
                        <Link to={`/login`} style={{ ...styles.generalLink, ...styles.headerStyle, ...headerFont, ...styles.boldFont, ...styles.logoOutline, ...styles.logoColor }}>/login</Link>
                    </div>

                    {clientid.showclientid.call(this, "login")}

                </div>
            </div>

        )

    }

}

export default Login;