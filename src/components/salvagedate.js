import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver';
import SalvageCalender from './salvagecalender'
import { validateMonth, validateDate, validateYear, isNumeric } from './functions';

class SalvageDate {

    handleyear(year) {
        if(isNumeric(year)) {
        this.setState({ salvageyear: year })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            const equipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
            if(equipment) {

            
                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                if (year.length === 4) {

                    if(validateYear(year)) {


                                let day = this.state.salvageday;
                                let month = this.state.salvagemonth;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].salvagedate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            }

                        }

                    } else {
                        alert(`Invalid Year format ${year}`)
                    }

                  
                }

            
    } else {
        alert(`${year} should be numeric `)
    }
    }


    handleday(day) {
        if(isNumeric(day)) {
        day = day.toString();
        this.setState({ salvageday: day })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            const equipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
            if(equipment) {

                

                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                if (day.length === 2) {

            
                        if(validateDate(day)) {

        
                                let year = this.state.salvageyear;
                                let month = this.state.salvagemonth;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].salvagedate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })


                            }

                        }

                

                } else {
                    alert(`Invalid day format ${day}`)
                }

            }
       

    } else {
        alert(`${day} should be numeric `)
    }
    }

    handlemonth(month) {
        if(isNumeric(month)) {
        this.setState({ salvagemonth: month })
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {

            const equipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
            if(equipment) {

                

                const i = appbaseddriver.getequipmentkeybyid.call(this, this.props.match.params.equipmentid);
                if (month.length === 2) {

                    if(validateMonth(month)) {

             
                                let day = this.state.salvageday;
                                let year = this.state.salvageyear;
                                const timein = `${year}-${month}-${day}`
                                myuser.equipment[i].salvagedate = timein;
                                this.props.reduxUser(myuser);
                                this.setState({ render: 'render' })

                } else {
                    alert(`Invalid month format ${month}`)
                }

                }

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

        const getequipment = appbaseddriver.getequipmentbyid.call(this,this.props.match.params.equipmentid)
        if(getequipment) {
            if(getequipment.salvagedate) {

                if(!this.state.salvageday || !this.state.salvageyear || !this.state.salvageday) {
                    
                    const dates = getequipment.salvagedate.split('-')
                    const year = dates[0]
                    const month = dates[1]
                    const day = dates[2]
                    this.setState({ salvageyear:year, salvagemonth:month, salvageday:day})
                }

            }
        }



        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                <div style={{ ...styles.flex1, ...styles.calenderContainer }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>Salvage Date (MM-DD-YYYY) </span>
                        </div>
                    </div>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }} value={this.state.salvagemonth}
                                onChange={event => { equipment.handlemonth.call(this, event.target.value) }} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.salvageday}
                                onChange={event => { equipment.handleday.call(this, event.target.value) }} />
                        </div>
                        <div style={{ ...styles.flex1, ...styles.addMargin }}>

                            <input type="text" style={{ ...styles.generalFont, ...headerFont, ...styles.generalField, ...styles.alignCenter }}
                                value={this.state.salvageyear}
                                onChange={event => { equipment.handleyear.call(this, event.target.value) }} />
                        </div>
                        
                       
                    </div>
                    {calender.showCalender.call(this)}


                </div>
            </div>)
    }

}

export default SalvageDate;