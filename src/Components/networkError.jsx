import React , {Component} from 'react';
class networkError extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            
            <React.Fragment>
                <div>
                <h1 className="h1tag1">Server is currently down. Please try again later.</h1>
                </div>
            </React.Fragment> 
        )
    }
}
export default networkError;