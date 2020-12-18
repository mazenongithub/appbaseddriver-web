import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver';
import PurchaseCalender from './purchasecalender'
import { validateMonth, validateDate, validateYear, isNumeric } from './functions';

class PurchaseDate {

    handleyear(year) {
        this.setState({ purchaseyear: year })

        if (isNumeric(year)) {

           

            const appbaseddriver = new AppBasedDriver();


            const myuser = appbaseddriver.getuser.call(this)

            if (myuser) {

                const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)

                if (equipment) {

                    if (equipment.hasOwnProperty("repayment")) {


                        const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);

                        if (year.length === 4) {

                            if (validateYear(year)) {


                                let day = this.state.purchaseday;
                                let month = this.state.purchasemonth;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].repayment.purchasedate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            } else {
                                alert(`Invalid Year format ${year}`)
                            }

                        }

                    } else {
                        alert(`Invalid Year format ${year}`)
                    }

                } else {
                    alert(`equipment not found`)
                }


            }


        } else {
            alert(`${year} should be numeric `)
        }
    }


    handleday(day) {
        this.setState({ purchaseday: day })
        if (isNumeric(day)) {
            day = day.toString();
           
            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            if (myuser) {

                const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (equipment) {

                    if (equipment.hasOwnProperty("repayment")) {

                        const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                        if (day.length === 2) {


                            if (validateDate(day)) {


                                let year = this.state.purchaseyear;
                                let month = this.state.purchasemonth;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].repayment.purchasedate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            } else {
                                alert(`Invalid day format ${day}`)
                            }

                        }

                    } else {
                        alert(`Equipment repayment not found`)
                    }



                } else {
                    alert(`Equipment not found`)
                }

            }


        } else {
            alert(`${day} should be numeric `)
        }
    }


    handlemonth(month) {
        
        this.setState({ purchasemonth: month })
        if (isNumeric(month)) {

            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            if (myuser) {

                const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (equipment) {

                    if (equipment.hasOwnProperty("repayment")) {



                        const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                        if (month.length === 2) {

                            if (validateMonth(month)) {


                                let day = this.state.purchaseday;
                                let year = this.state.purchaseyear;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].repayment.purchasedate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })

                            } else {
                                alert(`Invalid month format ${month}`)
                            }

                        }

                    } else {
                        alert("Equipment repayment not found")
                    }

                } else {
                    alert(`Equipment not found`)
                }
            }

        } else {
            alert(`${month} should be numeric`)
        }
    }



    showdate() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const equipment = new PurchaseDate();
        const calender = new PurchaseCalender();

        const getequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        if (getequipment) {
            if (getequipment.hasOwnProperty("repayment")) {

                if (getequipment.repayment.purchasedate) {

                    if (!this.state.purchaseday || !this.state.purchaseyear || !this.state.purchaseday) {

                        const dates = getequipment.repayment.purchasedate.split('-')
                        const year = dates[0]
                        const month = dates[1]
                        const day = dates[2]
                        this.setState({ purchaseyear: year, purchasemonth: month, purchaseday: day })
                    }

                }

            }
        }



        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1}}>

                <div style={{...styles.generalContainer,...styles.calenderContainer,...styles.marginAuto}}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>Purchase Date (MM-DD-YYYY) </span>
                        </div>
                    </div>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} value={this.state.purchasemonth}
                                onChange={event => { equipment.handlemonth.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.purchaseday}
                                onChange={event => { equipment.handleday.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.purchaseyear}
                                onChange={event => { equipment.handleyear.call(this, event.target.value) }}
                                onFocus={(event)=>{event.target.select()}} />
                        </div>


                    </div>
                    {calender.showEquipmentCalender.call(this)}

                </div>
                </div>
            </div>)
    }

}

export default PurchaseDate;