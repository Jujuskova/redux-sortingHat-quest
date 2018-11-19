import React from 'react';
import Message from '../Components/Message';
import {connect} from 'react-redux';


const action = {
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    selectedIndex: Math.floor(Math.random()  *  4)
}

class Result extends React.Component {
    constructor(props) {
        super(props); 
        
        setInterval(() =>  this.props.dispatch(action), 1000)
    }
    
    
    render() {
        return (
            <div>
                <ul>
                    {this.props.houses && this.props.houses.map(house  =>  <li  key={house}>{house}</li>)}
                </ul>
                
                <Message  selectedHouse={this.props.selectedHouses}  />
                
            </div>
        )
    }
}

export default connect(store => store)(Result);