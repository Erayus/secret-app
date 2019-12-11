import React, { Component } from 'react';
import sirenSound from '../../../sirensound.mp3';
import classes from './RequestBtn.module.css';
import axios from '../../../axios-email'; 
class RequestBtn extends Component  {
    state = {
        sirenAudio: new Audio(),
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

                if (!this.state.isPlaying){
                    const emailData = {
                        toAddress: 'raymondhieutran@gmail.com',
                        emailName: 'My Jasmine',
                        subject: 'Jasmine Is In Danger',
                        recipientName: 'Raymond',
                        message: 'Jasmine is in danger. Text or find her',
                        signature: 'From Ngao With Love'
                    }
                    axios.post('', emailData)
                    .then(
                        (response) => console.log(response)
                    )
                    .catch(
                        (error) => console.log(error)
                    )
                }


                break
            case 'Boring':
                if (!this.state.isPlaying){
                    const emailData = {
                        toAddress: 'raymondhieutran@gmail.com',
                        emailName: 'My Jasmine',
                        subject: 'Jasmine Is Bored',
                        recipientName: 'Raymond',
                        message: 'Jasmine is bored. Move your ass',
                        signature: 'From Ngao With Love'
                    }
                    axios.post('', emailData)
                    .then(
                        (response) => console.log(response)
                    )
                    .catch(
                        (error) => console.log(error)
                    )
                }
                
                break;
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
                    <button className={[classes.Btn, classes.BoringBtn, this.state.isPlaying ? classes.Playing : null].join(' ')} onClick={this.clickHandler}>
                        {this.state.isPlaying ? "RAYMOND IS NOT A JOKE" : "RAYMOND, I'M BORED"}
                    </button>
                )
                break;
            default:
                button = null
        }
        return (
            <div>
                {button}
            </div>
        )
}
  
}

export default RequestBtn;