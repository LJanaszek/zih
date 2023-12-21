import * as React from 'react';
import Modal from 'react-modal'

const customStyles = {
  content: {
    
    
  }
};


interface PropTypes {
  isModalOpen: boolean,
  onClose(event: React.MouseEvent<Element, MouseEvent>):void ,
  title: string,
}


const ModalComponent = ({
  isModalOpen,
  onClose,
  title,
}: PropTypes) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel={title}
      >
      </Modal>
    </div>
  )
}

export default ModalComponent;

