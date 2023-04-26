import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'MontserratSemiBold';
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #ebd8ff;
  &.active {
    color: #5736a3;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
  z-index: 10;
`;

export const Item = styled.li`
  list-style-type: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
