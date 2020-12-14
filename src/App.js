import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './components/actions';
import { CheckUser } from './components/actions/api'
import firebase from 'firebase/app';
import { MyStylesheet } from './components/styles'
import 'firebase/auth';
import './App.css';
import Header from './components/header'
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import Profile from './components/profile'
import Equipment from './components/equipment'
import ViewEquipment from './components/viewequipment';
import Driver from './components/driver'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { render: 'render', width: 0, height: 0, message:'', driverid: '', driveridcheck: '', client: '', clientid: '', firstname: '', lastname: '', profileurl: '', phonenumber: '', emailaddress: '', emailaddresscheck: '', activeequipmentid:false, activeshiftid:false,
    timeinmonth: '', timeinday: '', timeinyear: '', timeinhours: '', timeinminutes: '', timeinampm: '', timeoutmonth: '', timeoutday: '', timeoutminutes: '', timeouthours: '', timeoutyear: '', timeoutampm: ''}
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    const config = () => {
      return ({
        apiKey: "AIzaSyDO-cDb5lRjsaD4ft0It270li1_uNa42BA",
        authDomain: "appbaseddriver.firebaseapp.com",
        databaseURL: "https://appbaseddriver.firebaseio.com",
        projectId: "appbaseddriver",
        storageBucket: "appbaseddriver.appspot.com",
        messagingSenderId: "903768173811",
        appId: "1:903768173811:web:93d4a7bf982bbc0a1fdb86",
        measurementId: "G-GNQ5QDP478"
      })
    }
    firebase.initializeApp(config());
    this.updateWindowDimensions();
    this.timeindefault();
    this.timeoutdefault();
    this.checkuser()
    
  
   


  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  timeoutdefault() {
    const timeoutmonth = () => {
        let month = new Date().getMonth() + 1;
        if (month < 10) {
            month = `0${month}`
        }
        return month;
    }
    const timeoutday = () => {
        let day = new Date().getDate();
        if (day < 10) {
            day = `0${day}`
        }
        return day;
    }
    const timeoutyear = () => {
        let year = new Date().getFullYear();

        return year;
    }
    const timeouthours = () => {
        let hours = new Date().getHours();
        if (hours > 12) {
            hours = hours - 12;
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        return hours;
    }
    const timeoutminutes = () => {
        let minutes = new Date().getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        return minutes;
    }
    const timeoutampm = () => {
        const hours = new Date().getHours();
        if (hours < 12) {
            return 'am'
        } else {
            return 'pm'
        }
    }
    this.setState({ timeoutmonth: timeoutmonth(), timeoutday: timeoutday(), timeoutyear: timeoutyear(), timeouthours: timeouthours(), timeoutminutes: timeoutminutes(), timeoutampm: timeoutampm() })
}
timeindefault() {
    const timeinmonth = () => {
        let month = new Date().getMonth() + 1;
        if (month < 10) {
            month = `0${month}`
        }
        return month;
    }
    const timeinday = () => {
        let day = new Date().getDate();
        if (day < 10) {
            day = `0${day}`
        }
        return day;
    }
    const timeinyear = () => {
        let year = new Date().getFullYear();

        return year;
    }
    const timeinhours = () => {
        let hours = new Date().getHours();
        if (hours > 12) {
            hours = hours - 12;
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        return hours;
    }
    const timeinminutes = () => {
        let minutes = new Date().getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        return minutes;
    }
    const timeinampm = () => {
        const hours = new Date().getHours();
        if (hours < 12) {
            return 'am'
        } else {
            return 'pm'
        }
    }
    this.setState({ timeinmonth: timeinmonth(), timeinday: timeinday(), timeinyear: timeinyear(), timeinhours: timeinhours(), timeinminutes: timeinminutes(), timeinampm: timeinampm() })
}


  async checkuser() {

    try {
      let response = await CheckUser();
      console.log(response)
      if (response.hasOwnProperty("driverid")) {
        this.props.reduxUser(response)
        this.setState({ render: 'render' })
      }


    } catch (err) {
      alert(err)
    }
  }
  render() {
    const styles = MyStylesheet();
    const header = new Header();
    const register = new Register()
    const home = new Home();
    const login = new Login();
    const profile = new Profile();
    const equipment = new Equipment();
    const driver = new Driver();
  
    const showlogin = () => {
      return (login.showlogin.call(this))
    }
    const showregister = () => {
      return (register.showregister.call(this))
    }
    const showhome = () => {
      return (home.showhome.call(this))
    }

    const showprofile = () => {
      return(profile.showprofile.call(this))
    }

    const showequipment = () => {
      return(equipment.showequipment.call(this))
    }

    const showdriver = () => {
      return(driver.showdriver.call(this))
    }
  


    return (
      <div style={{ ...styles.generalContainer }}>

        <BrowserRouter>
          <div style={{ ...styles.generalContainer }}>
            {header.showheader.call(this)}
            <Switch>
              <Route exact path="/" render={showhome} />
              <Route exact path="/newuser/login" render={showlogin} />
              <Route exact path="/newuser/register" render={showregister} />
              <Route exact path="/newuser/home" render={showhome} />
              <Route exact path="/:driverid/profile" render={showprofile} />
              <Route exact path="/:driverid/equipment" render={showequipment} />
              <Route exact path="/:driverid/driver" render={showdriver} />
              <Route exact path="/:driverid/equipment/:equipmentid" component={ViewEquipment} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );

  }

}

function mapStateToProps(state) {
  return {
    myusermodel: state.myusermodel,
    navigation: state.navigation
  }
}

export default connect(mapStateToProps, actions)(App)
