import React, { Component } from "react";
import './nextpage2.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { faArchway } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBatteryHalf } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faBible } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllButtons from '../Components/AllButtons'
class nextpage2 extends Component {
    alertt=(msg)=>toast(msg);

    onNextPage = (selected_id) => {
        localStorage.setItem('selected_in',selected_id);
        if(selected_id.length <5)
            this.alertt("Please choose 5 buttons to continue");
        else{
            console.log(this.props);
            this.props.history.push('/nextpage3');
        }
    }

    render() {
        console.log('this.props', this.props)
        return (
            <AllButtons history={this.props.history} step={'2'} pagename={'/nextpage3'} name={'NEXT'} onNextPage={this.onNextPage}/>
        );
    }
}
export default nextpage2;