import React from 'react'
import AppBasedDriver from './appbaseddriver';
import { MyStylesheet } from './styles'
import { getXcoord, abbDateStr } from './functions'
class Income {

    handleshowincome(shiftid) {
        if (this.state.showincome === shiftid) {
            this.setState({ showincome: false })
        } else {
            this.setState({ showincome: shiftid })
        }

    }

    showpoint(shift) {
        const income = new Income();

        const xcoord = (shift) => {
            return (getXcoord(shift.timein))
        }
        const getDisplay = (shift) => {
            if (this.state.showincome !== shift.shiftid) {
                return ({ display: 'none' })
            }
        }

        return (<g transform="translate(75,205) scale(1,-1)" onClick={() => { income.handleshowincome.call(this, shift.shiftid) }}>
            <text class="income-4" x={xcoord(shift)} y={shift.earnings}>x</text>
            <text style={{ ...getDisplay(shift) }} class="income-5" transform="scale(1,-1)" x={xcoord(shift) - 16} y={-shift.earnings - 2}>${Number(shift.earnings).toFixed(2)}</text>
            <text style={{ ...getDisplay(shift) }} class="income-5" transform="scale(1,-1)" x={xcoord(shift) - 11} y={-(shift.earnings - 20)}>{abbDateStr(shift.timein)}</text>
        </g>)

    }

    showpoints() {

        const appbaseddriver = new AppBasedDriver();
        const income = new Income();
        const shifts = appbaseddriver.getshifts.call(this)

        let points = [];
        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                points.push(income.showpoint.call(this, shift))



            })



        }
        return points;

    }

    showdollarsperhour() {
        return (
            <g transform="translate(105.95 141.77)">
                <text class="income-4" >$15.24/hr</text>
                <line class="income-7" x1="879.63" y1="149.58" x2="79.11" y2="149.58" />
            </g>)
    }

    showchart(type) {
        const appbaseddriver = new AppBasedDriver();

        const deliveries = appbaseddriver.getdeliveries.call(this)
        const hoursworked = appbaseddriver.gethoursworked.call(this)
        const earnings = appbaseddriver.getearnings.call(this)
        console.log(type)
        const dollarsperhours = earnings > 0 && hoursworked > 0 ? Number(earnings / hoursworked).toFixed(2) : 0;
        const dollarsperdelivery = earnings > 0 && deliveries > 0 ? Number(earnings / deliveries).toFixed(2) : 0;
        const miles = appbaseddriver.getmiles.call(this)
        const dollarspermile = miles > 0 && earnings > 0 ? Number(earnings / miles).toFixed(2) : 0;

        const getheight = (type) => {
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

        const getbarchart = (height, type) => {

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



                        <rect className="incomechart-6" x="40" y="0" width="61.48" height={getheight(type)} />

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

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.26 210.85" width='204px' height="210px">
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2">
                    <path className="incomechart-1" d="M55.19,8.35q.26,100,.5,200" />


                    <line className="incomechart-2" x1="54.43" y1="208.35" x2="203.26" y2="208.35" />

                    {labels(type)}




                    <line className="incomechart-4" x1="58.47" y1="8.35" x2="51.73" y2="8.35" />
                    <line className="incomechart-4" x1="58.47" y1="48.35" x2="51.73" y2="48.35" />
                    <line className="incomechart-4" x1="58.47" y1="88.35" x2="51.73" y2="88.35" />
                    <line className="incomechart-4" x1="58.47" y1="128.35" x2="51.73" y2="128.35" />
                    <line className="incomechart-4" x1="58.47" y1="168.35" x2="51.73" y2="168.35" />
                    


                    <text className="incomechart-5" transform="translate(8 51.14)">Income</text>
                    {getbarchart(getheight(type), type)}
                </g></g></svg>)

    }

    showincome() {
        const appbaseddriver = new AppBasedDriver();
        const income = new Income();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const deliveries = appbaseddriver.getdeliveries.call(this)
        const hoursworked = appbaseddriver.gethoursworked.call(this)

        const earnings = appbaseddriver.getearnings.call(this)
        console.log(hoursworked, earnings)
        const dollarsperhours = earnings > 0 && hoursworked > 0 ? Number(earnings / hoursworked).toFixed(2) : 0;

        const dollarsperdelivery = earnings > 0 && deliveries > 0 ? Number(earnings / deliveries).toFixed(2) : 0;
        const miles = appbaseddriver.getmiles.call(this)
        const dollarspermile = miles > 0 && earnings > 0 ? Number(earnings / miles).toFixed(2) : 0;

        const output = () => {
            if (this.state.width > 600) {
                return (
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
                            <span style={{ ...regularFont, ...styles.generalFont }}>Earnings</span><br />
                            <span style={{ ...regularFont, ...styles.generalFont }}>${Number(earnings).toFixed(2)}</span>
                        </div>
                        <div style={{ ...styles.flex1 }}>

                            <span style={{ ...regularFont, ...styles.generalFont }}>Miles</span><br />
                            <span style={{ ...regularFont, ...styles.generalFont }}>{Number(miles)}</span>

                        </div>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...regularFont, ...styles.generalFont }}>  <span style={{ ...regularFont, ...styles.generalFont }}>$/hr</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>${dollarsperhours}</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>$/delivery</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>${dollarsperdelivery}</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>$/mile</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>${dollarspermile}</span> <br /></span>
                        </div>

                    </div>
                )

            } else {

                return (

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

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
                                    <span style={{ ...regularFont, ...styles.generalFont }}>Earnings</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>${Number(earnings).toFixed(2)}</span>
                                </div>
                            </div>
                            <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                                <div style={{ ...styles.flex1 }}>

                                    <span style={{ ...regularFont, ...styles.generalFont }}>Miles</span><br />
                                    <span style={{ ...regularFont, ...styles.generalFont }}>{Number(miles)}</span>
                                </div>
                                <div style={{ ...styles.flex1 }}>
                                    <span style={{ ...regularFont, ...styles.generalFont }}>  <span style={{ ...regularFont, ...styles.generalFont }}>$/hr</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${dollarsperhours}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>$/delivery</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${dollarsperdelivery}</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>$/mile</span> <br />
                                        <span style={{ ...regularFont, ...styles.generalFont }}>${dollarspermile}</span> <br /></span>
                                </div>
                            </div>

                        </div>
                    </div>
                )

            }
        }


        const styles = MyStylesheet();
        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    {output()}

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            {income.showchart.call(this, 'hourly')}
                        </div>
                        <div style={{ ...styles.flex1 }}>
                            {income.showchart.call(this, 'delivery')}
                        </div>

                        <div style={{ ...styles.flex1 }}>
                            {income.showchart.call(this, 'miles')}
                        </div>
                    </div>

                </div>
            </div>

        )

    }

}
export default Income;