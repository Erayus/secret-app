import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RequestBtn from './components/UI/RequestBtn/RequestBtn';

class App extends Component{
  state = {
    isSirenPlaying: false,
    quotes: [
      'Be a pineapple, stand tall, wear a crown and be sweet on the inside',
      'You are not short, your height is just cute :)',
      'In my dictionary, there is no "gorgeous" word because you stole the definition of it',
      'Nếu có thể, anh tham thêm 1 đời nữa được không?'
    ]
  }

  render(){

    const randomNum = Math.floor(Math.random()*this.state.quotes.length);
    const quote = this.state.quotes[randomNum];

    return (
      <div className="App">
        <header className="App-header" style={{paddingTop: '16px'}}>
          <h1 >Hi Jasmine <span style={{fontSize: '8px'}}>Ngáo</span></h1>
          <p style={{fontSize: '16px', padding: '0px 15px'}}><em>{quote}</em></p>
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
