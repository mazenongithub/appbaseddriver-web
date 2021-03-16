import React  from 'react';
import { MyStylesheet } from './styles'
import AppBasedDriver from './appbaseddriver'
import { folderIcon, goCheckIcon } from './svg'
import {validateDriverID,validateEmail} from './functions'
import {CheckDriverID, CheckEmailAddress} from './actions/api'
import Header from './header';


class Profile  {  

    showdriverimage() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this);
        const profileImage = () => {
            if (this.state.width > 1200) {
                return (
                    {
                        width: '392px',
                        height: '327px'
                    })
    
            } else if (this.state.width > 600) {
                return (
                    {
                        width: '285px',
                        height: '249px'
                    })
    
            } else {
                return (
                    {
                        width: '167px',
                        height: '145px'
                    })
            }
            
        }

        if (myuser.profileurl) {
            return (<img src={myuser.profileurl} style={{ ...profileImage() }} alt={`${myuser.firstname} ${myuser.lastname}`} />)
        } else {
            return;


        }

    }

    async checkemailaddress() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this);
        const errmsg = validateEmail(myuser.emailaddress);
       
        if (!errmsg) {
            const response = await CheckEmailAddress(myuser.emailaddress)
            console.log(response)
            if (response.hasOwnProperty("invalid")) {
                myuser.invalidemail = `${response.invalid}`
                this.props.reduxUser(myuser)
                this.setState({ message: response.invalid })
            } else {
                delete myuser.invalidemail;
                this.props.reduxUser(myuser)
                this.setState({ render: 'render' })
            }




        } else {
            myuser.invalidemail = myuser.emailaddress;
            this.props.reduxUser(myuser)
            this.setState({ render: 'render' })
        }

    }
    getemailaddress() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let emailaddress = "";
        if (myuser) {
            emailaddress = myuser.emailaddress;
        }
        return emailaddress;

    }
    handleemailaddress(emailaddress) {
        const appbaseddriver = new AppBasedDriver();
        let myuser = appbaseddriver.getuser.call(this);
        const errmsg = validateEmail(emailaddress)
        
        if (myuser) {
            
            myuser.emailaddress = emailaddress;
            if(errmsg) {
                myuser.invalidemail = emailaddress;
                this.props.reduxUser(myuser);
                this.setState({message:errmsg})
            } else {
                if(myuser.hasOwnProperty("invalidemail")) {
                    delete myuser.invalidemail;
                    this.props.reduxUser(myuser)
                    this.setState({message:''})
                }
            }
          
            this.setState({ render: 'render' })
        }

    }
    getphonenumber() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let phonenumber = "";
        if (myuser) {
            phonenumber =  myuser.phonenumber;
        }
        return phonenumber;

    }
    handlephonenumber(phonenumber) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            myuser.phonenumber = phonenumber;
            this.props.reduxUser(myuser)
            this.setState({ render: 'render' })
        }

    }
    getlastname() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let lastname = "";
        if (myuser) {
            lastname = myuser.lastname;
        }
        return lastname;

    }
    handlelastname(lastname) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            myuser.lastname = lastname;
            this.props.reduxUser(myuser)
            this.setState({ render: 'render' })
        }

    }
    getfirstname() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        let firstname = "";
        if (myuser) {
            firstname =  myuser.firstname;
        }
        return firstname;

    }
    handlefirstname(firstname) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            myuser.firstname = firstname;
            this.props.reduxUser(myuser)
            this.setState({ render: 'render' })
        }

    }
    getdriverid() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            return myuser.driverid;
        }

    }
    handledriverid(driverid) {
        const appbaseddriver = new AppBasedDriver();
        const validate = validateDriverID(driverid);
        let myuser = appbaseddriver.getuser.call(this);
        if (!validate) {

            if (myuser.hasOwnProperty("invalid")) {
                delete myuser.invalid;
            }
            if (myuser) {
                myuser.driverid = driverid;
                this.props.reduxUser(myuser);
                this.setState({ message: '' })
            }

        } else {
            myuser.driverid = driverid;
            myuser.invalid = validate;
            this.props.reduxUser(myuser);
            this.setState({ message: validate })

        }

    }

    async checkdriverid(driverid) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this);

        if (myuser) {
            let validate = validateDriverID(driverid)
            if (driverid && !validate) {
                try {
                    let response = await CheckDriverID(driverid);
                    console.log(response)
                    if (response.hasOwnProperty("invalid")) {
                        myuser.invalid = response.invalid;
                        this.props.reduxUser(myuser);
                        this.setState({ message: response.invalid })
                    } else if (response.hasOwnProperty("valid")) {

                        if (myuser.hasOwnProperty("invalid")) {
                            delete myuser.invalid;
                            this.setState({ message: '' })
                        }
                    }
                } catch (err) {
                    alert(err)
                }
            }

        }
    }

    showprofile() {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this);
        const styles = MyStylesheet();
        const headerFont = appbaseddriver.getHeaderFont.call(this)
        const profile = new Profile()
        const header = new Header();
        const profileDimensions = () => {
            if (this.state.width > 1200) {
                return (
                    {
                        width: '392px'
                    })
    
            } else if (this.state.width > 600) {
                return (
                    {
                        width: '285px'
                    })
    
            } else {
                return (
                    {
                        width: '167px'
                    })
            }
        } 
        const folderSize = () => {
            if (this.state.width > 1200) {
                return (
                    {
                        width: '142px'
                    })
    
            } else if (this.state.width > 600) {
                return (
                    {
                        width: '93px'
                    })
    
            } else {
                return (
                    {
                        width: '88px'
                    })
            }
            
        }
        const regularFont = appbaseddriver.getRegularFont.call(this)

        const goIcon = appbaseddriver.getgocheckheight.call(this)

        const showButton = () => {

            if (!myuser.hasOwnProperty("invalid") && myuser.driverid) {
                return (<button style={{ ...styles.generalButton, ...goIcon }}>{goCheckIcon()}</button>)
            } else {
                return;
            }
        }


        const emailicon = () => {
            if (!myuser.hasOwnProperty("invalidemail") && myuser.emailaddress) {
            return (<button style={{ ...styles.generalButton, ...goIcon }}>{goCheckIcon()}</button>)
            }
        }

        if (myuser) {
            return (
                <div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>

                    {header.showsubheader.call(this)}

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1, ...styles.alignCenter }}>
                            <input type="text"  value={profile.getdriverid.call(this)}
                                onChange={event => { profile.handledriverid.call(this,event.target.value) }}
                                style={{ ...styles.generalFont, ...headerFont, ...styles.fontBold }}
                                onBlur={event => { profile.checkdriverid.call(this,event.target.value) }}
                            />
                            {showButton()}
                            </div>
                        </div>

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex2 }}>
                                <div style={{ ...styles.generalContainer, ...profileDimensions, ...styles.showBorder, ...styles.margin10, ...styles.alignRight }}>
                                    {profile.showdriverimage.call(this)}
                                </div>
                            </div>
                            <div style={{ ...styles.flex1, ...styles.showBorder, ...styles.alignBottom, ...styles.margin10 }}>
                                <input type="file" id="profile-image" />
                                <button style={{ ...styles.generalButton, ...folderSize() }} onClick={() => { profile.uploadprofileimage() }}>
                                    {folderIcon()}
                                </button>
                            </div>
                        </div>




                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1 }}>
                                <div style={{ ...regularFont, ...styles.generalFont, ...styles.generalContainer,...styles.addMargin }}>First Name</div>
                                <input type="text" style={{ ...styles.generalFont, ...regularFont,...styles.generalField }}
                                    value={profile.getfirstname.call(this)}
                                    onChange={event => { profile.handlefirstname.call(this,event.target.value) }} />
                            </div>
                            <div style={{ ...styles.flex1 }}>
                                <div style={{ ...regularFont, ...styles.generalFont, ...styles.generalContainer,...styles.addMargin }}>Last Name</div>
                                <input type="text" style={{ ...styles.generalFont, ...regularFont,...styles.generalField }}
                                    value={profile.getlastname.call(this)}
                                    onChange={event => { profile.handlelastname.call(this,event.target.value) }} />
                            </div>
                        </div>

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1 }}>
                                <div style={{ ...regularFont, ...styles.generalFont, ...styles.generalContainer, ...styles.addMargin  }}>EmailAddress</div>
                                <input type="text" style={{ ...styles.generalFont, ...regularFont,...styles.generalField }}
                                    value={profile.getemailaddress.call(this)}
                                    onChange={event => { profile.handleemailaddress.call(this,event.target.value) }}
                                    onBlur={()=>{profile.checkemailaddress.call(this)}} />
                                    {emailicon()}
                            </div>
                            <div style={{ ...styles.flex1 }}>
                                <div style={{ ...regularFont, ...styles.generalFont, ...styles.generalContainer, ...styles.addMargin }}>Phone Number</div>
                                <input type="text" style={{ ...styles.generalFont, ...regularFont,...styles.generalField }}
                                    value={profile.getphonenumber.call(this)}
                                    onChange={event => { profile.handlephonenumber.call(this,event.target.value) }}
                                />
                            </div>
                        </div>

                        {appbaseddriver.showsavedriver.call(this)}

                    </div>
                </div>




            )
        } else {
            return (<div style={{...styles.generalContainer, ...styles.alignCenter}}>
                <span style={{...styles.generalFont,...regularFont}}> Please Login to View Profile </span></div>)
        }

    }
}


export default Profile