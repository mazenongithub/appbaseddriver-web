import React from 'react';
import AppBasedDriver from './appbaseddriver';
import { MyStylesheet } from './styles'
import { Link } from 'react-router-dom'
import ClientID from './clientid'
import Profile from './profile';

class Home {


    showhome() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const profile = new Profile();
        
        const myuser = appbaseddriver.getuser.call(this)
        if(myuser) {
            return(profile.showprofile.call(this))

        } else {

        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin10 }}>
                                <Link to={`/register`} style={{ ...styles.generalLink, ...styles.headerStyle, ...headerFont, ...styles.boldFont, ...styles.logoOutline, ...styles.logoColor }}>/home</Link>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        )


        }


    }
}

export default Home;