import React from 'react'
import AppBasedDriver from './appbaseddriver'
import { checkactivedate, abbMonth } from './functions'
import { MyStylesheet } from './styles'


class Diagrams {

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
        const diagrams = new Diagrams();

        const showlabels = () => {
            return (
                <g>
                    <text className="largeexpanded-1" transform="translate(122.86 143.86)">Jan</text>
                    <text className="largeexpanded-1" transform="translate(433.02 143.86)"><tspan className="largeexpanded-8">F</tspan><tspan x="12.71" y="0">eb</tspan></text>
                    <text className="largeexpanded-1" transform="translate(737.83 143.86)">Mar</text>
                    <text className="largeexpanded-1" transform="translate(1044.14 143.86)">Apr</text>
                    <text className="largeexpanded-1" transform="translate(117.58 314.63)">M<tspan className="largeexpanded-2" x="22.32" y="0">a</tspan><tspan x="34.45" y="0">y</tspan></text>
                    <text className="largeexpanded-1" transform="translate(427.33 314.63)">June</text>
                    <text className="largeexpanded-1" transform="translate(738.45 314.63)">July</text>
                    <text className="largeexpanded-1" transform="translate(1042.79 314.63)">Aug</text>
                    <text className="largeexpanded-1" transform="translate(116.93 485.4)">Sept</text>
                    <text className="largeexpanded-1" transform="translate(432.67 489)">Oct</text>
                    <text className="largeexpanded-1" transform="translate(738.07 487.2)">N<tspan className="largeexpanded-3" x="18.14" y="0">o</tspan><tspan x="31.39" y="0">v</tspan></text>
                    <text className="largeexpanded-1" transform="translate(1043.24 489)">Dec</text>

                </g>)
        }

        const showtickmarks = () => {

            return (
                <g>

                    <line className="largeexpanded-9" x1="4.9" y1="83.27" x2="4.9" y2="43.27" />
                    <line className="largeexpanded-9" x1="4.9" y1="247.8" x2="4.9" y2="207.8" />
                    <line className="largeexpanded-9" x1="4.9" y1="412.32" x2="4.9" y2="372.32" />

                    <line className="largeexpanded-9" x1="304.94" y1="43.81" x2="304.94" y2="83.42" />
                    <line className="largeexpanded-9" x1="304.94" y1="208.33" x2="304.94" y2="247.94" />
                    <line className="largeexpanded-9" x1="304.94" y1="372.86" x2="304.94" y2="412.47" />

                    <line className="largeexpanded-9" x1="604.94" y1="43.45" x2="604.94" y2="83.45" />
                    <line className="largeexpanded-9" x1="604.94" y1="207.97" x2="604.94" y2="247.97" />
                    <line className="largeexpanded-9" x1="604.94" y1="372.5" x2="604.94" y2="412.5" />

                    <line className="largeexpanded-9" x1="904.94" y1="43.24" x2="904.94" y2="83.24" />
                    <line className="largeexpanded-9" x1="904.94" y1="207.77" x2="904.94" y2="247.77" />
                    <line className="largeexpanded-9" x1="904.94" y1="372.29" x2="904.94" y2="412.29" />

                    <line className="largeexpanded-9" x1="1204.97" y1="43.28" x2="1204.97" y2="83.28" />
                    <line className="largeexpanded-9" x1="1204.97" y1="207.8" x2="1204.97" y2="247.8" />
                    <line className="largeexpanded-9" x1="1204.97" y1="372.33" x2="1204.97" y2="412.33" />

                </g>)

        }

        const showaxis = () => {
            return (
                <g>
                    <line className="largeexpanded-9" x1="4.97" y1="63.27" x2="1204.97" y2="63.27" />
                    <line className="largeexpanded-9" x1="4.97" y1="227.8" x2="1204.97" y2="227.8" />
                    <line className="largeexpanded-9" x1="4.97" y1="392.32" x2="1204.97" y2="392.32" />

                </g>
            )
        }

   

        const januarycosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M91.09,98.83v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V104.27a.86.86,0,0,0,0-.28L6.94,95.11a1.12,1.12,0,0,1,1.43-1.3l17,3.94a1.53,1.53,0,0,0,.3,0H89.92A1.11,1.11,0,0,1,91.09,98.83Z" />
                        <text className="largeexpanded-7" transform="translate(13.18 109.43)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }

            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                <polygon className="largeexpanded-5" points="4.91 98.28 9.4 89.28 0.41 89.28 4.91 98.28" />
                <line className="largeexpanded-4" x1="4.9" y1="89.28" x2="4.9" y2="63.27" />
                {label(showlabel)}

            </g>)
        }

        const februarycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();

            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="largeexpanded-6" d="M390.77,100.73v27.65a1.12,1.12,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V106.17a.87.87,0,0,0-.05-.28L306.62,97a1.11,1.11,0,0,1,1.42-1.3l17,3.94a1.43,1.43,0,0,0,.29,0H389.6A1.12,1.12,0,0,1,390.77,100.73Z" />
                        <text className="largeexpanded-7" transform="translate(312.86 111.33)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }


            return (
                <g transform={`translate(${day * 10.34},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                    <polygon className="largeexpanded-5" points="304.92 98.62 309.42 89.62 300.42 89.62 304.92 98.62" />
                    <line className="largeexpanded-4" x1="304.92" y1="89.62" x2="304.92" y2="63.61" />
                    {label(showlabel)}


                </g>)
        }

      
        const marchcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();

            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M691.46,98.69v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.12,1.12,0,0,1-1.17-1V104.13a.86.86,0,0,0,0-.28L607.32,95a1.11,1.11,0,0,1,1.42-1.29l17,3.94a1.36,1.36,0,0,0,.29,0h64.27A1.11,1.11,0,0,1,691.46,98.69Z" />
                        <text className="largeexpanded-7" transform="translate(613.56 109.29)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                    <polygon className="largeexpanded-5" points="604.97 98.14 609.47 89.14 600.47 89.14 604.97 98.14" />
                    <line className="largeexpanded-4" x1="604.97" y1="89.14" x2="604.97" y2="63.13" />
                    {label(showlabel)}
                </g>)
        }

    
        const aprilcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M990.76,99.57v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V105a1.26,1.26,0,0,0,0-.28l-2.76-8.88A1.11,1.11,0,0,1,908,94.56l17,3.93a1.53,1.53,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,990.76,99.57Z" />
                        <text className="largeexpanded-7" transform="translate(912.85 110.17)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},  </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                <polygon className="largeexpanded-5" points="904.94 98.28 909.44 89.28 900.44 89.28 904.94 98.28" />
                <line className="largeexpanded-4" x1="904.94" y1="89.28" x2="904.94" y2="63.27" />
                {label(showlabel)}
            </g>)
        }


  

        const maycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M91.34,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79A1.11,1.11,0,0,1,10,291V268.79a.92.92,0,0,0-.05-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.29,0H90.17A1.11,1.11,0,0,1,91.34,263.35Z" />
                        <text className="largeexpanded-7" transform="translate(13.43 273.96)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                    <polygon className="largeexpanded-5" points="4.91 262.81 9.4 253.81 0.41 253.81 4.91 262.81" />
                    <line className="largeexpanded-4" x1="4.9" y1="253.81" x2="4.9" y2="227.8" />
                    {label(showlabel)}
                </g>)
        }


        const junecosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                        <path className="largeexpanded-6" d="M393.61,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79a1.12,1.12,0,0,1-1.17-1.05V268.79a.9.9,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,393.61,263.35Z" />
                        f<text className="largeexpanded-7" transform="translate(315.7 273.96)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="304.92 262.81 309.42 253.81 300.42 253.81 304.92 262.81" />
                <line className="largeexpanded-4" x1="304.92" y1="253.81" x2="304.92" y2="227.8" />
                {label(showlabel)}
            </g>)
        }

 

        const julycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M691.59,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V268.79a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,691.59,263.35Z" />
                        <text className="largeexpanded-7" transform="translate(613.68 273.96)"> <tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},</tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                <polygon className="largeexpanded-5" points="604.97 262.66 609.47 253.66 600.47 253.66 604.97 262.66" />
                <line className="largeexpanded-4" x1="604.97" y1="253.66" x2="604.97" y2="227.66" />
                {label(showlabel)}
            </g>)
        }

   

        const augustcosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M991.3,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79A1.11,1.11,0,0,1,910,291V268.79a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,991.3,263.35Z" />
                        <text className="largeexpanded-7" transform="translate(913.39 273.96)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                <polygon className="largeexpanded-5" points="904.94 262.81 909.44 253.81 900.44 253.81 904.94 262.81" />
                <line className="largeexpanded-4" x1="904.94" y1="253.81" x2="904.94" y2="227.8" />
                {label(showlabel)}
            </g>)
        }



        const septembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M90.93,427.88v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V433.32a.87.87,0,0,0-.05-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93.29,0H89.76A1.11,1.11,0,0,1,90.93,427.88Z" />
                        <text className="largeexpanded-7" transform="translate(13.02 437.53)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                <polygon className="largeexpanded-5" points="4.91 427.33 9.4 418.33 0.41 418.33 4.91 427.33" />
                <line className="largeexpanded-4" x1="4.9" y1="418.33" x2="4.9" y2="392.32" />
                {label(showlabel)}
            </g>)
        }


        const octobercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M391.38,427.88v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V433.32a.87.87,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1.43,1.43,0,0,0,.29,0h64.28A1.11,1.11,0,0,1,391.38,427.88Z" />
                        <text className="largeexpanded-7" transform="translate(313.47 437.53)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                    <polygon className="largeexpanded-5" points="304.92 427.33 309.42 418.33 300.42 418.33 304.92 427.33" />
                    <line className="largeexpanded-4" x1="304.92" y1="418.33" x2="304.92" y2="392.32" />
                    {label(showlabel)}
                </g>
            )
        }


        const novembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="largeexpanded-6" d="M691.59,428.33V456a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V433.77a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93.3,0h64.27A1.11,1.11,0,0,1,691.59,428.33Z" />
                        <text className="largeexpanded-7" transform="translate(613.68 437.98)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>
                <polygon className="largeexpanded-5" points="604.97 427.5 609.47 418.5 600.47 418.5 604.97 427.5" />
                <line className="largeexpanded-4" x1="604.97" y1="418.5" x2="604.97" y2="392.5" />
                {label(showlabel)}
            </g>)
        }


        const decembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = diagrams.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g><path className="largeexpanded-6" d="M991.3,428.33V456a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V433.77a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93.3,0h64.27A1.11,1.11,0,0,1,991.3,428.33Z" />
                        <text className="largeexpanded-7" transform="translate(913.39 437.98)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`} onClick={() => { diagrams.handlecostid.call(this, cost) }}>

                <polygon className="largeexpanded-5" points="904.97 427.5 909.47 418.5 900.47 418.5 904.97 427.5" />
                <line className="largeexpanded-4" x1="904.97" y1="418.5" x2="904.97" y2="392.5" />
                {label(showlabel)}
            </g>)
        }

     
        let costsArrows = [];
      

        const costs = appbaseddriver.gettransformedcostsbyequimentid.call(this, this.props.match.params.equipmentid)


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

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205.97 496.63">
                    <defs><style></style></defs>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_2-2" data-name="Layer 2">
                            {showaxis()}
                            {showtickmarks()}
                            {showlabels()}

                            {costsArrows}
                        </g></g></svg>
            </div>)



    }

}

export default Diagrams