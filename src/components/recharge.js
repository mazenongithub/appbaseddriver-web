import React from 'react'
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver'

class Recharge {




    handleTotalEnergy(value) {

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (cost) {
                        if (cost.hasOwnProperty("recharge")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].recharge.totalenergy = value
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

        

    }
    getTotalEnergy() {

        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("recharge")) {
                return cost.recharge.totalenergy
            }
        }

    }

    getDurationHours() {

        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("recharge")) {
                return cost.recharge.duration.hours
            }
        }

   

    }
    handleDurationHours(value) {

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (cost) {
                        if (cost.hasOwnProperty("recharge")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].recharge.duration.hours = value
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

    }

    getDurationMinutes() {

        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("recharge")) {
                return cost.recharge.duration.minutes
            }
        }

    }
    handleDurationMinutes(value) {

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (cost) {
                        if (cost.hasOwnProperty("recharge")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].recharge.duration.minutes = value
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

    }


    getDurationSeconds() {

        const appbaseddriver = new AppBasedDriver();
        const equipmentid = this.props.match.params.equipmentid;
        if (this.state.activecostid) {
            const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
            if (cost.hasOwnProperty("recharge")) {
                return cost.recharge.duration.seconds
            }
        }

    }
    handleDurationSeconds(value) {

        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipmentid = this.props.match.params.equipmentid;
            const equipment = appbaseddriver.getequipmentbyid.call(this, equipmentid)
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipmentid)
                if (this.state.activecostid) {
                    const cost = appbaseddriver.getequipmentcostbyid.call(this, equipmentid, this.state.activecostid)
                    if (cost) {
                        if (cost.hasOwnProperty("recharge")) {
                            const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipmentid, this.state.activecostid)
                            myuser.equipment[i].costs[j].recharge.duration.seconds = value
                            this.props.reduxUser(myuser)
                            this.setState({ render: 'render' })

                        }

                    }
                }

            }
        }

    }

    showRecharge() {
        const styles = MyStylesheet();
        const recharge = new Recharge();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const equipment = this.getequipment();
        if (equipment) {
            if (this.state.activecostid) {

                const cost = appbaseddriver.getequipmentcostbyid.call(this, equipment.equipmentid, this.state.activecostid)
                if (cost) {
                    if (cost.hasOwnProperty("recharge")) {
                        return (
                            <div style={{ ...styles.generalFlex }}>

                                <div style={{ ...styles.flex1 , ...styles.addMargin }}>
                                    <span style={{ ...styles.generalFont, ...regularFont }}>Total Energy (kWhrs)</span>
                                    <input type="text" value={recharge.getTotalEnergy.call(this)}
                                        onChange={event => { recharge.handleTotalEnergy.call(this, event.target.value) }}
                                        style={{ ...styles.generalFont, ...regularFont, ...styles.generalField }} />
                                </div>


                                <div style={{ ...styles.flex1, ...styles.addMargin  }}>

                   

                              
                               

                                        <div style={{ ...styles.generalContainer, ...styles.addMargin  }}>

                                        <span style={{ ...styles.generalFont, ...regularFont }}>Charge Duration(Minutes)</span>
                                            <input type="text" value={recharge.getDurationMinutes.call(this)}
                                                onChange={event => { recharge.handleDurationMinutes.call(this, event.target.value) }}
                                                style={{ ...styles.generalFont, ...regularFont, ...styles.generalField }} />

                                        </div>

                                 

                              



                                </div>


                            </div>)

                    }

                }


            }

        }

    }


}
        export default Recharge;