import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import sirenSound from './sirensound.mp3';

let siren = null;
class App extends Component{
  state = {
    sirenAudio: new Audio,
    isSirenPlaying: false,
    quotes: [
      'You look beautiful today. Have a lovely day!',
      'Hope I was in there last night to keep the nightmares away'
    
    ]
  }
  activateSirenSound = () => {
    if (!this.state.isSirenPlaying){
      let audio = this.state.sirenAudio;
      audio.src = sirenSound;
      this.setState({sirenAudio: audio});
      this.setState({isSirenPlaying: true});
      this.state.sirenAudio.play();
    }else {
      this.state.sirenAudio.pause();
      this.setState({isSirenPlaying: false})
    }
  }

  render(){

    const randomNum = Math.floor(Math.random()*this.state.quotes.length);
    const quote = this.state.quotes[randomNum];

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi Jasmine <span style={{fontSize: '8px'}}>Ngáo</span></h1>
          <p style={{fontSize: '16px'}}><em>{quote}</em></p>
        </header> 
        <div className="App-Body">
          <button className={["SirenBtn", this.state.isSirenPlaying ? "Playing" : null].join(' ')} onClick={this.activateSirenSound}>
            {this.state.isSirenPlaying ? 'NOTIFIED RAYMOND' : 'RAYMOND, I NEED HELP'}
          </button>
        </div>
      </div>
    )
  };
}

export default App;
