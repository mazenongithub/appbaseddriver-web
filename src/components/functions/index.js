export function UTCTimeStringfromTime(timein) {
    timein.replace(/-/g, '/')
    let time = timein.substring(17, 19)
    let hours = timein.substring(11, 13);
    if (time === 'pm' && hours !== '12') {
           hours = Number(hours) + 12
    } else if (time === 'am' && hours === '12') {
           hours = '00'
    }
       let minutes = timein.substring(14, 16)
       let year = timein.substring(0, 4)
       let month = timein.substring(5, 7);
       let day = timein.substring(8, 10)
       
       
       
       const sym = (timein) => {
           let myoffset = new Date(timein).getTimezoneOffset() / 60
           let sym = "+";
           if (myoffset > 0) {
               sym = "-"
           }
           return sym;
   
       }
         
       const offset = (timein) => {
           let myoffset = (new Date(timein).getTimezoneOffset() / 60)
   
           if (myoffset < 10) {
               myoffset = `0${myoffset}`
           }
           return myoffset;
       }
       timein = `${year}/${month}/${day} ${hours}:${minutes}:00${sym(timein)}${offset(timein)}:00`
    
       return timein
     
   }

export function getMinutesfromTimein(timein) {
 
    const newDate = new Date(timein)
    let minutes = newDate.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return (minutes);
}

export function getHoursfromTimein(timein) {
    //let timein ='2020-05-13 20:00:00'

    const newDate = new Date(timein)
    let hours = newDate.getHours();
    if (hours > 12) {
        hours = hours - 12;

    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    return (hours);

}

export function getDayfromTimein(timein) {
    //let timein ='2020-05-13 20:00:00'

    const newDate = new Date(`${timein}`)
    let date = newDate.getDate();
    if (date < 10) {
        date = `0${date}`

    }
    return date;
}

export function getYearfromTimein(timein) {
    //let timein ='2020-05-13 20:00:00'
    const newDate = new Date(`${timein}`)
    return newDate.getFullYear();

}

export function sorttimes(timeina, timeinb) {
    timeina = new Date(timeina)
    timeinb = new Date(timeinb)
    if (timeina < timeinb) {
        return -1;
    }
    else if (timeinb > timeina) {
        return 1;
    }
    else {
        return 0;
    }
}

export function getAMPMfromTimeIn(timein) {
    //let timein ='2020-05-13 20:00:00'
    const newDate = new Date(timein)
    let hours = newDate.getHours();
    let ampm = "";
    if (hours > 12) {
        ampm = 'pm'

    } else {
        ampm = 'am'
    }

    return (ampm);
}

export function getMonthfromTimein(timein) {

    const newDate = new Date(`${timein}`)
    let month = newDate.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`

    }

    return month;
}
export function calculatetotalhours(timeout, timein) {
// 
    let datein = new Date(timein)
    let dateout = new Date(timeout)
    let totalhours = ((dateout.getTime() - datein.getTime()) / (1000 * 60 * 60))
    return totalhours;
}

export function abbDateStr(timein) {
//const timein = '2020-12-18 23:30:00'
const datein = new Date(timein.replace(/-/g, '/'))
const months = datein.getMonth()+1;
const day = datein.getDate();
return (`${months}/${day}`)
}

export function getXcoord(timein) {
const datein = new Date(timein.replace(/-/g, '/'))
const months = datein.getMonth()+1;
const day = datein.getDate();

const x0 = (months -1) * 67
const x1 = (day/31)*67
const x = Math.round(x0+x1)
return x;
}

export function getUTCDate() {
   
  
        const datestring = new Date().toLocaleString()
        const datestrings = datestring.split('/')
        return 	`${datestrings[2].substring(0,4)}-${datestrings[0]}-${datestrings[1]}`
    
}

export function formatDateStringDisplay(timein) {
    timein.replace(/-/g, '/')
    timein = timein.split('-')
    let year = "";
    let month = "";
    let day = "";

    if (timein.length === 3) {
        year = timein[0]
        month = timein[1]
        day = timein[2]
    }
    return (`${month}/${day}/${year}`)
}

export function makeTimeString(year,month,day,hours,minutes,time) {
    return `${year}-${month}-${day} ${hours}:${minutes} ${time}`
}

export function validateMinutes(min) {
    const reg_ex = /^[0-5][0-9]$/;
return(reg_ex.test(min));
}

export function monthstring(month) {

    
    switch (month) {
        case 0:
            return ("January");
        case 1:
            return ("February");
        case 2:
            return ("March");
        case 3:
            return ("April");
        case 4:
            return ("May");
        case 5:
            return ("June");
        case 6:
            return ("July");
        case 7:
            return ("August");
        case 8:
            return ("September");
        case 9:
            return ("October");
        case 10:
            return ("November");
        case 11:
            return ("December");
        default:
            break;
    }
}

export function makeID(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function isNumeric(val) {
 
    if(val) {
      return(!isNaN(val))
    } else {
     return(true);
    }
    
  
}

export function validateDriverID(value) {
    const reg_ex = /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,34}(?:[A-Za-z0-9_]))?)$/
    const test = reg_ex.test(value);
    value = value.trim();
    let errmsg = "";
    if (!value) {
        errmsg = " DriverID is required ";

    }
    else if (value.length > 36) {
        errmsg = " DriverID should be less than 36 characters";
    }
    else if (!test) {
        errmsg = ` Invalid Provider ID format ${value} `;
    }

    return errmsg;
}

export function validateEmail(value) {
    var reg_ex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    var test = reg_ex.test(value)
    let errmsg = ""
    if (!value) {
        errmsg += `Email Address is required `

    }


    else if (!test) {

        errmsg += ` Email Address ${value} format is invalid `;

    }
    return errmsg;
}

export function  validateYear(year) {
    const reg_ex = /^[12][0-9]{3}$/;
return(reg_ex.test(year));
}
export function validateDate(date) {
    const reg_ex = /^(0?[1-9]|[12][0-9]|3[01])$/;
return(reg_ex.test(date));

}
export function validateMonth(mon) {
const reg_ex = /^0[1-9]|1[0-2]$/;
return(reg_ex.test(mon))
}

export function getFirstIsOn(timein) {
    let datein = new Date(`${timein.replace(/-/g, '/')} UTC`)
    let monthdisplay = datein.getMonth() + 1;
    let fullyear = datein.getFullYear();
    let thefirstofthemonth = new Date(`${fullyear}/${monthdisplay}/1`);
    let firstday = thefirstofthemonth.getDay();
    switch (firstday) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tues";
        case 3:
            return "Weds";
        case 4:
            return "Thurs";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return;
    }
}

export function getFirstIsOnDate(datein) {

    let monthdisplay = datein.getMonth() + 1;
    let fullyear = datein.getFullYear();
    let thefirstofthemonth = new Date(`${fullyear}/${monthdisplay}/1`);
    let firstday = thefirstofthemonth.getDay();
    switch (firstday) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tues";
        case 3:
            return "Weds";
        case 4:
            return "Thurs";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return;
    }
}

export function getDayString(day) {

    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return;
    }
}


export function check_29_feb_leapyear(timein)  {
    const dateobj = new Date(`${timein.replace(/-/g, '/')} UTC`)
    let month = dateobj.getMonth();

    if (month === 1) {
        let year = dateobj.getFullYear();
        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
            return 29;
        }
        else {
            return;
        }
    }
    else {
        return 29;
    }

}


export function check_31date(dateobj) {

    let month = dateobj.getMonth();
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        return 31;
    }
}

export function check_29_feb_leapyeardate(dateobj)  {

    let month = dateobj.getMonth();

    if (month === 1) {
        let year = dateobj.getFullYear();
        if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
            return 29;
        }
        else {
            return;
        }
    }
    else {
        return 29;
    }

}

export function trailingZeros(num) {
    if (num < 10) {
        return (`0${num}`);
    } else {
        return num;
    }

}

export function inputUTCStringForLaborID(timein) {

    let datein = new Date(timein)
    let hours = datein.getHours();
    let ampm
    if (hours > 12) {
        hours = hours - 12;
        ampm = "PM"
    }
    else if (hours === 0) {
        hours = 12;
        ampm = "AM"
    }
    else if (hours === 12) {
        ampm = "PM"
    }
    else if (hours < 12) {
        ampm = "AM"
    }
    let minutes = datein.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let date = datein.getDate();
    if (date < 10) {
        date = `0${date}`
    }
    let year = datein.getFullYear()
    let month = datein.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`
    }
    const seconds = trailingZeros(datein.getSeconds())
    return (`${month}/${date}/${year} ${hours}:${minutes}:${seconds} ${ampm}`)

}

export function check_30date(dateobj) {

    let month = dateobj.getMonth();
    if (month !== 1) {
        return 30;
    }
}

export function check_31(timein) {
    const dateobj = new Date(`${timein.replace(/-/g, '/')} UTC`)
    let month = dateobj.getMonth();
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
        return 31;
    }
}


export function check_30(timein) {
    const dateobj = new Date(`${timein.replace(/-/g, '/')} UTC`)
    let month = dateobj.getMonth();
    if (month !== 1) {
        return 30;
    }
}