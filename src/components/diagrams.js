import React from 'react'
import AppBasedDriver from './appbaseddriver'
import {checkactivedate} from './functions'
import {MyStylesheet} from './styles'
class CostDiagrams {

    smallDiagram() {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404.99 1213.93"><defs><style>

        </style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><text class="costdiagram-1" transform="translate(180.51 78.4)">Jan</text><text class="costdiagram-1" transform="translate(179.26 180.42)"><tspan class="costdiagram-2">F</tspan><tspan x="12.71" y="0">eb</tspan></text><text class="costdiagram-1" transform="translate(176.52 282.43)">Mar</text><text class="costdiagram-1" transform="translate(178.66 384.44)">Apr</text><text class="costdiagram-1" transform="translate(175.24 486.45)">M<tspan class="costdiagram-3" x="22.32" y="0">a</tspan><tspan x="34.45" y="0">y</tspan></text><text class="costdiagram-1" transform="translate(183.54 694.91)">Jul</text><text class="costdiagram-1" transform="translate(179.23 897.75)">Sep</text><text class="costdiagram-1" transform="translate(176.76 1101.78)">N<tspan class="costdiagram-4" x="18.14" y="0">o</tspan><tspan x="31.39" y="0">v</tspan></text><text class="costdiagram-1" transform="translate(179.98 594.28)">Jun</text><line class="costdiagram-5" x1="403.99" y1="506.89" x2="403.99" y2="526.89" /><line class="costdiagram-5" x1="403.94" y1="546.5" x2="403.94" y2="526.5" /><line class="costdiagram-5" x1="403.99" y1="511.71" x2="403.99" y2="531.71" /><line class="costdiagram-5" x1="403.99" y1="531.71" x2="403.99" y2="551.71" /><line class="costdiagram-5" x1="4.46" y1="531.71" x2="404.46" y2="531.71" /><line class="costdiagram-5" x1="4.9" y1="531.71" x2="4.9" y2="511.71" /><line class="costdiagram-5" x1="4.9" y1="551.43" x2="4.9" y2="531.43" /><polygon class="costdiagram-6" points="4.91 496.71 0.41 505.71 9.4 505.71 4.91 496.71" /><line class="costdiagram-6" x1="4.9" y1="505.71" x2="4.9" y2="531.71" /><polygon class="costdiagram-7" points="4.91 566.72 9.4 557.72 0.41 557.72 4.91 566.72" /><line class="costdiagram-6" x1="4.9" y1="557.72" x2="4.9" y2="531.71" /><line class="costdiagram-5" x1="403.94" y1="625.81" x2="403.94" y2="645.81" /><line class="costdiagram-5" x1="403.99" y1="613.94" x2="403.99" y2="633.94" /><line class="costdiagram-5" x1="403.99" y1="633.94" x2="403.99" y2="653.94" /><line class="costdiagram-5" x1="4.46" y1="633.94" x2="404.46" y2="633.94" /><line class="costdiagram-5" x1="4.9" y1="633.94" x2="4.9" y2="613.94" /><line class="costdiagram-5" x1="4.9" y1="653.66" x2="4.9" y2="633.66" /><polygon class="costdiagram-6" points="4.91 598.94 0.41 607.94 9.4 607.94 4.91 598.94" /><line class="costdiagram-6" x1="4.9" y1="607.94" x2="4.9" y2="633.94" /><polygon class="costdiagram-7" points="4.91 668.95 9.4 659.95 0.41 659.95 4.91 668.95" /><line class="costdiagram-6" x1="4.9" y1="659.95" x2="4.9" y2="633.94" /><line class="costdiagram-5" x1="403.99" y1="409.48" x2="403.99" y2="429.48" /><line class="costdiagram-5" x1="403.99" y1="429.48" x2="403.99" y2="449.48" /><line class="costdiagram-5" x1="4.46" y1="429.48" x2="404.46" y2="429.48" /><line class="costdiagram-5" x1="4.9" y1="429.48" x2="4.9" y2="409.48" /><line class="costdiagram-5" x1="4.9" y1="449.2" x2="4.9" y2="429.2" /><polygon class="costdiagram-6" points="4.91 394.48 0.41 403.48 9.4 403.48 4.91 394.48" /><line class="costdiagram-6" x1="4.9" y1="403.48" x2="4.9" y2="429.48" /><polygon class="costdiagram-7" points="4.91 464.49 9.4 455.49 0.41 455.49 4.91 464.49" /><line class="costdiagram-6" x1="4.9" y1="455.49" x2="4.9" y2="429.48" /><line class="costdiagram-5" x1="403.99" y1="307.25" x2="403.99" y2="327.25" /><line class="costdiagram-5" x1="403.99" y1="327.25" x2="403.99" y2="347.25" /><line class="costdiagram-5" x1="4.46" y1="327.25" x2="404.46" y2="327.25" /><line class="costdiagram-5" x1="4.9" y1="327.25" x2="4.9" y2="307.25" /><line class="costdiagram-5" x1="4.9" y1="346.97" x2="4.9" y2="326.97" /><polygon class="costdiagram-6" points="4.91 292.25 0.41 301.25 9.4 301.25 4.91 292.25" /><line class="costdiagram-6" x1="4.9" y1="301.24" x2="4.9" y2="327.25" /><polygon class="costdiagram-7" points="4.91 362.26 9.4 353.26 0.41 353.26 4.91 362.26" /><line class="costdiagram-6" x1="4.9" y1="353.26" x2="4.9" y2="327.25" /><line class="costdiagram-5" x1="403.99" y1="229.44" x2="403.99" y2="249.44" /><line class="costdiagram-5" x1="403.99" y1="205.02" x2="403.99" y2="225.02" /><line class="costdiagram-5" x1="403.99" y1="225.02" x2="403.99" y2="245.02" /><line class="costdiagram-5" x1="4.46" y1="225.02" x2="404.46" y2="225.02" /><line class="costdiagram-5" x1="4.9" y1="225.02" x2="4.9" y2="205.02" /><line class="costdiagram-5" x1="4.9" y1="244.74" x2="4.9" y2="224.74" /><polygon class="costdiagram-6" points="4.91 190.01 0.41 199.01 9.4 199.01 4.91 190.01" /><line class="costdiagram-6" x1="4.9" y1="199.01" x2="4.9" y2="225.02" /><polygon class="costdiagram-7" points="4.91 260.03 9.4 251.03 0.41 251.03 4.91 260.03" /><line class="costdiagram-6" x1="4.9" y1="251.03" x2="4.9" y2="225.02" /><line class="costdiagram-5" x1="403.99" y1="102.79" x2="403.99" y2="122.79" /><line class="costdiagram-5" x1="403.99" y1="122.79" x2="403.99" y2="142.79" /><line class="costdiagram-5" x1="4.46" y1="122.79" x2="404.46" y2="122.79" /><line class="costdiagram-5" x1="4.9" y1="122.79" x2="4.9" y2="102.79" /><line class="costdiagram-5" x1="4.9" y1="142.51" x2="4.9" y2="122.51" /><polygon class="costdiagram-6" points="4.91 87.78 0.41 96.78 9.4 96.78 4.91 87.78" /><line class="costdiagram-6" x1="4.9" y1="96.78" x2="4.9" y2="122.79" /><polygon class="costdiagram-7" points="4.91 157.79 9.4 148.79 0.41 148.79 4.91 157.79" /><line class="costdiagram-6" x1="4.9" y1="148.8" x2="4.9" y2="122.79" /><polygon class="costdiagram-7" points="4.91 70.57 9.4 61.57 0.41 61.57 4.91 70.57" /><line class="costdiagram-6" x1="4.9" y1="61.57" x2="4.9" y2="35.56" /><line class="costdiagram-5" x1="403.99" y1="15.56" x2="403.99" y2="35.56" /><line class="costdiagram-5" x1="403.99" y1="35.56" x2="403.99" y2="55.56" /><line class="costdiagram-5" x1="4.46" y1="35.56" x2="404.46" y2="35.56" /><line class="costdiagram-5" x1="4.9" y1="35.56" x2="4.9" y2="15.56" /><line class="costdiagram-5" x1="4.9" y1="55.28" x2="4.9" y2="35.28" /><polygon class="costdiagram-6" points="4.91 0.56 0.41 9.56 9.4 9.56 4.91 0.56" /><line class="costdiagram-6" x1="4.9" y1="9.56" x2="4.9" y2="35.56" /><line class="costdiagram-5" x1="403.99" y1="716.17" x2="403.99" y2="736.17" /><line class="costdiagram-5" x1="403.99" y1="736.17" x2="403.99" y2="756.17" /><line class="costdiagram-5" x1="4.46" y1="736.17" x2="404.46" y2="736.17" /><line class="costdiagram-5" x1="4.9" y1="736.17" x2="4.9" y2="716.17" /><line class="costdiagram-5" x1="4.9" y1="755.89" x2="4.9" y2="735.89" /><polygon class="costdiagram-6" points="4.91 701.17 0.41 710.17 9.4 710.17 4.91 701.17" /><line class="costdiagram-6" x1="4.9" y1="710.17" x2="4.9" y2="736.17" /><polygon class="costdiagram-7" points="4.91 771.18 9.4 762.18 0.41 762.18 4.91 771.18" /><line class="costdiagram-6" x1="4.9" y1="762.18" x2="4.9" y2="736.17" /><line class="costdiagram-5" x1="403.99" y1="733.29" x2="403.99" y2="753.29" /><line class="costdiagram-5" x1="403.99" y1="818.4" x2="403.99" y2="838.4" /><line class="costdiagram-5" x1="403.99" y1="838.4" x2="403.99" y2="858.4" /><line class="costdiagram-5" x1="4.46" y1="838.4" x2="404.46" y2="838.4" /><line class="costdiagram-5" x1="4.9" y1="838.4" x2="4.9" y2="818.4" /><line class="costdiagram-5" x1="4.9" y1="858.12" x2="4.9" y2="838.12" /><polygon class="costdiagram-6" points="4.91 803.4 0.41 812.4 9.4 812.4 4.91 803.4" /><line class="costdiagram-6" x1="4.9" y1="812.4" x2="4.9" y2="838.4" /><polygon class="costdiagram-7" points="4.91 873.41 9.4 864.41 0.41 864.41 4.91 873.41" /><line class="costdiagram-6" x1="4.9" y1="864.41" x2="4.9" y2="838.4" /><line class="costdiagram-5" x1="403.99" y1="835.52" x2="403.99" y2="855.52" /><line class="costdiagram-5" x1="403.99" y1="920.63" x2="403.99" y2="940.63" /><line class="costdiagram-5" x1="403.99" y1="940.63" x2="403.99" y2="960.63" /><line class="costdiagram-5" x1="4.46" y1="940.63" x2="404.46" y2="940.63" /><line class="costdiagram-5" x1="4.9" y1="940.63" x2="4.9" y2="920.63" /><line class="costdiagram-5" x1="4.9" y1="960.35" x2="4.9" y2="940.35" /><polygon class="costdiagram-6" points="4.91 905.63 0.41 914.63 9.4 914.63 4.91 905.63" /><line class="costdiagram-6" x1="4.9" y1="914.63" x2="4.9" y2="940.63" /><polygon class="costdiagram-7" points="4.91 975.64 9.4 966.64 0.41 966.64 4.91 975.64" /><line class="costdiagram-6" x1="4.9" y1="966.64" x2="4.9" y2="940.63" /><line class="costdiagram-5" x1="403.99" y1="937.76" x2="403.99" y2="957.76" /><line class="costdiagram-5" x1="403.99" y1="1022.86" x2="403.99" y2="1042.86" /><line class="costdiagram-5" x1="403.99" y1="1042.86" x2="403.99" y2="1062.86" /><line class="costdiagram-5" x1="4.46" y1="1042.86" x2="404.46" y2="1042.86" /><line class="costdiagram-5" x1="4.9" y1="1042.86" x2="4.9" y2="1022.86" /><line class="costdiagram-5" x1="4.9" y1="1062.58" x2="4.9" y2="1042.58" /><polygon class="costdiagram-6" points="4.91 1007.86 0.41 1016.86 9.4 1016.86 4.91 1007.86" /><line class="costdiagram-6" x1="4.9" y1="1016.86" x2="4.9" y2="1042.86" /><polygon class="costdiagram-7" points="4.91 1077.87 9.4 1068.87 0.41 1068.87 4.91 1077.87" /><line class="costdiagram-6" x1="4.9" y1="1068.87" x2="4.9" y2="1042.86" /><line class="costdiagram-5" x1="403.99" y1="1039.99" x2="403.99" y2="1059.99" /><line class="costdiagram-5" x1="403.99" y1="1125.09" x2="403.99" y2="1145.09" /><line class="costdiagram-5" x1="403.99" y1="1145.09" x2="403.99" y2="1165.09" /><line class="costdiagram-5" x1="4.46" y1="1145.09" x2="404.46" y2="1145.09" /><line class="costdiagram-5" x1="4.9" y1="1145.09" x2="4.9" y2="1125.09" /><line class="costdiagram-5" x1="4.9" y1="1164.81" x2="4.9" y2="1144.81" /><polygon class="costdiagram-6" points="4.91 1110.09 0.41 1119.09 9.4 1119.09 4.91 1110.09" /><line class="costdiagram-6" x1="4.9" y1="1119.09" x2="4.9" y2="1145.09" /><polygon class="costdiagram-7" points="4.91 1180.1 9.4 1171.1 0.41 1171.1 4.91 1180.1" /><line class="costdiagram-6" x1="4.9" y1="1171.1" x2="4.9" y2="1145.09" /><line class="costdiagram-5" x1="403.99" y1="1142.22" x2="403.99" y2="1162.22" /><text class="costdiagram-1" transform="translate(177.31 796.93)">Aug</text><text class="costdiagram-1" transform="translate(178.9 999.77)">Oct</text><text class="costdiagram-1" transform="translate(177.76 1209.6)">Dec</text></g></g></svg>)
    }

    mediumDiagram() {
        return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 605.94 710.96"><defs><style>
        </style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2"><text className="mediumdiagram-1" transform="translate(116.48 101.5)">Jan</text><text className="mediumdiagram-1" transform="translate(428.37 101.5)"><tspan className="mediumdiagram-2">F</tspan><tspan x="12.71" y="0">eb</tspan></text><text className="mediumdiagram-1" transform="translate(112.48 219.98)">Mar</text><text className="mediumdiagram-1" transform="translate(427.77 219.98)">Apr</text><text className="mediumdiagram-1" transform="translate(111.2 338.47)">M<tspan className="mediumdiagram-3" x="22.32" y="0">a</tspan><tspan x="34.45" y="0">y</tspan></text><text className="mediumdiagram-1" transform="translate(429.09 342.06)">Jun</text><polygon className="mediumdiagram-4" points="4.91 71.44 9.4 62.44 0.41 62.44 4.91 71.44" /><line className="mediumdiagram-5" x1="4.9" y1="62.44" x2="4.9" y2="36.43" /><polygon className="mediumdiagram-5" points="4.91 1.43 0.41 10.43 9.4 10.43 4.91 1.43" /><line className="mediumdiagram-5" x1="4.9" y1="10.42" x2="4.9" y2="36.43" /><polygon className="mediumdiagram-4" points="304.92 73.07 309.42 64.07 300.42 64.07 304.92 73.07" /><line className="mediumdiagram-5" x1="304.92" y1="64.07" x2="304.92" y2="38.06" /><polygon className="mediumdiagram-5" points="304.94 0.56 300.44 9.56 309.44 9.56 304.94 0.56" /><line className="mediumdiagram-5" x1="304.94" y1="9.56" x2="304.94" y2="35.56" /><line className="mediumdiagram-6" x1="604.94" y1="36.43" x2="4.94" y2="36.43" /><line className="mediumdiagram-6" x1="304.94" y1="16.1" x2="304.94" y2="36.1" /><line className="mediumdiagram-6" x1="4.96" y1="36.43" x2="4.96" y2="16.43" /><line className="mediumdiagram-6" x1="604.94" y1="15.5" x2="604.94" y2="35.5" /><line className="mediumdiagram-6" x1="604.94" y1="55.56" x2="604.94" y2="35.56" /><line className="mediumdiagram-6" x1="304.94" y1="55.71" x2="304.94" y2="35.71" /><line className="mediumdiagram-6" x1="4.96" y1="56.43" x2="4.96" y2="36.43" /><polygon className="mediumdiagram-4" points="4.91 192.36 9.4 183.36 0.41 183.36 4.91 192.36" /><line className="mediumdiagram-5" x1="4.9" y1="183.36" x2="4.9" y2="157.36" /><polygon className="mediumdiagram-5" points="4.91 122.35 0.41 131.35 9.4 131.35 4.91 122.35" /><line className="mediumdiagram-5" x1="4.9" y1="131.35" x2="4.9" y2="157.36" /><polygon className="mediumdiagram-4" points="304.92 193.99 309.42 184.99 300.42 184.99 304.92 193.99" /><line className="mediumdiagram-5" x1="304.92" y1="184.99" x2="304.92" y2="158.99" /><polygon className="mediumdiagram-5" points="304.94 121.48 300.44 130.49 309.44 130.49 304.94 121.48" /><line className="mediumdiagram-5" x1="304.94" y1="130.48" x2="304.94" y2="156.49" /><line className="mediumdiagram-6" x1="604.94" y1="157.36" x2="4.94" y2="157.36" /><line className="mediumdiagram-6" x1="304.94" y1="137.02" x2="304.94" y2="157.02" /><line className="mediumdiagram-6" x1="4.96" y1="157.36" x2="4.96" y2="137.36" /><line className="mediumdiagram-6" x1="604.94" y1="136.43" x2="604.94" y2="156.43" /><line className="mediumdiagram-6" x1="604.94" y1="176.49" x2="604.94" y2="156.49" /><line className="mediumdiagram-6" x1="304.94" y1="176.63" x2="304.94" y2="156.63" /><line className="mediumdiagram-6" x1="4.96" y1="177.36" x2="4.96" y2="157.36" /><polygon className="mediumdiagram-4" points="4.91 313.29 9.4 304.29 0.41 304.29 4.91 313.29" /><line className="mediumdiagram-5" x1="4.9" y1="304.29" x2="4.9" y2="278.28" /><polygon className="mediumdiagram-5" points="4.91 243.28 0.41 252.28 9.4 252.28 4.91 243.28" /><line className="mediumdiagram-5" x1="4.9" y1="252.28" x2="4.9" y2="278.28" /><polygon className="mediumdiagram-4" points="304.92 314.92 309.42 305.92 300.42 305.92 304.92 314.92" /><line className="mediumdiagram-5" x1="304.92" y1="305.92" x2="304.92" y2="279.91" /><polygon className="mediumdiagram-5" points="304.94 242.41 300.44 251.41 309.44 251.41 304.94 242.41" /><line className="mediumdiagram-5" x1="304.94" y1="251.41" x2="304.94" y2="277.42" /><line className="mediumdiagram-6" x1="604.94" y1="278.28" x2="4.94" y2="278.28" /><line className="mediumdiagram-6" x1="304.94" y1="257.95" x2="304.94" y2="277.95" /><line className="mediumdiagram-6" x1="4.96" y1="278.28" x2="4.96" y2="258.28" /><line className="mediumdiagram-6" x1="604.94" y1="257.35" x2="604.94" y2="277.35" /><line className="mediumdiagram-6" x1="604.94" y1="297.42" x2="604.94" y2="277.42" /><line className="mediumdiagram-6" x1="304.94" y1="297.56" x2="304.94" y2="277.56" /><line className="mediumdiagram-6" x1="4.96" y1="298.28" x2="4.96" y2="278.28" /><polygon className="mediumdiagram-4" points="4.91 434.21 9.4 425.21 0.41 425.21 4.91 434.21" /><line className="mediumdiagram-5" x1="4.9" y1="425.21" x2="4.9" y2="399.21" /><polygon className="mediumdiagram-5" points="4.91 364.2 0.41 373.2 9.4 373.2 4.91 364.2" /><line className="mediumdiagram-5" x1="4.9" y1="373.2" x2="4.9" y2="399.21" /><polygon className="mediumdiagram-4" points="304.92 435.84 309.42 426.84 300.42 426.84 304.92 435.84" /><line className="mediumdiagram-5" x1="304.92" y1="426.84" x2="304.92" y2="400.84" /><polygon className="mediumdiagram-5" points="304.94 363.34 300.44 372.34 309.44 372.34 304.94 363.34" /><line className="mediumdiagram-5" x1="304.94" y1="372.34" x2="304.94" y2="398.34" /><line className="mediumdiagram-6" x1="604.94" y1="399.21" x2="4.94" y2="399.21" /><line className="mediumdiagram-6" x1="304.94" y1="378.87" x2="304.94" y2="398.87" /><line className="mediumdiagram-6" x1="4.96" y1="399.21" x2="4.96" y2="379.21" /><line className="mediumdiagram-6" x1="604.94" y1="378.28" x2="604.94" y2="398.28" /><line className="mediumdiagram-6" x1="604.94" y1="418.34" x2="604.94" y2="398.34" /><line className="mediumdiagram-6" x1="304.94" y1="418.48" x2="304.94" y2="398.48" /><line className="mediumdiagram-6" x1="4.96" y1="419.21" x2="4.96" y2="399.21" /><polygon className="mediumdiagram-4" points="4.91 555.14 9.4 546.14 0.41 546.14 4.91 555.14" /><line className="mediumdiagram-5" x1="4.9" y1="546.14" x2="4.9" y2="520.13" /><polygon className="mediumdiagram-5" points="4.91 485.13 0.41 494.13 9.4 494.13 4.91 485.13" /><line className="mediumdiagram-5" x1="4.9" y1="494.13" x2="4.9" y2="520.13" /><polygon className="mediumdiagram-4" points="304.92 556.77 309.42 547.77 300.42 547.77 304.92 556.77" /><line className="mediumdiagram-5" x1="304.92" y1="547.77" x2="304.92" y2="521.76" /><polygon className="mediumdiagram-5" points="304.94 484.26 300.44 493.26 309.44 493.26 304.94 484.26" /><line className="mediumdiagram-5" x1="304.94" y1="493.26" x2="304.94" y2="519.27" /><line className="mediumdiagram-6" x1="604.94" y1="520.13" x2="4.94" y2="520.13" /><line className="mediumdiagram-6" x1="304.94" y1="499.8" x2="304.94" y2="519.8" /><line className="mediumdiagram-6" x1="4.96" y1="520.13" x2="4.96" y2="500.13" /><line className="mediumdiagram-6" x1="604.94" y1="499.2" x2="604.94" y2="519.2" /><line className="mediumdiagram-6" x1="604.94" y1="539.27" x2="604.94" y2="519.27" /><line className="mediumdiagram-6" x1="304.94" y1="539.41" x2="304.94" y2="519.41" /><line className="mediumdiagram-6" x1="4.96" y1="540.13" x2="4.96" y2="520.13" /><polygon className="mediumdiagram-4" points="4.91 676.06 9.4 667.06 0.41 667.06 4.91 676.06" /><line className="mediumdiagram-5" x1="4.9" y1="667.06" x2="4.9" y2="641.06" /><polygon className="mediumdiagram-5" points="4.91 606.05 0.41 615.05 9.4 615.05 4.91 606.05" /><line className="mediumdiagram-5" x1="4.9" y1="615.05" x2="4.9" y2="641.06" /><polygon className="mediumdiagram-4" points="304.92 677.7 309.42 668.7 300.42 668.7 304.92 677.7" /><line className="mediumdiagram-5" x1="304.92" y1="668.7" x2="304.92" y2="642.69" /><polygon className="mediumdiagram-5" points="304.94 605.19 300.44 614.19 309.44 614.19 304.94 605.19" /><line className="mediumdiagram-5" x1="304.94" y1="614.19" x2="304.94" y2="640.19" /><line className="mediumdiagram-6" x1="604.94" y1="641.06" x2="4.94" y2="641.06" /><line className="mediumdiagram-6" x1="304.94" y1="620.72" x2="304.94" y2="640.72" /><line className="mediumdiagram-6" x1="4.96" y1="641.06" x2="4.96" y2="621.06" /><line className="mediumdiagram-6" x1="604.94" y1="620.13" x2="604.94" y2="640.13" /><line className="mediumdiagram-6" x1="604.94" y1="660.19" x2="604.94" y2="640.19" /><line className="mediumdiagram-6" x1="304.94" y1="660.34" x2="304.94" y2="640.34" /><line className="mediumdiagram-6" x1="4.96" y1="661.06" x2="4.96" y2="641.06" /><text className="mediumdiagram-1" transform="translate(119.51 462.76)">Jul</text><text className="mediumdiagram-1" transform="translate(426.43 463.36)">Aug</text><text className="mediumdiagram-1" transform="translate(115.19 581.25)">Sep</text><text className="mediumdiagram-1" transform="translate(428.02 581.25)">Oct</text><text className="mediumdiagram-1" transform="translate(112.73 699.73)">N<tspan className="mediumdiagram-7" x="18.14" y="0">o</tspan><tspan x="31.39" y="0">v</tspan></text><text className="mediumdiagram-1" transform="translate(426.87 703.33)">Dec</text></g></g></svg>)
    }

    largeDiagram() {
        const appbaseddriver = new AppBasedDriver();



        const showlabels = () => {
            return (<g>
                <text className="largediagram-3" transform="translate(116.48 101.64)">Jan</text>
                <text className="largediagram-3" transform="translate(426.64 101.64)">
                    <tspan className="largediagram-4">F</tspan><tspan x="12.71" y="0">eb</tspan>
                </text>
                <text className="largediagram-3" transform="translate(731.45 101.64)">Mar</text>
                <text className="largediagram-3" transform="translate(1037.75 101.64)">Apr</text>
                <text className="largediagram-3" transform="translate(111.2 213.29)">M<tspan className="largediagram-5" x="22.32" y="0">a</tspan><tspan x="34.45" y="0">y</tspan>
                </text>
                <text className="largediagram-3" transform="translate(420.95 213.29)">June</text>
                <text className="largediagram-3" transform="translate(732.07 213.29)">July</text>
                <text className="largediagram-3" transform="translate(1036.41 213.29)">Aug</text>
                <text className="largediagram-3" transform="translate(110.54 324.94)">Sept</text>
                <text className="largediagram-3" transform="translate(426.29 324.94)">Oct</text>
                <text className="largediagram-3" transform="translate(731.69 324.94)">N<tspan className="largediagram-6" x="18.14" y="0">o</tspan><tspan x="31.39" y="0">v</tspan>
                </text>
                <text className="largediagram-3" transform="translate(1036.85 324.94)">Dec</text>
            </g>)
        }

        const showtickmarks = () => {

            return (<g>


                <line className="largediagram-7" x1="4.9" y1="35.71" x2="4.9" y2="15.71" />
                <line className="largediagram-7" x1="4.9" y1="55.71" x2="4.9" y2="35.71" />
                <line className="largediagram-7" x1="4.9" y1="146.85" x2="4.9" y2="126.85" />
                <line className="largediagram-7" x1="4.9" y1="166.85" x2="4.9" y2="146.85" />
                <line className="largediagram-7" x1="4.9" y1="257.99" x2="4.9" y2="237.99" />
                <line className="largediagram-7" x1="4.9" y1="277.99" x2="4.9" y2="257.99" />


                <line className="largediagram-7" x1="304.94" y1="16.24" x2="304.94" y2="36.24" />
                <line className="largediagram-7" x1="304.94" y1="55.85" x2="304.94" y2="35.85" />
                <line className="largediagram-7" x1="304.94" y1="127.38" x2="304.94" y2="147.38" />
                <line className="largediagram-7" x1="304.94" y1="166.99" x2="304.94" y2="146.99" />
                <line className="largediagram-7" x1="304.94" y1="238.52" x2="304.94" y2="258.52" />
                <line className="largediagram-7" x1="304.94" y1="278.13" x2="304.94" y2="258.13" />

                <line className="largediagram-7" x1="604.94" y1="55.71" x2="604.94" y2="35.71" />
                <line className="largediagram-7" x1="604.94" y1="16.06" x2="604.94" y2="35.23" />
                <line className="largediagram-7" x1="604.94" y1="166.85" x2="604.94" y2="146.85" />
                <line className="largediagram-7" x1="604.94" y1="127.2" x2="604.94" y2="146.37" />
                <line className="largediagram-7" x1="604.94" y1="238.34" x2="604.94" y2="257.52" />
                <line className="largediagram-7" x1="604.94" y1="277.99" x2="604.94" y2="257.99" />

                <line className="largediagram-7" x1="904.94" y1="15.64" x2="904.94" y2="35.64" />
                <line className="largediagram-7" x1="904.94" y1="55.71" x2="904.94" y2="35.71" />
                <line className="largediagram-7" x1="904.94" y1="126.79" x2="904.94" y2="146.79" />
                <line className="largediagram-7" x1="904.94" y1="166.85" x2="904.94" y2="146.85" />
                <line className="largediagram-7" x1="904.94" y1="237.93" x2="904.94" y2="257.93" />
                <line className="largediagram-7" x1="904.94" y1="277.99" x2="904.94" y2="257.99" />

                <line className="largediagram-7" x1="1205.01" y1="15.71" x2="1205.01" y2="35.71" />
                <line className="largediagram-7" x1="1205.01" y1="35.71" x2="1205.01" y2="55.71" />
                <line className="largediagram-7" x1="1205.01" y1="126.79" x2="1205.01" y2="146.79" />
                <line className="largediagram-7" x1="1205.01" y1="166.85" x2="1205.01" y2="146.85" />
                <line className="largediagram-7" x1="1204.97" y1="237.93" x2="1204.97" y2="257.93" />
                <line className="largediagram-7" x1="1204.97" y1="277.99" x2="1204.97" y2="257.99" />

            </g>)
        }

        const showaxis = () => {
            return (
                <g>
                    <line className="largediagram-7" x1="4.97" y1="35.71" x2="1204.97" y2="35.71" />
                    <line className="largediagram-7" x1="4.97" y1="146.85" x2="1204.97" y2="146.85" />
                    <line className="largediagram-7" x1="4.97" y1="257.99" x2="1204.97" y2="257.99" />
                </g>)
        }
        const januaryearnings = (day) => {

            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <polygon className="largediagram-2" points="4.96 1.57 0.46 10.57 9.46 10.57 4.96 1.57" />
                    <line className="largediagram-2" x1="4.96" y1="10.57" x2="4.96" y2="36.57" />
                </g>)
        }

        const januarycosts = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`}>
                <line className="largediagram-2" x1="4.9" y1="63.44" x2="4.9" y2="37.44" />
                <polygon className="largediagram-1" points="4.91 72.44 9.4 63.44 0.41 63.44 4.91 72.44" />

            </g>)
        }

        const februaryearnings = (day) => {

            return (
                <g transform={`translate(${day * 10.34},0)`}>
                    <polygon className="largediagram-2" points="304.94 0.7 300.44 9.7 309.44 9.7 304.94 0.7" />
                    <line className="largediagram-2" x1="304.94" y1="9.7" x2="304.94" y2="35.71" />
                </g>)
        }

        const februarycosts = (day) => {
            return (
                <g transform={`translate(${day * 10.34},0)`}>
                    <polygon className="largediagram-1" points="304.92 73.21 309.42 64.21 300.42 64.21 304.92 73.21" />
                    <line className="largediagram-2" x1="304.92" y1="64.21" x2="304.92" y2="38.2" />
                </g>)
        }

        const marchearnings = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`}>
                <polygon className="largediagram-2" points="604.97 0.56 600.47 9.56 609.47 9.56 604.97 0.56" />
                <line className="largediagram-2" x1="604.97" y1="9.56" x2="604.97" y2="35.56" />
            </g>)
        }

        const marchcosts = (day) => {
            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <polygon className="largediagram-1" points="604.97 73.21 609.47 64.21 600.47 64.21 604.97 73.21" />
                    <line className="largediagram-2" x1="604.97" y1="64.21" x2="604.97" y2="38.2" />
                </g>)
        }

        const aprilearnings = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-2" points="904.97 0.56 900.47 9.56 909.47 9.56 904.97 0.56" />
                <line className="largediagram-2" x1="904.97" y1="9.56" x2="904.97" y2="35.56" />
            </g>)
        }

        const aprilcosts = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-1" points="904.94 73.21 909.44 64.21 900.44 64.21 904.94 73.21" />
                <line className="largediagram-2" x1="904.94" y1="64.21" x2="904.94" y2="38.2" />
            </g>)
        }


        const mayearnings = (day) => {
            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <polygon className="largediagram-2" points="4.96 112.71 0.46 121.71 9.46 121.71 4.96 112.71" />
                    <line className="largediagram-2" x1="4.96" y1="121.71" x2="4.96" y2="147.71" />
                </g>)
        }

        const maycosts = (day) => {
            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <line className="largediagram-2" x1="4.9" y1="174.59" x2="4.9" y2="148.58" />
                    <polygon className="largediagram-1" points="4.91 183.59 9.4 174.59 0.41 174.59 4.91 183.59" />
                </g>)
        }

        const juneearnings = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-2" points="304.94 111.84 300.44 120.84 309.44 120.84 304.94 111.84" />
                <line className="largediagram-2" x1="304.94" y1="120.84" x2="304.94" y2="146.85" />
            </g>)
        }

        const junecosts = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-1" points="304.92 184.35 309.42 175.35 300.42 175.35 304.92 184.35" />
                <line className="largediagram-2" x1="304.92" y1="175.35" x2="304.92" y2="149.35" />
            </g>)
        }

        const julyearnings = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`}>
                <polygon className="largediagram-2" points="604.97 111.7 600.47 120.7 609.47 120.7 604.97 111.7" />
                <line className="largediagram-2" x1="604.97" y1="120.7" x2="604.97" y2="146.71" />
            </g>)
        }

        const julycosts = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`}>
                <polygon className="largediagram-1" points="604.97 184.35 609.47 175.35 600.47 175.35 604.97 184.35" />
                <line className="largediagram-2" x1="604.97" y1="175.35" x2="604.97" y2="149.35" />
            </g>)
        }

        const augustearnings = (day) => {
            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <polygon className="largediagram-2" points="904.97 111.7 900.47 120.7 909.47 120.7 904.97 111.7" />
                    <line className="largediagram-2" x1="904.97" y1="120.7" x2="904.97" y2="146.71" />
                </g>)
        }

        const augustcosts = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`}>
                <polygon className="largediagram-1" points="904.94 182 909.44 173 900.44 173 904.94 182" />
                <line className="largediagram-2" x1="904.94" y1="173" x2="904.94" y2="146.99" />
            </g>)
        }


        const septemberearnings = (day) => {
            return (
                <g transform={`translate(${day * 10},0)`}>
                    <polygon className="largediagram-2" points="4.96 223.85 0.46 232.85 9.46 232.85 4.96 223.85" />
                    <line className="largediagram-2" x1="4.96" y1="232.85" x2="4.96" y2="258.86" />
                </g>
            )
        }

        const septembercosts = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-1" points="4.91 294.73 9.4 285.73 0.41 285.73 4.91 294.73" />
                <line className="largediagram-2" x1="4.9" y1="285.73" x2="4.9" y2="259.72" />
            </g>)
        }


        const octoberearnings = (day) => {
            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <polygon className="largediagram-2" points="304.94 222.99 300.44 231.99 309.44 231.99 304.94 222.99" />
                    <line className="largediagram-2" x1="304.94" y1="231.98" x2="304.94" y2="257.99" />
                </g>)
        }

        const octobercosts = (day) => {
            return (
                <g transform={`translate(${day * 9.67},0)`}>
                    <polygon className="largediagram-1" points="304.92 295.49 309.42 286.49 300.42 286.49 304.92 295.49" />
                    <line className="largediagram-2" x1="304.92" y1="286.49" x2="304.92" y2="260.49" />
                </g>
            )
        }


        const novemberearnings = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-2" points="604.97 222.84 600.47 231.84 609.47 231.84 604.97 222.84" />
                <line className="largediagram-2" x1="604.97" y1="231.84" x2="604.97" y2="257.85" />
            </g>)
        }

        const novembercosts = (day) => {
            return (<g transform={`translate(${day * 10},0)`}>
                <polygon className="largediagram-1" points="604.97 295.49 609.47 286.49 600.47 286.49 604.97 295.49" />
                <line className="largediagram-2" x1="604.97" y1="286.49" x2="604.97" y2="260.49" />
            </g>)
        }



        const decemberearnings = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`}>
                <polygon className="largediagram-2" points="904.97 222.84 900.47 231.84 909.47 231.84 904.97 222.84" />
                <line className="largediagram-2" x1="904.97" y1="231.84" x2="904.97" y2="257.85" />
            </g>)
        }

        const decembercosts = (day) => {
            return (<g transform={`translate(${day * 9.67},0)`} >

                <polygon className="largediagram-1" points="904.94 295.49 909.44 286.49 900.44 286.49 904.94 295.49" />
                <line className="largediagram-2" x1="904.94" y1="286.49" x2="904.94" y2="260.49" />
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
                        earningsArrows.push(januaryearnings(shiftdate.getDate()))
                        break;
                    case 2:
                        earningsArrows.push(februaryearnings(shiftdate.getDate()))
                        break;
                    case 3:
                        earningsArrows.push(marchearnings(shiftdate.getDate()))
                        break;
                    case 4:
                        earningsArrows.push(aprilearnings(shiftdate.getDate()))
                        break;
                    case 5:
                        earningsArrows.push(mayearnings(shiftdate.getDate()))
                        break;
                    case 6:
                        earningsArrows.push(juneearnings(shiftdate.getDate()))
                        break;
                    case 7:
                        earningsArrows.push(julyearnings(shiftdate.getDate()))
                        break;
                    case 8:
                        earningsArrows.push(augustearnings(shiftdate.getDate()))
                        break;
                    case 9:
                        earningsArrows.push(septemberearnings(shiftdate.getDate()))
                        break;
                    case 10:
                        earningsArrows.push(octoberearnings(shiftdate.getDate()))
                        break;
                    case 11:
                        earningsArrows.push(novemberearnings(shiftdate.getDate()))
                        break;
                    case 12:
                        earningsArrows.push(decemberearnings(shiftdate.getDate()))
                        break;
                    default:
                        break;

                }

            })
        }

       const costs = appbaseddriver.gettransformeddrivercosts.call(this)
    
       if(costs.length >0) {
           // eslint-disable-next-line
           costs.map(cost => {
            
            if (checkactivedate(cost.purchasedate, this.state.activemonth, this.state.activeyear)) {

            const costdate = new Date(cost.purchasedate)
      
        
            switch (costdate.getMonth() + 1) {
                case 1:
                    costsArrows.push(januarycosts(costdate.getDate()))
                    break;
                case 2:
                    costsArrows.push(februarycosts(costdate.getDate()))
                    break;
                case 3:
                    costsArrows.push(marchcosts(costdate.getDate()))
                    break;
                case 4:
                    costsArrows.push(aprilcosts(costdate.getDate()))
                    break;
                case 5:
                    costsArrows.push(maycosts(costdate.getDate()))
                    break;
                case 6:
                    costsArrows.push(junecosts(costdate.getDate()))
                    break;
                case 7:
                    costsArrows.push(julycosts(costdate.getDate()))
                    break;
                case 8:
                    costsArrows.push(augustcosts(costdate.getDate()))
                    break;
                case 9:
                    costsArrows.push(septembercosts(costdate.getDate()))
                    break;
                case 10:
                    costsArrows.push(octobercosts(costdate.getDate()))
                    break;
                case 11:
                    costsArrows.push(novembercosts(costdate.getDate()))
                    break;
                case 12:
                    costsArrows.push(decembercosts(costdate.getDate()))
                    break;
                default:
                    break;
        
            }

        }
        
        })
       }
       const styles = MyStylesheet();




        return (
            <div style={{...styles.generalContainer, ...styles.marginTop10, ...styles.bottomMargin10}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1206.01 336.17">
                <g id="Layer_2" data-name="Layer 2"><g id="Layer_2-2" data-name="Layer 2">
                    {showaxis()}
                    {showtickmarks()}
                    {showlabels()}
                    {earningsArrows}
                    {costsArrows}

                </g></g></svg>
                </div>)

    }


    showdiagrams() {
        const costdiagrams = new CostDiagrams();


        return (costdiagrams.largeDiagram.call(this))



    }

}

export default CostDiagrams