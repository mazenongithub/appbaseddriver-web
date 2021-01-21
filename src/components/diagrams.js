import React from 'react'
import AppBasedDriver from './appbaseddriver'
import { checkactivedate, abbMonth } from './functions'
import {MyStylesheet} from './styles'


class LargeDiagram {




    showdiagrams() {

        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();

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

        const januaryearnings = (shift) => {

            const day = new Date(shift.timein).getDate()

            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                    <polygon className="largeexpanded-4" points="4.96 29.13 0.46 38.13 9.46 38.13 4.96 29.13" />
                    <line className="largeexpanded-4" x1="4.96" y1="38.13" x2="4.96" y2="64.14" />
                    <path className="largeexpanded-6" d="M91.34,3.43V29.36a1.91,1.91,0,0,1-1.91,1.91H22a2.16,2.16,0,0,0-.51.07L9.08,34.81a1.91,1.91,0,0,1-2.35-2.35l3-10.72a1.86,1.86,0,0,0,.07-.52V3.43a1.91,1.91,0,0,1,1.91-1.91H89.43A1.92,1.92,0,0,1,91.34,3.43Z" />
                    <text className="largeexpanded-7" transform="translate(13.02 13.43)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
                </g>)
        }

        const januarycosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="4.91 98.28 9.4 89.28 0.41 89.28 4.91 98.28" />
                <line className="largeexpanded-4" x1="4.9" y1="89.28" x2="4.9" y2="63.27" />
                <path className="largeexpanded-6" d="M91.09,98.83v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V104.27a.86.86,0,0,0,0-.28L6.94,95.11a1.12,1.12,0,0,1,1.43-1.3l17,3.94a1.53,1.53,0,0,0,.3,0H89.92A1.11,1.11,0,0,1,91.09,98.83Z" />
                <text className="largeexpanded-7" transform="translate(13.18 109.43)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>


            </g>)
        }

        const februaryearnings = (shift) => {
            const day = new Date(shift.timein).getDate()

            return (
                <g transform={`translate(${day * 10.34},0)`} key={`svg${shift.shiftid}`}>
                    <polygon className="largeexpanded-4" points="304.94 28.27 300.44 37.27 309.44 37.27 304.94 28.27" />
                    <line className="largeexpanded-4" x1="304.94" y1="37.27" x2="304.94" y2="63.27" />
                    <path className="largeexpanded-6" d="M392.37,2.16V28.09A1.92,1.92,0,0,1,390.46,30H323a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.35l3-10.73a1.75,1.75,0,0,0,.08-.51V2.16A1.91,1.91,0,0,1,312.75.25h77.71A1.92,1.92,0,0,1,392.37,2.16Z" />
                    <text className="largeexpanded-7" transform="translate(314.05 12.16)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>

                </g>)
        }

        const februarycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (
                <g transform={`translate(${day * 10.34},0)`} key={`svg${cost.costid}`}>
                    <polygon className="largeexpanded-5" points="304.92 98.62 309.42 89.62 300.42 89.62 304.92 98.62" />
                    <line className="largeexpanded-4" x1="304.92" y1="89.62" x2="304.92" y2="63.61" />
                    <path className="largeexpanded-6" d="M390.77,100.73v27.65a1.12,1.12,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V106.17a.87.87,0,0,0-.05-.28L306.62,97a1.11,1.11,0,0,1,1.42-1.3l17,3.94a1.43,1.43,0,0,0,.29,0H389.6A1.12,1.12,0,0,1,390.77,100.73Z" />
                    <text className="largeexpanded-7" transform="translate(312.86 111.33)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>


                </g>)
        }

        const marchearnings = (shift) => {

            const day = new Date(shift.timein).getDate()

            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                <polygon className="largeexpanded-4" points="604.97 28.62 600.47 37.62 609.47 37.62 604.97 28.62" />
                <line className="largeexpanded-4" x1="604.97" y1="37.62" x2="604.97" y2="63.63" />
                <path className="largeexpanded-6" d="M692.47,4V29.88a1.9,1.9,0,0,1-1.9,1.91H623.1a2.25,2.25,0,0,0-.52.07l-12.36,3.47A1.91,1.91,0,0,1,607.86,33l3-10.72a1.86,1.86,0,0,0,.07-.52V4A1.92,1.92,0,0,1,612.85,2h77.72A1.91,1.91,0,0,1,692.47,4Z" />
                <text className="largeexpanded-7" transform="translate(614.16 13.95)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)},</tspan><tspan x="0" y="12">earnings</tspan></text>


            </g>)
        }

        const marchcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>
                    <polygon className="largeexpanded-5" points="604.97 98.14 609.47 89.14 600.47 89.14 604.97 98.14" />
                    <line className="largeexpanded-4" x1="604.97" y1="89.14" x2="604.97" y2="63.13" />
                    <path className="largeexpanded-6" d="M691.46,98.69v27.65a1.11,1.11,0,0,1-1.17,1h-79a1.12,1.12,0,0,1-1.17-1V104.13a.86.86,0,0,0,0-.28L607.32,95a1.11,1.11,0,0,1,1.42-1.29l17,3.94a1.36,1.36,0,0,0,.29,0h64.27A1.11,1.11,0,0,1,691.46,98.69Z" />
                    <text className="largeexpanded-7" transform="translate(613.56 109.29)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                </g>)
        }

        const aprilearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (<g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`}>
                <polygon className="largeexpanded-4" points="904.97 28.13 900.47 37.13 909.47 37.13 904.97 28.13" />
                <line className="largeexpanded-4" x1="904.97" y1="37.13" x2="904.97" y2="63.13" />
                <path className="largeexpanded-6" d="M992.41,2.16V28.09A1.92,1.92,0,0,1,990.5,30H923a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.35l3-10.73a1.75,1.75,0,0,0,.08-.51V2.16A1.91,1.91,0,0,1,912.79.25H990.5A1.92,1.92,0,0,1,992.41,2.16Z" />
                <text className="largeexpanded-7" transform="translate(914.09 12.16)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
            </g>)
        }

        const aprilcosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="904.94 98.28 909.44 89.28 900.44 89.28 904.94 98.28" />
                <line className="largeexpanded-4" x1="904.94" y1="89.28" x2="904.94" y2="63.27" />
                <path className="largeexpanded-6" d="M990.76,99.57v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V105a1.26,1.26,0,0,0,0-.28l-2.76-8.88A1.11,1.11,0,0,1,908,94.56l17,3.93a1.53,1.53,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,990.76,99.57Z" />
                <text className="largeexpanded-7" transform="translate(912.85 110.17)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
            </g>)
        }


        const mayearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                    <polygon className="largeexpanded-5" points="4.91 262.81 9.4 253.81 0.41 253.81 4.91 262.81" />
                    <line className="largeexpanded-4" x1="4.9" y1="253.81" x2="4.9" y2="227.8" />
                    <path className="largeexpanded-6" d="M91.59,166.7v25.93a1.91,1.91,0,0,1-1.91,1.91H22.21a1.82,1.82,0,0,0-.52.08L9.33,198.09A1.91,1.91,0,0,1,7,195.73L10,185a1.82,1.82,0,0,0,.08-.52V166.7A1.91,1.91,0,0,1,12,164.79H89.68A1.92,1.92,0,0,1,91.59,166.7Z" />
                    <text className="largeexpanded-7" transform="translate(13.27 176.71)"> <tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
                </g>)
        }

        const maycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>
                    <polygon className="largeexpanded-4" points="4.96 193.66 0.46 202.66 9.46 202.66 4.96 193.66" />
                    <line className="largeexpanded-4" x1="4.96" y1="202.66" x2="4.96" y2="228.66" />
                    <path className="largeexpanded-6" d="M91.34,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79A1.11,1.11,0,0,1,10,291V268.79a.92.92,0,0,0-.05-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.29,0H90.17A1.11,1.11,0,0,1,91.34,263.35Z" />
                    <text className="largeexpanded-7" transform="translate(13.43 273.96)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                </g>)
        }

        const juneearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (<g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`}>
                <polygon className="largeexpanded-4" points="304.94 192.79 300.44 201.79 309.44 201.79 304.94 192.79" />
                <line className="largeexpanded-4" x1="304.94" y1="201.79" x2="304.94" y2="227.8" />
                <path className="largeexpanded-6" d="M393.86,166.7v25.93a1.91,1.91,0,0,1-1.91,1.91H324.48a1.75,1.75,0,0,0-.51.08l-12.37,3.47a1.91,1.91,0,0,1-2.35-2.36l3-10.72a1.81,1.81,0,0,0,.07-.52V166.7a1.91,1.91,0,0,1,1.91-1.91H392A1.92,1.92,0,0,1,393.86,166.7Z" />
                <text className="largeexpanded-7" transform="translate(315.54 176.71)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>

            </g>)
        }

        const junecosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="304.92 262.81 309.42 253.81 300.42 253.81 304.92 262.81" />
                <line className="largeexpanded-4" x1="304.92" y1="253.81" x2="304.92" y2="227.8" />
                <path className="largeexpanded-6" d="M393.61,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79a1.12,1.12,0,0,1-1.17-1.05V268.79a.9.9,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,393.61,263.35Z" />
                <text className="largeexpanded-7" transform="translate(315.7 273.96)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
            </g>)
        }

        const julyearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                <polygon className="largeexpanded-4" points="604.97 192.65 600.47 201.65 609.47 201.65 604.97 192.65" />
                <line className="largeexpanded-4" x1="604.97" y1="201.65" x2="604.97" y2="227.66" />
                <path className="largeexpanded-6" d="M691.84,166.7v25.93a1.91,1.91,0,0,1-1.91,1.91H622.46a1.88,1.88,0,0,0-.52.08l-12.36,3.47a1.91,1.91,0,0,1-2.35-2.36l3-10.72a2.25,2.25,0,0,0,.07-.52V166.7a1.91,1.91,0,0,1,1.91-1.91h77.71A1.92,1.92,0,0,1,691.84,166.7Z" />
                <text className="largeexpanded-7" transform="translate(613.52 176.71)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>

            </g>)
        }

        const julycosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="604.97 262.66 609.47 253.66 600.47 253.66 604.97 262.66" />
                <line className="largeexpanded-4" x1="604.97" y1="253.66" x2="604.97" y2="227.66" />
                <path className="largeexpanded-6" d="M691.59,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V268.79a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,691.59,263.35Z" />
                <text className="largeexpanded-7" transform="translate(613.68 273.96)"> <tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)},</tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
            </g>)
        }

        const augustearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                    <polygon className="largeexpanded-4" points="904.97 192.65 900.47 201.65 909.47 201.65 904.97 192.65" />
                    <line className="largeexpanded-4" x1="904.97" y1="201.65" x2="904.97" y2="227.66" />
                    <path className="largeexpanded-6" d="M992.49,166.7v25.93a1.9,1.9,0,0,1-1.91,1.91H923.11a1.81,1.81,0,0,0-.51.08l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.36l3-10.72a1.81,1.81,0,0,0,.07-.52V166.7a1.92,1.92,0,0,1,1.91-1.91h77.71A1.91,1.91,0,0,1,992.49,166.7Z" />
                    <text className="largeexpanded-7" transform="translate(914.17 176.71)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
                </g>)
        }

        const augustcosts = (cost) => {

            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="904.94 262.81 909.44 253.81 900.44 253.81 904.94 262.81" />
                <line className="largeexpanded-4" x1="904.94" y1="253.81" x2="904.94" y2="227.8" />
                <path className="largeexpanded-6" d="M991.3,263.35V291a1.11,1.11,0,0,1-1.17,1.05h-79A1.11,1.11,0,0,1,910,291V268.79a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1,1,0,0,0,.3,0h64.27A1.11,1.11,0,0,1,991.3,263.35Z" />
                <text className="largeexpanded-7" transform="translate(913.39 273.96)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
            </g>)
        }


        const septemberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (
                <g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`}>
                    <polygon className="largeexpanded-4" points="4.96 358.18 0.46 367.18 9.46 367.18 4.96 358.18" />
                    <line className="largeexpanded-4" x1="4.96" y1="367.18" x2="4.96" y2="393.19" />
                    <path className="largeexpanded-6" d="M91.83,332.48v25.93a1.9,1.9,0,0,1-1.91,1.91H22.45a2.24,2.24,0,0,0-.51.07L9.57,363.86a1.91,1.91,0,0,1-2.35-2.35l3-10.72a1.81,1.81,0,0,0,.07-.52V332.48a1.92,1.92,0,0,1,1.91-1.91H89.92A1.91,1.91,0,0,1,91.83,332.48Z" />
                    <text className="largeexpanded-7" transform="translate(13.02 343.76)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
                </g>
            )
        }

        const septembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="4.91 427.33 9.4 418.33 0.41 418.33 4.91 427.33" />
                <line className="largeexpanded-4" x1="4.9" y1="418.33" x2="4.9" y2="392.32" />
                <path className="largeexpanded-6" d="M90.93,427.88v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V433.32a.87.87,0,0,0-.05-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93.29,0H89.76A1.11,1.11,0,0,1,90.93,427.88Z" />
                <text className="largeexpanded-7" transform="translate(13.02 437.53)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
            </g>)
        }


        const octoberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                    <polygon className="largeexpanded-4" points="304.94 357.32 300.44 366.32 309.44 366.32 304.94 357.32" />
                    <line className="largeexpanded-4" x1="304.94" y1="366.32" x2="304.94" y2="392.32" />
                    <path className="largeexpanded-6" d="M392,331.33v25.93a1.91,1.91,0,0,1-1.91,1.91H322.67a1.81,1.81,0,0,0-.52.07l-12.36,3.47a1.91,1.91,0,0,1-2.36-2.36l3-10.72a1.79,1.79,0,0,0,.07-.51V331.33a1.91,1.91,0,0,1,1.91-1.91h77.71A1.9,1.9,0,0,1,392,331.33Z" />
                    <text className="largeexpanded-7" transform="translate(313.72 341.33)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
                </g>)
        }

        const octobercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (
                <g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>
                    <polygon className="largeexpanded-5" points="304.92 427.33 309.42 418.33 300.42 418.33 304.92 427.33" />
                    <line className="largeexpanded-4" x1="304.92" y1="418.33" x2="304.92" y2="392.32" />
                    <path className="largeexpanded-6" d="M391.38,427.88v27.65a1.11,1.11,0,0,1-1.17,1.05h-79a1.11,1.11,0,0,1-1.17-1.05V433.32a.87.87,0,0,0,0-.28l-2.75-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93a1.43,1.43,0,0,0,.29,0h64.28A1.11,1.11,0,0,1,391.38,427.88Z" />
                    <text className="largeexpanded-7" transform="translate(313.47 437.53)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
                </g>
            )
        }


        const novemberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (<g transform={`translate(${day * 10},0)`} key={`svg${shift.shiftid}`}>
                <polygon className="largeexpanded-4" points="604.97 357.18 600.47 366.18 609.47 366.18 604.97 357.18" />
                <line className="largeexpanded-4" x1="604.97" y1="366.18" x2="604.97" y2="392.18" />
                <path className="largeexpanded-6" d="M691.84,330.05V356a1.91,1.91,0,0,1-1.91,1.91H622.46a1.88,1.88,0,0,0-.52.08l-12.36,3.47a1.91,1.91,0,0,1-2.35-2.36l3-10.72a2.25,2.25,0,0,0,.07-.52V330.05a1.91,1.91,0,0,1,1.91-1.91h77.71A1.92,1.92,0,0,1,691.84,330.05Z" />
                <text className="largeexpanded-7" transform="translate(613.52 340.06)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
            </g>)
        }

        const novembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 10},0)`} key={`svg${cost.costid}`}>
                <polygon className="largeexpanded-5" points="604.97 427.5 609.47 418.5 600.47 418.5 604.97 427.5" />
                <line className="largeexpanded-4" x1="604.97" y1="418.5" x2="604.97" y2="392.5" />
                <path className="largeexpanded-6" d="M691.59,428.33V456a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V433.77a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93.3,0h64.27A1.11,1.11,0,0,1,691.59,428.33Z" />
                <text className="largeexpanded-7" transform="translate(613.68 437.98)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
            </g>)
        }



        const decemberearnings = (shift) => {
            const day = new Date(shift.timein).getDate()
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${shift.shiftid}`}>
                <polygon className="largeexpanded-4" points="904.97 357.18 900.47 366.18 909.47 366.18 904.97 357.18" />
                <line className="largeexpanded-4" x1="904.97" y1="366.18" x2="904.97" y2="392.18" />
                <path className="largeexpanded-6" d="M991.55,330.05V356a1.91,1.91,0,0,1-1.91,1.91H922.17a1.88,1.88,0,0,0-.52.08l-12.36,3.47a1.91,1.91,0,0,1-2.35-2.36l3-10.72a2.25,2.25,0,0,0,.07-.52V330.05a1.91,1.91,0,0,1,1.91-1.91h77.71A1.92,1.92,0,0,1,991.55,330.05Z" />
                <text className="largeexpanded-7" transform="translate(913.23 340.06)"><tspan>{abbMonth(shift.timein)}, ${Number(shift.earnings).toFixed(2)}, </tspan><tspan x="0" y="12">earnings</tspan></text>
            </g>)
        }

        const decembercosts = (cost) => {
            const day = new Date(cost.purchasedate).getDate();
            return (<g transform={`translate(${day * 9.67},0)`} key={`svg${cost.costid}`}>

                <polygon className="largeexpanded-5" points="904.97 427.5 909.47 418.5 900.47 418.5 904.97 427.5" />
                <line className="largeexpanded-4" x1="904.97" y1="418.5" x2="904.97" y2="392.5" />
                <path className="largeexpanded-6" d="M991.3,428.33V456a1.11,1.11,0,0,1-1.17,1h-79a1.11,1.11,0,0,1-1.17-1V433.77a1.35,1.35,0,0,0,0-.28l-2.76-8.88a1.11,1.11,0,0,1,1.42-1.29l17,3.93.3,0h64.27A1.11,1.11,0,0,1,991.3,428.33Z" />
                <text className="largeexpanded-7" transform="translate(913.39 437.98)"><tspan>{abbMonth(cost.purchasedate)}, ${Number(cost.amount).toFixed(2)}, </tspan><tspan x="0" y="12">{cost.detail}</tspan></text>
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

                <div style={{...styles.generalContainer, ...styles.topMargin30}}>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205.97 496.63">
                <defs><style></style></defs>
                <g id="Layer_2" data-name="Layer 2">
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

export default LargeDiagram