import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { CheckedBox, EmptyBox } from './svg'
import { calculateDays, getOffsetDate, calculatetotalhours } from './functions';


class Adjustment {

    compareTime(timein, timeout, compare) {
        // timein = '10-29-2021'
        // timeout = '10-31-2021'
        // compare = '2021/10/27 16:00:00-07:00'

        timein = timein.split('-');
        timein = `${timein[2]}/${timein[0]}/${timein[1]}`

        timeout = timeout.split('-');
        timeout = `${timeout[2]}/${timeout[0]}/${timeout[1]}`

        const offsetstart = getOffsetDate(timein);
        timein = new Date(`${timein.replace(/-/g, '/')} 00:00:00${offsetstart}`)
        const offsetcompletion = getOffsetDate(timeout);
        timeout = new Date(`${timeout.replace(/-/g, '/')} 23:59:59${offsetcompletion}`)
        compare = new Date(compare)
        timein = timein.getTime();
        timeout = timeout.getTime();
        compare = compare.getTime();


        if (timein <= compare && timeout >= compare) {

            return true
        } else {

            return false
        }


    }



    getTimeOut() {
        const day = this.state.timeoutday;
        const year = this.state.timeoutyear;
        const month = this.state.timeoutmonth;
        return (`${month}-${day}-${year}`)

    }
    getTimeIn() {
        const day = this.state.timeinday;
        const year = this.state.timeinyear;
        const month = this.state.timeinmonth;
        return (`${month}-${day}-${year}`)

    }

    handleAdjustment() {

        if (this.state.adjustment) {
            this.setState({ adjustment: false })
        } else {
            this.setState({ adjustment: true })
        }
    }

    getAdjustment() {


        if (this.state.adjustment) {
            return (CheckedBox())

        } else {
            return (EmptyBox())
        }


    }

    getShifts() {
        const appbaseddriver = new AppBasedDriver();
        const adjustment = new Adjustment();
        const shifts = appbaseddriver.getshifts.call(this)
        const timein = adjustment.getTimeIn.call(this)
        const timeout = adjustment.getTimeOut.call(this)
        let getshifts = [];
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                if (adjustment.compareTime.call(this, timein, timeout, shift.timein)) {
                    getshifts.push(shift)
                }
            })
        }
        return getshifts;
    }

    getTotalHours() {
        const adjustment = new Adjustment();
        const shifts = adjustment.getShifts.call(this)
        let totalhours = 0;
        if (shifts.length > 0) {
            // eslint-disable-next-line
            shifts.map(shift => {
                totalhours += calculatetotalhours(shift.timeout, shift.timein)
            })

        }
        return totalhours;

    }

    showData() {
        const adjustment = new Adjustment();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const styles = MyStylesheet();
        const timein = adjustment.getTimeIn.call(this)
        const timeout = adjustment.getTimeOut.call(this)
        const days = calculateDays(timein, timeout)
        const totalhours = adjustment.getTotalHours.call(this)

        const shifts = adjustment.getShifts.call(this).length

        if (this.state.adjustment) {
            return (
                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>

                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Use Time UI to Set Adjustment Day Interval
                        </span>

                    </div>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>

                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Date Interval {timein} to {timeout} ({days} days)
                        </span>

                    </div>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>

                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Total Shifts: {shifts}    Total Hours: {totalhours}
                        </span>

                    </div>


                </div>
            )

        }
    }

    getEarningsPerHour() {
        const adjustment = new Adjustment();
        const totalhours = adjustment.getTotalHours.call(this)
        let earnings = 0;
        if (Math.abs(this.state.totalearnings)) {
            earnings = this.state.totalearnings;
        }
        let earningsperhour = 0;
        if (totalhours > 0 && Math.abs(earnings) > 0) {
            earningsperhour = earnings / totalhours
        }

        return earningsperhour

    }

    adjustEarnings() {

        const adjustment = new Adjustment();
        const startdate = adjustment.getTimeIn.call(this)
        const enddate = adjustment.getTimeOut.call(this)
        const dollarsperhour = Number(adjustment.getEarningsPerHour.call(this)).toFixed(2);
        const shifts = adjustment.getShifts.call(this).length;
        const totalhours = adjustment.getTotalHours.call(this);
        const totalamount = this.state.totalearnings

        const appbaseddriver = new AppBasedDriver();
        if (window.confirm(`Are you sure you want to adjust earnings from ${startdate} to ${enddate}? $${dollarsperhour}/hr ${shifts} shifts ${totalhours} totalhours for ${totalamount}?`)) {
            const myuser = appbaseddriver.getuser.call(this)

            if (myuser) {

                const dollersperhour = adjustment.getEarningsPerHour.call(this)

                if (Math.abs(dollersperhour) > 0) {

                    const shifts = adjustment.getShifts.call(this)
                    if (shifts.length > 0) {
                        // eslint-disable-next-line
                        shifts.map(shift => {
                            const earnings = (calculatetotalhours(shift.timeout, shift.timein) * dollersperhour) + Number(shift.earnings);
                            const getshift = appbaseddriver.getshiftbyid.call(this, shift.shiftid)
                            if (getshift) {

                                const i = appbaseddriver.getshiftkeybyid.call(this, shift.shiftid)
                                myuser.driver.shifts[i].earnings = earnings;
                            }

                        })
                    }

                }

                this.props.reduxUser(myuser)
                this.setState({ totalearnings: 0 })

            }

        }




    }

    getEarningsBefore() {
        const adjustment = new Adjustment();
        const shifts = adjustment.getShifts.call(this)
        let earnings = 0;
        if (shifts.length > 0) {
            // eslint-disable-next-line
            shifts.map(shift => {
                earnings += Number(shift.earnings)
            })
        }
        return earnings;

    }

    getEarningsAfter() {
        const adjustment = new Adjustment();
        const shifts = adjustment.getShifts.call(this)
        let earningsafter = 0;
        if (shifts.length > 0) {
            const earningsperhour = adjustment.getEarningsPerHour.call(this)
            if (Math.abs(earningsperhour)) {
                // eslint-disable-next-line
                shifts.map(shift => {
                    earningsafter += calculatetotalhours(shift.timeout, shift.timein) * earningsperhour + Number(shift.earnings);
                })
            }
        }
        return earningsafter;


    }


    highlightButton() {
        this.setState({ highlightbutton_1: true })
    }
    unhighlightButton() {
        this.setState({ highlightbutton_1: false })
    }



    showEarningsAdjustment() {
        const styles = MyStylesheet();
        const adjustment = new Adjustment();
        const appbaseddriver = new AppBasedDriver();
        const earningsperhour = `$${Number(adjustment.getEarningsPerHour.call(this)).toFixed(2)}`
        const menufont = appbaseddriver.menufont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const earningsbefore = `$${Number(adjustment.getEarningsBefore.call(this)).toFixed(2)}`
        const earningsafter = `$${Number(adjustment.getEarningsAfter.call(this)).toFixed(2)}`

        const buttonBackground = () => {
            if (this.state.highlightbutton_1) {
                return (styles.highlightbutton)
            }
        }

        if (this.state.adjustment) {
            return (
                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Total Earnings Adjustment (ie, $220.08)
                        </span>
                    </div>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                        <input type="text" style={{ ...styles.generalFont, ...regularFont }}
                            value={this.state.totalearnings}
                            onChange={event => { this.setState({ totalearnings: event.target.value }) }}
                        />
                    </div>


                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                        <span style={{ ...regularFont, ...styles.generalFont }}>
                            Adjustment = {earningsperhour}/hr Earnings Before: {earningsbefore} Earnings After: {earningsafter}
                        </span>
                    </div>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                        <button
                            style={{ ...styles.generalButton, ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin, ...buttonBackground() }}
                            onTouchStart={() => { adjustment.highlightButton.call(this) }}
                            onTouchEnd={() => { adjustment.unhighlightButton.call(this) }}
                            onMouseDown={() => { adjustment.highlightButton.call(this) }}
                            onMouseUp={() => { adjustment.unhighlightButton.call(this) }}
                            onMouseLeave={() => { adjustment.unhighlightButton.call(this) }}
                            onClick={() => { adjustment.adjustEarnings.call(this) }}
                        >

                            Adjust
                        </button>

                    </div>
                </div>
            )
        }
    }


    showAdjustment() {
        const styles = MyStylesheet();
        const adjustment = new Adjustment();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const buttonWidth = () => {
            if (this.state.width > 1200) {
                return ({ width: '60px' })
            } else if (this.state.width > 600) {
                return ({ width: '50px' })
            } else {
                return ({ width: '40px' })
            }

        }
        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>

                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>

                        <div style={{ ...styles.generalContainer, ...styles.addMargin }}>
                            <button style={{ ...styles.generalButton, ...buttonWidth() }} onClick={() => adjustment.handleAdjustment.call(this)}> {adjustment.getAdjustment.call(this)}</button>
                            <span style={{ ...regularFont, ...styles.generalFont }}>
                                Adjustment
                            </span>
                        </div>


                    </div>

                    {adjustment.showData.call(this)}

                    {adjustment.showEarningsAdjustment.call(this)}

                </div>

            </div>
        )
    }

}

export default Adjustment;