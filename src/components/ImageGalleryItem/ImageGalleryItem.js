import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image } from './ImageGalleryItem.styled';

export class GalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    const { webImage, largeImage, searchValue } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <Image src={webImage} alt={searchValue} onClick={this.toggleModal} />
        {showModal && (
          <Modal
            largeImage={largeImage}
            onClose={this.toggleModal}
            alt={searchValue}
          />
        )}
      </>
    );
  }
}
