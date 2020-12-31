import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';

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

    showui() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const driverui = new DriverUI();
        const activebackground = (year) => {
            if (this.state.activeyear === year) {
                return styles.activeBackground;
            }
        }

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

        const monthmenu = () => {

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
        return (


            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>


                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...activebackground(2020) }} onClick={() => { this.setState({ activeyear: 2020 }) }}>2020</span>
                        </div>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont, ...activebackground(2021) }} onClick={() => { this.setState({ activeyear: 2021 }) }}>2021</span>
                        </div>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            <span style={{ ...regularFont, ...styles.generalFont, ...styles.boldFont }}>&nbsp;</span>
                        </div>
                    </div>

                    {monthmenu()}


                </div>
            </div>

        )
    }
}

export default DriverUI;