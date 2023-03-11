import { Component } from 'react';
import { getImages } from 'services/getImages';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import {
  Gallery,
  GalleryImage,
  GalleryWrapper,
  Message,
} from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    loading: false,
    showButton: false,
  };

  onRenderGallery(query, page) {
    this.setState({ loading: true });
    getImages(query, page)
      .then(({ hits, total, totalHits }) => {
        if (hits.length) {
          this.setState({ showButton: true });
          this.setState(prevState => {
            return { images: [...prevState.images, ...hits] };
          });
        }

        if (total === 0) {
          return this.setState({
            error: `No images or photos of ${query}`,
          });
        }

        if (page * 12 >= totalHits) {
          this.setState({ showButton: false });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue;
    const nextName = this.props.searchValue;
    const { page } = this.state;
    if (prevName !== nextName) {
      this.setState({ images: [], page: 1, showButton: false, error: null });
    }
    if (
      (prevName === nextName && prevState.page !== page) ||
      (prevName !== nextName && page === 1)
    ) {
      this.onRenderGallery(nextName, page);
    }
  }

  loadMoreBtnHandler = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, error, showButton, loading } = this.state;
    const { searchValue } = this.props;
    return (
      <GalleryWrapper>
        {!searchValue && (
          <Message>Enter a word or phrase to search images and photos</Message>
        )}

        {error && <Message>{error}</Message>}

        {loading && <Loader />}

        <Gallery>
          {images.map(({ id, webformatURL, largeImageURL }) => {
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
        {showButton && <Button onClick={this.loadMoreBtnHandler} />}
      </GalleryWrapper>
    );
  }
}

// export class ImageGallery extends Component {
//   state = {
//     images: [],
//     page: 1,
//     error: null,
//     status: 'idle',
//     showButton: false,
//     query: '',
//   };

// loadMoreBtnHandler = () => {
//   this.setState({ page: this.state.page + 1 });
// };

//   onRenderGallery(query, page) {
//     const { images } = this.state;
//     getImages(query, page)
//       .then(({ hits, total, totalHits }) => {
// if (total === 0) {
//   return this.setState({
//     error: `No images or photos of ${query}`,
//     status: 'rejected',
//   });
// }
// if (hits.length) {
//   this.setState({ showButton: true });
// }
// if (page * 12 >= totalHits) {
//   this.setState({ showButton: false });
// }
//         this.setState({ images: [...images, ...hits], status: 'resolved' });
//       })
//       .catch(error => this.setState({ error, status: 'rejected' }));
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.searchValue;
//     const nextName = this.props.searchValue;
//     const { page, query } = this.state;
//     if (nextName !== prevName) {
//       this.setState({ query: nextName });
//       // this.setState({ status: 'pending', images: [], page: 1 });
//       // this.onRenderGallery(nextName, page);
//     }
//     if (query !== prevState.query) {
//       this.setState({ images: [], page: 1, status: 'pending' });
//     }
//     if (
//       (nextName !== prevName && page === 1) ||
//       (nextName === prevName && page !== prevState.page)
//     ) {
//       this.onRenderGallery(nextName, page);
//     }
//   }

//   render() {
// const { images, error, status, showButton } = this.state;
// const { searchValue } = this.props;

//     if (status === 'idle') {
//       return <p>No Photos</p>;
//     }

//     if (status === 'pending') {
//       return <Loader />;
//     }

//     if (status === 'rejected') {
//       return <h2>{error.message}</h2>;
//     }

//     if (status === 'resolved') {
//       return (
// <GalleryWrapper>
//   <Gallery>
//     {images.map(({ id, webformatURL, largeImageURL }) => {
//       return (
//         <GalleryImage key={id}>
//           <GalleryItem
//             webImage={webformatURL}
//             largeImage={largeImageURL}
//             id={id}
//             searchValue={searchValue}
//           />
//         </GalleryImage>
//       );
//     })}
//   </Gallery>
//   {showButton && <Button onClick={this.loadMoreBtnHandler} />}
// </GalleryWrapper>
//       );
//     }
//   }
// }
