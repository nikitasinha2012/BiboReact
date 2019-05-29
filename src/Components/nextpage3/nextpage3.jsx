import React, { Component } from 'react';
import './nextpage3.css';
import RandomButtons from '../RandomButtons';
class nextpage1 extends Component {
    render() {
        return (
            <RandomButtons step={'3'} type={'out'} pagename={'/nextpage4'} random={'out'}/>
        )
    }
}
export default nextpage1;