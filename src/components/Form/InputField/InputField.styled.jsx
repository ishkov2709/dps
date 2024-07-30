import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
  border: 2px solid ${colors.green};
  color: ${colors.green};
  padding: 13px 12px;
  background: transparent;
  box-shadow: none;
  border-radius: 4px;
  margin-bottom: 16px;

  &:focus {
    border: 2px solid ${colors.green};
    outline: none;
  }

  &::placeholder {
    color: ${colors.grey};
  }
`;
