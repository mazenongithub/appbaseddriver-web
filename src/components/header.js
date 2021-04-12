import React from 'react';
import AppBasedDriver from './appbaseddriver';
import { MyStylesheet } from './styles';
import { Link } from 'react-router-dom'

class Header {

    showsubheader() {
        const appbaseddriver = new AppBasedDriver();
        const mynav = appbaseddriver.getNavigation.call(this)
      
        const myuser = appbaseddriver.getuser.call(this)
        const styles = MyStylesheet();
        const menufont = appbaseddriver.menufont.call(this)
        let subheader = [];
        if (mynav) {
            if (myuser) {

                switch (mynav.navigation) {
                    case 'driver':

                        subheader.push(
                            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.alignCenter }} key={`subheader-2`}>
                                <Link to={`/${myuser.driverid}/driver`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/driver</Link>
                            </div>
                        )
                        break

                    case 'equipment':

                        subheader.push(
                            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.alignCenter }} key={`subheader-2`}>
                                <Link to={`/${myuser.driverid}/equipment`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/equipment</Link>
                            </div>
                        )
                        break;
              
                    default:
                        break;

                }
            }

        }
        return subheader;
    }



    showheader() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver()
        const menufont = appbaseddriver.menufont.call(this)
        const myuser = appbaseddriver.getuser.call(this)
        const logoWidth = () => {
            return ({ width: '400px' })
        }

        const loginlink = (myuser) => {
            if (myuser) {
                return (<button 
                style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline,  ...styles.noBorder, ...styles.addMargin }} 
                onClick={() => appbaseddriver.logoutuser.call(this)}>
                Logout 
                </button>
                )

            } else {
                return (<Link to={`/user/access`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>Access</Link>)

            }

        }
        const equipmentlink = (myuser) => {

            if (myuser) {
                return (<Link onClick={() => {
                    this.props.reduxNavigation({ navigation: 'equipment' })
                    this.setState({ render: 'render' })
                }}
                    to={`/${myuser.driverid}/equipment`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/equipment</Link>)

            } 

        }

        const showdriver = (myuser) => {
            if (myuser) {
                return (<Link onClick={() => {
                    this.props.reduxNavigation({ navigation: 'driver' })
                    this.setState({ render: 'render' })
                }}
                    to={`/${myuser.driverid}/driver`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/driver</Link>)

            }
        }

        const homelink = (myuser) => {
            if (myuser) {
                return (<Link onClick={() => {
                    this.props.reduxNavigation({ navigation: 'profile' })
                    this.setState({ render: 'render' })
                }} to={`/${myuser.driverid}/profile`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/{myuser.driverid}</Link>)
            } else {
                return (<Link to={`/`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>Home</Link>)
            }
        }


        const menu = () => {

            return (
                <div style={{ ...styles.generalFlex }}>


                    <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                        <div style={{ ...styles.generalContainer, ...styles.generalPadding, ...styles.bottomMargin10 }}>
                            {homelink(myuser)}
                            {equipmentlink(myuser)}
                            {showdriver(myuser)}
                            {loginlink(myuser)}
                        </div>

                    </div>

                </div>
            )


        }
        return (

            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                            <img src="https://civilengineer.io/appbaseddriver/icons/2x/appbaseddriver.png" alt="appbased driver" style={{ ...logoWidth() }} />

                        </div>

                    </div>


                    {menu()}



                </div>

            </div>)
    }
}

export default Header;