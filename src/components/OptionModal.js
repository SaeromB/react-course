import React from 'react';
import Modal from 'react-modal';
// Modal has it's own dom and own set of classes.

//The prop value will determine if the Modal will show or not
const OptionModal = (props) => (
  <Modal
  //selectedOptions can be string or undifined but we will change them to true boolan?
  //real boolan value?
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    ariaHideApp={false}
    // This is the amout of time you want to get to get div
    closeTimeoutMS={200}
    className="modal"

    //click the background and the board disappear 
    onRequestClose={props.handleClearSelectedOption}
    >
    <h3 className="modal__title">Selected option</h3>
    {/* if the selectedOption is true return text */}
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>Okey</button>
  </Modal>
)

export default OptionModal;