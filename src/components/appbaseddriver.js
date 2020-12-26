import firebase from 'firebase/app';
import 'firebase/auth';
import { AppleLogin, LogoutUser, SaveDriver } from './actions/api'
import { MyStylesheet } from './styles';
import {calculatetotalhours} from './functions'

class AppBasedDriver {
    getmiles() {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let miles= 0;
        if(shifts) {
            // eslint-disable-next-line
            shifts.map(shift=> {
                miles += Number(shift.miles)
            })

        }
        return miles;   

    }

    getcostsbyequipmentid(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        let mycosts = 0;
        const costs = appbaseddriver.getequipmentscosts.call(this,equipmentid)
        if(costs) {
            // eslint-disable-next-line
            costs.map(cost=> {
             
                mycosts +=Number(cost.amount)
            })
        }
        return mycosts;
    }

    getearnings() {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let earnings = 0;
        if(shifts) {
            // eslint-disable-next-line
            shifts.map(shift=> {
                earnings += Number(shift.earnings)
            })

        }
        return earnings;   

    }

    gethoursworked() {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let totalhours = 0;
        if(shifts) {
            // eslint-disable-next-line
            shifts.map(shift=> {
                totalhours += calculatetotalhours(shift.timeout,shift.timein)
            })

        }
        return totalhours;   

    }

    getdeliveries() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let deliveries = 0;
        if (myuser) {

            if (myuser.hasOwnProperty("driver")) {

                if (myuser.driver.hasOwnProperty("shifts")) {
                    // eslint-disable-next-line
                    myuser.driver.shifts.map(shift => {
                        deliveries += Number(shift.deliveries);

                    })
                }
            }
            
        }
        return deliveries;
    }

    getampmicon() {
        if (this.state.width > 1200) {
            return ({ width: '83px', height: '48px' })
        } else if (this.state.width > 600) {
            return ({ width: '70px', height: '41px' })
        } else {
            return ({ width: '57px', height: '33px' })
        }

    }

    getdropicon() {
        if (this.state.width > 1200) {
            return (
                {
                    width: '93px'
                })

        } else if (this.state.width > 600) {
            return (
                {
                    width: '78px'
                })

        } else {
            return (
                {
                    width: '62px'
                })
        }
    }

    getremoveicon() {
        if (this.state.width > 1200) {
            return ({ width: '57px' })
        } else if (this.state.width > 600) {
            return ({ width: '47px' })
        } else {
            return ({ width: '37px' })
        }
    }

    getequipmentcostkeybyid(equipmentid, costid) {

        const appbaseddriver = new AppBasedDriver();
        const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
        let key = false;
        if (costs) {
            // eslint-disable-next-line
            costs.map((cost, i) => {
                if (cost.costid === costid) {
                    key = i
                }
            })
        }
        return key;

    }

    getshifts() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this);
        let shifts = false;
        if (myuser) {
            if (myuser.hasOwnProperty("driver")) {
                if (myuser.driver.hasOwnProperty("shifts")) {
                    shifts = myuser.driver.shifts;
                }
            }
        }
        return shifts;
    }

    getshiftkeybyid(shiftid) {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let key = false;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map((shift, i) => {
                if (shift.shiftid === shiftid) {
                    key = i;
                }
            })
        }
        return key;

    }


    getshiftbyid(shiftid) {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let myshift = false;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                if (shift.shiftid === shiftid) {
                    myshift = shift;
                }
            })
        }
        return myshift;

    }
    getequipmentcostbyid(equipmentid, costid) {
        const appbaseddriver = new AppBasedDriver();
        const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
        let mycost = false;
        if (costs) {
            // eslint-disable-next-line
            costs.map(cost => {
                if (cost.costid === costid) {
                    mycost = cost;
                }
            })
        }
        return mycost;

    }

    getequipmentscosts(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
        let costs = false;
        if (equipment) {
            if (equipment.hasOwnProperty("costs")) {
                costs = equipment.costs;
            }
        }
        return costs;
    }

    getequipmentkeybyid(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const myequipment = appbaseddriver.getequipment.call(this)
        let key = false;
        if (myequipment) {
            // eslint-disable-next-line
            myequipment.map((equipment, i) => {

                if (equipment.equipmentid === equipmentid) {
                    key = i;
                }
            })
        }

        return key;

    }

    getequipmentbyid(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const myequipment = appbaseddriver.getequipment.call(this)
        let getequipment = false;

        if (myequipment) {
            // eslint-disable-next-line
            myequipment.map(equipment => {

                if (equipment.equipmentid === equipmentid) {
                    getequipment = equipment;
                }
            })
        }

        return getequipment;

    }


    getequipment() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let equipment = false;
        if (myuser) {
            if (myuser.hasOwnProperty("equipment")) {
                equipment = myuser.equipment;
            }


        }

        return equipment;

    }

    getNavigation() {
        let nav = false;
        if (this.props.hasOwnProperty("navigation")) {
            nav = this.props.navigation;

        }
        return nav;
    }

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

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            try {
                console.log(myuser)

                let response = await SaveDriver({ myuser })
                console.log(response)
                if (response.hasOwnProperty("driverid")) {
                    this.props.reduxUser(response)
                    let message = `Driver Updated ${new Date().toLocaleTimeString()}`
                    this.setState({ message })
                }


            } catch (err) {

            }
        }


    }
    showsavedriver() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const menufont = appbaseddriver.menufont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        return (
            <div style={{ ...styles.generalContainer, ...styles.alignCenter }}>

                <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin15 }}><span style={{ ...styles.generalFont, ...regularFont }}>{this.state.message} </span></div>
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
    radioIconWidth() {
        if (this.state.width > 1200) {
            return ({ width: '60px' })
        } else if (this.state.width > 600) {
            return ({ width: '50px' })
        } else {
            return ({ width: '40px' })
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