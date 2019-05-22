import React, { Component } from "react";
import './AllButtons.css';
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
class AllButtons extends Component {
    notify = (msg) => toast(msg);
    alertt=(msg)=>toast(msg);
    constructor(props) {
        super(props);
        this.onNextPage = this.onNextPage.bind(this);
        this.onSelect=this.onSelect.bind(this);
        this.state={selected_id:[]}
    }
    onNextPage() {
        this.props.onNextPage(this.state.selected_id)
    }

    onSelect(id)
    {
        const { selected_id } = this.state;
        console.log('selected_id', selected_id)
        if  (selected_id.indexOf(id) === -1)
        {
            if(selected_id.length > 4) 
            {
            this.notify(`You have already selected 5.Click on ${this.props.name} to continue.`)
            } else {
            selected_id.push(id)
        }
        }
        else
        {
            let i=selected_id.indexOf(id)
            selected_id.splice(i, 1);
        }
        this.setState({selected_id})
    }
    getByColor(id) {
        const { selected_id}=this.state;
        const { step,name } = this.props;
        return  selected_id.indexOf(id) === -1 ? '' : 'selected'
    }
    database_in = [
        { "name": faAmbulance, "id": 'in1' },
        { "name": faArchway, "id": 'in2' },
        { "name": faBell, "id": 'in3' },
        { "name": faBatteryHalf, "id": 'in4' },
        { "name": faClock, "id": 'in5' },
        { "name": faBookOpen, "id": 'in6' },
        { "name": faNewspaper, "id": 'in7' },
        { "name": faChess, "id": 'in8' },
        { "name": faPlaceOfWorship, "id": 'in9' },
        { "name": faHotel, "id": 'in10' },
        { "name": faUniversity, "id": 'in11' },
        { "name": faBug, "id": 'in12' },
        { "name": faBible, "id": 'in13' },
        { "name": faMicrophone, "id": 'in14' },
        { "name": faHome, "id": 'in15' },
        { "name": faPencilAlt, "id": 'in16' }
    ];
    render() {
        return (
            <React.Fragment>
                <h1 className="h1tag3">Step-{this.props.step}</h1>
                <p className="ptag3">Which of the following images do you remember seeing?</p>
                {this.database_in.map((item,index) => {
                    
                    return(
                        <span key={index} >     
                            <FontAwesomeIcon icon={item.name} fixedWidth={true} className={`buttonstyling ${this.getByColor(item.id)}`} onClick={() => this.onSelect(item.id)} />
                            {(index+1) % 4 === 0 && <br />}
                        </span>
                   )
                })}
                <div>
                <button onClick={this.onNextPage} className="buttonstyle2">{this.props.name}</button>
                <ToastContainer />
                </div>
            </React.Fragment>
        );
    }
}
export default AllButtons;