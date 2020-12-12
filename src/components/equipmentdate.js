import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver';
import EquipmentCalender from './equipmentcalender'
import { validateMonth, validateDate, validateYear } from './functions';

class EquipmentDate {

    handleyear(year) {
        this.setState({ equipmentyear: year })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            const equipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
            if(equipment) {

                

                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                if (year.length === 4) {

                    if(validateYear(year)) {


                        if (this.state.activecostid) {
                            const cost = appbaseddriver.getequipmentcostbyid.call(this,this.props.match.params.equipmentid,this.state.activecostid);
                            if (cost) {

                                const j = appbaseddriver.getequipmentcostkeybyid.call(this,this.props.match.params.equipmentid,this.state.activecostid);
                                let day = this.state.equipmentday;
                                let month = this.state.equipmentmonth;
                                const timein = `${year}-${month}-${day}`

                                myuser.equipment[i].costs[j].startdate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            }

                        }

                    } else {
                        alert(`Invalid Year format ${year}`)
                    }

                  
                }

            }
        }
    }

    handleday(day) {
        day = day.toString();
        this.setState({ equipmentday: day })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            const equipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
            if(equipment) {

                

                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                if (day.length === 2) {

            
                        if(validateDate(day)) {

                        if (this.state.activecostid) {
                            const cost = appbaseddriver.getequipmentcostbyid.call(this,this.props.match.params.equipmentid,this.state.activecostid);
                            if (cost) {

                                const j = appbaseddriver.getequipmentcostkeybyid.call(this,this.props.match.params.equipmentid,this.state.activecostid);
                                let year = this.state.equipmentyear;
                                let month = this.state.equipmentmonth;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].costs[j].startdate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            }

                        }

                

                } else {
                    alert(`Invalid day format ${day}`)
                }

            }

            }
        }
    }

    handlemonth(month) {
        this.setState({ equipmentmonth: month })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            const equipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
            if(equipment) {

                

                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                if (month.length === 2) {

                    if(validateMonth(month)) {

             



                        if (this.state.activecostid) {
                            const cost = appbaseddriver.getequipmentcostbyid.call(this,this.props.match.params.equipmentid,this.state.activecostid);
                            if (cost) {

                                const j = appbaseddriver.getequipmentcostkeybyid.call(this,this.props.match.params.equipmentid,this.state.activecostid);
                                let day = this.state.equipmentday;
                                let year = this.state.equipmentyear;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].costs[j].startdate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            }

                        }

                    

                } else {
                    alert(`Invalid month format ${month}`)
                }

                }

            }
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
                <div style={{ ...styles.flex1, ...styles.calenderContainer }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>Material Date (MM-DD-YYYY) </span>
                        </div>
                    </div>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} value={this.state.equipmentmonth}
                                onChange={event => { equipment.handlemonth.call(this, event.target.value) }} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.equipmentday}
                                onChange={event => { equipment.handleday.call(this, event.target.value) }} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.equipmentyear}
                                onChange={event => { equipment.handleyear.call(this, event.target.value) }} />
                        </div>
                        
                       
                    </div>
                    {calender.showEquipmentCalender.call(this)}


                </div>
            </div>)
    }

}

export default EquipmentDate;