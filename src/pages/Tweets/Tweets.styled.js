import styled from 'styled-components';
import { Button } from '../../components/Button/Button';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  /* padding-left: 0; */
  margin: 20px 0 50px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreBtn = styled(Button)`
  /* display: block; */
  /* margin: 0 auto; */
`;
