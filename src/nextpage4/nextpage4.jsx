import React, { Component } from "react";
import './nextpage4.css';
import AllButtons from "../Components/AllButtons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class nextpage4 extends Component {
    alertt=(msg)=>toast(msg);
    onNextPage=(selected_id)=> {
        localStorage.setItem('selected_out',selected_id);
        if(selected_id.length <5)
            this.alertt("Please choose 5 buttons to continue");
        else{
            var total=5;
        const random_in=localStorage.getItem('random_in');
        const random_out=localStorage.getItem('random_out');
        const selected_in=localStorage.getItem('selected_in');
        const selected_out=localStorage.getItem('selected_out');
        const correct_in = this.calculateCorrectAnswer(random_in,selected_in);
        const correct_out = this.calculateCorrectAnswer(random_out,selected_out);
        const percentage_in=(correct_in/total)*100;
        const percentage_out=(correct_out/total)*100;
        console.log('correct in',correct_in );
        console.log('correct out',correct_out);
        console.log('percentage in',percentage_in);
        console.log('percentage out',percentage_out);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange= function()
        {
          console.log('state', this.readyState, this.status, this.statusText)
        if(this.readyState==4 && this.status==200)
          {
           console.log('SUCCESS!!');
           window.location.replace("/result");
          } else {
            console.log("request failed")
          }
        };
       xhttp.open("GET","https://rocky-bastion-33424.herokuapp.com/store?percentage_in=" + percentage_in + "&percentage_out=" + percentage_out+ "&correct_in=" + correct_in + "&correct_out=" + correct_out , true);
       xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
       xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhttp.send(); 
         }   
        }
    calculateCorrectAnswer = (random,selected) => {
       
        const formattedRandom = random.split(',');
        const formattedSelcted = selected.split(',')
        var correct = 0;
        for(var i=0;i<formattedSelcted.length;i++){
            for(var j=0;j<formattedRandom.length;j++)
            {
                if(formattedSelcted[i].localeCompare(formattedRandom[j]) == 0){
                    correct++;
                }
            }
        }
        return correct;
    }
    
    render() {
        
        return (<AllButtons history={this.props.history}  step={'4'} pagename={'/result'} name={'DONE'} onNextPage={this.onNextPage}/>
        );
        
    }
}
export default nextpage4;