import React from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver'

class Landing   {

  
    showslide(slide) {
        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();
        const smallslide = () => {
            if (this.state.width > 1200) {
                return ({ width: '362px', height: 'auto' })
            } else if (this.state.width > 600) {
                return ({ width: '254px', height: 'auto' })
            } else {
                return ({ width: '178px', height: 'auto' })
            }
            
            
        }
        const regularFont = appbaseddriver.getRegularFont.call(this)
        return(
        <div style={{...styles.generalFlex}}>
            <div style={{...styles.flex1}}>

        <div style={{...styles.generalContainer,...styles.showBorder,...smallslide(),...styles.marginAuto}} onClick={()=>{this.setState({activeslideid:slide.id})}}>
            <img src={slide.url} alt={slide.title} style={{...smallslide()}}  />
        </div>
        <div style={{...styles.generalContainer,...styles.marginAuto,...styles.alignCenter}} onClick={()=>{this.setState({activeslideid:slide.id})}}>
            <span style={{...styles.generalFont,...regularFont}}>{slide.title}</span>
        </div>


        </div>
        </div> )

    }

    showslides() {
        const appbaseddriver = new AppBasedDriver();
        const slides = appbaseddriver.getslides.call(this);
        const styles = MyStylesheet();
        const allslides = [];
        const landing = new Landing()
        if(slides) {
            // eslint-disable-next-line
            slides.map(slide=> {
                allslides.push(landing.showslide.call(this,slide))

            })
        }
        const templatecolumns = () => {
           
            if(this.state.width>800) {
            return (styles.triplegrid)
            } else {
                return (styles.doublegrid)
            }
        }
        
        return(<div style={{...styles.generalGrid,...templatecolumns(),...styles.bottomMargin15}}>
            {allslides}
        </div>)
        
        
    }

    showlanding() {
        const appbaseddriver = new AppBasedDriver();
        const styles = MyStylesheet();
        const mainslide = () => {

            if (this.state.width > 1200) {
                return ({ width: '1087px', height: 'auto' })
            } else if (this.state.width > 600) {
                return ({ width: '762px', height: 'auto' })
            } else {
                return ({ width: '356px', height: 'auto' })
            }
        } 
        const landing = new Landing();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const myslide = () => {
            if(this.state.activeslideid) {
            return(appbaseddriver.getslidebyid.call(this,this.state.activeslideid))
            } else {
                return false;
            }
        }
        const showmainslide = () => {
 
            if(myslide()) {
                return(<div style={{...styles.generalContainer,...styles.showBorder,...mainslide(),...styles.marginAuto}}>
                    <img src={myslide().url} alt={myslide().title} style={{...mainslide()}}  />
                </div> )
            }

        }
        const showmaintitle = () => {

            if(myslide()) {
                return(<span style={{...styles.generalFont,...headerFont}}>{myslide().title}</span>)
            }

        }

        const showmaincaption = () => {

            if(myslide()) {
                return(<span style={{...styles.generalFont,...regularFont}}>{myslide().caption}</span>)
            }

        }
        return (
            <div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>

                <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                          {showmaintitle()}

                        </div>
                    </div>


                    <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                          {showmainslide()}

                        </div>
                    </div>

                    <div style={{ ...styles.generalFlex,...styles.bottomMargin15 }}>
                        <div style={{ ...styles.flex1, ...styles.alignCenter }}>

                          {showmaincaption()}

                        </div>
                    </div>

                    {landing.showslides.call(this)}

                </div>
            </div>
        )
    }
}

export default Landing;