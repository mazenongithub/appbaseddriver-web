import React from 'react'
import AppBasedDriver from './appbaseddriver'
import { checkactivedate, abbMonth } from './functions'
import { MyStylesheet } from './styles'


class MediumDiagram {

    showcostlabel(cost) {

        const hidecosts = this.state.hidecosts;

        let hide = true
        // eslint-disable-next-line
        hidecosts.map(hidecost => {

            if (hidecost.detail === cost.detail && hidecost.amount === cost.amount && hidecost.purchasedate === cost.purchasedate) {
                hide = false;
            }
        })

        return hide;

    }



    showshiftlabel(shift) {

        const hideshifts = this.state.hideshifts;
        let hideshift = true
        // eslint-disable-next-line
        hideshifts.map(shiftstate => {

            if (shift.shiftid === shiftstate) {
                hideshift = false;
            }
        })
        return hideshift;

    }

    handleshiftid(shift) {
        const hideshifts = this.state.hideshifts;
        const i = hideshifts.indexOf(shift.shiftid)
        if (i > -1) {

            hideshifts.splice(i, 1)


        } else {
            hideshifts.push(shift.shiftid)

        }
        this.setState({ hideshifts })
    }

    handlecostid(cost) {

        const hidecosts = this.state.hidecosts;
        let remove = false;
        // eslint-disable-next-line
        hidecosts.map((hidecost, i) => {
            if (hidecost.detail === cost.detail && hidecost.amount === cost.amount && hidecost.purchasedate === cost.purchasedate) {
                hidecosts.splice(i, 1)
                remove = true;
            }
        })

        if (!remove) {
            hidecosts.push(cost)
        }
        this.setState({ hidecosts })
    }

    showdiagrams() {

        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();
        const mediumdiagram = new MediumDiagram();

        const showlabels = () => {
            return (
                <g>
                    <text className="mediumdiagram-1" transform="translate(125.49 156.94)">Jan</text>
                    <text className="mediumdiagram-1" transform="translate(437.39 156.94)"><tspan className="mediumdiagram-2">F</tspan><tspan x="12.71" y="0">eb</tspan></text>
                    <text className="mediumdiagram-1" transform="translate(121.5 329.43)">Mar</text>
                    <text className="mediumdiagram-1" transform="translate(436.79 329.43)">Apr</text>
                    <text className="mediumdiagram-1" transform="translate(120.21 527.71)">M<tspan className="mediumdiagram-3" x="22.32" y="0">a</tspan><tspan x="34.45" y="0">y</tspan></text>
                    <text className="mediumdiagram-1" transform="translate(438.11 531.31)">Jun</text>
                    <text className="mediumdiagram-1" transform="translate(128.52 710.52)">Jul</text>
                    <text className="mediumdiagram-1" transform="translate(435.45 711.11)">Aug</text>
                    <text className="mediumdiagram-1" transform="translate(124.21 886.28)">Sep</text>
                    <text className="mediumdiagram-1" transform="translate(437.04 886.28)">Oct</text>
                    <text className="mediumdiagram-1" transform="translate(121.74 1052.48)">N<tspan className="mediumdiagram-9" x="18.14" y="0">o</tspan><tspan x="31.39" y="0">v</tspan></text>
                    <text className="mediumdiagram-1" transform="translate(435.89 1056.07)">Dec</text>

                </g>)
        }

        const showtickmarks = () => {

            return (
                <g>
                    <line className="mediumdiagram-8" x1="4.96" y1="84.12" x2="4.96" y2="44.12" />
                    <line className="mediumdiagram-8" x1="4.96" y1="265.66" x2="4.96" y2="225.66" />
                    <line className="mediumdiagram-8" x1="4.96" y1="447.21" x2="4.96" y2="407.21" />
                    <line className="mediumdiagram-8" x1="4.96" y1="628.75" x2="4.96" y2="588.75" />
                    <line className="mediumdiagram-8" x1="4.96" y1="810.29" x2="4.96" y2="770.29" />
                    <line className="mediumdiagram-8" x1="4.96" y1="991.84" x2="4.96" y2="951.84" />
                    <line className="mediumdiagram-8" x1="304.94" y1="43.67" x2="304.94" y2="83.67" />
                    <line className="mediumdiagram-8" x1="304.94" y1="225.21" x2="304.94" y2="265.21" />
                    <line className="mediumdiagram-8" x1="304.94" y1="406.76" x2="304.94" y2="446.76" />
                    <line className="mediumdiagram-8" x1="304.94" y1="588.3" x2="304.94" y2="628.3" />
                    <line className="mediumdiagram-8" x1="304.94" y1="769.85" x2="304.94" y2="809.85" />
                    <line className="mediumdiagram-8" x1="304.94" y1="951.39" x2="304.94" y2="991.39" />
                    <line className="mediumdiagram-8" x1="604.94" y1="43.22" x2="604.94" y2="83.22" />
                    <line className="mediumdiagram-8" x1="604.94" y1="224.77" x2="604.94" y2="264.77" />
                    <line className="mediumdiagram-8" x1="604.94" y1="406.31" x2="604.94" y2="446.31" />
                    <line className="mediumdiagram-8" x1="604.94" y1="587.85" x2="604.94" y2="627.85" />
                    <line className="mediumdiagram-8" x1="604.94" y1="769.4" x2="604.94" y2="809.4" />
                    <line className="mediumdiagram-8" x1="604.94" y1="950.94" x2="604.94" y2="990.94" />


                </g>)

        }

        const showaxis = () => {
            return (
                <g>
                    <line className="mediumdiagram-8" x1="604.94" y1="64.12" x2="4.94" y2="64.12" />
                    <line className="mediumdiagram-8" x1="604.94" y1="245.66" x2="4.94" y2="245.66" />
                    <line className="mediumdiagram-8" x1="604.94" y1="427.21" x2="4.94" y2="427.21" />
                    <line className="mediumdiagram-8" x1="604.94" y1="608.75" x2="4.94" y2="608.75" />
                    <line className="mediumdiagram-8" x1="604.94" y1="790.29" x2="4.94" y2="790.29" />
                    <line className="mediumdiagram-8" x1="604.94" y1="971.84" x2="4.94" y2="971.84" />

                </g>
            )
        }

        const januaryearnings = (shift) => {

            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M92.15,2.16V28.09A1.92,1.92,0,0,1,90.24,30H22.77a1.86,1.86,0,0,0-.52.07L9.89,33.54a1.91,1.91,0,0,1-2.35-2.35l3-10.73a2.16,2.16,0,0,0,.07-.51V2.16A1.91,1.91,0,0,1,12.53.25H90.24A1.92,1.92,0,0,1,92.15,2.16Z" />
                        <text className="mediumdiagram-5" transform="translate(13.34 13.43)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }



            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                    <polygon className="mediumdiagram-7" points="4.91 29.11 0.41 38.11 9.4 38.11 4.91 29.11" />
                    <line className="mediumdiagram-7" x1="4.9" y1="38.11" x2="4.9" y2="64.12" />
                    {label(showlabel)}

                </g>)
        }

        const januarycosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)



            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M94.07,100v27.66a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V105.45a1.35,1.35,0,0,0,0-.28L9.92,96.29A1.11,1.11,0,0,1,11.34,95l17,3.93a1.53,1.53,0,0,0,.3,0H92.9A1.11,1.11,0,0,1,94.07,100Z" />
                        <text className="mediumdiagram-5" transform="translate(16.16 109.66)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>

                    </g>)

                }
            }

            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                <polygon className="mediumdiagram-6" points="4.91 99.13 9.4 90.13 0.41 90.13 4.91 99.13" />
                <line className="mediumdiagram-7" x1="4.9" y1="90.13" x2="4.9" y2="64.12" />
                {label(showlabel)}

            </g>)
        }

        const februaryearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M394.12,2.16V28.09A1.91,1.91,0,0,1,392.21,30H324.75a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.35l3-10.73a1.75,1.75,0,0,0,.07-.51V2.16A1.92,1.92,0,0,1,314.5.25h77.71A1.91,1.91,0,0,1,394.12,2.16Z" />
                        <text className="mediumdiagram-5" transform="translate(315.31 13.43)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
                    </g>)

                }
            }

            return (
                <g transform={`translate(${day * 10.34},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                    <polygon className="mediumdiagram-7" points="304.94 28.25 300.44 37.25 309.44 37.25 304.94 28.25" />
                    <line className="mediumdiagram-7" x1="304.94" y1="37.25" x2="304.94" y2="63.25" />
                    {label(showlabel)}

                </g>)
        }

        const februarycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();

            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="mediumdiagram-4" d="M393.88,100v27.66a1.12,1.12,0,0,1-1.17,1h-79a1.12,1.12,0,0,1-1.17-1V105.45a.9.9,0,0,0,0-.28l-2.75-8.88A1.11,1.11,0,0,1,311.15,95l17,3.93a1.36,1.36,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,100Z" />
                        <text className="mediumdiagram-5" transform="translate(315.97 109.66)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }


            return (
                <g transform={`translate(${day * 10.34},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                    <polygon className="mediumdiagram-6" points="304.88 99.13 309.38 90.13 300.38 90.13 304.88 99.13" />
                    <line className="mediumdiagram-7" x1="304.92" y1="90.13" x2="304.92" y2="64.12" />
                    {label(showlabel)}


                </g>)
        }

        const marchearnings = (shift) => {

            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M92.15,183.7v25.93a1.91,1.91,0,0,1-1.91,1.91H22.77a2.32,2.32,0,0,0-.52.07L9.89,215.08a1.9,1.9,0,0,1-2.35-2.35l3-10.72a2.25,2.25,0,0,0,.07-.52V183.7a1.91,1.91,0,0,1,1.91-1.91H90.24A1.92,1.92,0,0,1,92.15,183.7Z" />
                        <text className="mediumdiagram-5" transform="translate(13.34 194.98)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)},</tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }

            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                <polygon className="mediumdiagram-7" points="4.91 210.66 0.41 219.66 9.4 219.66 4.91 210.66" />
                <line className="mediumdiagram-7" x1="4.9" y1="219.66" x2="4.9" y2="245.66" />
                {label(showlabel)}

            </g>)
        }

        const marchcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();

            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M393.88,281.55v27.66a1.12,1.12,0,0,1-1.17,1.05h-79a1.12,1.12,0,0,1-1.17-1.05V287a1,1,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a.92.92,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,281.55Z" />
                        <text className="mediumdiagram-5" transform="translate(315.97 291.2)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                    <polygon className="mediumdiagram-6" points="4.91 280.67 9.4 271.67 0.41 271.67 4.91 280.67" />
                    <line className="mediumdiagram-7" x1="4.9" y1="271.67" x2="4.9" y2="245.66" />
                    {label(showlabel)}
                </g>)
        }

        const aprilearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>   <path className="mediumdiagram-4" d="M394.12,183.7v25.93a1.9,1.9,0,0,1-1.91,1.91H324.75a2.25,2.25,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.35l3-10.72a1.81,1.81,0,0,0,.07-.52V183.7a1.92,1.92,0,0,1,1.91-1.91h77.71A1.91,1.91,0,0,1,394.12,183.7Z" />
                        <text className="mediumdiagram-5" transform="translate(315.31 194.98)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>

                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                <polygon className="mediumdiagram-7" points="304.94 209.79 300.44 218.79 309.44 218.79 304.94 209.79" />
                <line className="mediumdiagram-7" x1="304.94" y1="218.7" x2="304.94" y2="244.8" />
                {label(showlabel)}
            </g>)
        }

        const aprilcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M393.88,281.55v27.66a1.12,1.12,0,0,1-1.17,1.05h-79a1.12,1.12,0,0,1-1.17-1.05V287a1,1,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a.92.92,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,281.55Z" />
                        <text className="mediumdiagram-5" transform="translate(315.97 291.2)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},  </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                <polygon className="mediumdiagram-6" points="304.88 280.67 309.38 271.67 300.38 271.67 304.88 280.67" />
                <line className="mediumdiagram-7" x1="304.92" y1="271.67" x2="304.92" y2="245.66" />
                {label(showlabel)}
            </g>)
        }


        const mayearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>   <path className="mediumdiagram-4" d="M92.15,365.25v25.93a1.92,1.92,0,0,1-1.91,1.91H22.77a1.86,1.86,0,0,0-.52.07L9.89,396.63a1.91,1.91,0,0,1-2.35-2.36l3-10.72a2.25,2.25,0,0,0,.07-.52V365.25a1.9,1.9,0,0,1,1.91-1.91H90.24A1.91,1.91,0,0,1,92.15,365.25Z" />
                        <text className="mediumdiagram-5" transform="translate(13.34 376.52)"> <tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                    <polygon className="mediumdiagram-7" points="4.91 392.2 0.41 401.2 9.4 401.2 4.91 392.2" />
                    <line className="mediumdiagram-7" x1="4.9" y1="401.2" x2="4.9" y2="427.21" />

                    {label(showlabel)}
                </g>)
        }

        const maycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M94.07,463.1v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V468.54a1.26,1.26,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.3l17,3.94a1.53,1.53,0,0,0,.3,0H92.9A1.11,1.11,0,0,1,94.07,463.1Z" />
                        <text className="mediumdiagram-5" transform="translate(16.16 472.75)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                    <polygon className="mediumdiagram-6" points="4.91 462.21 9.4 453.21 0.41 453.21 4.91 462.21" />
                    <line className="mediumdiagram-7" x1="4.9" y1="453.21" x2="4.9" y2="427.21" />
                    {label(showlabel)}
                </g>)
        }

        const juneearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>  <path className="mediumdiagram-4" d="M394.12,365.25v25.93a1.91,1.91,0,0,1-1.91,1.91H324.75a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.36l3-10.72a1.81,1.81,0,0,0,.07-.52V365.25a1.91,1.91,0,0,1,1.91-1.91h77.71A1.9,1.9,0,0,1,394.12,365.25Z" />
                        <text className="mediumdiagram-5" transform="translate(315.31 376.52)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                <polygon className="mediumdiagram-7" points="304.94 391.34 300.44 400.34 309.44 400.34 304.94 391.34" />
                <line className="mediumdiagram-7" x1="304.94" y1="400.34" x2="304.94" y2="426.34" />
                {label(showlabel)}

            </g>)
        }

        const junecosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                        <path className="mediumdiagram-4" d="M393.88,463.1v27.65a1.12,1.12,0,0,1-1.17,1.05h-79a1.12,1.12,0,0,1-1.17-1.05V468.54a.86.86,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.3l17,3.94a1.36,1.36,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,463.1Z" />
                        <text className="mediumdiagram-5" transform="translate(315.97 472.75)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`}>
                <polygon className="mediumdiagram-6" points="304.88 462.21 309.38 453.21 300.38 453.21 304.88 462.21" />
                <line className="mediumdiagram-7" x1="304.92" y1="453.21" x2="304.92" y2="427.21" />
                {label(showlabel)}
            </g>)
        }

        const julyearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="mediumdiagram-4" d="M92.15,546.79v25.93a1.91,1.91,0,0,1-1.91,1.91H22.77a1.86,1.86,0,0,0-.52.07L9.89,578.17a1.91,1.91,0,0,1-2.35-2.35l3-10.73a2.16,2.16,0,0,0,.07-.51V546.79a1.91,1.91,0,0,1,1.91-1.91H90.24A1.92,1.92,0,0,1,92.15,546.79Z" />
                        <text className="mediumdiagram-5" transform="translate(13.34 558.06)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                <polygon className="mediumdiagram-7" points="4.91 573.75 0.41 582.75 9.4 582.75 4.91 573.75" />
                <line className="mediumdiagram-7" x1="4.9" y1="582.74" x2="4.9" y2="608.75" />
                {label(showlabel)}

            </g>)
        }

        const julycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M94.07,644.64V672.3a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V650.08a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1.53,1.53,0,0,0,.3,0H92.9A1.11,1.11,0,0,1,94.07,644.64Z" />
                        <text className="mediumdiagram-5" transform="translate(16.16 654.29)"> <tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},</tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                <polygon className="mediumdiagram-6" points="4.91 643.76 9.4 634.76 0.41 634.76 4.91 643.76" />
                <line className="mediumdiagram-7" x1="4.9" y1="634.76" x2="4.9" y2="608.75" />
                {label(showlabel)}
            </g>)
        }

        const augustearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="mediumdiagram-4" d="M394.12,546.79v25.93a1.9,1.9,0,0,1-1.91,1.91H324.75a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.35l3-10.73a1.75,1.75,0,0,0,.07-.51V546.79a1.92,1.92,0,0,1,1.91-1.91h77.71A1.91,1.91,0,0,1,394.12,546.79Z" />
                        <text className="mediumdiagram-5" transform="translate(315.31 558.06)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                    <polygon className="mediumdiagram-7" points="304.94 572.88 300.44 581.88 309.44 581.88 304.94 572.88" />
                    <line className="mediumdiagram-7" x1="304.94" y1="581.88" x2="304.94" y2="607.88" />
                    {label(showlabel)}
                </g>)
        }

        const augustcosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M393.88,644.64V672.3a1.12,1.12,0,0,1-1.17,1h-79a1.12,1.12,0,0,1-1.17-1V650.08a.9.9,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1.36,1.36,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,644.64Z" />
                        <text className="mediumdiagram-5" transform="translate(315.97 654.29)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                <polygon className="mediumdiagram-6" points="304.88 643.76 309.38 634.76 300.38 634.76 304.88 643.76" />
                <line className="mediumdiagram-7" x1="304.92" y1="634.76" x2="304.92" y2="608.75" />
                {label(showlabel)}
            </g>)
        }


        const septemberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="mediumdiagram-4" d="M92.15,728.33v25.93a1.91,1.91,0,0,1-1.91,1.91H22.77a2.32,2.32,0,0,0-.52.07L9.89,759.71a1.9,1.9,0,0,1-2.35-2.35l3-10.72a2.25,2.25,0,0,0,.07-.52V728.33a1.91,1.91,0,0,1,1.91-1.91H90.24A1.92,1.92,0,0,1,92.15,728.33Z" />
                        <text className="mediumdiagram-5" transform="translate(13.34 739.61)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (
                <g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>

                    <polygon className="mediumdiagram-7" points="4.91 755.29 0.41 764.29 9.4 764.29 4.91 755.29" />
                    <line className="mediumdiagram-7" x1="4.9" y1="764.29" x2="4.9" y2="790.29" />
                    {label(showlabel)}
                </g>
            )
        }

        const septembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M94.07,826.18v27.66a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V831.62a1.26,1.26,0,0,0,0-.27l-2.76-8.89a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0H92.9A1.11,1.11,0,0,1,94.07,826.18Z" />
                        <text className="mediumdiagram-5" transform="translate(16.16 835.83)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                <polygon className="mediumdiagram-6" points="4.91 825.3 9.4 816.3 0.41 816.3 4.91 825.3" />
                <line className="mediumdiagram-7" x1="4.9" y1="816.3" x2="4.9" y2="790.29" />
                {label(showlabel)}
            </g>)
        }


        const octoberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g><path className="mediumdiagram-4" d="M394.12,728.33v25.93a1.9,1.9,0,0,1-1.91,1.91H324.75a2.25,2.25,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.35l3-10.72a1.81,1.81,0,0,0,.07-.52V728.33a1.92,1.92,0,0,1,1.91-1.91h77.71A1.91,1.91,0,0,1,394.12,728.33Z"/>
                    <text className="mediumdiagram-5" transform="translate(315.31 739.61)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                   <polygon className="mediumdiagram-7" points="304.94 754.42 300.44 763.42 309.44 763.42 304.94 754.42"/>
            <line className="mediumdiagram-7" x1="304.94" y1="763.42" x2="304.94" y2="789.43"/>
                    {label(showlabel)}
                </g>)
        }

        const octobercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M393.88,826.18v27.66a1.12,1.12,0,0,1-1.17,1h-79a1.12,1.12,0,0,1-1.17-1V831.62a.84.84,0,0,0,0-.27l-2.75-8.89a1.11,1.11,0,0,1,1.42-1.29l17,3.93a.92.92,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,826.18Z"/>
            <text className="mediumdiagram-5" transform="translate(315.97 835.83)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                    <polygon className="mediumdiagram-6" points="304.88 825.3 309.38 816.3 300.38 816.3 304.88 825.3"/>
            <line className="mediumdiagram-7" x1="304.92" y1="816.3" x2="304.92" y2="790.29"/>
                    {label(showlabel)}
                </g>
            )
        }


        const novemberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g><path className="mediumdiagram-4" d="M92.15,909.88v25.93a1.92,1.92,0,0,1-1.91,1.91H22.77a1.86,1.86,0,0,0-.52.07L9.89,941.26a1.91,1.91,0,0,1-2.35-2.36l3-10.72a2.25,2.25,0,0,0,.07-.52V909.88A1.9,1.9,0,0,1,12.53,908H90.24A1.91,1.91,0,0,1,92.15,909.88Z"/>
                    <text className="mediumdiagram-5" transform="translate(13.34 921.15)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
                <polygon className="mediumdiagram-7" points="4.91 936.83 0.41 945.83 9.4 945.83 4.91 936.83"/>
            <line className="mediumdiagram-7" x1="4.9" y1="945.83" x2="4.9" y2="971.84"/>
                {label(showlabel)}
            </g>)
        }

        const novembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="mediumdiagram-4" d="M94.07,1007.73v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1v-22.21a1.26,1.26,0,0,0,0-.28L9.92,1004a1.11,1.11,0,0,1,1.42-1.3l17,3.94.3,0H92.9A1.11,1.11,0,0,1,94.07,1007.73Z"/>
            <text className="mediumdiagram-5" transform="translate(16.16 1017.38)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>
                <polygon className="mediumdiagram-6" points="4.91 1006.84 9.4 997.84 0.41 997.84 4.91 1006.84"/>
            <line className="mediumdiagram-7" x1="4.9" y1="997.84" x2="4.9" y2="971.84"/>
                {label(showlabel)}
            </g>)
        }



        const decemberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            const showlabel = mediumdiagram.showshiftlabel.call(this, shift)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="mediumdiagram-4" d="M394.12,909.88v25.93a1.91,1.91,0,0,1-1.91,1.91H324.75a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.36l3-10.72a1.81,1.81,0,0,0,.07-.52V909.88A1.91,1.91,0,0,1,314.5,908h77.71A1.9,1.9,0,0,1,394.12,909.88Z"/>
                    <text className="mediumdiagram-5" transform="translate(315.31 921.15)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text></g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`} onClick={() => { mediumdiagram.handleshiftid.call(this, shift) }}>
               <polygon className="mediumdiagram-7" points="304.94 935.97 300.44 944.97 309.44 944.97 304.94 935.97"/>
            <line className="mediumdiagram-7" x1="304.94" y1="944.97" x2="304.94" y2="970.97"/>
                {label(showlabel)}
            </g>)
        }

        const decembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = mediumdiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="mediumdiagram-4" d="M393.88,1007.73v27.65a1.12,1.12,0,0,1-1.17,1h-79a1.12,1.12,0,0,1-1.17-1v-22.21a.86.86,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.3l17,3.94a1.36,1.36,0,0,0,.29,0h64.28A1.12,1.12,0,0,1,393.88,1007.73Z"/>
                    <text className="mediumdiagram-5" transform="translate(315.97 1017.38)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { mediumdiagram.handlecostid.call(this, cost) }}>

<polygon className="mediumdiagram-6" points="304.88 1006.84 309.38 997.84 300.38 997.84 304.88 1006.84"/>
            <line className="mediumdiagram-7" x1="304.92" y1="997.84" x2="304.92" y2="971.84"/>
                {label(showlabel)}
            </g>)
        }

        let earningsArrows = [];
        let costsArrows = [];
        const shifts = appbaseddriver.getactiveshifts.call(this)

        if (shifts) {
            // eslint-disable-next-line
            shifts.map(shift => {
                const shiftdate = new Date(shift.timein)

                switch (shiftdate.getMonth() + 1) {
                    case 1:
                        earningsArrows.push(januaryearnings(shift))
                        break;
                    case 2:
                        earningsArrows.push(februaryearnings(shift))
                        break;
                    case 3:
                        earningsArrows.push(marchearnings(shift))
                        break;
                    case 4:
                        earningsArrows.push(aprilearnings(shift))
                        break;
                    case 5:
                        earningsArrows.push(mayearnings(shift))
                        break;
                    case 6:
                        earningsArrows.push(juneearnings(shift))
                        break;
                    case 7:
                        earningsArrows.push(julyearnings(shift))
                        break;
                    case 8:
                        earningsArrows.push(augustearnings(shift))
                        break;
                    case 9:
                        earningsArrows.push(septemberearnings(shift))
                        break;
                    case 10:
                        earningsArrows.push(octoberearnings(shift))
                        break;
                    case 11:
                        earningsArrows.push(novemberearnings(shift))
                        break;
                    case 12:
                        earningsArrows.push(decemberearnings(shift))
                        break;
                    default:
                        break;

                }

            })
        }

        const costs = appbaseddriver.gettransformeddrivercosts.call(this)


        if (costs.length > 0) {
            // eslint-disable-next-line
            costs.map(cost => {

                if (checkactivedate(cost.purchasedate, this.state.activemonth, this.state.activeyear)) {

                    const costdate = new Date(cost.purchasedate)


                    switch (costdate.getMonth() + 1) {
                        case 1:
                            costsArrows.push(januarycosts(cost))
                            break;
                        case 2:
                            costsArrows.push(februarycosts(cost))
                            break;
                        case 3:
                            costsArrows.push(marchcosts(cost))
                            break;
                        case 4:
                            costsArrows.push(aprilcosts(cost))
                            break;
                        case 5:
                            costsArrows.push(maycosts(cost))
                            break;
                        case 6:
                            costsArrows.push(junecosts(cost))
                            break;
                        case 7:
                            costsArrows.push(julycosts(cost))
                            break;
                        case 8:
                            costsArrows.push(augustcosts(cost))
                            break;
                        case 9:
                            costsArrows.push(septembercosts(cost))
                            break;
                        case 10:
                            costsArrows.push(octobercosts(cost))
                            break;
                        case 11:
                            costsArrows.push(novembercosts(cost))
                            break;
                        case 12:
                            costsArrows.push(decembercosts(cost))
                            break;
                        default:
                            break;

                    }

                }

            })
        }



        return (

            <div style={{ ...styles.generalContainer, ...styles.topMargin30 }}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 605.94 1063.7">
                    <defs><style></style></defs><g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_2-2" data-name="Layer 2">

                            {showaxis()}
                            {showtickmarks()}
                            {showlabels()}

                            {earningsArrows}
                            {costsArrows}
                        </g></g></svg>
            </div>)



    }

}

export default MediumDiagram