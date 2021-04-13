import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { uiLeft, uiRight } from './svg'
class DriverUI {

    handleui(mon) {

        let activemonth = this.state.activemonth;
        if (!activemonth) {
            activemonth = [mon]
            this.setState({ activemonth })
        } else {
            let key = activemonth.indexOf(mon)

            if (key >= 0) {
                activemonth.splice(key, 1)

            } else {
                activemonth.push(mon)

            }
            this.setState({ activemonth })

        }
    }

    uiButton() {
        if (this.state.width > 1200) {
            return ({ width: '65px' })

        } else if (this.state.width > 600) {
            return ({ width: '61px' })

        } else {
            return ({ width: '57px' })

        }
    }

    activebackground(year) {
        const styles = MyStylesheet();
        if (this.state.activeyear === year) {
            return styles.activeBackground;
        }
    }

    handleUILeft() {
        let uistart = this.state.uistart;
        if (this.state.width > 1200) {
            uistart = uistart - 4

        } else if (this.state.width > 600) {
            uistart = uistart - 3

        } else {

            uistart = uistart - 2
        }

        this.setState({ uistart })

    }

    handleUIRight() {

        let uiend = this.state.uiend;
        if (this.state.width > 1200) {
            uiend = uiend + 4

        } else if (this.state.width > 600) {
            uiend = uiend + 3

        } else {

            uiend = uiend + 2
        }

        this.setState({ uiend })

    }


    monthmenu() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const driverui = new DriverUI()

        const monthbackground = (month) => {
            let background = ''
            if (!this.state.activemonth) {
                background = styles.activeBackground;
            } else if (this.state.activemonth.hasOwnProperty("length")) {
                // eslint-disable-next-line
                this.state.activemonth.map(mon => {
                    if (mon === month) {
                        background = styles.activeBackground;
                    }
                })
            }
            return background;
        }

        return (<div style={{ ...styles.generalFlex }}>

            <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("jan") }} onClick={() => { driverui.handleui.call(this, "jan") }}>Jan</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("apr") }} onClick={() => { driverui.handleui.call(this, "apr") }}>Apr</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("jul") }} onClick={() => { driverui.handleui.call(this, "jul") }}>Jul</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("oct") }} onClick={() => { driverui.handleui.call(this, "oct") }}>Oct</span>
                </div>
            </div>


            <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("feb") }} onClick={() => { driverui.handleui.call(this, "feb") }}>Feb</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>

                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("may") }} onClick={() => { driverui.handleui.call(this, "may") }}>May</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("aug") }} onClick={() => { driverui.handleui.call(this, "aug") }}>Aug</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("nov") }} onClick={() => { driverui.handleui.call(this, "nov") }}>Nov</span>
                </div>
            </div>



            <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("mar") }} onClick={() => { driverui.handleui.call(this, "mar") }}>Mar</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("jun") }} onClick={() => { driverui.handleui.call(this, "jun") }}>Jun</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("sep") }} onClick={() => { driverui.handleui.call(this, "sep") }}>Sep</span><br />
                </div>
                <div style={{ ...styles.bottomMargin10, ...styles.generalContainer }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...monthbackground("dec") }} onClick={() => { driverui.handleui.call(this, "dec") }}>Dec</span>
                </div>
            </div>

        </div>)

    }


    largeUI() {

        const styles = MyStylesheet();
        const driverui = new DriverUI();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)


        const rows = (startyear) => {
            

            return (<div style={{ ...styles.generalFlex }} key={`uistart${startyear}`}>

                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear) }} onClick={() => { this.setState({ activeyear: startyear }) }}>{startyear}</span>

                </div>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear + 1) }} onClick={() => { this.setState({ activeyear: startyear + 1 }) }}>{startyear + 1}</span>

                </div>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear + 2) }} onClick={() => { this.setState({ activeyear: startyear + 2 }) }}>{startyear + 2}</span>

                </div>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear + 3) }} onClick={() => { this.setState({ activeyear: startyear + 3 }) }}>{startyear + 3}</span>
                </div>
            </div>)



        }

        let uistart = this.state.uistart;
        let uiend = this.state.uiend;

        const rownumber = ((uiend - uistart) + 1) / 4;
        let myrows = [];

        for (let x = 0; x < rownumber; x++) {
            myrows.push(rows(uistart))
            uistart += 4

        }


        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin10, ...styles.topMargin10 }}>
                <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                    <button style={{ ...styles.generalButton, ...driverui.uiButton.call(this) }} onClick={() => { driverui.handleUILeft.call(this) }}>{uiLeft()}</button>

                </div>

                <div style={{ ...styles.flex4 }}>
                    {myrows}
                </div>

                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                    <button style={{ ...styles.generalButton, ...driverui.uiButton.call(this) }} onClick={() => { driverui.handleUIRight.call(this) }}>{uiRight()}</button>

                </div>


            </div>)

    }

    mediumUI() {

        const styles = MyStylesheet();
        const driverui = new DriverUI();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const rows = (startyear) => {

            return (<div style={{ ...styles.generalFlex }} key={`uistart${startyear}`}>

                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear) }} onClick={() => { this.setState({ activeyear: startyear }) }}>{startyear}</span>

                </div>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear + 1) }} onClick={() => { this.setState({ activeyear: startyear + 1 }) }}>{startyear + 1}</span>

                </div>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear + 2) }} onClick={() => { this.setState({ activeyear: startyear + 2 }) }}>{startyear + 2}</span>

                </div>
            </div>)



        }

        let uistart = this.state.uistart;
        let uiend = this.state.uiend;

        const rownumber = ((uiend - uistart) + 1) / 3;
        let myrows = [];
   

        for (let x = 0; x < rownumber; x++) {
            myrows.push(rows(uistart))
            uistart += 3

        }


        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin10, ...styles.topMargin10 }}>
                <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                    <button style={{ ...styles.generalButton, ...driverui.uiButton.call(this) }} onClick={() => { driverui.handleUILeft.call(this) }}>{uiLeft()}</button>

                </div>

                <div style={{ ...styles.flex3 }}>
                    {myrows}

                </div>

                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                    <button style={{ ...styles.generalButton, ...driverui.uiButton.call(this) }} onClick={() => { driverui.handleUIRight.call(this) }}>{uiRight()}</button>

                </div>


            </div>)



    }

    smallUI() {

        const styles = MyStylesheet();
        const driverui = new DriverUI();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)


        const rows = (startyear) => {

            return (<div style={{ ...styles.generalFlex }} key={`uistart${startyear}`}>

                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear) }} onClick={() => { this.setState({ activeyear: startyear }) }}>{startyear}</span>

                </div>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...driverui.activebackground.call(this, startyear + 1) }} onClick={() => { this.setState({ activeyear: startyear + 1 }) }}>{startyear + 1}</span>

                </div>

            </div>)



        }

        let uistart = this.state.uistart;
        let uiend = this.state.uiend;

        const rownumber = ((uiend - uistart) + 1) / 2;
        let myrows = [];

        for (let x = 0; x < rownumber; x++) {
            myrows.push(rows(uistart))
            uistart += 2

        }


        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin10, ...styles.topMargin10 }}>
                <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                    <button style={{ ...styles.generalButton, ...driverui.uiButton.call(this) }} onClick={() => { driverui.handleUILeft.call(this) }}>{uiLeft()}</button>

                </div>

                <div style={{ ...styles.flex2 }}>
                    {myrows}
                </div>

                <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                    <button style={{ ...styles.generalButton, ...driverui.uiButton.call(this) }} onClick={() => { driverui.handleUIRight.call(this) }}>{uiRight()}</button>

                </div>


            </div>)



    }

    responsiveUI() {
        const driverui = new DriverUI();

        if (this.state.width > 1200) {

            return (driverui.largeUI.call(this))

        } else if (this.state.width > 600) {

            return (driverui.mediumUI.call(this))

        } else {
            return (driverui.smallUI.call(this))
        }
    }

    showui() {

        const driverui = new DriverUI();
        const styles = MyStylesheet();
        return (
            <div style={{ ...styles.generalContainer }}>
                {driverui.responsiveUI.call(this)}
                {driverui.monthmenu.call(this)}
            </div>)

    }

}

export default DriverUI;