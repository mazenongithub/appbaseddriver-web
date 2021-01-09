import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver'
import { UTCTimeStringfromTime, makeTimeString, validateMonth, validateDate, validateYear, validateMinutes, getMonString } from './functions';
import TimeInCalender from './timeincalender';
class TimeIn {
    handleminutes(minutes) {
        this.setState({ timeinminutes: minutes })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)

        if (myuser) {

            if (minutes.length === 2) {

                if (validateMinutes(minutes)) {


                    if (this.state.activeshiftid) {

                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeinday;
                            let year = this.state.timeinyear;
                            let month = this.state.timeinmonth;
                            let hours = this.state.timeinhours;
                            let time = this.state.timeinampm;
                            let timein = makeTimeString(year, month, day, hours, minutes, time);
                            timein = UTCTimeStringfromTime(timein);
                            myuser.driver.shifts[i].timein = timein;
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
        this.setState({ timeinhours: hours })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            if (hours.length === 2) {
                if (validateMonth(hours)) {



                    if (this.state.activeshiftid) {
                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeinday;
                            let year = this.state.timeinyear;
                            let month = this.state.timeinmonth;
                            let minutes = this.state.timeinminutes;
                            let time = this.state.timeinampm;
                            let timein = makeTimeString(year, month, day, hours, minutes, time);
                            timein = UTCTimeStringfromTime(timein);

                            myuser.driver.shifts[i].timein = timein;
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
        this.setState({ timeinyear: year })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {


            if (year.length === 4) {

                if (validateYear(year)) {


                    if (this.state.activeshiftid) {
                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeinday;
                            let month = this.state.timeinmonth;
                            let hours = this.state.timeinhours;
                            let minutes = this.state.timeinminutes;
                            let time = this.state.timeinampm;
                            let timein = makeTimeString(year, month, day, hours, minutes, time);
                            timein = UTCTimeStringfromTime(timein);
                            myuser.driver.shifts[i].timein = timein;
                            this.props.reduxUser(myuser)
                            


                        }
                      

                    }
                    this.setState({ activeyear:Number(year) })


                } else {
                    alert(`${year} is an invalid year format`)
                }

            }
        }
    }

    handleday(day) {
        day = day.toString();
        this.setState({ timeinday: day })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

       
                if (day.length === 2) {

                    if (validateDate(day)) {


                            if (this.state.activeshiftid) {
                                const myshift = appbaseddriver.getshiftbyid.call(this,this.state.activeshiftid);
                                if (myshift) {

                                    const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                                    let year = this.state.timeinyear;
                                    let month = this.state.timeinmonth;
                                    let hours = this.state.timeinhours;
                                    let minutes = this.state.timeinminutes;
                                    let time = this.state.timeinampm;
                                    let timein = makeTimeString(year, month, day, hours, minutes, time);
                                    timein = UTCTimeStringfromTime(timein);
                                    myuser.driver.shifts[i].timein = timein;
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
        this.setState({ timeinmonth: month })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

                if (month.length === 2) {

                    if (validateMonth(month)) {

                        if (this.state.activemonth.hasOwnProperty("length")) {

                            const monthstring = getMonString(Number(month))


                            if (this.state.activemonth.indexOf(monthstring) === -1) {

                                const activemonth = this.state.activemonth;
                                activemonth.push(monthstring)
                                this.setState({ activemonth })
                            }
                        }
                     

                            if (this.state.activeshiftid) {
                                const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                                if (myshift) {

                                    const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                                    let day = this.state.timeinday;
                                    let year = this.state.timeinyear;
                                    let hours = this.state.timeinhours;
                                    let minutes = this.state.timeinminutes;
                                    let time = this.state.timeinampm;
                                    let timein = makeTimeString(year, month, day, hours, minutes, time);
                                    timein = UTCTimeStringfromTime(timein);
                                    myuser.driver.shifts[i].timein = timein;
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
        if (this.state.timeinampm === 'am' && ampm === 'pm') {
            this.setState({ timeinampm: 'pm' })
        } else if (this.state.timeinampm === 'pm' && ampm === 'am') {
            this.setState({ timeinampm: 'am' })
        }

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

                    if (this.state.activeshiftid) {
                        const myshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid);
                        if (myshift) {

                            const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)
                            let day = this.state.timeinday;
                            let year = this.state.timeinyear;
                            let month = this.state.timeinmonth;
                            let hours = this.state.timeinhours;
                            let time = ampm;
                            let minutes = this.state.timeinminutes;
                            let timein = makeTimeString(year, month, day, hours, minutes, time);
                        
                            timein = UTCTimeStringfromTime(timein);
                 
                            myuser.driver.shifts[i].timein = timein;
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
        const timein = new TimeIn();
        const showam = () => {
            return (<div style={{ ...styles.generalContainer }}>
                <button style={{ ...styles.headerFamily, ...headerFont, ...styles.boldFont, ...styles.alignCenter, ...styles.generalPadding }} onClick={() => { timein.toggleampm.call(this, 'pm') }}>AM</button>
            </div>)

        }
        const showpm = () => {

            return (<div style={{ ...styles.generalContainer }}>
                <button style={{ ...styles.headerFamily, ...styles.generalPadding, ...headerFont, ...styles.boldFont, ...styles.alignCenter }} onClick={() => { timein.toggleampm.call(this, 'am') }}>PM</button>
            </div>)

        }




        if (this.state.timeinampm === 'am') {
            return showam()
        } else if (this.state.timeinampm === 'pm') {
            return showpm()
        }


    }

    showtimein() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const timein = new TimeIn();
        const calender = new TimeInCalender();
        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1, ...styles.calenderContainer }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>Time In (MM-DD-YYYY HH mm) </span>
                        </div>
                    </div>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} 
                                value={this.state.timeinmonth}
                                onChange={event => { timein.handlemonth.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeinday}
                                onChange={event => { timein.handleday.call(this, event.target.value) }} 
                                onFocus={(event)=>{event.target.select()}}
                                />
                        </div>
                        <div style={{ ...styles.flex2, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeinyear}
                                onChange={event => { timein.handleyear.call(this, event.target.value) }} 
                                onFocus={(event)=>{event.target.select()}}
                                />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeinhours}
                                onChange={event => { timein.handlehours.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.timeinminutes}
                                onChange={event => { timein.handleminutes.call(this, event.target.value)
                                 }}
                                 onFocus={(event)=>{event.target.select()}}
                                 
                            />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>
                            {timein.showampm.call(this)}
                        </div>
                    </div>

                    {calender.showTimeInCalender.call(this)}

                </div>
            </div>)
    }

}

export default TimeIn;