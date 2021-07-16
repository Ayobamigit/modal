import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import ModalContent from './components/ModalContent/ModalContent';


const Home = () => {
    const [state, setState] = useState({
        showModal: false
    })

    const {showModal} = state;

    const onLaunchModal = () =>{
        setState(state=>({
            ...state,
            showModal: true
        }))
    }

    const onCloseModal = () =>{
        setState(state=>({
            ...state,
            showModal: false
        }))
    }
    return (
        <>
            <Modal show = {showModal} modalClosed = {onCloseModal}>
                <ModalContent modalClosed = {onCloseModal} />
            </Modal>
            <div className="home-page">
                <p className="description">
                    Click the button below to launch the modal!
                </p>
                <button onClick={onLaunchModal} className="launch-button">Launch Modal</button>  
            </div>
        </>
    )
}

export default Home
