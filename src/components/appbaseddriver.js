import firebase from 'firebase/app';
import 'firebase/auth';
import { AppleLogin, LogoutUser, SaveDriver } from './actions/api'
import { MyStylesheet } from './styles';

class AppBasedDriver {

    async logoutuser() {
        const design = new AppBasedDriver();
        const myuser = design.getuser.call(this);
        if (myuser) {
            try {

                let response = await LogoutUser(myuser.driverid);
                console.log(response)
                this.props.reduxUser(response)

            } catch (err) {
                alert(err)
            }

        }

    }

    async savedriver() {
        console.log("savedriver")
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            console.log("userfound")
            try {

                let response = await SaveDriver({ myuser })
                console.log(response)
                if (response.hasOwnProperty("driverid")) {
                    this.props.reduxUser(response)
                    let message = `Driver Updated ${new Date().toLocaleTimeString()}`
                    this.setState({message})
                }


            } catch (err) {

            }
        }


    }
    showsavedriver() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const menufont = appbaseddriver.menufont.call(this)
        return (
            <div style={{ ...styles.generalContainer, ...styles.alignCenter }}>
                <button
                    style={{ ...styles.generalButton, ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}
                    onClick={() => appbaseddriver.savedriver.call(this)} >Save Driver</button>
            </div>
        )
    }
    getuser() {
        let user = false;
        if (this.props.myusermodel) {
            if (this.props.myusermodel.hasOwnProperty("driverid")) {
                user = this.props.myusermodel
            }
        }
        return user;
    }
    menufont() {

        if (this.state.width > 1200) {
            return ({ fontSize: '40px' })
        } else if (this.state.width > 600) {
            return ({ fontSize: '32px' })
        } else {
            return ({ fontSize: '24px' })
        }

    }
    getgoogleicon() {

        if (this.state.width > 1200) {
            return ({ width: '365px', height: '87px' })
        } else if (this.state.width > 600) {
            return ({ width: '277px', height: '66px' })
        } else {
            return ({ width: '140px', height: '33px' })
        }

    }
    getRegularFont() {
        if (this.state.width > 1200) {
            return ({ fontSize: '36px' })
        } else if (this.state.width > 600) {
            return ({ fontSize: '30px' })
        } else {
            return ({ fontSize: '24px' })
        }
    }
    getHeaderFont() {
        if (this.state.width > 1200) {
            return ({ fontSize: '40px' })
        } else if (this.state.width > 600) {
            return ({ fontSize: '36px' })
        } else {
            return ({ fontSize: '30px' })
        }
    }
    async clientlogin(values) {



        try {
            let response = await AppleLogin(values)
            console.log(response)
            this.props.reduxUser(response)
        } catch (err) {
            alert(err)
        }
    }
    async appleSignIn(type) {
        const appbaseddriver = new AppBasedDriver();
        const provider = new firebase.auth.OAuthProvider('apple.com');
        provider.addScope('email');
        provider.addScope('name');


        try {
            const result = await firebase.auth().signInWithPopup(provider)
            console.log(result)
            let clientid = "";
            let firstname = "";
            let lastname = "";
            let emailaddress = "";
            let profileurl = "";
            let phonenumber = "";
            let user = {}
            let apple = "";

            if (result.hasOwnProperty("user")) {

                user = result.user;
                apple = user.providerData[0].uid;
                if (user.providerData[0].displayName) {
                    firstname = user.providerData[0].displayName.split(' ')[0]
                    lastname = user.providerData[0].displayName.split(' ')[1]
                }

                emailaddress = user.providerData[0].email
                profileurl = user.providerData[0].photoURL
                phonenumber = user.phoneNumber;
            }

            const values = { firstname, lastname, emailaddress, profileurl, phonenumber, type, apple, driverid: this.state.driverid }
            console.log(values)

            appbaseddriver.clientlogin.call(this, values)

        } catch (err) {
            alert(err)
        }

    }

    async googleSignIn(type) {
        const appbaseddriver = new AppBasedDriver();


        try {

            let google = "";
            let firstname = "";
            let lastname = "";
            let emailaddress = "";
            let profileurl = "";
            let phonenumber = "";
            let user = {}
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');
            provider.addScope('profile');
            let result = await firebase.auth().signInWithPopup(provider)
            console.log(result)
            if (result.hasOwnProperty("user")) {

                user = result.user;
                google = user.providerData[0].uid;
                firstname = user.providerData[0].displayName.split(' ')[0]
                lastname = user.providerData[0].displayName.split(' ')[1]
                emailaddress = user.providerData[0].email
                profileurl = user.providerData[0].photoURL
                phonenumber = user.phoneNumber;
            }
            const values = { firstname, lastname, emailaddress, profileurl, phonenumber, type, driverid: this.state.driverid, google }
            console.log(values)



            appbaseddriver.clientlogin.call(this, values)





        } catch (error) {
            alert(error)
        }


    }

    getgocheckheight() {
        if (this.state.width > 1200) {
            return ({
                width: '69px',
                height: '69px'
            })
        } else if (this.state.width > 600) {
            return ({
                width: '59px',
                height: '59px'
            })
        } else {
            return ({
                width: '49px',
                height: '49px'
            })
        }

    }

}
export default AppBasedDriver;