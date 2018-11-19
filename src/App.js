import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from  'react-redux'
import { createStore } from  'redux'
import Result from './Containers/Result';

const  houses = [
  'Serpentard',
  'Griffondor',
  'Serdaigle',
  'Pouffsoufle',
];


// const reducer = (state, action) => ({
//   houses,
//   selectedHouses:  houses[Math.floor(Math.random() * 4)]
// })

const reducer = (state, action) => {    
    switch(action.type) {
      case "UPDATE_CHOICE_WITH_MY_INDEX" :
        return  {selectedHouses : houses[Math.floor(Math.random()  *  4)], houses}
      default :
        return state
    }
}


const  store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider  store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <Result />
      </div>
      </Provider>
    );
  }
}

export default App;
