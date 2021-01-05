import AppBasedDriver from './appbaseddriver';
import Profile from './profile';
import Landing from './landing';

class Home {


    showhome() {
        const appbaseddriver = new AppBasedDriver();
        const profile = new Profile();
        const landing = new Landing();
        
        const myuser = appbaseddriver.getuser.call(this)
        if(myuser) {
            return(profile.showprofile.call(this))

        } else {

        return (
          landing.showlanding.call(this)
        )


        }


    }
}

export default Home;