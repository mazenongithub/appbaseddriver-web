import React from 'react'
import AppBasedDriver from './appbaseddriver';
import DriverUI from './driverui';
import { MyStylesheet } from './styles'
class Costs {

    showchart(type) {
        const appbaseddriver = new AppBasedDriver();
        const deliveries = appbaseddriver.getdeliveriesbyequipmentid.call(this,this.props.match.params.equipmentid)
        const hoursworked = appbaseddriver.gethoursworkedbyequipmentid.call(this,this.props.match.params.equipmentid)
        const miles = appbaseddriver.getmilesbyequipmentid.call(this,this.props.match.params.equipmentid)
        const costs = appbaseddriver.getcostsbyequipmentid.call(this, this.props.match.params.equipmentid)
        const costsperhours = costs > 0 && hoursworked > 0 ? costs / hoursworked : 0;
        const costsperdelivery = costs > 0 && deliveries > 0 ? costs / deliveries : 0;
        const costspermile = miles > 0 && costs > 0 ? costs / miles : 0;


        const getheight = (type, dollarsperhours, dollarsperdelivery, dollarspermile) => {
            let height = 0
            switch (type) {
                case 'hourly':
                    height = dollarsperhours > 0 ? Math.round(4 * dollarsperhours) : 0
                    break;
                case 'delivery':
                    height = dollarsperdelivery > 0 ? Math.round(10 * dollarsperdelivery) : 0
                    break;
                case 'miles':
                    height = dollarspermile > 0 ? Math.round(80 * dollarspermile) : 0
                    break;
                default:
                    break;
            }
            return height;

        }





        const getbarchart = (height, type, dollarsperhours, dollarsperdelivery, dollarspermile) => {

            const gettext = (type) => {
                switch (type) {
                    case 'hourly':
                        return (<text className="incomechart-3" x="94" y={Math.round(200 - height)}>${Number(dollarsperhours).toFixed(2)}/hr</text>)
                    case 'delivery':
                        return (<text className="incomechart-3" x="94" y={Math.round(200 - height)}>${Number(dollarsperdelivery).toFixed(2)}/delivery</text>)
                    case 'miles':
                        return (<text className="incomechart-3" x="94" y={Math.round(200 - height)}>${Number(dollarspermile).toFixed(2)}/mile</text>)
                    default:
                        break;
                }
            }

            return (

                <g>


                    <g transform='translate(54.43,208.35) scale(1,-1)'>



                        <rect className="driverchart-7" x="40" y="0" width="61.48" height={getheight(type, costsperhours, costsperdelivery, costspermile)} />

                    </g>

                    {gettext(type)}

                </g>)
        }

        const labels = (type) => {

            switch (type) {
                case 'hourly':
                    return (<g>
                        <text className="incomechart-3" transform="translate(31.89 174.68)">10</text>
                        <text className="incomechart-3" transform="translate(31.89 133.69)">20</text>
                        <text className="incomechart-3" transform="translate(31.89 94.85)">30</text>
                        <text className="incomechart-3" transform="translate(31.89 54.32)">40</text>
                        <text className="incomechart-3" transform="translate(31.89 13.78)">50</text>
                    </g>)
                case 'delivery':
                    return (<g>

                        <text className="incomechart-3" transform="translate(36.89 174.68)">4</text>
                        <text className="incomechart-3" transform="translate(36.89 133.69)">8</text>
                        <text className="incomechart-3" transform="translate(31.89 94.85)">12</text>
                        <text className="incomechart-3" transform="translate(31.89 54.32)">16</text>
                        <text className="incomechart-3" transform="translate(31.89 13.78)">20</text>

                    </g>)
                case 'miles':
                    return (<g>
                        <text className="incomechart-3" transform="translate(25.89 174.68)">0.5</text>
                        <text className="incomechart-3" transform="translate(31.89 133.69)">1</text>
                        <text className="incomechart-3" transform="translate(25.89 94.85)">1.5</text>
                        <text className="incomechart-3" transform="translate(31.89 54.32)">2</text>
                        <text className="incomechart-3" transform="translate(25.89 13.78)">2.5</text>
                    </g>)

                default:
                    break;
            }


        }

        return (

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.15 210.85" width="408px" height="422px">
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2">





                    {labels(type)}


                    <line className="incomechart-4" x1="58.47" y1="8.35" x2="51.73" y2="8.35" />
                    <line className="incomechart-4" x1="58.47" y1="48.35" x2="51.73" y2="48.35" />
                    <line className="incomechart-4" x1="58.47" y1="88.35" x2="51.73" y2="88.35" />
                    <line className="incomechart-4" x1="58.47" y1="128.35" x2="51.73" y2="128.35" />
                    <line className="incomechart-4" x1="58.47" y1="168.35" x2="51.73" y2="168.35" />


                    <text className="incomechart-5" transform="translate(85 85.14)">Costs</text>
                    {getbarchart(getheight(type, costsperhours, costsperdelivery, costspermile), type, costsperhours, costsperdelivery, costspermile)}

                    <path className="incomechart-1" d="M55.19,8.35q.26,100,.5,200" />
                    <line className="incomechart-2" x1="54.43" y1="208.35" x2="202.55" y2="208.35" />

                </g></g></svg>)

    }

    showcosts(equipmentid) {
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const deliveries = appbaseddriver.getdeliveriesbyequipmentid.call(this, equipmentid)
        const hoursworked = +Number(appbaseddriver.gethoursworkedbyequipmentid.call(this, equipmentid))
        const getcosts = appbaseddriver.getcostsbyequipmentid.call(this, equipmentid)
        const dollarsperhours = getcosts > 0 && hoursworked > 0 ? Number(getcosts / hoursworked).toFixed(2) : 0;
        const dollarsperdelivery = getcosts > 0 && deliveries > 0 ? Number(getcosts / deliveries).toFixed(2) : 0
        const miles = appbaseddriver.getmilesbyequipmentid.call(this, equipmentid)
        const dollarspermile = getcosts > 0 && miles > 0 ? Number(getcosts / miles).toFixed(2) : 0;
        const styles = MyStylesheet();
        const driverui = new DriverUI();
        const costs = new Costs();


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
                                    <span style={{ ...regularFont, ...styles.generalFont }}>${Number(getcosts).toFixed(2)}</span>
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>Miles</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{Number(miles)}</span>

                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>  <span style={{ ...regularFont, ...styles.generalFont }}>costs/hr</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperhours).toFixed(2)}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>costs/delivery</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperdelivery).toFixed(2)}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>costs/mile</span> <br />
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
                                    <span style={{ ...regularFont, ...styles.generalFont }}>${Number(getcosts).toFixed(2)}</span>
                                </div>
                            </div>
                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>

                                    <span style={{ ...regularFont, ...styles.generalFont }}>Miles</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{Number(miles)}</span>
                                </div>

                            </div>

                        </div>
                    </div>
                )

            }
        }

        const showcosts = () => {
            if (this.state.width > 1200) {
                return (
                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            {costs.showchart.call(this, 'hourly')}
                        </div>
                        <div style={{ ...styles.flex1 }}>
                            {costs.showchart.call(this, 'delivery')}
                        </div>

                        <div style={{ ...styles.flex1 }}>
                            {costs.showchart.call(this, 'miles')}
                        </div>
                    </div>)

            } else if (this.state.width > 800) {

                return (
                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>
                                    {costs.showchart.call(this, 'hourly')}
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    {costs.showchart.call(this, 'delivery')}
                                </div>
                            </div>

                            <div style={{ ...styles.generalFlex }}>
                                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                                    {costs.showchart.call(this, 'miles')}
                                </div>
                            </div>

                        </div>
                    </div>)
            } else {
                return (<div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1 }}>
                                {costs.showchart.call(this, 'hourly')}
                            </div>
                        </div>

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1 }}>
                                {costs.showchart.call(this, 'delivery')}
                            </div>
                        </div>

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1 }}>
                                {costs.showchart.call(this, 'miles')}
                            </div>
                        </div>

                    </div>
                </div>)
            }

        }

        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            {output()}

                            {showcosts()}

                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Costs;