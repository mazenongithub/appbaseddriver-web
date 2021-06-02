import React from 'react'
import AppBasedDriver from './appbaseddriver'
import { MyStylesheet } from './styles'
import { Link } from 'react-router-dom'
import { okIcon } from './svg'
import ClientID from './clientid';
import { CheckDriverID } from './actions/api'
import Profile from './profile'
import { validateDriverID } from './functions'
import Spinner from './spinner'

class Access {

    async checkdriverid() {
        const driverid = this.state.driverid;
        console.log(driverid)
        try {
            this.setState({ spinner: true })
            const response = await CheckDriverID(driverid)
            console.log(response)

            if (response.hasOwnProperty("invalid")) {
                this.setState({ checkdriverid: false, message:response.invalid, spinner: false})
            } else {
                this.setState({ checkdriverid: true, message:'', spinner: false })
            }

        } catch (err) {
            alert(err)
            this.setState({ spinner: false })
        }
    }

    handledriverid(driverid) {
        driverid = driverid.toLowerCase();

        this.setState({ driverid })
        let message = validateDriverID(driverid)
        if (message) {
            this.setState({ checkdriverid:false, message })
        } else {
            this.setState({ checkdriverid: true, message })
        }

    }

    showaccess() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
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



        const register = () => {
            if ((this.state.apple || this.state.google) && this.state.driverid && this.state.checkdriverid && (!this.state.spinner)) {
                return (

                <button style={{ ...styles.generalButton, ...okIconWidth()}} onClick={() => { appbaseddriver.clientlogin.call(this) }}>
                    {okIcon()}
                </button>)
            } else if (this.state.spinner) {
                return(<Spinner/>)
            }
        }

        const showdriverid = () => {


            if (!myuser && (this.state.access === 'register')) {

                return (<div style={{ ...styles.generalContainer, ...styles.bottomMargin10 }}>
                    <span style={{ ...styles.generalFont, ...regularFont }}>Please Create A Driver ID</span>
                    <input type="text" style={{ ...styles.generalField, ...styles.generalFont, ...regularFont }}
                        onChange={event => { access.handledriverid.call(this, event.target.value) }}
                        value={this.state.driverid}
                        onBlur={() => { access.checkdriverid.call(this) }} />
                </div>
                )
            }

        }


        if (myuser) {

            return (profile.showprofile.call(this))

        } else {
            return (
                <div style={{ ...styles.generalContainer }}>

                    <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin10 }}>
                        <Link to={`/user/access`} style={{ ...styles.generalLink, ...styles.headerStyle, ...headerFont, ...styles.boldFont, ...styles.logoOutline, ...styles.logoColor }}>/access</Link>
                    </div>


                    {clientid.showclientid.call(this)}

                    {showdriverid()}
                    {register()}

                    <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin15 }}>
                        <span style={{ ...styles.generalFont, ...regularFont }}>
                                {this.state.message}
                        </span>
                    </div>



                </div>)

        }
    }

}

export default Access;