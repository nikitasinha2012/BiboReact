import React, { Component } from "react";
import './nextpage2.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllButtons from '../AllButtons'
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