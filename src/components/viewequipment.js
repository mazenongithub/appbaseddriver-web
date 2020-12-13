import React, { Component } from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { connect } from 'react-redux';
import { openRadio, closedRadio, removeIconSmall } from './svg'
import * as actions from './actions';
import Header from './header';
import MakeID from './makeid';
import EquipmentDate from './equipmentdate';
import {isNumeric} from './functions'


class ViewEquipment extends Component {

    constructor(props) {
        super(props)
        this.state = { render: 'render', width: 0, height: 0, message: '', activecostid: false, equipmentday: '', equipmentmonth: '', equipmentyear: '', equipmentcalender: true }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
        this.props.reduxNavigation({ navigation: "viewequipment" })
        this.equipmentdatedefault();

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



    createcost(costType) {

        const makeid = new MakeID();
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {

                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)

                if (this.state.activecostid) {

                    const mycost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (mycost) {
                        const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)

                        switch (costType) {

                            case 'reoccurring':
                                const reoccurring = { interval: 0, frequency: '' }
                                myuser.equipment[i].costs[j].reoccurring = reoccurring;
                                delete myuser.equipment[i].costs[j].loan
                                break;
                            case 'loan':
                                const loan = { apr: 0, months: 0 }
                                myuser.equipment[i].costs[j].loan = loan
                                delete myuser.equipment[i].costs[j].reoccurring
                                break;
                            default:
                                break;

                        }

                        this.props.reduxUser(myuser)
                        this.setState({ render: 'render' })
                    }

                } else {


                    const newCost = (costid, costType, startdate) => {
                        switch (costType) {

                            case 'reoccurring':
                                const reoccurring = { interval: 0, frequency: '' }
                                return ({ costid, amount: 0, startdate, detail: '', reoccurring })
                            case 'loan':
                                const loan = { apr: 0, months: 0 }
                                return ({ costid, startdate, amount: 0, detail: '', loan })
                            default:
                                break;

                        }

                    }
                    const costid = makeid.costid.call(this, equipmentid)
                    const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
                    const year = this.state.equipmentyear;
                    const day = this.state.equipmentday;
                    const month = this.state.equipmentmonth;
                    const startdate = `${year}-${month}-${day}`;
                    const newcost = newCost(costid, costType, startdate)
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


                    const newCost = (costid, detail, startdate) => {

                        return ({ costid, detail, startdate, amount: 0 })


                    }
                    const costid = makeid.costid.call(this, equipmentid)
                    const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
                    const year = this.state.equipmentyear;
                    const day = this.state.equipmentday;
                    const month = this.state.equipmentmonth;
                    const startdate = `${year}-${month}-${day}`;
                    const newcost = newCost(costid, detail, startdate)
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
                    <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                        value={this.getfrequency()}
                        onChange={event => { this.handlefrequency(event.target.value) }} />
                </div>

                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont, ...styles.generalFont }}>Interval</span>
                    <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                        value={this.getinterval()}
                        onChange={event => { this.handleinterval(event.target.value) }}
                    />
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
        if(isNumeric(amount)) {
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


                    const newCost = (costid, costType, startdate, detail, amount) => {

                        return ({ costid, costType, startdate, detail, amount })


                    }
                    const costid = makeid.costid.call(this, equipmentid)
                    const costs = appbaseddriver.getequipmentscosts.call(this, equipmentid)
                    const year = this.state.equipmentyear;
                    const day = this.state.equipmentday;
                    const month = this.state.equipmentmonth;
                    const startdate = `${year}-${month}-${day}`;
                    const newcost = newCost(costid, "", startdate, "", amount)
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

    getinterval() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("reoccurring")) {
                return cost.reoccurring.interval;
            }
        }

    }

    handleinterval(interval) {
        if(isNumeric(interval)) {
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
                            myuser.equipment[i].costs[j].reoccurring.interval = interval;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

    } else {
        alert(`${interval} should be numeric`)
    }


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




    getapr() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("loan")) {
                return cost.loan.apr;
            }
        }


    }

    handleapr(apr) {

        if(isNumeric(apr)) {

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
                        if (cost.hasOwnProperty("loan")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].loan.apr = apr
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

    } else {
        alert(`${apr} should be numeric`)
    }

    }

    getmonths() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("loan")) {
                return cost.loan.months;
            }
        }

    }


    handlemonths(months) {
        if(isNumeric(months)) {
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
                        if (cost.hasOwnProperty("loan")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].loan.months = months
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

    } else {
        alert(`${months} should be numeric`)
    }


    }

    loanForm() {
        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        return (
            <div style={{ ...styles.generalContainer }}>



                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont, ...styles.generalFont }}>Interest Rate - APR</span>
                    <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                        value={this.getapr()}
                        onChange={event => { this.handleapr(event.target.value) }} />
                </div>
                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                    <span style={{ ...regularFont, ...styles.generalFont }}># of Months</span>
                    <input type="text" style={{ ...regularFont, ...styles.generalFont, ...styles.generalField }}
                        value={this.getmonths()}
                        onChange={event => { this.handlemonths(event.target.value) }} />
                </div>

            </div>
        )

    }

    showactiveform() {
        const appbaseddriver = new AppBasedDriver();
        if (this.state.activecostid) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (equipment) {
                if (equipment.hasOwnProperty("reoccurring")) {

                    return (this.reoccurringForm())

                } else if (equipment.hasOwnProperty("loan")) {

                    return (this.loanForm())

                }

            }
        }

    }

    removecost(costid) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if(myuser) {
        const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        if (equipment) {
            const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid)

            const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, costid)
            if (cost) {
                if (window.confirm(`Are your sure you want to remove ${cost.detail}?`)) {
                    const j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, costid)
                    
                    myuser.equipment[i].costs.splice(j,1)
                    this.props.reduxUser(myuser)
                    this.equipmentdatedefault();
                    this.setState({activecostid:false})

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
            console.log(cost)
            let equipmentyear = "";
            let equipmentmonth = "";
            let equipmentday = "";
            if (cost) {
                equipmentyear = cost.startdate.substring(0, 4)
                equipmentmonth = cost.startdate.substring(5, 7);
                equipmentday = cost.startdate.substring(8, 10)
            }
            this.setState({ activecostid: costid, equipmentyear, equipmentmonth, equipmentday })
        }

    }

    showequipmentids() {
        const appbaseddriver = new AppBasedDriver();
        const costs = appbaseddriver.getequipmentscosts.call(this, this.props.match.params.equipmentid)
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        let ids = [];
        const removeIcon = appbaseddriver.getremoveicon.call(this)
        const activebackground = (cost) => {
            if (this.state.activecostid === cost.costid) {
                return (styles.activeBackground)
            } else {
                return ({ backgroundColor: '#FFFFFF' })
            }
        }
        const singular = (cost) => {
            return (
                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...activebackground(cost) }} key={cost.costid} onClick={() => { this.makecostactive(cost.costid) }}>
                    <div style={{ ...styles.flex1 }}>
                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Cost Type: Singular StartDate: {cost.startdate} Detail: {cost.detail} Amount: {cost.amount}
                        </span> <button style={{ ...styles.noBorder, ...removeIcon, ...activebackground(cost) }} onClick={()=>{this.removecost(cost.costid)}}>{removeIconSmall()}</button>
                    </div>
                </div>)
        }

        const reoccurring = (cost) => {
            return (
                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...activebackground(cost) }} key={cost.costid} onClick={() => { this.makecostactive(cost.costid) }}>
                    <div style={{ ...styles.flex1 }}>
                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Cost Type: Reoccurring StartDate:{cost.startdate} Detail: {cost.detail} Cost: {cost.amount} Frequency: {cost.reoccurring.frequency}  Interval: {cost.reoccurring.interval}
                        </span>
                    </div>
                </div>
            )
        }

        const loan = (cost) => {
            return (
                <div style={{ ...styles.generalFlex, ...styles.bottomMargin15, ...activebackground(cost) }} onClick={() => { this.makecostactive(cost.costid) }}>
                    <div style={{ ...styles.flex1 }}>
                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Cost Type: Loan Start Date: {cost.startdate} Detail: {cost.detail} Amount: {cost.amount} APR: {cost.loan.apr}  Months: {cost.loan.months}
                        </span>
                    </div>
                </div>)
        }


        if (costs) {

// eslint-disable-next-line
            costs.map(cost => {

                if (cost.hasOwnProperty("reoccurring")) {

                    ids.push(reoccurring(cost))

                } else if (cost.hasOwnProperty("loan")) {
                    ids.push(loan(cost))
                } else {
                    ids.push(singular(cost))
                }


            })



        }
        return ids;
    }

    render() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const buttonWidth = appbaseddriver.radioIconWidth.call(this)
        const equipmentdate = new EquipmentDate();

        const reOccurring = () => {

            if (this.state.activecostid) {
                const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid)
                if (cost.hasOwnProperty("reoccurring")) {
                    return (closedRadio())
                } else {
                    return (openRadio())
                }
            } else {
                return (openRadio())
            }

        }

        const loanIcon = () => {

            if (this.state.activecostid) {
                const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid)
                if (cost.hasOwnProperty("loan")) {
                    return (closedRadio())
                } else {
                    return (openRadio())
                }
            } else {
                return (openRadio())
            }

        }

        if (myuser) {
            const header = new Header();
            const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
            if (equipment) {





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



                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>

                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }} >Reoccurring Cost</span><button style={{ ...styles.generalButton, ...buttonWidth }} onClick={() => { this.createcost("reoccurring") }}>{reOccurring()}</button>
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }} >Loan Interest Payment</span><button style={{ ...styles.generalButton, ...buttonWidth }} onClick={() => { this.createcost("loan") }}>{loanIcon()}</button>
                                </div>
                            </div>


                            {this.showactiveform()}
                            {this.showequipmentids()}

      
                            {appbaseddriver.showsavedriver.call(this)}

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