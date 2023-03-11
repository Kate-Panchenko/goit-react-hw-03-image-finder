import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImageModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = evt => {
    if (evt.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ImageModal>
          <img src={largeImage} alt={alt} />
        </ImageModal>
      </Overlay>,
      modalRoot
    );
  }
}
