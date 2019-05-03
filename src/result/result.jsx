import React , {Component} from 'react';
import './result.css';
class result extends Component {
    constructor(props){
        super(props);
        this.onNextPage = this.onNextPage.bind(this);
    }
    componentDidMount(){
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange= function()
        // {
        //     if(this.readyState==4 && this.status==200)
        //     {
        //         console.log('result', this.responseText)
        //         // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['total_participants']);
        //         // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_in_percent']);
        //         // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_out_percent']);
        //         // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_in_correct']);
        //         // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['breathe_out_correct']);
        //         // console.log('JSON.parse(this.responseText)', JSON.parse(this.responseText)['previous_result']);
                
        //     }
        // };
        // xhttp.open("GET","https://rocky-bastion-33424.herokuapp.com/store/getitem",true);
        // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhttp.setRequestHeader("Content-Type", "application/json");
        // xhttp.send(); 

        fetch('https://rocky-bastion-33424.herokuapp.com/store/getitem',{method: 'GET'}).then((res) => {
            console.log('result', res)
        })
    }
    onNextPage(){
        this.props.history.push('/');
        
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
                <td id="in_score" name="inscore"></td>
                <td id="in_score1" name="inscore1"></td>
                </tr>
                <tr>
                <td>Out</td>
                <td id="out_score" name="outscore"></td>  
                <td id="out_score1" name="outscore1"></td>
                </tr>
                </tbody>
                </table>
                </div>
                <h2  className='h2tag1'> SUMMARY</h2>
                <p className='p1tag'>Number of participants : </p>
                <p className='p1tag'>Average percentage of correct answers guessed  while breathing in </p>
                <p className='p1tag'>Average percentage of correct answers guessed  while breathing out</p>
                <button onClick={this.onNextPage} className="buttonstyle" >TRY AGAIN!</button>
                </div>
            </React.Fragment>
           
            
        )
    }
}

export default result;