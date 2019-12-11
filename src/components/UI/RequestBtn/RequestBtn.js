import React, { Component } from 'react';
import sirenSound from '../../../sirensound.mp3';
import classes from './RequestBtn.module.css';

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
                if (!this.state.isPlaying){
                    let audio = this.state.sirenAudio;
                    audio.src = sirenSound;
                    this.setState({sirenAudio: audio});
                    this.setState({isPlaying: true});
                    this.state.sirenAudio.play();
                }else {
                    this.state.sirenAudio.pause();
                    this.setState({isPlaying: false})
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
                    <button className={[classes.Btn, classes.SirenBtn, this.state.isPlaying ? classes.Playing : null].join(' ')} onClick={this.clickHandler}>
                        {this.state.isPlaying ? 'NOTIFIED RAYMOND' : 'RAYMOND, I NEED HELP'}
                    </button>
                )
                break;
            case 'Boring':
                button = (
                    <button className={[classes.SirenBtn, this.state.isPlaying ? "Playing" : null].join(' ')} onClick={this.clickHandler}>
                        {this.state.isPlaying ? 'NOTIFIED RAYMOND' : 'RAYMOND, I NEED HELP'}
                    </button>
                )
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