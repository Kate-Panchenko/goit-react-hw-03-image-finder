import { Component } from 'react';
import { getImages } from 'services/getImages';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery, GalleryImage } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue;
    const nextName = this.props.searchValue;
    if (prevName !== nextName) {
      this.setState({ loading: true, images: null });
      getImages(nextName)
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;
    const { searchValue } = this.props;
    return (
      <div>
        {error && <h2>{error.message}</h2>}
        {!images && <p>No photos</p>}
        {loading && <p>Loading...</p>}
        {images && (
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
        )}
      </div>
    );
  }
}
