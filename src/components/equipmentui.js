import React from 'react'
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { CheckedBox, EmptyBox } from './svg'

class EquipmentUI {


    showEquipment(equipmentid) {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const equipmentui = new EquipmentUI();
        const buttonWidth = appbaseddriver.getButtonWidth.call(this)
        const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
        const regularFont = appbaseddriver.getRegularFont.call(this)
        if (equipment) {
            return (<div style={{ ...styles.generalContainer, ...styles.addMargin }}>
                <button style={{ ...styles.generalButton, ...buttonWidth }} onClick={() => equipmentui.handleEquipment.call(this, equipmentid)}> {equipmentui.getEquipmentIcon.call(this, equipmentid)}</button>
                <span style={{ ...regularFont, ...styles.generalFont }}>
                    {equipment.equipment}
                </span>
            </div>)

        }
    }

    checkEquipmentList(equipmentid) {
        let checklist = false;
        const appbaseddriver = new AppBasedDriver();

        if (this.state.activeshiftid) {
            const shift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
            if (shift) {
                if (shift.hasOwnProperty("equipment")) {
                    if (shift.equipment.includes(equipmentid)) {

                        checklist = true;

                    }
                }
            }

        }


        return checklist;
    }

    getEquipmentIcon(equipmentid) {
        const equipmentui = new EquipmentUI();
        const checklist = equipmentui.checkEquipmentList.call(this, equipmentid)
        if (checklist) {
            return (CheckedBox())
        } else {
            return (EmptyBox())
        }


    }

    handleEquipment(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        const equipmentui = new EquipmentUI();
        if (myuser) {
            if (this.state.activeshiftid) {
                const getshift = appbaseddriver.getshiftbyid.call(this, this.state.activeshiftid)
                if (getshift) {
                    const i = appbaseddriver.getshiftkeybyid.call(this, this.state.activeshiftid)

                    const checkEquipmentList = equipmentui.checkEquipmentList.call(this, equipmentid)
                    if (checkEquipmentList) {
                        const j = getshift.equipment.indexOf(equipmentid)
                        myuser.driver.shifts[i].equipment.splice(j, 1)

                    } else {
                        if (getshift.hasOwnProperty("equipment")) {

                            myuser.driver.shifts[i].equipment.push(equipmentid)

                        } else {
                            myuser.driver.shifts[i].equipment = [equipmentid]
                        }

                    }
                    this.props.reduxUser(myuser)
                    this.setState({ render: 'render' })
                }
            }
        }
    }

    getEquipment() {
        const appbaseddriver = new AppBasedDriver();
        const equipmentui = new EquipmentUI();
        const equipment = appbaseddriver.createEquipmentList.call(this);
        let getequipment = [];
        if (equipment) {
            equipment.map(equipmentid => {
                getequipment.push(equipmentui.showEquipment.call(this, equipmentid))
            })

        }
        return getequipment;

    }

    showEquipmentUI() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const equipmentui = new EquipmentUI();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        if(this.state.activeshiftid) {
            
        return (<div style={{ ...styles.generalContainer }}>

            <div style={{ ...styles.generalContainer }}>
                <span style={{ ...styles.generalFont, ...regularFont, ...styles.boldFont }}>
                    Equipment
                </span>

            </div>

            {equipmentui.getEquipment.call(this)}


        </div>)

        } 
    }


}

export default EquipmentUI;

