import React from 'react';
import { ReactComponent as Close } from '../../assets/close.svg';

const ModalContent = (props) => {
    return (
        <div className="modal-content">
            <div className="modal-close">
                <Close onClick = {props.modalClosed} />
            </div>
            <div>
                <h1 className="modal-heading">Modal Heading</h1>
            </div>

            <div>
                <p className="modal-text">Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the body so that modal content scrolls instead. Clicking on the modal “backdrop” will automatically close the modal. <br />
                In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window.
                A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box.
                </p>
            </div>

            <div className="modal-footer">
                <button className="modal-button" onClick={props.modalClosed}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ModalContent
