import { Image } from './ImageGalleryItem.styled';

export const GalleryItem = ({ id, webImage, largeImage, searchValue }) => {
  return (
    <>
      <Image src={webImage} alt={searchValue} />
    </>
  );
};
