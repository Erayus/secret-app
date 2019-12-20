import React, {Component} from 'react';
import './App.css';
import RequestBtn from './components/UI/RequestBtn/RequestBtn';

class App extends Component{
  state = {
    isSirenPlaying: false,
    quotes: [
      'On the 24th, don’t be scared if a big fat man comes in to your room and stuffs you in a bag… I told Santa I want you for Christmas!!!',
      'Hey last time I was coding, I noticed on my keyboard that “u” and “i” are always together',
      "If you are tired, fall on me",
      "Sao hôm nào cũng xinh thệ?"
    ]
  }

  render(){

    const randomNum = Math.floor(Math.random()*this.state.quotes.length);
    const quote = this.state.quotes[randomNum];

    return (
      <div className="App">
        <header className="App-header" style={{paddingTop: '16px'}}>
          <h2 >Hi Jasmine <span style={{fontSize: '8px'}}>Ngáo</span></h2>
          <p style={{fontSize: '17px', padding: '0px 15px'}}><em>{quote}</em></p>
        </header> 
        <div className="App-Body">
          <RequestBtn btnType='Boring'/>
          <RequestBtn btnType='Sleepy'/>
          <div className="mx-auto mt-2"  style={{width: "180px", border: "1px solid black" }}></div>
          <div className="mt-3">
            <RequestBtn  btnType='Siren'/>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
