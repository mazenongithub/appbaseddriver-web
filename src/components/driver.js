import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import MakeID from './makeid';
import TimeIn from './timein';
import TimeOut from './timeout'
import { makeTimeString, UTCTimeStringfromTime, inputUTCStringForLaborID, isNumeric, getMonthfromTimein, getDayfromTimein, getHoursfromTimein, getYearfromTimein, getMinutesfromTimein, getAMPMfromTimeIn, calculatetotalhours, sorttimes, checkactivemonth, trailingZeros, getMonString } from './functions'
import { removeIconSmall } from './svg'
import Header from './header';
import Income from './income';
import DriverUI from './driverui';
import Diagrams from './diagrams'
import MediumDiagram from './mediumdiagram'
import SmallDiagram from './smalldiagram';
import Adjustment from './adjustment';
class Driver {

    getearnings() {
        const appbaseddriver = new AppBasedDriver();
        let earnings = "";
        if (this.state.activeshiftid) {
            const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
            earnings = shift.earnings;

        }
        return earnings;
    }



    createnewshift(earnings, deliveries, miles) {

        const makeid = new MakeID();
        const appbaseddriver = new AppBasedDriver()
        const driver = new Driver();
        const shiftid = makeid.shiftid.call(this)
        const timeinday = trailingZeros(this.state.timeinday);
        const timeinyear = this.state.timeinyear;
        const timeinmonth = trailingZeros(this.state.timeinmonth);
        const timeinhours = trailingZeros(this.state.timeinhours);
        const timeinampm = this.state.timeinampm;
        const timeinminutes = trailingZeros(this.state.timeinminutes);
        let timein = makeTimeString(timeinyear, timeinmonth, timeinday, timeinhours, timeinminutes, timeinampm);
        timein = UTCTimeStringfromTime(timein);
        const timeoutday = trailingZeros(this.state.timeoutday);
        const timeoutyear = this.state.timeoutyear;
        const timeoutmonth = trailingZeros(this.state.timeoutmonth);
        const timeouthours = trailingZeros(this.state.timeouthours);
        const timeoutminutes = trailingZeros(this.state.timeoutminutes);
        const timeoutampm = this.state.timeoutampm;
        let timeout = makeTimeString(timeoutyear, timeoutmonth, timeoutday, timeouthours, timeoutminutes, timeoutampm);
        timeout = UTCTimeStringfromTime(timeout);

        const newShift = (shiftid, timein, timeout, earnings, deliveries, miles) => {
            return ({ shiftid, timein, timeout, earnings, deliveries, miles })
        }
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const createShift = newShift(shiftid, timein, timeout, earnings, deliveries, miles)
            if (myuser.hasOwnProperty("driver")) {

                if (myuser.driver.hasOwnProperty("shifts")) {
                    myuser.driver.shifts.push(createShift)

                } else {
                    myuser.driver.shifts = [createShift]

                }

            } else {
                myuser.driver = { shifts: [createShift] }

            }

            this.props.reduxUser(myuser)

            this.setState({ activeshiftid: shiftid, timeinyear, timeinmonth, timeinday, timeinhours, timeinminutes, timeinampm, timeoutyear, timeoutmonth, timeoutday, timeouthours, timeoutminutes, timeoutampm })
            driver.updateUI.call(this);


        }
    }

    handleearnings(earnings) {

        if (isNumeric(earnings)) {

            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            const driver = new Driver();

            if (myuser) {

                if (myuser.hasOwnProperty("driver")) {

                    if (this.state.activeshiftid) {

                        const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)

                        if (shift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            myuser.driver.shifts[i].earnings = earnings;
                            this.props.reduxUser(myuser)
                           
                            driver.updateUI.call(this);

                        }

                    } else {

                        driver.createnewshift.call(this, earnings, 0, 0)


                    }


                } else {
                    driver.createnewshift.call(this, earnings, 0, 0)

                }

            }

        } else {
            alert(`${earnings} should be numeric`)
        }


    }


    getdeliveries() {
        const appbaseddriver = new AppBasedDriver();
        let deliveries = "";
        if (this.state.activeshiftid) {
            const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
            deliveries = shift.deliveries;

        }
        return deliveries;
    }


    handledeliveries(deliveries) {
        if (isNumeric(deliveries)) {
            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            const driver = new Driver();
            if (myuser) {
                if (myuser.hasOwnProperty("driver")) {

                    if (this.state.activeshiftid) {
                        const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
                        if (shift) {
                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            myuser.driver.shifts[i].deliveries = deliveries;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    } else {

                        driver.createnewshift.call(this, 0, deliveries, 0)


                    }


                } else {
                    driver.createnewshift.call(this, 0, deliveries, 0)

                }

            }

        } else {
            alert(`${deliveries} should be numeric`)
        }

    }


    getmiles() {
        const appbaseddriver = new AppBasedDriver();
        let miles = "";
        if (this.state.activeshiftid) {
            const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
            miles = shift.miles;

        }
        return miles;
    }


    handlemiles(miles) {
        if (isNumeric(miles)) {
            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            const driver = new Driver();
            if (myuser) {
                if (myuser.hasOwnProperty("driver")) {

                    if (this.state.activeshiftid) {
                        const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
                        if (shift) {
                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            myuser.driver.shifts[i].miles = miles;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    } else {

                        driver.createnewshift.call(this, 0, 0, miles)


                    }


                } else {
                    driver.createnewshift.call(this, 0, 0, miles)

                }

            }

        } else {
            alert(`${miles} should be numeric `)
        }


    }
    updateUI() {
        const month = Number(this.state.timeinmonth)
        const mon = getMonString(Number(month))

        let activemonth = this.state.activemonth;
        if(activemonth.indexOf(mon)  === -1) {
           activemonth.push(mon)
          

        }
    
    

        this.setState({activemonth})
    }

    makeshiftactive(shiftid) {
        const appbaseddriver = new AppBasedDriver();

        if (this.state.activeshiftid === shiftid) {

            this.setState({ activeshiftid: false })
      

        } else {
            const shift = appbaseddriver.getshiftbyid.call(this, shiftid)
            if (shift) {

                const timeinmonth = getMonthfromTimein(shift.timein);
                const timeinday = getDayfromTimein(shift.timein);
                const timeinyear = getYearfromTimein(shift.timein)
                const timeinhours = getHoursfromTimein(shift.timein)
                const timeinminutes = getMinutesfromTimein(shift.timein)
                const timeinampm = getAMPMfromTimeIn(shift.timein)
                

                const timeoutmonth = getMonthfromTimein(shift.timeout);
                const timeoutday = getDayfromTimein(shift.timeout);
                const timeoutyear = getYearfromTimein(shift.timeout)
                const timeouthours = getHoursfromTimein(shift.timeout)
                const timeoutminutes = getMinutesfromTimein(shift.timeout)
                const timeoutampm = getAMPMfromTimeIn(shift.timeout);

                this.setState({ timeinmonth, timeinday, timeinyear, timeinhours, timeinminutes, timeinampm, timeoutmonth, timeoutday, timeoutyear, timeouthours, timeoutminutes, timeoutampm, activeshiftid: shiftid, activeyear:Number(timeinyear) })

            } else {
                this.setState({ activeshiftid: shiftid })

            }




        }
    }

    removeshift(shiftid) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const shift = appbaseddriver.getshiftbyid.call(this, shiftid)
        if (shift) {

            if (window.confirm(`Are you sure you want to delete shift ${inputUTCStringForLaborID(shift.timein)} to ${inputUTCStringForLaborID(shift.timeout)} ?`)) {

                if (myuser) {

                    const i = appbaseddriver.getshiftkeybyid.call(this, shiftid)
                    myuser.driver.shifts.splice(i, 1)
                    this.props.reduxUser(myuser)
                    this.setState({ activeshiftid: false })
                }
            }

        }

    }

    showshifts() {
        const appbaseddriver = new AppBasedDriver();
        let shiftids = [];
        let shifts = appbaseddriver.getshifts.call(this);
        shifts.sort((a, b) => {
            return sorttimes(a.timein, b.timein)
        })
        const styles = MyStylesheet();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const driver = new Driver();
        const removeIcon = appbaseddriver.getremoveicon.call(this)
        const activebackground = (shiftid) => {
            if (this.state.activeshiftid === shiftid) {
                return (styles.activeBackground)
            } else {
                return ({ backgroundColor: '#ffffff' })
            }
        }
        const showshift = (shift) => {

            return (
                <div style={{ ...styles.generalFlex }} key={shift.shiftid}>
                    <div style={{ ...styles.flex5, ...styles.bottomMargin15 }} key={shift.shiftid}>
                        <span style={{ ...regularFont, ...styles.generalFont, ...activebackground(shift.shiftid) }} onClick={() => { driver.makeshiftactive.call(this, shift.shiftid) }}>
                            TimeIn: {inputUTCStringForLaborID(shift.timein)} TimeOut: {inputUTCStringForLaborID(shift.timeout)} Total Hours: {+Number(calculatetotalhours(shift.timeout, shift.timein)).toFixed(2)} Earnings: ${shift.earnings} Deliveries: {shift.deliveries} Miles: {shift.miles}
                        </span>

                    </div>
                    <div style={{ ...styles.flex1 }}>
                        <button style={{ ...styles.noBorder, ...removeIcon, ...activebackground(shift.shiftid) }} onClick={() => { driver.removeshift.call(this, shift.shiftid) }}>{removeIconSmall()}</button>
                    </div>

                </div>
            )

        }

        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {





                if (checkactivemonth(shift.timein, this.state.activemonth, this.state.activeyear)) {
                    shiftids.push(showshift(shift))
                }




            })
        }
        return shiftids;
    }

    showdriver() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const driver = new Driver();
        const timein = new TimeIn();
        const timeout = new TimeOut();
        const income = new Income();
        const driverui = new DriverUI();
        const diagrams = new Diagrams();
        const mediumdiagram = new MediumDiagram();
        const smalldiagram = new SmallDiagram();
        const header = new Header();
        const adjustment = new Adjustment();
        const showdiagram = () => {
            if (this.state.width > 1200) {
                return (diagrams.showdiagrams.call(this))

            } else if (this.state.width > 600) {
                return (mediumdiagram.showdiagrams.call(this))
            } else {
                return (smalldiagram.showdiagrams.call(this))
            }
        }


        const showtimes = () => {

            if (this.state.width > 1200) {



                return (
                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }}>{timein.showtimein.call(this)}</span>
                                </div>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }}>{timeout.showtimeout.call(this)}</span>

                                </div>
                            </div>

                        </div>
                    </div>)


            } else {
                return (
                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }}>{timein.showtimein.call(this)}</span>

                                </div>
                            </div>

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }}>{timeout.showtimeout.call(this)}</span>

                                </div>

                            </div>

                        </div>

                    </div>
                )
            }


        }

        if (myuser) {
            return (
                <div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>

                        {header.showsubheader.call(this)}


                        {showtimes()}


                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1, ...styles.alignCenter, ...styles.addMargin }}>
                                <span style={{ ...styles.generalFont, ...regularFont }}>Earnings</span>
                                <input
                                    value={driver.getearnings.call(this)}
                                    onChange={event => { driver.handleearnings.call(this, event.target.value) }}
                                    type="text" style={{ ...styles.generalFont, ...regularFont, ...styles.generalField }} />
                            </div>
                            <div style={{ ...styles.flex1, ...styles.alignCenter, ...styles.addMargin }}>
                                <span style={{ ...styles.generalFont, ...regularFont }}>Deliveries</span>
                                <input type="text" style={{ ...styles.generalFont, ...regularFont, ...styles.generalField }}
                                    value={driver.getdeliveries.call(this)}
                                    onChange={event => { driver.handledeliveries.call(this, event.target.value) }}
                                />
                            </div>
                            <div style={{ ...styles.flex1, ...styles.alignCenter, ...styles.addMargin }}>
                                <span style={{ ...styles.generalFont, ...regularFont }}>Miles</span>
                                <input type="text" style={{ ...styles.generalFont, ...regularFont, ...styles.generalField }}
                                    value={driver.getmiles.call(this)}
                                    onChange={event => { driver.handlemiles.call(this, event.target.value) }}
                                />
                            </div>
                        </div>

                        {adjustment.showAdjustment.call(this)}

                        {driverui.showui.call(this)}

                        {driver.showshifts.call(this)}

                        

                        {appbaseddriver.showsavedriver.call(this)}

                        {income.showincome.call(this)}

                        {showdiagram()}

                    </div>

                </div>
            )

        } else {
            return (
                <div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>
                        <span style={{ ...styles.generalFont, ...regularFont }}> Please Login to View Driver </span>
                    </div>
                </div>
            )
        }
    }

}

export default Driver;


