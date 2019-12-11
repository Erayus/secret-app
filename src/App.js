import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RequestBtn from './components/UI/RequestBtn/RequestBtn';

class App extends Component{
  state = {
    isSirenPlaying: false,
    quotes: [
      'You look beautiful today. Have a lovely day!',
      'Hope I was in there last night to keep the nightmares away. Great day em!'
    ]
  }
  activateSirenSound = () => {
   
  }

  render(){

    const randomNum = Math.floor(Math.random()*this.state.quotes.length);
    const quote = this.state.quotes[randomNum];

    return (
      <div className="App">
        <header className="App-header" style={{paddingTop: '16px'}}>
          <h1 >Hi Jasmine <span style={{fontSize: '8px'}}>Ngáo</span></h1>
          <p style={{fontSize: '16px'}}><em>{quote}</em></p>
        </header> 
        <div className="App-Body">
          <RequestBtn btnType='Siren'/>
          <RequestBtn btnType='Boring'/>
        </div>
      </div>
    )
  };
}

export default App;
