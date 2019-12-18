import React from 'react';
import Modal from 'react-modal';

//The prop value will determine if the Modal will show or not
const OptionModal = (props) => (
  <Modal
  //selectedOptions can be string or undifined but we will change them to true boolan?
  //real boolan value?
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    //click the background and the board disappear 
    onRequestClose={props.handleClearSelectedOption}
    >
    <h3>Selected option</h3>
    {/* if the selectedOption is true return text */}
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okey</button>
  </Modal>
)

export default OptionModal;