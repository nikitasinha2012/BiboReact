import React, { Component } from 'react';
import './result.css';
class result extends Component {
    constructor(props) {
        super(props);
        this.onNextPage = this.onNextPage.bind(this);
        this.onNextPage = this.onNextPage.bind(this);
        this.state = { total_participants: 0, correct_in: 0, correct_out: 0, percentage_in: 0, percentage_out: 0, previous_result: 0 }
    }
    componentDidMount() {
        let result = this.makeRequest()
       
    }
    makeRequest = () => {
        fetch('https://rocky-bastion-33424.herokuapp.com/store/getitem', 
        {headers: {'Access-control-allow-origin': '*'}})
            .then((res) => res.json())
            .then((body) => {
                console.log('body', body)
                const correct_in = body.previous_result.correct_in;
                const correct_out=body.previous_result.correct_out;
                const percentage_in=body.previous_result.percentage_in;
                const percentage_out=body.previous_result.percentage_out;
                const total_participants=body.total_participants;
                const breathe_in_percent=body.breathe_in_percent;
                const breathe_out_percent=body.breathe_out_percent;
                this.setState({
                    correct_in,
                    correct_out,
                    percentage_in,
                    percentage_out,
                    total_participants,
                    breathe_in_percent,
                    breathe_out_percent
                });
            })
    }
    onNextPage() {
        this.props.history.push('/');
        localStorage.setItem('selected_in','0');
        localStorage.setItem('selected_out','0');
        localStorage.setItem('percentage_in','0');
        localStorage.setItem('percentage_out','0');
    }
    render() {
        return (
            <React.Fragment >
                <div>
                    <h1 className='h1tag4'>Done</h1>
                    <h3 className='h3tag1'>Thanks for participating in this experiment.</h3>
                    <h4 className='h4tag'>Your scores</h4>
                    <div className="col-sm-6 ta">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>In</td>
                                    <td id={`${percentage_in > percentage_out ? 'in_score' : ''}`} name="inscore">{this.state.correct_in}</td>
                                    <td id="in_score1" name="inscore1">{this.state.percentage_in}</td>
                                </tr>
                                <tr>
                                    <td>Out</td>
                                    <td id={`${percentage_in < percentage_out ? 'in_score' : ''}`} name="outscore">{this.state.correct_out}</td>
                                    <td id="out_score1" name="outscore1">{this.state.percentage_out}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className='h2tag1'> SUMMARY</h2>
                    <p className='p1tag'>Number of participants :{this.state.total_participants} </p>
                    <p className='p1tag'>Average percentage of correct answers guessed  while breathing in : {this.state.breathe_in_percent} %</p>
                    <p className='p1tag'>Average percentage of correct answers guessed  while breathing out : {this.state.breathe_out_percent} %</p>
                    <button onClick={this.onNextPage} className="buttonstyle" >TRY AGAIN!</button>
                </div>
            </React.Fragment>
        )
    }
}
export default result;