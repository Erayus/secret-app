import React, {Component} from 'react'
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import CSSTransition from 'react-transition-group/CSSTransition'

const animationTiming = {
    enter: 800,
    exit: 400
}

class Modal extends Component{

    //Only update when this 'show' property is different than the last show property (only update when the modal is open or close)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show && this.props !== nextProps ;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update!')
    }
    render() {
        const modalClasses = [classes.Modal, this.props.show ? classes.ModalOpen : classes.ModalClose].join(' ');
        return (
                <CSSTransition
                    mountOnEnter
                    unmountOnExit
                    in={this.props.show}
                    timeout={animationTiming}
                    classNames={{
                        enter: '',
                        enterActive: classes.ModalOpen,
                        exit: '',
                        exitActive: classes.ModalClose
                    }}
                >
                    <React.Fragment>
                        <div className={classes.Modal} style={{background: "url('https://image.freepik.com/free-vector/christmas-background-red_8608.jpg')"}}>
                            {this.props.children}
                        </div>
                        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                    </React.Fragment>  
                </CSSTransition>
        )
    }

};

export default Modal;
