import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0 12px 0;
`;

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const GalleryImage = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Message = styled.p`
  font-weight: 600;
  margin-top: 32px;
  font-size: 24px;
  line-height: 1.21;
  color: ${props => props.theme.black};
  text-align: center;
`;
