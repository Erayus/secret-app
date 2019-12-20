import React, {Component} from 'react';
import './App.css';
import RequestBtn from './components/UI/RequestBtn/RequestBtn';

class App extends Component{
  state = {
    isSirenPlaying: false,
    quotes: [
      'Don’t be scared if a big fat man comes in to your room and stuffs you in a bag… I told Santa I want you for Christmas!!!',
      'Hey last time I was coding, I noticed on my keyboard that “u” and “i” are always together',
      "If you are tired, fall on me",
      "Sao hôm nào cũng xinh thệ?",
      'In my dictionary, there is no "gorgeous" word.....because you stole the definition of it',
      ''
    ]
  }

  render(){

    const randomNum = Math.floor(Math.random()*this.state.quotes.length);
    const quote = this.state.quotes[randomNum];

    return (
      <div className="App">
        <header className="App-header" style={{paddingTop: '16px'}}>
          <h1 >Hi Jasmine <span style={{fontSize: '8px'}}>Ngáo</span></h1>
          <p style={{fontSize: '17px', padding: '0px 15px'}}><em>{quote}</em></p>
        </header> 
        <div className="App-Body">
          <RequestBtn btnType='Siren'/>
          <RequestBtn btnType='Boring'/>
          <RequestBtn btnType='Sleepy'/>
        </div>
      </div>
    )
  };
}

export default App;
