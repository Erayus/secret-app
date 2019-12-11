import React, { Component } from 'react';
import sirenSound from '../../../sirensound.mp3';

class RequestBtn extends Component  {
    state = {
        sirenAudio: new Audio,
        isPlaying: false
    }

    clickHandler = () => {
        this.setState( prevState => {
            return {isPlaying: !prevState.isPlaying}
        });
        switch (this.props.btnType) {
            case 'Siren':
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
                break
            default:
                return null
        }
    }

    render(){
        let button = null;
        switch (this.props.btnType) {
            case 'Siren':
                button = (
                <button className={["SirenBtn", this.state.isPlaying ? "Playing" : null].join(' ')} onClick={this.clickHandler}>
                    {this.state.isSirenPlaying ? 'NOTIFIED RAYMOND' : 'RAYMOND, I NEED HELP'}
                </button>
                )
                break;
            default:
                button = null;
                break;
        }
        return (
            <div>
                {button}
            </div>
        )
}
  
}

export default RequestBtn;