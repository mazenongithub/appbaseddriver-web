import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AppleLogin, LogoutUser, SaveDriver } from './actions/api'
import { MyStylesheet } from './styles';
import { calculatetotalhours, getRepaymentCosts, getInterval, checkactivemonth, checkactivedate, validateLoanPayment, calculateTotalMonths, compareDates, sorttimes, getMonString } from './functions'
import Spinner from './spinner'
class AppBasedDriver {

    getmilesbyequipmentid(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let miles = 0;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {

                if (shift.hasOwnProperty("equipment")) {

                    if (shift.equipment.indexOf(equipmentid) > -1) {

                        if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                            miles += Number(shift.miles)

                        }

                    }

                }
            })

        }
        return miles;

    }


    getmiles() {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let miles = 0;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                    miles += Number(shift.miles)

                }
            })

        }
        return miles;

    }

    getslidebyid(id) {
        const appbaseddriver = new AppBasedDriver();
        const slides = appbaseddriver.getslides.call(this)
        let myslide = false;
        if (slides) {
            // eslint-disable-next-line
            slides.map(slide => {
                if (slide.id === id) {
                    myslide = slide;
                }
            })
        }
        return myslide;
    }
    getslides() {
        const slides = () => {
            return ([

                {
                    title: 'Driver',
                    id: 'driver',
                    url: 'http://civilengineer.io/appbaseddriver/slides/driver.png',
                    caption: `App-Based Driver by CivilEngineer.io. Created for App-Based Drivers. Enter your earnings, miles, your deliveries, timein, timeout. Output earnings per hour, earnings per delivery, and earnings per mile.`

                },
                {
                    title: 'Equipment',
                    id: 'equipments',
                    url: 'http://civilengineer.io/appbaseddriver/slides/equipment.png',
                    caption: `Add your equipment`

                },
                {
                    title: 'View Equipment',
                    id: 'viewequipment',
                    url: 'http://civilengineer.io/appbaseddriver/slides/viewequipment.png',
                    caption: ` Add Equipment Costs. Output Costs Per Hour, Cost Per Mile, Cost Per Delivery, Net Earnings, Net Per Hour, Net Per Delivery, Net Per Mile, Purchase Date, Salvage Date, Interest Rate, Equipment Repayment`

                }


            ])
        }
        return slides();
    }

    validatesavedriver() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)

        let error = "";
        if (myuser) {

            if (myuser.hasOwnProperty("equipment")) {
                // eslint-disable-next-line
                myuser.equipment.map(equipment => {

                    if (equipment.hasOwnProperty("repayment")) {
                        if (!compareDates(equipment.purchasedate, equipment.salvagedate)) {
                            error += `${equipment.equipment} purchase date ${equipment.repayment.purchasedate} is less than the salvage date ${equipment.repayment.salvagedate}`
                        }
                    }
                })

            }

        } else {
            error += `There is no user Logged In `


        }
        return error;
    }

    setUIMonth(month) {
        const activemonth = this.state.activemonth;
        if (activemonth.hasOwnProperty("length")) {
            const monthstring = getMonString(Number(month))
            if (activemonth.indexOf(monthstring) < 0) {

                activemonth.push(monthstring)

            }

        }


    }

    updateUI(year) {

       
        
        this.setState({ uistart:year - 3n, uiend:year })
    }

    setUI() {
        const uiend = new Date().getFullYear();
        let uistart = 0;

        if (this.state.width > 1200) {
            uistart = uiend - 3;
        } else if (this.state.width > 600) {
            uistart = uiend - 2;
        } else {
            uistart = uiend - 1;

        }
        this.setState({ uistart, uiend })


    }

    gettransformedcostsbyequimentid(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)

        let costarray = [];
        if (equipment) {

            if (equipment.hasOwnProperty("repayment")) {
                const purchase = Number(equipment.repayment.purchase);
                const purchasedate = equipment.repayment.purchasedate;
                const salvage = Number(equipment.repayment.salvage);
                const salvagedate = equipment.repayment.salvagedate;
                const apr = Number(equipment.repayment.apr);
                // validate
                const validate = validateLoanPayment(purchase, purchasedate, salvage, salvagedate, apr)
                let payments = [];
                if (validate) {
                    payments = getRepaymentCosts(purchase, purchasedate, salvage, salvagedate, apr);
                    costarray = [...costarray, ...payments]

                } else if (purchase && !apr) {

                    payments = getInterval(salvagedate, purchasedate, 'monthly', ((purchase - salvage) / calculateTotalMonths(purchasedate, salvagedate)), 'repayment')
                    costarray = [...costarray, ...payments]

                }

            }

            if (equipment.hasOwnProperty("costs")) {

                // eslint-disable-next-line
                equipment.costs.map(cost => {


                    if (cost.hasOwnProperty("reoccurring")) {



                        if (equipment.hasOwnProperty("repayment")) {


                            const reoccurringcosts = getInterval(equipment.repayment.salvagedate, cost.purchasedate, cost.reoccurring.frequency, cost.amount, cost.detail)

                            costarray = [...costarray, ...reoccurringcosts]

                        }


                    } else {

                        costarray.push(cost)

                    }


                })




            }

        }
        costarray.sort((a, b) => {
            return sorttimes(a.purchasedate, b.purchasedate)
        })

        return costarray;
    }

    gettransformeddrivercosts() {
        const appbaseddriver = new AppBasedDriver();
        let costs = []
        const myequipment = appbaseddriver.getequipment.call(this)
        if (myequipment) {
            // eslint-disable-next-line
            myequipment.map(equipment => {
                costs = [...costs, ...appbaseddriver.gettransformedcostsbyequimentid.call(this, equipment.equipmentid)]
            })
        }
        return costs;

    }

    getdrivercosts() {
        const appbaseddriver = new AppBasedDriver();
        let costs = 0;
        const myequipment = appbaseddriver.getequipment.call(this)
        if (myequipment) {
            // eslint-disable-next-line
            myequipment.map(equipment => {
                costs += Number(appbaseddriver.getcostsbyequipmentid.call(this, equipment.equipmentid))
            })
        }
        return costs;
    }





    getcostsbyequipmentid(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        let mycosts = 0;
        const costs = appbaseddriver.gettransformedcostsbyequimentid.call(this, equipmentid)

        let activecosts = [];
        if (costs) {
            // eslint-disable-next-line
            costs.map(cost => {

                if (checkactivedate(cost.purchasedate, this.state.activemonth, this.state.activeyear)) {
                    activecosts.push(cost)
                    mycosts += Number(cost.amount)
                }


            })
        }

        return mycosts;
    }

    getactiveshifts() {

        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let myshifts = []
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                    myshifts.push(shift)

                }
            })

        }
        return myshifts


    }

    getearnings() {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let earnings = 0;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                    earnings += Number(shift.earnings)

                }
            })

        }
        return earnings;

    }

    gethoursworkedbyequipmentid(equipmentid) {

        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let totalhours = 0;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {

                if (shift.hasOwnProperty("equipment")) {

                    if (shift.equipment.indexOf(equipmentid) > -1) {


                        if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                            totalhours += calculatetotalhours(shift.timeout, shift.timein)

                        }


                    }

                }
            })

        }
        return totalhours;
    }

    gethoursworked() {
        const appbaseddriver = new AppBasedDriver();
        const shifts = appbaseddriver.getshifts.call(this)
        let totalhours = 0;
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {


                if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                    totalhours += calculatetotalhours(shift.timeout, shift.timein)

                }
            })

        }
        return totalhours;

    }

    getdeliveriesbyequipmentid(equipmentid) {

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let deliveries = 0;
        if (myuser) {

            if (myuser.hasOwnProperty("driver")) {

                if (myuser.driver.hasOwnProperty("shifts")) {

                    // eslint-disable-next-line
                    myuser.driver.shifts.map(shift => {

                        if (shift.hasOwnProperty("equipment")) {

                            if (shift.equipment.indexOf(equipmentid) > -1) {

                                if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                                    deliveries += Number(shift.deliveries);
                                }

                            }

                        }


                    })
                }
            }

        }
        return deliveries;

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

                        if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                            deliveries += Number(shift.deliveries);
                        }


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
            return ({ width: '50px' })
        } else if (this.state.width > 600) {
            return ({ width: '40px' })
        } else {
            return ({ width: '30px' })
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
                costs.sort((a, b) => {
                    return sorttimes(a.purchasedate, b.purchasedate)
                })
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

    getButtonWidth() {

        if (this.state.width > 1200) {
            return ({ width: '60px' })
        } else if (this.state.width > 600) {
            return ({ width: '50px' })
        } else {
            return ({ width: '40px' })
        }


    }

    async logoutuser() {
        const design = new AppBasedDriver();
        const myuser = design.getuser.call(this);
        if (myuser) {
            try {

                let response = await LogoutUser(myuser.driverid);
                console.log(response)
                this.props.reduxUser(response)
                this.setState({ client: false, access: false, driverid: "" })

            } catch (err) {
                alert(err)
            }

        }

    }

    async savedriver() {

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const message = appbaseddriver.validatesavedriver.call(this)
        if (!message) {
            if (myuser) {

                try {

                    this.setState({ spinner: true })
                    let response = await SaveDriver({ myuser })
                    console.log(response)
                    if (response.hasOwnProperty("driverid")) {
                        this.props.reduxUser(response)
                        let message = `Driver Updated ${new Date().toLocaleTimeString()}`
                        this.setState({ spinner: false, message })
                    }


                } catch (err) {
                    alert(err);
                    this.setState(({ spinner: false }))

                }
            }

        } else {
            this.setState({ message })
        }


    }

    createEquipmentList() {
        const appbaseddriver = new AppBasedDriver();
        const equipment = appbaseddriver.getequipment.call(this)
        let equipmentids = [];
        if (equipment) {

            // eslint-disable-next-line
            equipment.map(equip => {
                equipmentids.push(equip.equipmentid)
            })

        }
        if (equipmentids.length > 0) {
            return equipmentids;
        } else {
            return false;
        }

    }
    showsavedriver() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const menufont = appbaseddriver.menufont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)

        if (!this.state.spinner) {
            return (
                <div style={{ ...styles.generalContainer, ...styles.alignCenter }}>

                    <div style={{ ...styles.generalContainer, ...styles.alignCenter, ...styles.bottomMargin15 }}><span style={{ ...styles.generalFont, ...regularFont }}>{this.state.message} </span></div>
                    <button
                        style={{ ...styles.generalButton, ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}
                        onClick={() => appbaseddriver.savedriver.call(this)} >Save Driver
                    </button>
                </div>
            )
        } else {
            return (<Spinner />)
        }
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

    resetState() {

        this.setState({ firstname: '', lastname: '', emailaddress: '', profileurl: '', phonenumber: '', apple: '', google: '', driverid: '', message: '' })

    }
    async clientlogin() {
        const appbaseddriver = new AppBasedDriver();
        const { firstname, lastname, emailaddress, profileurl, phonenumber, apple, google, driverid } = this.state;
        const values = { firstname, lastname, emailaddress, profileurl, phonenumber, apple, google, driverid }
        try {
            this.setState({ spinner: true })
            let response = await AppleLogin(values)
            this.setState({ spinner: false })

            if (response.hasOwnProperty("driverid")) {

                appbaseddriver.resetState.call(this)
                this.props.reduxUser(response)

            } else if (response.hasOwnProperty("register")) {

                this.setState({ access: 'register' })
            }


        } catch (err) {
            this.setState({ spinner: false })
            alert(err)
        }
    }
    async appleSignIn() {
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

            this.setState({ firstname, lastname, emailaddress, profileurl, phonenumber, apple, driverid: this.state.driverid })



            appbaseddriver.clientlogin.call(this)

        } catch (err) {
            alert(err)
        }

    }



    async googleSignIn() {
        console.log("googlesign")
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

            if (result.hasOwnProperty("user")) {

                user = result.user;
                google = user.providerData[0].uid;
                firstname = user.providerData[0].displayName.split(' ')[0]
                lastname = user.providerData[0].displayName.split(' ')[1]
                emailaddress = user.providerData[0].email
                profileurl = user.providerData[0].photoURL
                phonenumber = user.phoneNumber;
            }

            this.setState({ firstname, lastname, emailaddress, profileurl, phonenumber, google, driverid: this.state.driverid })

            appbaseddriver.clientlogin.call(this)


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