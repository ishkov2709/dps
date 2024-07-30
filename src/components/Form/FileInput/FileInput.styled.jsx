import styled from 'styled-components';
import colors from '../../../styles/colors';

export const Label = styled.label`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 8px;

  margin-bottom: 40px;

  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 16px;
  line-height: 1.25;

  color: ${colors.green};
`;

export const Input = styled.input`
  display: none;
`;

export const ImgBox = styled.div`
  position: relative;

  margin: 20px 0;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
