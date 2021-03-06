import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver';
import SalvageCalender from './salvagecalender'
import { validateMonth, validateDate, validateYear, isNumeric, trailingZeros, compareDates } from './functions';

class SalvageDate {

    handleyear(year) {
        this.setState({ salvageyear: year })
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


                                let day = this.state.salvageday;
                                let month = this.state.salvagemonth;
                                const timein = `${year}/${month}/${day}`
                                if (compareDates(equipment.repayment.purchasedate, timein)) {

                                    myuser.equipment[i].repayment.salvagedate = timein;
                                    this.props.reduxUser(myuser);
                                    this.setState({ render: 'render' })

                                } else {
                                    alert(`${equipment.equipment} purchase date ${timein} is less than the salvage date ${equipment.repayment.salvagedate}`)
                                }


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
        this.setState({ salvageday: day })
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


                                let year = this.state.salvageyear;
                                let month = this.state.salvagemonth;
                                const timein = `${year}/${month}/${day}`
                                if (compareDates(equipment.repayment.purchasedate, timein)) {
                                    myuser.equipment[i].repayment.salvagedate = timein;
                                    this.props.reduxUser(myuser);
                                    this.setState({ render: 'render' })

                                } else {
                                    alert(`${equipment.equipment} purchase date ${timein} is less than the salvage date ${equipment.repayment.salvagedate}`)
                                }


                            } else {
                                alert(`Invalid day format ${day}`)
                            }

                        } else if (day.length === 1) {

                            if(Number(day)) {

                            let salvagemonth = trailingZeros(this.state.salvagemonth)
                            let salvageday = trailingZeros(day);
                            let salvageyear = this.state.salvageyear;
                            let timein = `${salvageyear}/${salvagemonth}/${salvageday}`
                            myuser.equipment[i].repayment.salvagedate = timein;
                            this.props.reduxUser(myuser);
                            this.setState({ render: 'render', salvagemonth })
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

        this.setState({ salvagemonth: month })


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


                                let salvageday = trailingZeros(this.state.salvageday);
                                let salvageyear = this.state.salvageyear;
                                let timein = `${salvageyear}/${month}/${salvageday}`
                                if (compareDates(equipment.repayment.purchasedate, timein)) {
                                    myuser.equipment[i].repayment.salvagedate = timein;
                                    this.props.reduxUser(myuser);
                                    this.setState({ render: 'render', salvageday })

                                } else {
                                    alert(`${equipment.equipment} purchase date ${timein} is less than the salvage date ${equipment.repayment.salvagedate}`)
                                }

                            } else {
                                alert(`Invalid month format ${month}`)
                            }

                        } else if (month.length === 1) {

                            if(Number(month)) {

                            let salvagemonth = trailingZeros(month)
                            let salvageday = trailingZeros(this.state.salvageday);
                            let salvageyear = this.state.salvageyear;
                            let timein = `${salvageyear}/${salvagemonth}/${salvageday}`
                            myuser.equipment[i].repayment.salvagedate = timein;
                            this.props.reduxUser(myuser);
                            this.setState({ render: 'render', salvageday })

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
        const equipment = new SalvageDate();
        const calender = new SalvageCalender();

        const getequipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
        if (getequipment) {
            if (getequipment.hasOwnProperty("repayment")) {

                if (getequipment.repayment.salvagedate) {

                    if (!this.state.salvageday || !this.state.salvageyear || !this.state.salvageday) {

                        const dates = getequipment.repayment.salvagedate.split('/')
                        const year = dates[0]
                        const month = dates[1]
                        const day = dates[2]
                        // eslint-disable-next-line
                        this.setState({ salvageyear: year, salvagemonth: month, salvageday: day })
                    }

                }

            }
        }



        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalContainer, ...styles.calenderContainer, ...styles.marginAuto }}>

                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1 }}>
                                <span style={{ ...styles.generalFont, ...regularFont }}>Salvage Date (MM-DD-YYYY) </span>
                            </div>
                        </div>

                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1, ...styles.addMargin }}>

                                <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} value={this.state.salvagemonth}
                                    onFocus={(event) => { event.target.select() }}
                                    onChange={event => { equipment.handlemonth.call(this, event.target.value) }} />
                            </div>
                            <div style={{ ...styles.flex1, ...styles.addMargin }}>

                                <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                    value={this.state.salvageday}
                                    onFocus={(event) => { event.target.select() }}
                                    onChange={event => { equipment.handleday.call(this, event.target.value) }} />
                            </div>
                            <div style={{ ...styles.flex1, ...styles.addMargin }}>

                                <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                    value={this.state.salvageyear}
                                    onFocus={(event) => { event.target.select() }}
                                    onChange={event => { equipment.handleyear.call(this, event.target.value) }} />
                            </div>


                        </div>
                        {calender.showEquipmentCalender.call(this)}
                    </div>

                </div>
            </div>)
    }

}

export default SalvageDate;