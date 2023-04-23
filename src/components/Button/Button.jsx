import { StyledBtn } from './Button.styled';

export const Button = ({ onClick, text, selected }) => {
  return (
    <StyledBtn type="button" onClick={onClick} selected={selected}>
      {text}
    </StyledBtn>
  );
};
