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

    showchart() {
        const income = new Income();

        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 991.33 236.3">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_2-2" data-name="Layer 2">
                        <path class="income-1" d="M78.61,8.35q.24,100,.5,200" />
                        <path class="income-1" d="M879.38,8.12q.25,100,.5,200" />
                        <line class="income-2" x1="78.92" y1="208.35" x2="879.63" y2="208.35" />







                        {income.showdollarsperhour.call(this)}
                        {income.showpoints.call(this)}

                        <text class="income-6" transform="translate(918.51 96.27)">$/hr</text>










                        <text class="income-3" transform="translate(34.09 13.78)">$200</text>
                        <line class="income-8" x1="75.15" y1="8.65" x2="81.89" y2="8.65" />
                        <text class="income-3" transform="translate(34.09 54.32)">$160</text>
                        <line class="income-8" x1="75.15" y1="48.35" x2="81.89" y2="48.35" />
                        <text class="income-3" transform="translate(34.09 94.85)">$120</text>
                        <line class="income-8" x1="75.15" y1="88.35" x2="81.89" y2="88.35" />
                        <text class="income-3" transform="translate(38.73 133.69)">$80</text>
                        <line class="income-8" x1="75.15" y1="128.35" x2="81.89" y2="128.35" />
                        <text class="income-3" transform="translate(38.73 173.69)">$40</text>
                        <line class="income-8" x1="75.15" y1="168.35" x2="81.89" y2="168.35" />



                        <text class="income-3" transform="translate(886.8 15.52)">50</text>
                        <line class="income-8" x1="876.43" y1="8.58" x2="883.18" y2="8.58" />
                        <text class="income-3" transform="translate(886.8 54.25)">40</text>
                        <line class="income-8" x1="876.43" y1="48.28" x2="883.18" y2="48.28" />
                        <text class="income-3" transform="translate(886.8 94.78)">30</text>
                        <line class="income-8" x1="876.43" y1="88.28" x2="883.18" y2="88.28" />
                        <text class="income-3" transform="translate(886.8 133.61)">20</text>
                        <line class="income-8" x1="876.43" y1="128.28" x2="883.18" y2="128.28" />
                        <text class="income-3" transform="translate(886.8 174.6)">10</text>
                        <line class="income-8" x1="876.43" y1="168.28" x2="883.18" y2="168.28" />





                        <text class="income-3" transform="translate(265.44 228.5)">Mar</text>
                        <line class="income-8" x1="279.63" y1="201.17" x2="279.63" y2="214.92" />
                        <text class="income-3" transform="translate(467.28 228.5)">Jun</text>
                        <line class="income-8" x1="479.63" y1="201.17" x2="479.63" y2="214.92" />
                        <text class="income-3" transform="translate(661.08 228.5)">Sept</text>
                        <line class="income-8" x1="679.63" y1="201.17" x2="679.63" y2="214.92" />
                        <text class="income-3" transform="translate(866.76 228.5)">Dec</text>
                        <line class="income-8" x1="879.63" y1="201.17" x2="879.63" y2="214.92" />

                        <text class="income-9" transform="translate(8 51.14)">Income</text>
                    </g>
                </g>
            </svg>)

    }

    showincome() {
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const deliveries = appbaseddriver.getdeliveries.call(this)
        const hoursworked = +Number(appbaseddriver.gethoursworked.call(this))
        const earnings = appbaseddriver.getearnings.call(this)
        const dollarsperhours = earnings / hoursworked;
        const dollarsperdelivery = earnings / deliveries
        const miles = appbaseddriver.getmiles.call(this)
        const dollarspermile = earnings / miles

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
                                <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperhours).toFixed(2)}</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>$/delivery</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarsperdelivery).toFixed(2)}</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>$/mile</span> <br />
                                <span style={{ ...regularFont, ...styles.generalFont }}>${Number(dollarspermile).toFixed(2)}</span> <br /></span>
                        </div>

                    </div>
                )

            } else {

                return (

                    <div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>

                            <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
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
                            <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
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


        const styles = MyStylesheet();
        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    {output()}

                </div>
            </div>

        )

    }

}
export default Income;