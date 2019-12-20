import React, { Component } from 'react';
import sirenSound from '../../../assets/sirensound.mp3';
import classes from './RequestBtn.module.css';
import axios from '../../../axios-email'; 
import Modal from '../Modal/Modal';
import nightJasmine from '../../../assets/see_you_in_my_dreams.gif';
import nightJasmine1 from '../../../assets/goodnight.gif';
import nightJasmine2 from '../../../assets/goodnight2.gif';


class RequestBtn extends Component  {
    state = {
        sirenAudio: new Audio(),
        isPlaying: false,
        isDisabled: false,
        showModal: false
    }

    clickHandler = () => {
        switch (this.props.btnType) {
            case 'Siren':
                this.setState( prevState => {
                    return {isPlaying: !prevState.isPlaying}
                });
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
                    this.sendEmail(emailData)
                }
                break
            case 'Boring':
                this.setState( prevState => {
                    return {isPlaying: !prevState.isPlaying}
                });
                this.setState({isDisabled: true});
                if (!this.state.isPlaying){
                    const emailData = {
                        toAddress: 'raymondhieutran@gmail.com',
                        emailName: 'My Jasmine',
                        subject: 'Jasmine Is Bored',
                        recipientName: 'Raymond',
                        message: 'Jasmine is bored. Move your ass',
                        signature: 'From Ngao With Love'
                    }
                setTimeout(()=> {
                    this.setState({isDisabled: false, isPlaying: false});
                }, 3000)
                this.sendEmail(emailData);
                }
                break;
            case 'Sleepy':
                this.setState({showModal: true});
                break;
            default:
                return null
        }
    }

    sendEmail(emailData) {
        axios.post('', emailData)
                    .then(
                        (response) => console.log(response)
                    )
                    .catch(
                        (error) => console.log(error)
                    )
    }

    closeModal = () => {
        this.setState({showModal: false})
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
                    <button className={[classes.Btn, classes.BoringBtn, this.state.isPlaying ? classes.Playing : null].join(' ')} onClick={this.clickHandler} disabled={this.state.isDisabled}>
                        {this.state.isPlaying ? "RAYMOND IS NOT A JOKE" : "RAYMOND, I'M BORED"}
                    </button>
                )
                break;
            case 'Sleepy':
                    button = (
                        <button className={[classes.Btn, classes.SleepyBtn, this.state.isPlaying ? classes.Playing : null].join(' ')} onClick={this.clickHandler} disabled={this.state.isDisabled}>
                            {this.state.isPlaying ? "NIGHTMARES, COME TO ME INSTEAD" : "RAYMOND, I'M SLEEPY"}
                        </button>
                    )
                    break;
            default:
                button = null
        }

        let modalContent = null;
        switch (this.props.btnType) {
            case 'Siren':
                break;
            case 'Boring':
                break;
            case 'Sleepy':
                const goodnights = [nightJasmine, nightJasmine1, nightJasmine2];
                const goodnightToday = goodnights[Math.floor(Math.random()*goodnights.length)]
                modalContent = (
                    <div>
                        <h5><em>Nightmares, leave Jasmine alone! Come to me instead.</em></h5>
                        <img src={goodnightToday} width="100%" />
                    </div>
                );
                break;
            default:
                button = null
        }
        return (
            <div>
                {button}
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>{modalContent}</Modal>
            </div>
        )
}
  
}

export default RequestBtn;