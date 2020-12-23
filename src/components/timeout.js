import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver'
import { UTCTimeStringfromTime, makeTimeString, validateMonth, validateDate, validateYear, validateMinutes } from './functions';
import TimeOutCalender from './timeoutcalender';
class TimeOut {
    handleminutes(minutes) {
        this.setState({ timeoutminutes: minutes })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)

        if (myuser) {

            if (minutes.length === 2) {

                if (validateMinutes(minutes)) {


                    if (this.state.activeshiftid) {

                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeoutday;
                            let year = this.state.timeoutyear;
                            let month = this.state.timeoutmonth;
                            let hours = this.state.timeouthours;
                            let time = this.state.timeoutampm;
                            let timeout = makeTimeString(year, month, day, hours, minutes, time);
                            timeout = UTCTimeStringfromTime(timeout);
                            myuser.driver.shifts[i].timeout = timeout;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })


                        }

                    }



                } else {
                    alert(`${minutes} is an invalid minute format `)
                }

            }

        }

    }

    handlehours(hours) {
        this.setState({ timeouthours: hours })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            if (hours.length === 2) {
                if (validateMonth(hours)) {



                    if (this.state.activeshiftid) {
                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeoutday;
                            let year = this.state.timeoutyear;
                            let month = this.state.timeoutmonth;
                            let minutes = this.state.timeoutminutes;
                            let time = this.state.timeoutampm;
                            let timeout = makeTimeString(year, month, day, hours, minutes, time);
                            timeout = UTCTimeStringfromTime(timeout);

                            myuser.driver.shifts[i].timeout = timeout;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })


                        }

                    }


                } else {
                    alert(`${hours} is an invalid hour format`)
                }

            }
        }
    }

    handleyear(year) {
        this.setState({ timeoutyear: year })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {


            if (year.length === 4) {

                if (validateYear(year)) {


                    if (this.state.activeshiftid) {
                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeoutday;
                            let month = this.state.timeoutmonth;
                            let hours = this.state.timeouthours;
                            let minutes = this.state.timeoutminutes;
                            let time = this.state.timeoutampm;
                            let timeout = makeTimeString(year, month, day, hours, minutes, time);
                            timeout = UTCTimeStringfromTime(timeout);
                            myuser.driver.shifts[i].timeout = timeout;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })


                        }

                    }


                } else {
                    alert(`${year} is an invalid year format`)
                }

            }
        }
    }

    handleday(day) {
        day = day.toString();
        this.setState({ timeoutday: day })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

       
                if (day.length === 2) {

                    if (validateDate(day)) {


                            if (this.state.activeshiftid) {
                                const myshift = appbaseddriver.getshiftbyid.call(this,this.state.activeshiftid);
                                if (myshift) {

                                    const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                                    let year = this.state.timeoutyear;
                                    let month = this.state.timeoutmonth;
                                    let hours = this.state.timeouthours;
                                    let minutes = this.state.timeoutminutes;
                                    let time = this.state.timeoutampm;
                                    let timeout = makeTimeString(year, month, day, hours, minutes, time);
                                    timeout = UTCTimeStringfromTime(timeout);
                                    myuser.driver.shifts[i].timeout = timeout;
                                    this.props.reduxUser(myuser)
                                    this.setState({ render: 'render' })


                                }

                            }

     
                } else {
                    alert(`${day} is an invalid day format`)
                }

            }
        }
    }

    handlemonth(month) {
        this.setState({ timeoutmonth: month })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

                if (month.length === 2) {

                    if (validateMonth(month)) {
                     

                            if (this.state.activeshiftid) {
                                const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                                if (myshift) {

                                    const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                                    let day = this.state.timeoutday;
                                    let year = this.state.timeoutyear;
                                    let hours = this.state.timeouthours;
                                    let minutes = this.state.timeoutminutes;
                                    let time = this.state.timeoutampm;
                                    let timeout = makeTimeString(year, month, day, hours, minutes, time);
                                    timeout = UTCTimeStringfromTime(timeout);
                                    myuser.driver.shifts[i].timeout = timeout;
                                    this.props.reduxUser(myuser)
                                    this.setState({ render: 'render' })


                                }

                            }

                        
                } else {
                    alert(`${month} is an invalid month format `)
                }

            }
        }
    }

    toggleampm(ampm) {
        if (this.state.timeoutampm === 'am' && ampm === 'pm') {
            this.setState({ timeoutampm: 'pm' })
        } else if (this.state.timeoutampm === 'pm' && ampm === 'am') {
            this.setState({ timeoutampm: 'am' })
        }

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

                    if (this.state.activeshiftid) {
                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeoutday;
                            let year = this.state.timeoutyear;
                            let month = this.state.timeoutmonth;
                            let hours = this.state.timeouthours;
                            let time = ampm;
                            let minutes = this.state.timeoutminutes;
                            let timeout = makeTimeString(year, month, day, hours, minutes, time);
                        
                            timeout = UTCTimeStringfromTime(timeout);
                 
                            myuser.driver.shifts[i].timeout = timeout;
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })


                        }

                    }

        }

    }

    showampm() {
        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const timeout = new TimeOut();
        const showam = () => {
            return (<div style={{ ...styles.generalContainer }}>
                <button style={{ ...styles.headerFamily, ...headerFont, ...styles.boldFont, ...styles.alignCenter, ...styles.generalPadding }} onClick={() => { timeout.toggleampm.call(this, 'pm') }}>AM</button>
            </div>)

        }
        const showpm = () => {

            return (<div style={{ ...styles.generalContainer }}>
                <button style={{ ...styles.headerFamily, ...headerFont, ...styles.boldFont, ...styles.alignCenter, ...styles.generalPadding }} onClick={() => { timeout.toggleampm.call(this, 'am') }}>PM</button>
            </div>)

        }




        if (this.state.timeoutampm === 'am') {
            return showam()
        } else if (this.state.timeoutampm === 'pm') {
            return showpm()
        }


    }

    showtimeout() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const timeout = new TimeOut();
        const calender = new TimeOutCalender();
        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1, ...styles.calenderContainer }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>Time Out (MM-DD-YYYY HH mm) </span>
                        </div>
                    </div>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} 
                                 value={this.state.timeoutmonth}
                                onChange={event => { timeout.handlemonth.call(this, event.target.value) }} 
                                onFocus={(event)=>{event.target.select()}}
                                />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeoutday}
                                onChange={event => { timeout.handleday.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>
                        <div style={{ ...styles.flex2, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeoutyear}
                                onChange={event => { timeout.handleyear.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeouthours}
                                onChange={event => { timeout.handlehours.call(this, event.target.value) }} 
                                onFocus={(event)=>{event.target.select()}}
                                />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeoutminutes}
                                onChange={event => { timeout.handleminutes.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}}
                            />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>
                            {timeout.showampm.call(this)}
                        </div>
                    </div>

                    {calender.showTimeOutCalender.call(this)}

                </div>
            </div>)
    }

}

export default TimeOut;