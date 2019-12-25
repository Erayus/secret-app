import React, { Component } from 'react';
import sirenSound from '../../../assets/sirensound.mp3';
import classes from './RequestBtn.module.css';
import axios from '../../../axios-email'; 
import Modal from '../Modal/Modal';
import nightJasmine from '../../../assets/see_you_in_my_dreams.gif';
import nightJasmine1 from '../../../assets/goodnight.gif';
import nightJasmine2 from '../../../assets/goodnight2.gif';
import pack from '../../../assets/RaymondPack.jpg';
import pack1 from '../../../assets/RaymondPack2.jpg';
import pack2 from '../../../assets/RaymondPack3.jpg';
import pack3 from '../../../assets/RaymondPack4.jpg'; 
import pack4 from '../../../assets/RaymondPack5.jpg'; 
import pack5 from '../../../assets/RaymondPack6.jpg'; 
import pack6 from '../../../assets/RaymondPack7.jpg';
import pack7 from '../../../assets/RaymondPack8.jpg'; 
import pack8 from '../../../assets/RaymondPack9.jpg'; 
import pack9 from '../../../assets/RaymondPack10.jpg'; 
import pack10 from '../../../assets/RaymondPack11.jpg';
import pack11 from '../../../assets/RaymondPack12.jpg';  

import CSSTransition from 'react-transition-group/CSSTransition';
import lastXmas from '../../../assets/lastxmas.mp3'

class RequestBtn extends Component  {
    state = {
        audio: new Audio(),
        isPlaying: false,
        isDisabled: false,
        showModal: false,
    }

    clickHandler = () => {
        switch (this.props.btnType) {
            case 'Siren':
                this.setState( prevState => {
                    return {isPlaying: !prevState.isPlaying}
                });
                if (!this.state.isPlaying){
                    let audio = this.state.audio;
                    audio.src = sirenSound;
                    this.setState({audio: audio});
                    this.setState({isPlaying: true});
                    this.state.audio.play();
                }else {
                    this.state.audio.pause();
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
            case 'Christmas':
                this.setState({showModal: true})
                this.setState( prevState => {
                    return {isPlaying: !prevState.isPlaying}
                });
                if (!this.state.isPlaying){
                    let audio = this.state.audio;
                    audio.src = lastXmas;
                    this.setState({audio: audio});
                    this.setState({isPlaying: true});
                    this.state.audio.play();
                }else {
                    this.state.audio.pause();
                    this.setState({isPlaying: false})
                }
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
        if (this.state.audio){
            this.state.audio.pause();
            this.setState({isPlaying: false})
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
            case 'Christmas':
                button = (
                    <button className={[classes.Btn, classes.ChristmasBtn, this.state.isPlaying ? classes.Playing : null].join(' ')} onClick={this.clickHandler} disabled={this.state.isDisabled}>
                        {this.state.isPlaying ? "ENJOY THE SHOW" : "RAYMOND, IT'S CHRISTMAS'S EVE"}
                    </button>
                )
                break;
            default:
                button = null
        }

        // MODAL CONTENT
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
            case 'Christmas':
                modalContent = (
                    <div className={classes.XmasShow} style={{height: '100vh'}}>
                        <img className={[classes.Packs, classes.Pack].join(' ')} src={pack} width="120" alt="Raymond's pack"/>
                        <img className={[classes.Packs, classes.Pack1].join(' ')} src={pack1} width="150" alt="Raymond's pack1"/>
                        <img className={[classes.Packs, classes.Pack2].join(' ')} src={pack2} width="140" alt="Raymond's pack2"/>
                        <img className={[classes.Packs, classes.Pack3].join(' ')} src={pack3} width="160" alt="Raymond's pack3"/>
                        <img className={[classes.Packs, classes.Pack4].join(' ')} src={pack4} width="160" alt="Raymond's pack4"/>
                        <img className={[classes.Packs, classes.Pack5].join(' ')} src={pack5} width="140" alt="Raymond's pack5"/>
                        <img className={[classes.Packs, classes.Pack6].join(' ')} src={pack6} width="150" alt="Raymond's pack6"/>
                        <img className={[classes.Packs, classes.Pack7].join(' ')} src={pack7} width="130" alt="Raymond's pack7"/>
                        <img className={[classes.Packs, classes.Pack8].join(' ')} src={pack8} width="120" alt="Raymond's pack8"/>
                        <img className={[classes.Packs, classes.Pack9].join(' ')} src={pack9} width="160" alt="Raymond's pack9"/>
                        <img className={[classes.Packs, classes.Pack10].join(' ')} src={pack10} width="140" alt="Raymond's pack10"/>
                        <img className={[classes.Packs, classes.Pack11].join(' ')} src={pack11} width="150" alt="Raymond's pack11"/>
                    </div>
                )
                break;
            default:
                break;
        }
        return (
            <React.Fragment>
                {button}
                <Modal show={this.state.showModal} modalClosed={this.closeModal}>{modalContent}</Modal>
            </React.Fragment>
        )
}
  
}

export default RequestBtn;