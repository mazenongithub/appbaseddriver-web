import React from 'react'
import AppBasedDriver from './appbaseddriver';
import DriverUI from './driverui';
import { MyStylesheet } from './styles'

class Costs {

    showcosts(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const deliveries = appbaseddriver.getdeliveries.call(this)
        const hoursworked = +Number(appbaseddriver.gethoursworked.call(this))
        const costs = appbaseddriver.getcostsbyequipmentid.call(this, equipmentid)
        const dollarsperhours = costs > 0 && hoursworked > 0 ? Number(costs / hoursworked).toFixed(2) : 0;
        const dollarsperdelivery = costs > 0 && deliveries > 0 ? Number(costs / deliveries).toFixed(2) : 0
        const miles = appbaseddriver.getmiles.call(this)
        const dollarspermile = costs > 0 && miles > 0 ? Number(costs / miles).toFixed(2) : 0;
        const styles = MyStylesheet();
        const driverui = new DriverUI();

        const output = () => {
            if (this.state.width > 600) {
                return (
                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1 }}>

                             {driverui.showui.call(this)}

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                                   


                                    <span style={{ ...regularFont, ...styles.generalFont }}>
                                        Deliveries
                            </span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{deliveries}</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>
                                        Hours Worked
                            </span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{+Number(hoursworked).toFixed(2)}</span>
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>Costs</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>${Number(costs).toFixed(2)}</span>
                                </div>
                                <div style={{ ...styles.flex1 }}>

                                    <span style={{ ...regularFont, ...styles.generalFont }}>Miles</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{Number(miles)}</span>

                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>  <span style={{ ...regularFont, ...styles.generalFont }}>$/hr</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperhours).toFixed(2)}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>$/delivery</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperdelivery).toFixed(2)}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>$/mile</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarspermile).toFixed(2)}</span> <br /></span>
                                </div>

                            </div>
                        </div>
                    </div>
                )

            } else {

                return (

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            {driverui.showui.call(this)}

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>

                                    <span style={{ ...regularFont, ...styles.generalFont }}>
                                        Deliveries
                                    </span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{deliveries}</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>
                                        Hours Worked
                                    </span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{+Number(hoursworked).toFixed(2)}</span>
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>Costs</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>${Number(costs).toFixed(2)}</span>
                                </div>
                            </div>
                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>

                                    <span style={{ ...regularFont, ...styles.generalFont }}>Miles</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{Number(miles)}</span>
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>  <span style={{ ...regularFont, ...styles.generalFont }}>$/hr</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperhours).toFixed(2)}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>$/delivery</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperdelivery).toFixed(2)}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>$/mile</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarspermile).toFixed(2)}</span> <br /></span>
                                </div>
                            </div>

                        </div>
                    </div>
                )

            }
        }

        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            {output()}

                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Costs;