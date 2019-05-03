import React, { Component } from 'react';
import './nextpage1.css';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
// import { faArchway } from "@fortawesome/free-solid-svg-icons";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { faBatteryHalf } from "@fortawesome/free-solid-svg-icons";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
// import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
// import { faChess } from "@fortawesome/free-solid-svg-icons";
// import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
// import { faHotel } from "@fortawesome/free-solid-svg-icons";
// import { faUniversity } from "@fortawesome/free-solid-svg-icons";
// import { faBug } from "@fortawesome/free-solid-svg-icons";
// import { faBible} from "@fortawesome/free-solid-svg-icons";
// import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RandomButtons from '../Components/RandomButtons';

class nextpage1 extends Component {
    render() {

        return (
           <RandomButtons step={'1'} type={'in'} pagename={'/nextpage2'} random={'in'} />
        )
    }
}

export default nextpage1;