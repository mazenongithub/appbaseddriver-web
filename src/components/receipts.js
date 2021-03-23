import React, { Component } from 'react';
import { MyStylesheet } from './styles';
import AppBasedDriver from './appbaseddriver';
import { connect } from 'react-redux';
import { removeIconSmall, uploadFile } from './svg'
import * as actions from './actions';
import Header from './header';
import { Link } from 'react-router-dom'
import { formatDateStringDisplay, makeID } from './functions'
import { UploadReceipt, RemoveReceipt } from './actions/api'

class Receipts extends Component {
    constructor(props) {
        super(props)
        this.state = { render: 'render', width: 0, height: 0, message: '', activecostid: false, equipmentday: '', equipmentmonth: '', equipmentyear: '', equipmentcalender: false, salvageday: '', salvagemonth: '', salvageyear: '', salvagecalender: false, purchasecalender: false, showrepayment: true, purchaseday: '', purchasemonth: '', purchaseyear: '', activeyear: new Date().getFullYear(), activemonth: false, spinner: false, hidecosts: [], uistart: '', uiend: '' }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    componentDidMount() {

        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
        console.log("receipts")



    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getequipment() {
        const appbaseddriver = new AppBasedDriver();
        return appbaseddriver.getequipmentbyid.call(this, this.props.match.params.equipmentid)
    }

    getcost() {
        const appbaseddriver = new AppBasedDriver();
        const equipment = this.getequipment();
        let cost = false;
        if (equipment) {
            cost = appbaseddriver.getequipmentcostbyid.call(this, equipment.equipmentid, this.props.match.params.costid)
        }
        return cost;
    }

    getReceipts() {
        let receipts = false;
        const cost = this.getcost();
        if (cost.hasOwnProperty("images")) {
            receipts = cost.images;
        }
        return receipts;

    }
    getFile() {
        let file = false;
        let myfile = document.getElementById("receipt");

        if (myfile) {
            if (myfile.hasOwnProperty("files")) {
                file = myfile.files;
            }


        }
        return file;
    }

    checkFile() {
        let check = false

        let myfile = document.getElementById("receipt")
        if (myfile) {

            check = true;
        }


        return check;

    }

    handleRemoveReceipt(imageid) {
        const appbaseddriver = new AppBasedDriver();
        const myuser = appbaseddriver.getuser.call(this)
        if (myuser) {
            const equipment = this.getequipment();
            if (equipment) {
                const equipmentid = equipment.equipmentid;
                const cost = this.getcost();
                if (cost) {
                    const costid = cost.costid;
                    if (imageid) {
                        this.removeReceipt(equipmentid, costid, imageid, myuser)
                    }
                }
            }
        }
    }

    async removeReceipt(equipmentid, costid, imageid, myuser) {

        try {

            let response = await RemoveReceipt({ equipmentid, costid, imageid, myuser })
            if (response.hasOwnProperty("driverid")) {
                this.props.reduxUser(response)
                let message = `Driver Updated ${new Date().toLocaleTimeString()}`
                this.setState({ spinner: false, message })
            }

        } catch (err) {
            this.setState({ spinner: false })
            alert(err)

        }

    }

    async uploadmyuser(equipmentid, costid, imageid, myuser) {
        console.log(myuser)
        let formData = new FormData();

        let myfile = document.getElementById("receipt");
        const values = { equipmentid, costid, imageid }
        if (myfile.files[0]) {
            console.log(myfile.files[0])

            formData.append("profilephoto", myfile.files[0]);
            formData.append("myuser", JSON.stringify(myuser))
            formData.append("values", JSON.stringify(values))

            try {
                let response = await UploadReceipt(formData)
                if (response.hasOwnProperty("driverid")) {
                    this.props.reduxUser(response)
                    let message = `Driver Updated ${new Date().toLocaleTimeString()}`
                    this.setState({ spinner: false, message })
                }

            } catch (err) {
                this.setState({ spinner: false })
                alert(err)


            }


        }



    }
    uploadReceipt() {
        const appbaseddriver = new AppBasedDriver();
        let myuser = appbaseddriver.getuser.call(this)


        const CreateReceipt = (imageid, url) => {
            return ({ imageid, url })

        }


        if (myuser) {
            const equipment = this.getequipment();
            if (equipment) {
                const i = appbaseddriver.getequipmentkeybyid.call(this, equipment.equipmentid)
                const cost = this.getcost()
                if (cost) {

                    const j = appbaseddriver.getequipmentcostkeybyid.call(this, equipment.equipmentid, cost.costid)
                    const imageid = makeID(16)
                    const newReceipt = CreateReceipt(imageid, "")
                    if (cost.hasOwnProperty("images")) {

                        myuser.equipment[i].costs[j].images.push(newReceipt)
                    } else {
                        myuser.equipment[i].costs[j].images = [newReceipt]
                    }
                    this.uploadmyuser(equipment.equipmentid, cost.costid, imageid, myuser)


                }



            }


        }
    }

    showupload() {
        const styles = MyStylesheet();
        const getUploadFile = () => {
            if (this.state.width > 1200) {
                return ({ width: '120px' })

            } else if (this.state.width > 600) {
                return ({ width: '90px' })

            } else {
                return ({ width: '60px' })
            }
        }


        if (this.checkFile()) {


            return (<button style={{ ...styles.generalButton, ...getUploadFile() }} onClick={() => { this.uploadReceipt() }}>{uploadFile()}</button>)


        }
    }

    showuploadFile() {
        const styles = MyStylesheet();
        const receipts = this.getReceipts();


        return (<div style={{ ...styles.generalContainer, ...styles.bottomMargin10, ...styles.alignCenter }}>
            <input type="file" onChange={() => { this.setState({ render: 'render' }) }} id="receipt" />

            {this.showupload()}

            <span>There are {receipts.length} Receipts</span>
        </div>)
    }

    showreceipt(image) {
        const styles = MyStylesheet()
        const appbaseddriver = new AppBasedDriver();
        const getIcon = appbaseddriver.getremoveicon.call(this)
        const maxWidth = () => {
            if(this.state.width>1200) {
                return({ maxWidth:'1000px'})
            } else if (this.width>600) {
                return({ maxWidth:'480px'})
            } else {
                return({ maxWidth:'320px'})
            }
            
        }
        return (
            <div style={{ ...styles.generalFlex, ...styles.bottomMargin10,...styles.topMargin10}}>
                <div style={{ ...styles.flex5 }}>
                    <div style={{ ...styles.alignCenter,  }}>
                        <img style={{...maxWidth()}} key={image.id} src={image.url} alt={image.imageid} />
                    </div>
                </div>
                <div style={{ ...styles.flex1 }}>
                    <button style={{ ...styles.generalButton, ...getIcon }}
                        onClick={() => { this.handleRemoveReceipt(image.imageid) }}>{removeIconSmall()}</button>
                </div>
            </div>)

    }

    showreceipts() {
        const receipts = this.getReceipts()
        let getreceipts = [];
        if (receipts) {
// eslint-disable-next-line
            receipts.map(receipt => {
                getreceipts.push(this.showreceipt(receipt))

            })
        }
        return getreceipts;
    }



    render() {
        const styles = MyStylesheet();
        const header = new Header();
        const appbaseddriver = new AppBasedDriver()
        const myuser = appbaseddriver.getuser.call(this)
        const menufont = appbaseddriver.getHeaderFont.call(this)
        const regularFont = appbaseddriver.getRegularFont.call(this)

        if (myuser) {

            const equipment = this.getequipment();
            if (equipment) {

                const cost = this.getcost();
                if (cost) {

                    const reoccurring = (cost) => {
                        if (cost.hasOwnProperty("reoccurring")) {
                            return `Reoccurring ${cost.reoccurring.frequency}`
                        }
                    }


                    return (<div style={{ ...styles.generalContainer }}>

                        <div style={{ ...styles.generalFlex, ...styles.bottomMargin15 }}>
                            <div style={{ ...styles.flex1 }}>
                                {header.showsubheader.call(this)}
                            </div>
                        </div>

                        <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.alignCenter }}>
                            <Link to={`/${myuser.driverid}/equipment/${equipment.equipmentid}`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/{equipment.equipment}</Link>
                        </div>

                        <div style={{ ...styles.generalContainer, ...styles.bottomMargin15, ...styles.alignCenter }} >
                            <Link to={`/${myuser.driverid}/equipment/${equipment.equipmentid}/costs/${this.props.match.params.costid}`} style={{ ...styles.generalLink, ...styles.headerStyle, ...styles.boldFont, ...menufont, ...styles.menuColor, ...styles.menuBackColor, ...styles.addBorderRadius5, ...styles.generalPadding, ...styles.whiteOutline, ...styles.addMargin }}>/Receipts</Link>
                        </div>

                        <div style={{ ...styles.generalContainer, ...styles.bottomMargin10 }}>
                            <span style={{ ...regularFont, ...styles.generalFont }} onClick={() => { this.makecostactive(cost.costid) }}>
                                {reoccurring(cost)} PurchaseDate: {formatDateStringDisplay(cost.purchasedate)} Detail: {cost.detail} Amount: ${cost.amount}
                            </span>
                        </div>

                        {this.showuploadFile()}

                        <div style={{ ...styles.generalContainer, ...styles.alignCenter }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>{this.state.message}</span>
                        </div>


                        {this.showreceipts()}







                    </div>)

                } else {

                    return (<div style={{ ...styles.generalFlex }}>
                        <div style={{ ...styles.flex1 }}>
                            <span style={{ ...styles.generalFont, ...regularFont }}>Cost Not Found</span>
                        </div>
                    </div>)

                }

            } else {
                return (<div style={{ ...styles.generalFlex }}>
                    <div style={{ ...styles.flex1 }}>
                        <span style={{ ...styles.generalFont, ...regularFont }}>Equipment Not Found</span>
                    </div>
                </div>)
            }

        } else {
            return (<div style={{ ...styles.generalFlex }}>
                <div style={{ ...styles.flex1 }}>
                    <span style={{ ...styles.generalFont, ...regularFont }}>User Not Found</span>
                </div>
            </div>)
        }
    }
}

function mapStateToProps(state) {
    return {
        myusermodel: state.myusermodel,
        navigation: state.navigation
    }
}

export default connect(mapStateToProps, actions)(Receipts)