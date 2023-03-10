import { Component } from 'react';
import { getImages } from 'services/getImages';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryImage } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue;
    const nextName = this.props.searchValue;
    if (prevName !== nextName) {
      this.setState({ status: 'pending' });
      getImages(nextName)
        .then(images => {
          console.log(images);
          if (images.total === 0) {
            return this.setState({
              error: `No images or photos of ${nextName}`,
              status: 'rejected',
            });
          }
          this.setState({ images, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status } = this.state;
    const { searchValue } = this.props;

    if (status === 'idle') {
      return <p>No photos</p>;
    }

    if (status === 'pending') {
      return <p>Loading...</p>;
    }

    if (status === 'rejected') {
      return <h2>{error}</h2>;
    }

    if (status === 'resolved') {
      return (
        <Gallery>
          {images.hits.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <GalleryImage key={id}>
                <GalleryItem
                  webImage={webformatURL}
                  largeImage={largeImageURL}
                  id={id}
                  searchValue={searchValue}
                />
              </GalleryImage>
            );
          })}
        </Gallery>
      );
    }
  }
}
