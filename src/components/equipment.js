import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import MakeID from './makeid';
import { Link } from 'react-router-dom'
import {gotoicon, removeIconSmall} from './svg'
import Header from './header';
import {getUTCDate} from './functions'

class Equipment {

    handleequipment(value) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const makeid = new MakeID();
        if (myuser) {

            const newEquipment = (equipmentid, equipment) => {
                const repayment = { purchasedate: getUTCDate(), purchase: 0, salvagedate: getUTCDate(), salvage: 0, apr: 0 }
                return ({ equipmentid, equipment, repayment})
            }

            if (this.state.activeequipmentid) {

                const activeequipment = appbaseddriver.getequipmentbyid.call(this, this.state.activeequipmentid)
                if (activeequipment) {
                    const i = appbaseddriver.getequipmentkeybyid.call(this, this.state.activeequipmentid)

                    myuser.equipment[i].equipment = value;
                    this.props.reduxUser(myuser)
                    this.setState({ render: 'render' })

                }

            } else {
                const equipmentid = makeid.equipmentid.call(this)
             
                const myequipment = newEquipment(equipmentid, value)
                const getequipment = appbaseddriver.getequipment.call(this)
                if (getequipment) {

                    myuser.equipment.push(myequipment)
                    this.props.reduxUser(myuser)
                    this.setState({ activeequipmentid: equipmentid })

                } else {
                    myuser.equipment = [myequipment]
                    this.props.reduxUser(myuser)
                    this.setState({ render: 'render' })
                }
            }


        }
    }
    getequipment() {
        const appbaseddriver = new AppBasedDriver();
        let equipment = "";
        if (this.state.activeequipmentid) {

            const myequipment = appbaseddriver.getequipmentbyid.call(this, this.state.activeequipmentid)
          
            equipment = myequipment.equipment;

        }
        return equipment;

    }

    showequipmentids() {
        const equipment = new Equipment();
        const appbaseddriver = new AppBasedDriver();
        let ids = [];
        const equipments = appbaseddriver.getequipment.call(this)
        if (equipments) {
            // eslint-disable-next-line
            equipments.map(myequipment => {
                ids.push(equipment.showequipmentid.call(this, myequipment))

            })
        }


        return ids;
    }

    makeequipmentactive(equipmentid) {
        if (this.state.activeequipmentid === equipmentid) {
            this.setState({ activeequipmentid: false })

        } else {
            this.setState({ activeequipmentid: equipmentid })
        }
    }
    removeequipment(equipment) {
        if(window.confirm(`Are you sure you want to remove ${equipment.equipment}?`)) {
            const appbaseddriver = new AppBasedDriver();
            const myuser = appbaseddriver.getuser.call(this)
            if(myuser) {
            const i = appbaseddriver.getequipmentkeybyid.call(this,equipment.equipmentid)
            myuser.equipment.splice(i,1)
            this.props.reduxUser(myuser)
            this.setState({activeequipmentid:false})

            }
            
        }
    }

    showequipmentid(myequipment) {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const equipment = new Equipment()
        
        const activebackground = () => {
            if (this.state.activeequipmentid === myequipment.equipmentid) {
                return (styles.activeBackground)
            }
        }
        const myuser = appbaseddriver.getuser.call(this)
        const removeIcon = appbaseddriver.getremoveicon.call(this)
        const buttonwidth =() => {

            if(this.state.width>1200) {
                return({width:'55px'})
            } else if (this.state.width>600) {
                return({width:'45px'})
            } else {
                return({width:'35px'})
            }

          
        }
        if(myuser) {
        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }} key={myequipment.equipmentid} onClick={() => { equipment.makeequipmentactive.call(this, myequipment.equipmentid) }}>
                <div style={{ ...styles.flex1 }}>
                    <div style={{ ...styles.generalContainer,...styles.bottomMargin15 }}>
                        <span style={{ ...regularFont, ...styles.generalFont, ...activebackground() }}>{myequipment.equipment}</span>
                    </div>
                    <div style={{ ...styles.generalContainer,...styles.bottomMargin15 }}>
                        <Link to={`/${myuser.driverid}/equipment/${myequipment.equipmentid}`} style={{ ...regularFont, ...styles.generalFont, ...styles.generalLink }}><button style={{...styles.generalButton, ...buttonwidth()}}>{gotoicon()}</button>Go to {myequipment.equipment}</Link> <button style={{ ...styles.generalButton, ...removeIcon, ...styles.marginLeft30 }} onClick={() => { equipment.removeequipment.call(this,myequipment) }}>{removeIconSmall()}</button>
                    </div>
                </div>
            </div>
        )

        }

    }



    showequipment() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const equipment = new Equipment();
        const header = new Header();
        if (myuser) {

            return (
                <div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>

                        <div style={{ ...styles.generalFlex }}>
                            <div style={{ ...styles.flex1 }}>

                                {header.showsubheader.call(this)}

                                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }}>Create Equipment</span>
                                </div>

                                <div style={{ ...styles.generalContainer, ...styles.bottomMargin15 }}>
                                    <input type="text" style={{ ...styles.generalField, ...regularFont, ...styles.generalFont }}
                                        value={equipment.getequipment.call(this)}
                                        onChange={event => { equipment.handleequipment.call(this, event.target.value) }}
                                    />
                                </div>

                                {equipment.showequipmentids.call(this)}

                                {appbaseddriver.showsavedriver.call(this)}


                            </div>
                        </div>

                    </div>
                </div>
            )

        } else {

            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...styles.generalFont, ...regularFont }}>Please Login to View Equipment</span>
                </div>
            </div>

        }
    }
}
export default Equipment;