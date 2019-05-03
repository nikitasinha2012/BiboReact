import React, { Component } from 'react';
import './randomButton.css';
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
import { faBible} from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RandomButtons extends Component {
    breathe_in_database=[];
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
    timer
    constructor() {
        super();
        this.state ={
            timeleft : 10
        }
    }

    componentDidMount() {
        const { random} = this.props;
       this.timer = setInterval(this.updateTimer(),1000);
       this.getRandom();
       console.log('here')
       console.log(this.breathe_in_database);
       localStorage.setItem(`random_${random}`,this.breathe_in_database);
    }

    updateTimer = () => {
        this.setState(prevState => {
            return {timeleft: prevState.timeleft - 1}
         })
        return this.updateTimer
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    getRandom = () => {
         this.breathe_in_database = [];
        while (this.breathe_in_database.length < 5) {
            const random_index = `in${Math.floor((Math.random() * 16)) + 1}`;
            console.log(random_index);
            if (this.breathe_in_database.indexOf(random_index) === -1) {
                this.breathe_in_database.push(random_index);
            }
            console.log(this.breathe_in_database);
        }
       
    }

    render() {

        const { timeleft} = this.state;
        const { step, type ,pagename} = this.props;
        if(timeleft === 0) {
            window.location.replace(pagename)
        }
        return (
            <React.Fragment>
                <h1 className="h1tag2">Step-{step}</h1>
                <p className="ptag2">Take a deep breath.</p>
                <p className="ptag2">Exhale.</p>
                <p className="ptag2">Repeat.</p>
                <p className="ptag2">Now as you breathe {type}, take a look at these images.</p>
                {
                    this.breathe_in_database.map((random_index) => {

                        console.log('random num', random_index)
                        let result = this.database_in.filter((item) => item.id === random_index)
                        console.log('result', result[0].name)
                        
                        return (
                            <div  key ={random_index} className="contain">
                                <FontAwesomeIcon icon = {result[0].name} className="buttonstyle1" />
                            </div>
                        )
                    })
                }
            <p className="ptag2"> {timeleft} seconds</p>
            </React.Fragment>
        )
    }
}

export default RandomButtons;