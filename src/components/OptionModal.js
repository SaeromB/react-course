import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={false}
    contentLabel='Selected Option'
    >
    <h3>Selected option</h3>
  </Modal>
)

export default OptionModal;