import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver';
import EquipmentCalender from './equipmentcalender'
import { validateMonth, validateDate, validateYear, isNumeric, trailingZeros } from './functions';

class EquipmentDate {

    handleyear(year) {
        this.setState({ equipmentyear: year })
        if (isNumeric(year)) {

            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            if (myuser) {
                console.log(year)

                const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (equipment) {
                 
                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);

                   
                    if (year.length === 4) {
                    
                       
                        if (validateYear(year)) {

                    
                            if (this.state.activecostid) {

                                const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                                if (cost) {

                                    const j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                                    let day = this.state.equipmentday;
                                    let month = this.state.equipmentmonth;
                                    const timein = `${year}/${month}/${day}`
                                    myuser.equipment[i].costs[j].purchasedate = timein;
                                    this.props.reduxUser(myuser);

                                }


                            }
                            appbaseddriver.updateUI.call(this,Number(year))                     
                            this.setState({ activeyear: Number(year) })

                        } else {
                            alert(`Invalid Year format ${year}`)
                        }

                    }






                }
            }

        } else {
            alert(`${year} should be numeric `)
        }
    }

    handleday(day) {
        this.setState({ equipmentday: day })
        if (isNumeric(day)) {
            day = day.toString();

            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            if (myuser) {

                const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (equipment) {



                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                    if (this.state.activecostid) {
                        const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                        if (cost) {

                            if (day.length === 2) {


                                if (validateDate(day)) {


                                    const j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                                    let year = this.state.equipmentyear;
                                    let month = this.state.equipmentmonth;
                                    const timein = `${year}/${month}/${day}`
                                    myuser.equipment[i].costs[j].purchasedate = timein;
                                    this.props.reduxUser(myuser);
                                    this.setState({ render: 'render' })


                                } else {
                                    alert(`Invalid day format ${day}`)
                                }

                            } else if (day.length === 1) {

                                if (Number(day)) {

                                    let j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                                    let equipmentday = trailingZeros(day)
                                    let equipmentmonth = trailingZeros(this.state.equipmentmonth);
                                    let equipmentyear = this.state.equipmentyear;
                                    let timein = `${equipmentyear}/${equipmentmonth}/${equipmentday}`
                                    myuser.equipment[i].costs[j].purchasedate = timein;
                                    this.props.reduxUser(myuser);
                                    this.setState({ render: 'render', equipmentmonth })

                                }

                            }


                        }

                    }

                }
            }

        } else {
            alert(`${day} should be numeric `)
        }
    }


    handlemonth(month) {
        this.setState({ equipmentmonth: month })
        if (isNumeric(month)) {

            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            if (myuser) {

                const equipment = appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
                if (equipment) {



                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                    if (month.length === 2) {

                        if (validateMonth(month)) {


                           appbaseddriver.setUIMonth.call(this,month)


                            if (this.state.activecostid) {
                                const cost = appbaseddriver.getequipmentcostbyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                                if (cost) {

                                    let j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                                    let day = this.state.equipmentday;
                                    let year = this.state.equipmentyear;
                                    console.log(month, day.year)
                                    const timein = `${year}/${month}/${day}`
                                    myuser.equipment[i].costs[j].purchasedate = timein;
                                    this.props.reduxUser(myuser);
                                    this.setState({ render: 'render' })


                                }

                            }



                        } else {
                            alert(`Invalid month format ${month}`)
                        }

                    } else if (month.length === 1) {

                        if (Number(month)) {

                            let j = appbaseddriver.getequipmentcostkeybyid.call(this, this.props.match.params.equipmentid, this.state.activecostid);
                            let equipmentmonth = trailingZeros(month)
                            let equipmentday = trailingZeros(this.state.equipmentday);
                            let equipmentyear = this.state.equipmentyear;
                            let timein = `${equipmentyear}/${equipmentmonth}/${equipmentday}`
                            myuser.equipment[i].costs[j].purchasedate = timein;
                            this.props.reduxUser(myuser);
                            this.setState({ render: 'render', equipmentday })
                        }
                    }

                }
            }

        } else {
            alert(`${month} should be numeric`)
        }
    }





    showequipment() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const equipment = new EquipmentDate();
        const calender = new EquipmentCalender();
        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalContainer, ...styles.calenderContainer, ...styles.marginAuto }}>

                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1 }}>
                                <span style={{ ...styles.generalFont, ...regularFont }}>Date of Cost (MM-DD-YYYY) </span>
                            </div>
                        </div>

                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1, ...styles.addMargin }}>

                                <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} value={this.state.equipmentmonth}
                                    onChange={event => { equipment.handlemonth.call(this, event.target.value) }}
                                    onFocus={(event) => { event.target.select() }}
                                />
                            </div>
                            <div style={{ ...styles.flex1, ...styles.addMargin }}>

                                <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                    value={this.state.equipmentday}
                                    onChange={event => { equipment.handleday.call(this, event.target.value) }}
                                    onFocus={(event) => { event.target.select() }} />
                            </div>
                            <div style={{ ...styles.flex1, ...styles.addMargin }}>

                                <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                    value={this.state.equipmentyear}
                                    onChange={event => { equipment.handleyear.call(this, event.target.value) }}
                                    onFocus={(event) => { event.target.select() }}
                                />
                            </div>


                        </div>
                        {calender.showEquipmentCalender.call(this)}

                    </div>
                </div>
            </div>)
    }

}

export default EquipmentDate;