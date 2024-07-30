import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Button = styled.button`
  display: block;

  padding: 6px 0;

  width: 100%;

  color: ${colors.black};
  background-color: ${colors.green};

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;

  border: none;

  cursor: pointer;
`;
