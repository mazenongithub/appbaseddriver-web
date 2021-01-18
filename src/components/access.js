import React from 'react'
import AppBasedDriver from './appbaseddriver'
import { MyStylesheet } from './styles'
import { Link } from 'react-router-dom'
import { appIcon, okIcon } from './svg'
import ClientID from './clientid';
import { CheckDriverID } from './actions/api'
import Spinner from './spinner'
import Profile from './profile'

class Access {

    async checkdriverid() {
        const driverid = this.state.driverid;
        console.log(driverid)
        try {
            this.setState({ spinner: true })
            const response =  await CheckDriverID(driverid)
            console.log(response)
            
            if (response.hasOwnProperty("invalid")) {
                this.setState({ checkdriverid: true, spinner: false,  access: 'login' })
            } else {
                this.setState({ checkdriverid: false, spinner: false,  access:'register' })
            }

        } catch (err) {
            alert(err)
            this.setState({ spinner: false })
        }
    }

    showaccess() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const buttonwidth = appbaseddriver.getremoveicon.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const clientid = new ClientID();
        const access = new Access();
        const myuser = appbaseddriver.getuser.call(this)
        const profile = new Profile();
        const okIconWidth = () => {
            if (this.state.width > 1200) {
                return ({ width: '90px' })

            } else if (this.state.width > 600) {
                return ({ width: '80px' })

            } else {
                return ({ width: '70px' })
            }
        }

        const okicon = () => {
            if(!this.state.spinner) {
                return(<button style={{ ...styles.generalButton, ...okIconWidth() }} onClick={() => { access.checkdriverid.call(this) }}>
                {okIcon()}
            </button>)
            } 
        }

        const okmessage = () => {
            if(!this.state.spinner) {
                return( <span style={{ ...styles.generalFont, ...headerFont, ...styles.boldFont }}>Press Ok</span>)
            } else {
                return(<Spinner/>)
            }
        }

        const loginmessage =() => {
            if(this.state.access === 'login') {
                return(<span style={{...styles.generalFont, ...headerFont, ...styles.boldFont}}>Driver ID {this.state.driverid} found, Would you like to Login?</span>)
            } else if (this.state.access === 'register') {
                return(<span style={{...styles.generalFont, ...headerFont, ...styles.boldFont}}>Driver ID {this.state.driverid} was not found, Would you like to Register?</span>)
            }
        }

        const showclientid = () => {
            if(this.state.access === 'login') {
                return(clientid.showclientid.call(this, "login"))

            } else if (this.state.access === 'register') {
                return(clientid.showclientid.call(this, "register"))

            }
        }

        const signinSecure = () => {
            if(this.state.client) {
                return(<div style={{ ...styles.generalFlex, ...styles.bottomMargin10 }}>
                    <div style={{ ...styles.flex1 }}>
                        <button style={{ ...styles.generalButton, ...buttonwidth }}>
                            {appIcon()}
                        </button>
                    </div>
                    <div style={{ ...styles.flex5 }}>
                        <span style={{ ...styles.generalFont, ...headerFont, ...styles.boldFont }}>Secure Your Sign In</span>
                    </div>
                </div>)
            }
        }

        if(myuser) {
            
            return(profile.showprofile.call(this))

        } else {
        return (
            <div style={{ ...styles.generalContainer }}>

                <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin10 }}>
                    <Link to={`/user/access`} style={{ ...styles.generalLink, ...styles.headerStyle, ...headerFont, ...styles.boldFont, ...styles.logoOutline, ...styles.logoColor }}>/access</Link>
                </div>

                <div style={{ ...styles.generalFlex, ...styles.bottomMargin10 }}>
                    <div style={{ ...styles.flex1 }}>
                        <button style={{ ...styles.generalButton, ...buttonwidth }}>
                            {appIcon()}
                        </button>
                    </div>
                    <div style={{ ...styles.flex5 }}>
                        <span style={{ ...styles.generalFont, ...headerFont, ...styles.boldFont }}>Enter your Driver ID</span>
                    </div>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin10 }}>
                    <input type="text" style={{ ...styles.generalField, ...styles.generalFont, ...regularFont }}
                        onChange={event => { this.setState({ driverid: event.target.value }) }}
                        value={this.state.driverid} />
                </div>

                <div style={{ ...styles.generalFlex, ...styles.bottomMargin10 }}>
                    <div style={{ ...styles.flex1 }}>
                        {okicon()}
                    </div>
                    <div style={{ ...styles.flex5 }}>
                       {okmessage()}
                    </div>
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin10 }}>
                    <span style={{ ...styles.generalFont, ...headerFont, ...styles.boldFont }}>{loginmessage()}</span>
                </div>


                {signinSecure()}

                {showclientid()}




            </div>)

        }
    }

}

export default Access;