import React from 'react'
import AppBasedDriver from './appbaseddriver'
import { checkactivedate, abbMonth } from './functions'
import { MyStylesheet } from './styles'


class SmallDiagram {

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
        const smalldiagram = new SmallDiagram();


        const showlabels = () => {
            return (
                <g>
                    <text className="smalldiagram-6" transform="translate(189.55 146.65)">Jan</text>
                    <text className="smalldiagram-6" transform="translate(188.29 313.59)"><tspan className="smalldiagram-7">F</tspan><tspan x="12.71" y="0">eb</tspan></text>
                    <text className="smalldiagram-6" transform="translate(185.55 480.53)">Mar</text>
                    <text className="smalldiagram-6" transform="translate(187.69 647.47)">Apr</text>
                    <text className="smalldiagram-6" transform="translate(184.27 814.41)">M<tspan className="smalldiagram-8" x="22.32" y="0">a</tspan><tspan x="34.45" y="0">y</tspan></text>
                    <text className="smalldiagram-6" transform="translate(192.58 1152.73)">Jul</text>
                    <text className="smalldiagram-6" transform="translate(188.26 1485.42)">Sep</text>
                    <text className="smalldiagram-6" transform="translate(185.8 1819.3)">N<tspan className="smalldiagram-9" x="18.14" y="0">o</tspan><tspan x="31.39" y="0">v</tspan></text>
                    <text className="smalldiagram-6" transform="translate(189.01 987.16)">Jun</text>
                    <text className="smalldiagram-6" transform="translate(186.35 13112.9)">Aug</text>
                    <text className="smalldiagram-6" transform="translate(187.94 1652.37)">Oct</text>
                    <text className="smalldiagram-6" transform="translate(186.79 1992.06)">Dec</text>

                </g>)
        }

        const showtickmarks = () => {

            return (
                <g>

                    <line className="smalldiagram-5" x1="4.9" y1="84.34" x2="4.9" y2="44.34" />
                    <line className="smalldiagram-5" x1="404.46" y1="84.34" x2="404.46" y2="44.34" />
                    <line className="smalldiagram-5" x1="4.9" y1="251.66" x2="4.9" y2="211.66" />
                    <line className="smalldiagram-5" x1="404.46" y1="251.66" x2="404.46" y2="211.66" />
                    <line className="smalldiagram-5" x1="4.9" y1="418.99" x2="4.9" y2="378.99" />
                    <line className="smalldiagram-5" x1="404.46" y1="418.99" x2="404.46" y2="378.99" />
                    <line className="smalldiagram-5" x1="4.9" y1="586.31" x2="4.9" y2="546.31" />
                    <line className="smalldiagram-5" x1="404.46" y1="586.31" x2="404.46" y2="546.31" />
                    <line className="smalldiagram-5" x1="4.9" y1="753.63" x2="4.9" y2="713.63" />
                    <line className="smalldiagram-5" x1="404.46" y1="753.63" x2="404.46" y2="713.63" />
                    <line className="smalldiagram-5" x1="4.9" y1="920.96" x2="4.9" y2="880.96" />
                    <line className="smalldiagram-5" x1="404.46" y1="920.96" x2="404.46" y2="880.96" />

                    <line className="smalldiagram-5" x1="4.9" y1="1088.28" x2="4.9" y2="1048.28" />
                    <line className="smalldiagram-5" x1="404.46" y1="1088.28" x2="404.46" y2="1048.28" />

                    <line className="smalldiagram-5" x1="4.9" y1="1255.61" x2="4.9" y2="1215.61" />
                    <line className="smalldiagram-5" x1="404.46" y1="1255.61" x2="404.46" y2="1215.61" />
                    <line className="smalldiagram-5" x1="4.9" y1="1422.93" x2="4.9" y2="1382.93" />
                    <line className="smalldiagram-5" x1="404.46" y1="1422.93" x2="404.46" y2="1382.93" />
                    <line className="smalldiagram-5" x1="4.9" y1="1590.25" x2="4.9" y2="1550.25" />
                    <line className="smalldiagram-5" x1="404.46" y1="1590.25" x2="404.46" y2="1550.25" />
                    <line className="smalldiagram-5" x1="4.9" y1="1757.58" x2="4.9" y2="1717.58" />
                    <line className="smalldiagram-5" x1="404.46" y1="1757.58" x2="404.46" y2="1717.58" />
                    <line className="smalldiagram-5" x1="4.9" y1="1924.9" x2="4.9" y2="1884.9" />
                    <line className="smalldiagram-5" x1="404.46" y1="1924.9" x2="404.46" y2="1884.9" />

                </g>)

        }

        const showaxis = () => {
            return (
                <g>
                    <line className="smalldiagram-5" x1="4.46" y1="64.34" x2="404.46" y2="64.34" />
                    <line className="smalldiagram-5" x1="4.46" y1="231.66" x2="404.46" y2="231.66" />
                    <line className="smalldiagram-5" x1="4.46" y1="398.99" x2="404.46" y2="398.99" />
                    <line className="smalldiagram-5" x1="4.46" y1="566.31" x2="404.46" y2="566.31" />
                    <line className="smalldiagram-5" x1="4.46" y1="733.63" x2="404.46" y2="733.63" />
                    <line className="smalldiagram-5" x1="4.46" y1="900.96" x2="404.46" y2="900.96" />
                    <line className="smalldiagram-5" x1="4.46" y1="1068.28" x2="404.46" y2="1068.28" />
                    <line className="smalldiagram-5" x1="4.46" y1="1235.61" x2="404.46" y2="1235.61" />
                    <line className="smalldiagram-5" x1="4.46" y1="1402.93" x2="404.46" y2="1402.93" />
                    <line className="smalldiagram-5" x1="4.46" y1="1570.25" x2="404.46" y2="1570.25" />
                    <line className="smalldiagram-5" x1="4.46" y1="1737.58" x2="404.46" y2="1737.58" />
                    <line className="smalldiagram-5" x1="4.46" y1="1904.9" x2="404.46" y2="1904.9" />
                </g>
            )
        }


        const januarycosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)



            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,100.11v27.66a1.1,1.1,0,0,1-1.17,1h-79a1.1,1.1,0,0,1-1.17-1V105.55a.9.9,0,0,0,0-.28L9.69,96.39a1.11,1.11,0,0,1,1.43-1.29L28.1,99a1.54,1.54,0,0,0,.3,0H92.67A1.1,1.1,0,0,1,93.84,100.11Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 109.76)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }

            return (<g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 99.13 9.4 90.13 0.41 90.13 4.91 99.13" />
                <line className="smalldiagram-1" x1="4.9" y1="90.13" x2="4.9" y2="64.12" />

                {label(showlabel)}

            </g>)
        }

     

        const februarycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();

            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="smalldiagram-2" d="M93.84,267.44v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V272.88a.86.86,0,0,0,0-.28l-2.76-8.89a1.11,1.11,0,0,1,1.43-1.29l17,3.94.3,0H92.67A1.11,1.11,0,0,1,93.84,267.44Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 277.08)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }


            return (
                <g transform={`translate(${day * 13.79},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                    <polygon className="smalldiagram-4" points="4.91 266.45 9.4 257.45 0.41 257.45 4.91 266.45" />
                    <line className="smalldiagram-1" x1="4.9" y1="257.45" x2="4.9" y2="231.44" />
                    {label(showlabel)}


                </g>)
        }


        const marchcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();

            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,434.76v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V440.2a.9.9,0,0,0,0-.28L9.69,431a1.11,1.11,0,0,1,1.43-1.29l17,3.93.3,0H92.67A1.11,1.11,0,0,1,93.84,434.76Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 444.41)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                    <polygon className="smalldiagram-4" points="4.91 433.77 9.4 424.77 0.41 424.77 4.91 433.77" />
                    <line className="smalldiagram-1" x1="4.9" y1="424.77" x2="4.9" y2="398.77" />
                    {label(showlabel)}
                </g>)
        }

        const aprilcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,602.08v27.66a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V607.52a.9.9,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.43-1.29l17,3.93a1,1,0,0,0,.3,0H92.67A1.11,1.11,0,0,1,93.84,602.08Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 611.73)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},  </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 13.3},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 601.1 9.4 592.1 0.41 592.1 4.91 601.1" />
                <line className="smalldiagram-1" x1="4.9" y1="592.1" x2="4.9" y2="566.09" />

                {label(showlabel)}
            </g>)
        }



        const maycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,769.41v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V774.85a.86.86,0,0,0,0-.28l-2.76-8.88a1.12,1.12,0,0,1,1.43-1.3l17,3.94.3,0H92.67A1.11,1.11,0,0,1,93.84,769.41Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 779.05)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                    <polygon className="smalldiagram-4" points="4.91 768.42 9.4 759.42 0.41 759.42 4.91 768.42" />
                    <line className="smalldiagram-1" x1="4.9" y1="759.42" x2="4.9" y2="733.42" />
                    {label(showlabel)}
                </g>)
        }



        const junecosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                        <path className="smalldiagram-2" d="M93.84,936.73v27.66a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V942.17a.9.9,0,0,0,0-.28L9.69,933a1.11,1.11,0,0,1,1.43-1.29l17,3.93.3,0H92.67A1.11,1.11,0,0,1,93.84,936.73Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 946.38)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 13.3},0)`} key={`svg${cost.costid}`}>
                <polygon className="smalldiagram-4" points="4.91 935.75 9.4 926.75 0.41 926.75 4.91 935.75" />
                <line className="smalldiagram-1" x1="4.9" y1="926.74" x2="4.9" y2="900.74" />

                {label(showlabel)}
            </g>)
        }

        const julycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,1104.05v27.66a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1v-22.22a.84.84,0,0,0,0-.27l-2.76-8.89a1.11,1.11,0,0,1,1.43-1.29l17,3.94.3,0H92.67A1.11,1.11,0,0,1,93.84,1104.05Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 1113.7)"> <tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},</tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 1103.07 9.4 1094.07 0.41 1094.07 4.91 1103.07" />
                <line className="smalldiagram-1" x1="4.9" y1="1094.07" x2="4.9" y2="1068.06" />

                {label(showlabel)}
            </g>)
        }


        const augustcosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,1271.38V1299a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1v-22.21a.86.86,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.43-1.29l17,3.93.3,0H92.67A1.11,1.11,0,0,1,93.84,1271.38Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 1281.03)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 1270.39 9.4 1261.39 0.41 1261.39 4.91 1270.39" />
                <line className="smalldiagram-1" x1="4.9" y1="1261.39" x2="4.9" y2="1235.39" />

                {label(showlabel)}
            </g>)
        }


 

        const septembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,1438.7v27.66a1.1,1.1,0,0,1-1.17,1h-79a1.1,1.1,0,0,1-1.17-1v-22.22a.9.9,0,0,0,0-.28L9.69,1435a1.11,1.11,0,0,1,1.43-1.29l17,3.93a1.54,1.54,0,0,0,.3,0H92.67A1.1,1.1,0,0,1,93.84,1438.7Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 1448.35)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 13.3},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 1437.72 9.4 1428.72 0.41 1428.72 4.91 1437.72" />
                <line className="smalldiagram-1" x1="4.9" y1="1428.72" x2="4.9" y2="1402.71" />

                {label(showlabel)}
            </g>)
        }



        const octobercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,1606v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1v-22.21a.86.86,0,0,0,0-.28l-2.76-8.88a1.12,1.12,0,0,1,1.43-1.3l17,3.94.3,0H92.67A1.11,1.11,0,0,1,93.84,1606Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 1615.67)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (
                <g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                    <polygon className="smalldiagram-4" points="4.91 1605.04 9.4 1596.04 0.41 1596.04 4.91 1605.04" />
                    <line className="smalldiagram-1" x1="4.9" y1="1596.04" x2="4.9" y2="1570.03" />

                    {label(showlabel)}
                </g>
            )
        }



        const novembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g>
                        <path className="smalldiagram-2" d="M93.84,1773.35V1801a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1v-22.22a.9.9,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.43-1.29l17,3.93.3,0H92.67A1.11,1.11,0,0,1,93.84,1773.35Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 1783)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 13.3},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 1772.36 9.4 1763.36 0.41 1763.36 4.91 1772.36" />
                <line className="smalldiagram-1" x1="4.9" y1="1763.36" x2="4.9" y2="1737.36" />

                {label(showlabel)}
            </g>)
        }



        const decembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            const showlabel = smalldiagram.showcostlabel.call(this, cost)
            const label = (showlabel) => {
                if (showlabel) {
                    return (<g> <path className="smalldiagram-2" d="M93.84,1940.67v27.66a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05v-22.22a1,1,0,0,0,0-.28L9.69,1937a1.11,1.11,0,0,1,1.43-1.29l17,3.93a1,1,0,0,0,.3,0H92.67A1.11,1.11,0,0,1,93.84,1940.67Z" />
                        <text className="smalldiagram-3" transform="translate(15.93 1950.32)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                    </g>)

                }
            }
            return (<g transform={`translate(${day * 12.9},0)`} key={`svg${cost.costid}`} onClick={() => { smalldiagram.handlecostid.call(this, cost) }}>
                <polygon className="smalldiagram-4" points="4.91 1939.69 9.4 1930.69 0.41 1930.69 4.91 1939.69" />
                <line className="smalldiagram-1" x1="4.9" y1="1930.69" x2="4.9" y2="1904.68" />

                {label(showlabel)}
            </g>)
        }


        let costsArrows = [];
     

        const costs = appbaseddriver.gettransformedcostsbyequimentid.call(this,this.props.match.params.equipmentid)


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

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 405.46 1996.39">
                    <defs><style></style></defs><g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_2-2" data-name="Layer 2">

                            {showaxis()}
                            {showtickmarks()}
                            {showlabels()}
                            {costsArrows}
                        </g></g></svg>
            </div>)



    }

}

export default SmallDiagram