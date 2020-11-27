import React from 'react';
import AppBasedDriver from './appbaseddriver';
import { MyStylesheet } from './styles';
import { hamburgerIcon, closeIcon } from './svg'
import { Link } from 'react-router-dom'

class Header {

    

    showheader() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver()
        const menufont = appbaseddriver.menufont.call(this)
        const myuser = appbaseddriver.getuser.call(this)
        const logoWidth = () => {
            return ({ width: '400px' })
        }
        const hamburger = () => {
            return ({ width: '48px' })
        }
        const close = () => {
            return ({ width: '37px' })
        }

        const loginlink = (myuser) => {
            if(myuser) {
                return(     <button style={{...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding,...styles.whiteOutline, ...styles.addMargin }} onClick={()=>appbaseddriver.logoutuser.call(this)}>Logout </button>)

            } else {
                return(     <Link to={`/login`} style={{...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding,...styles.whiteOutline, ...styles.addMargin }}>Login</Link>)

            }

        }

        const menu = () => {

          

                return (
                    <div style={{ ...styles.generalFlex }}>
                    

                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                            <div style={{ ...styles.generalContainer,...styles.generalPadding,...styles.bottomMargin10}}>
                           
                                {loginlink(myuser)}

                      
                                <Link to={`/`} style={{ ...styles.generalLink,...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding,...styles.whiteOutline, ...styles.addMargin}}>Home</Link>
                    


                                <Link to={`/register`} style={{ ...styles.generalLink,...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding,...styles.whiteOutline, ...styles.addMargin  }}>Register</Link>
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

                            <img src="https://civilengineer.io/appbaseddriver/icons/2x/appbaseddriver.png" style={{ ...logoWidth() }} />

                        </div>

                    </div>


                    {menu()}



                </div>

            </div>)
    }
}

export default Header;