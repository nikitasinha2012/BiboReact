import React, { Component } from 'react';
import './nextpage1.css';
import RandomButtons from '../RandomButtons';
class nextpage1 extends Component {
    render() {

        return (
           <RandomButtons step={'1'} type={'in'} pagename={'/nextpage2'} random={'in'} />
        )
    }
}
export default nextpage1;