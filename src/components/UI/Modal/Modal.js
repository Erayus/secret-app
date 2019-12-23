import React, {Component} from 'react'
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    //Only update when this 'show' property is different than the last show property (only update when the modal is open or close)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show && this.props !== nextProps ;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update!')
    }
    render() {
        const modalClasses = [classes.Modal, this.props.show && classes.ModalOpen].join(' ');
        return (
            <React.Fragment>
                <div className={modalClasses}
                >
                    {this.props.children}
                </div>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            </React.Fragment>
        )
    }

};

export default Modal;
