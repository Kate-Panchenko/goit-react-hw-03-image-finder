import { LoadMoreBtn, ButtonWrapper } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <LoadMoreBtn type="button" onClick={onClick}>
        Load more
      </LoadMoreBtn>
    </ButtonWrapper>
  );
};
