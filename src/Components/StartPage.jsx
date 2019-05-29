import React , {Component} from 'react';
class StartPage extends Component {
    constructor(props){
        super(props);
        this.onNextPage = this.onNextPage.bind(this);
    }
    onNextPage(){
        this.props.history.push('/nextpage1'); 
    }
    render() {
        return (
            
            <React.Fragment>
                <div>
                <h1 className="h1tag">Breathe In, Breathe Out</h1>
                <h4 className="h4tag">An experiment to determine the correlation betweeen our breath and memory.</h4>
                <button onClick={this.onNextPage} className="buttonstyle">START</button>
                </div>
            </React.Fragment>
           
            
        )
    }
}

export default StartPage;