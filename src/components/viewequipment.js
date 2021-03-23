import React, { Component } from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { connect } from 'react-redux';
import { CheckedBox, EmptyBox, removeIconSmall, uploadReceipts } from './svg'
import * as actions from './actions';
import Header from './header';
import MakeID from './makeid';
import EquipmentDate from './equipmentdate';
import SalvageDate from './salvagedate'
import PurchaseDate from './purchasedate'
import { isNumeric, formatDateStringDisplay, checkactivedate } from './functions'
import Costs from './costs';
import SmallDiagram from './smallcostdiagram';
import MediumDiagram from './mediumcostdiagram'
import Diagrams from './costdiagrams';
import Recharge from './recharge'
import { Link } from 'react-router-dom'



class ViewEquipment extends Component {

    constructor(props) {
        super(props)
        this.state = { render: 'render', width: 0, height: 0, message: '', activecostid: false, equipmentday: '', equipmentmonth: '', equipmentyear: '', equipmentcalender: false, salvageday: '', salvagemonth: '', salvageyear: '', salvagecalender: false, purchasecalender: false, showrepayment: true, purchaseday: '', purchasemonth: '', purchaseyear: '', activeyear: new Date().getFullYear(), activemonth: false, spinner: false, hidecosts: [], uistart: '', uiend: '' }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    componentDidMount() {
        const appbaseddriver = new AppBasedDriver();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
        this.props.reduxNavigation({ navigation: "viewequipment" })
        this.equipmentdatedefault();
        appbaseddriver.setUI.call(this)

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }



    equipmentdatedefault() {
        const equipmentmonth = () => {
            let month = new Date().getMonth() + 1;
            if (month < 10) {
                month = `0${month}`
            }
            return month;
        }
        const equipmentday = () => {
            let day = new Date().getDate();
            if (day < 10) {
                day = `0${day}`
            }
            return day;
        }
        const equipmentyear = () => {
            let year = new Date().getFullYear();

            return year;
        }
        this.setState({ equipmentyear: equipmentyear(), equipmentmonth: equipmentmonth(), equipmentday: equipmentday() })
    }




    getdetail() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        let detail = ""
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost) {
                detail = cost.detail;
            }
        }
        return detail;

    }

    handledetail(detail) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const makeid = new MakeID();

        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (cost) {

                        const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)

                        myuser.equipment[i].costs[j].detail = detail;
                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })



                    }
                } else {


                    const newCost = (costid, detail, purchasedate) => {

                        return ({ costid, detail, purchasedate, amount: 0 })


                    }
                    const costid = makeid.costid.call(this, equipmentid)
                    const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
                    const year = this.state.equipmentyear;
                    const day = this.state.equipmentday;
                    const month = this.state.equipmentmonth;
                    const purchasedate = `${year}/${month}/${day}`;
                    const newcost = newCost(costid, detail, purchasedate)
                    if (costs) {
                        myuser.equipment[i].costs.push(newcost)

                    } else {

                        myuser.equipment[i].costs = [newcost]
                    }

                    this.props.reduxUser(myuser)
                    this.setState({ activecostid: costid })

                }

            }
        }


    }



    reoccurringForm() {

        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        return (
            <div style={{ ...styles.generalContainer }}>


                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont, ...styles.generalFont }}>Frequency</span>
                    <select type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                        value={this.getfrequency()}
                        onChange={event => { this.handlefrequency(event.target.value) }}>
                        <option value={false}>Select Frequency Value</option>
                        <option value={`annually`}>Annually</option>
                        <option value={`monthly`}>Monthly</option>
                        <option value={`weekly`}>Week</option>
                        <option value={`daily`}>Daily</option>
                    </select>
                </div>



            </div>
        )

    }

    getamount() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        let amount = "";
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)

            amount = cost.amount;

        }
        return amount;

    }

    handleamount(amount) {
        if (isNumeric(amount)) {
            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            const makeid = new MakeID();

            if (myuser) {
                const equipmentid = this.props.match.params.equipmentid;
                const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
                if (equipment) {
                    const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                    if (this.state.activecostid) {
                        const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                        if (cost) {

                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)

                            myuser.equipment[i].costs[j].amount = amount;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })



                        }
                    } else {


                        const newCost = (costid, purchasedate, detail, amount) => {
                            return ({ costid, purchasedate, detail, amount })
                        }

                        const costid = makeid.costid.call(this, equipmentid)
                        const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
                        const year = this.state.equipmentyear;
                        const day = this.state.equipmentday;
                        const month = this.state.equipmentmonth;
                        const purchasedate = `${year}/${month}/${day}`;
                        const newcost = newCost(costid, purchasedate, "", amount)
                        if (costs) {
                            myuser.equipment[i].costs.push(newcost)

                        } else {

                            myuser.equipment[i].costs = [newcost]
                        }

                        this.props.reduxUser(myuser)
                        this.setState({ activecostid: costid })

                    }

                }
            }

        } else {
            alert(`${amount} should be numeric`)
        }


    }

    handlepurchase(purchase) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (isNumeric(purchase)) {

            if (myuser) {

                const activeequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (activeequipment) {
                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)
                    if (activeequipment.hasOwnProperty("repayment")) {


                        myuser.equipment[i].repayment.purchase = purchase;
                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })

                    }



                }

            }

        } else {
            alert(`${purchase} should be numeric`)
        }


    }

    getpurchase() {
        const appbaseddriver = new AppBasedDriver();
        let equipment = "";
        const myequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        if (myequipment.hasOwnProperty("repayment")) {
            equipment = myequipment.repayment.purchase;
        }

        return equipment;

    }



    handlesalvage(salvage) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (isNumeric(salvage)) {

            if (myuser) {

                const activeequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (activeequipment) {
                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)
                    if (activeequipment.hasOwnProperty("repayment")) {


                        myuser.equipment[i].repayment.salvage = salvage;
                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })

                    }



                }

            }

        } else {
            alert(`${salvage} should be numeric`)
        }


    }

    getsalvage() {
        const appbaseddriver = new AppBasedDriver();
        let equipment = "";
        const myequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        if (myequipment.hasOwnProperty("repayment")) {
            equipment = myequipment.repayment.salvage;
        }

        return equipment;

    }


    getfrequency() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("reoccurring")) {
                return cost.reoccurring.frequency;
            }
        }

    }

    handlefrequency(amount) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (cost) {
                        if (cost.hasOwnProperty("reoccurring")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].reoccurring.frequency = amount;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }


    }





    handleapr(apr) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (isNumeric(apr)) {
            if (myuser) {

                const activeequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (activeequipment) {
                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)
                    if (activeequipment.hasOwnProperty("repayment")) {


                        myuser.equipment[i].repayment.apr = apr;
                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })

                    }



                }

            }

        } else {
            alert(`${apr} should be numeric`)
        }


    }

    getapr() {
        const appbaseddriver = new AppBasedDriver();
        let equipment = "";
        const myequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        if (myequipment.hasOwnProperty("repayment")) {
            equipment = myequipment.repayment.apr;
        }

        return equipment;

    }




    removecost(costid) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)

                const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, costid)
                if (cost) {
                    if (window.confirm(`Are your sure you want to remove ${cost.detail}?`)) {
                        const j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, costid)

                        myuser.equipment[i].costs.splice(j, 1)
                        this.equipmentdatedefault();
                        this.props.reduxUser(myuser)
                        this.setState({ activecostid: false })

                    }

                }

            }

        }
    }

    makecostactive(costid) {
        const appbaseddriver = new AppBasedDriver();
        if (this.state.activecostid === costid) {
            this.equipmentdatedefault();
            this.setState({ activecostid: false })
        } else {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, costid)
            let equipmentyear = "";
            let equipmentmonth = "";
            let equipmentday = "";
            if (cost) {
                equipmentyear = cost.purchasedate.substring(0, 4)
                equipmentmonth = cost.purchasedate.substring(5, 7);
                equipmentday = cost.purchasedate.substring(8, 10)
            }
            this.setState({ activecostid: costid, equipmentyear, equipmentmonth, equipmentday })
        }

    }


    getequipment() {
        const appbaseddriver = new AppBasedDriver();
        return appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
    }

    showequipmentids() {
        const appbaseddriver = new AppBasedDriver();
        const costs = appbaseddriver.getequipmentscosts.call(this, this.props.match.params.equipmentid)
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        let ids = [];
        const removeIcon = appbaseddriver.getremoveicon.call(this)
        const driver = appbaseddriver.getuser.call(this)
        if (driver) {

            const equipment = this.getequipment()
            if (equipment) {
                const activebackground = (cost) => {
                    if (this.state.activecostid === cost.costid) {
                        return (styles.activeBackground)
                    } else {
                        return ({ backgroundColor: '#FFFFFF' })
                    }
                }

                const reoccurring = (cost) => {
                    if (cost.hasOwnProperty("reoccurring")) {
                        return `Reoccurring ${cost.reoccurring.frequency}`
                    }
                }
                const singular = (cost) => {

                    return (
                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, }} key={cost.costid}

                        >
                            <div style={{ ...styles.flex2 }}>
                                <span style={{ ...regularFont, ...styles.generalFont, ...activebackground(cost) }} onClick={() => { this.makecostactive(cost.costid) }}>
                                    {reoccurring(cost)} PurchaseDate: {formatDateStringDisplay(cost.purchasedate)} Detail: {cost.detail} Amount: ${cost.amount}
                                </span>
                            </div>
                            <div style={{ ...styles.flex1 }}>
                                <button style={{ ...styles.noBorder, ...removeIcon, ...activebackground(cost) }} onClick={() => { this.removecost(cost.costid) }}>{removeIconSmall()}</button>
                            </div>
                            <div style={{ ...styles.flex1 }}>
                                <Link to={`/${driver.driverid}/equipment/${equipment.equipmentid}/costs/${cost.costid}`}>
                                    <button
                                        style={{ ...styles.generalButton, ...receipitUI() }}>{uploadReceipts()}</button>
                                </Link>
                            </div>
                        </div>)
                }



                const receipitUI = () => {
                    if (this.state.width > 1200) {
                        return ({ width: '135px' })
                    } else if (this.state.width > 600) {
                        return ({ width: '95px' })
                    } else {
                        return ({ width: '65px' })
                    }
                }




                if (costs) {

                    // eslint-disable-next-line
                    costs.map(cost => {


                        if (checkactivedate(cost.purchasedate, this.state.activemonth, this.state.activeyear)) {

                            ids.push(singular(cost))



                        }



                    })



                }

            }

        }
        return ids;
    }

    handlereoccurring() {
        const appbaseddriver = new AppBasedDriver();
        const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid)
                    if (cost) {
                        const j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid)
                        if (cost.hasOwnProperty("reoccurring")) {
                            delete myuser.equipment[i].costs[j].reoccurring
                        } else {
                            myuser.equipment[i].costs[j].reoccurring = { frequency: '' }
                        }
                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })

                    }
                }
            }

        }

    }

    handlerecharge() {
        const appbaseddriver = new AppBasedDriver();
        const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid)
                    if (cost) {
                        const j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid)
                        if (cost.hasOwnProperty("recharge")) {
                            delete myuser.equipment[i].costs[j].recharge
                        } else {
                            myuser.equipment[i].costs[j].recharge = {totalenergy:'', duration:{hours:0,minutes:0,seconds:0}} 
                        }
                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })

                    }
                }
            }

        }

    }


    removerepayment() {

        if (this.state.showrepayment) {
            this.setState({ showrepayment: false })
        } else {
            this.setState({ showrepayment: true })
        }



    }

    render() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const buttonWidth = appbaseddriver.radioIconWidth.call(this)
        const equipmentdate = new EquipmentDate();
        const salvagedate = new SalvageDate();
        const purchasedate = new PurchaseDate();
        const costs = new Costs();
        const smalldiagram = new SmallDiagram();
        const mediumdiagram = new MediumDiagram();
        const diagrams = new Diagrams()
        const recharge = new Recharge();

        const showdiagram = () => {
            if (this.state.width > 1200) {
                return (diagrams.showdiagrams.call(this))

            } else if (this.state.width > 600) {
                return (mediumdiagram.showdiagrams.call(this))
            } else {
                return (smalldiagram.showdiagrams.call(this))
            }
        }




        if (myuser) {
            const header = new Header();
            const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
            if (equipment) {

                const showpurchase = () => {
                    if (this.state.width > 1200) {
                        return (
                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>
                                    {purchasedate.showdate.call(this)}
                                </div>
                                <div style={{ ...styles.flex1 }}>


                                    <span style={{ ...regularFont, ...styles.generalFont }}>Purchase Amount </span>
                                    <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                        value={this.getpurchase()}
                                        onChange={event => { this.handlepurchase(event.target.value) }}
                                    />


                                </div>
                            </div>)

                    } else {

                        return (
                            <div style={{ ...styles.generalFlex }}>
                                <div style={{ ...styles.flex1 }}>

                                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                        <div style={{ ...styles.flex1 }}>
                                            {purchasedate.showdate.call(this)}
                                        </div>
                                    </div>

                                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                        <div style={{ ...styles.flex1 }}>
                                            <span style={{ ...regularFont, ...styles.generalFont }}>Purchase Amount </span>
                                            <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                                value={this.getpurchase()}
                                                onChange={event => { this.handlepurchase(event.target.value) }}
                                            />

                                        </div>
                                    </div>

                                </div>
                            </div>)

                    }
                }


                const showsalvage = () => {
                    if (this.state.width > 1200) {
                        return (
                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>
                                    {salvagedate.showdate.call(this)}
                                </div>
                                <div style={{ ...styles.flex1 }}>


                                    <span style={{ ...regularFont, ...styles.generalFont }}>Salvage Amount </span>
                                    <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                        value={this.getsalvage()}
                                        onChange={event => { this.handlesalvage(event.target.value) }}
                                    />


                                </div>
                            </div>)

                    } else {

                        return (
                            <div style={{ ...styles.generalFlex }}>
                                <div style={{ ...styles.flex1 }}>

                                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                        <div style={{ ...styles.flex1 }}>
                                            {salvagedate.showdate.call(this)}
                                        </div>
                                    </div>

                                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                        <div style={{ ...styles.flex1 }}>
                                            <span style={{ ...regularFont, ...styles.generalFont }}>Salvage Amount </span>
                                            <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                                value={this.getsalvage()}
                                                onChange={event => { this.handlesalvage(event.target.value) }}
                                            />

                                        </div>
                                    </div>

                                </div>
                            </div>)

                    }
                }

                const repayment = (equipment) => {
                    if (equipment.hasOwnProperty("repayment") && this.state.showrepayment) {
                        return (
                            <div style={{ ...styles.generalFlex }}>
                                <div style={{ ...styles.flex1 }}>

                                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                        <div style={{ ...styles.flex1 }}>
                                            &nbsp;
                                    </div>
                                        <div style={{ ...styles.flex1 }}>
                                            &nbsp;
                                    </div>
                                    </div>

                                    {showsalvage()}

                                    {showpurchase()}



                                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                        <div style={{ ...styles.flex1 }}>

                                            <span style={{ ...regularFont, ...styles.generalFont }}>Interest Rate - APR</span>
                                            <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                                value={this.getapr()}
                                                onChange={event => { this.handleapr(event.target.value) }} />

                                        </div>
                                        <div style={{ ...styles.flex1 }}>

                                        </div>

                                    </div>



                                </div>
                            </div>

                        )

                    }

                }

                const getrecharge = (equipment) => {

                    if (this.state.activecostid) {
                        const cost = appbaseddriver.getequipmentcostbyid.call(this, equipment.equipmentid, this.state.activecostid)
                        if (cost) {
                            if (cost.hasOwnProperty("recharge")) {
                                return (CheckedBox())

                            } else {
                                return (EmptyBox())
                            }
                        } else {
                            return (EmptyBox())
                        }
                    } else {
                        return (EmptyBox())
                    }

                }

                const getreoccuring = (equipment) => {

                    if (this.state.activecostid) {
                        const cost = appbaseddriver.getequipmentcostbyid.call(this, equipment.equipmentid, this.state.activecostid)
                        if (cost) {
                            if (cost.hasOwnProperty("reoccurring")) {
                                return (CheckedBox())

                            } else {
                                return (EmptyBox())
                            }
                        } else {
                            return (EmptyBox())
                        }
                    } else {
                        return (EmptyBox())
                    }

                }

                const frequency = (equipment) => {
                    if (this.state.activecostid) {
                        const cost = appbaseddriver.getequipmentcostbyid.call(this, equipment.equipmentid, this.state.activecostid)
                        if (cost.hasOwnProperty("reoccurring")) {
                            return (<select style={{ ...styles.generalField, ...regularFont, ...styles.generalFont }}
                                onChange={event => { this.handlefrequency(event.target.value) }}
                                value={this.getfrequency()}>
                                <option value={false}>Select Frequency</option>
                                <option value={`daily`}>Daily</option>
                                <option value={`weekly`}>Weekly</option>
                                <option value={`monthly`}>Monthly</option>
                                <option value={`annually`}>Annually</option>
                            </select>)
                        }
                    }

                }


                const Reoccurring = (equipment) => {

                    if (this.state.activecostid) {
                        return (
                        <div style={{...styles.generalContainer}}>
                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1 ,...styles.addMargin }}>
                                <button style={{ ...styles.generalButton, ...buttonWidth }} onClick={() => this.handlereoccurring()}> {getreoccuring(equipment)}</button>
                                <span style={{ ...regularFont, ...styles.generalFont }}>
                                    Reoccurring Cost
                            </span>
                                {frequency(equipment)}

                            </div>


                            <div style={{ ...styles.flex1,...styles.addMargin }}>
                                <button style={{ ...styles.generalButton, ...buttonWidth }} onClick={() => this.handlerecharge()}> {getrecharge(equipment)}</button>
                                <span style={{ ...regularFont, ...styles.generalFont }}>
                                    Recharge Costs
                            </span>   
                            </div>

                            


                        </div>

                        {recharge.showRecharge.call(this)}

                        </div>
                        )
                    }
                }


                return (
                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>
                                    {header.showsubheader.call(this)}
                                </div>
                            </div>


                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                    <span style={{ ...styles.generalFont, ...headerFont, ...styles.boldFont }}>{equipment.equipment}</span>
                                </div>
                            </div>




                            {repayment(equipment)}



                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...styles.generalFont, ...headerFont, ...styles.boldFont }}>Costs</span>
                                </div>
                            </div>

                            {equipmentdate.showequipment.call(this)}

                            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                                <span style={{ ...regularFont, ...styles.generalFont }}>Detail</span>
                                <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                    value={this.getdetail()}
                                    onChange={event => { this.handledetail(event.target.value) }}
                                />
                            </div>

                            <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                                <span style={{ ...regularFont, ...styles.generalFont }}>Amount</span>
                                <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                                    value={this.getamount()}
                                    onChange={event => { this.handleamount(event.target.value) }}
                                />
                            </div>

                            {Reoccurring(equipment)}



                            {this.showequipmentids()}


                            {appbaseddriver.showsavedriver.call(this)}

                            {costs.showcosts.call(this, this.props.match.params.equipmentid)}

                            {showdiagram()}

                            <div style={{ marginBottom: '40px' }}>
                                &nbsp;
                            </div>

                        </div>
                    </div>)

            } else {
                return (<div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>
                        <span style={{ ...styles.generalFont, ...regularFont }}> Equipment Not Found</span>
                    </div>
                </div>)

            }
        } else {
            return (<div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...styles.generalFont, ...regularFont }}>Please Login to View Equipment</span>
                </div>
            </div>)
        }
    }

}

function mapStateToProps(state) {
    return {
        myusermodel: state.myusermodel,
        navigation: state.navigation
    }
}

export default connect(mapStateToProps, actions)(ViewEquipment)