import React from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';

class DriverUI {

    showui() {
        const styles = MyStylesheet();
        const appbaseddriver = new AppBasedDriver();
        const regularFont = appbaseddriver.getRegularFont.call(this)
        const activebackground = (year) => {
            if(this.state.activeyear === year) {
                return styles.activeBackground;
            }
        }
        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                    <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            <span style={{...regularFont, ...styles.generalFont,...styles.boldFont, ...activebackground(2020)}} onClick={()=>{this.setState({activeyear:2020})}}>2020</span>
                        </div>
                        <div style={{ ...styles.flex1, ...styles.alignCenter  }}>
                        <span style={{...regularFont, ...styles.generalFont,...styles.boldFont, ...activebackground(2021)}} onClick={()=>{this.setState({activeyear:2021})}}>2021</span>
                        </div>
                        <div style={{ ...styles.flex1, ...styles.alignCenter  }}>
                            <span style={{...regularFont, ...styles.generalFont,...styles.boldFont}}>&nbsp;</span>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default DriverUI;