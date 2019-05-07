import styled from 'styled-components';
import { keyFrameExampleOne } from './KeyFrames';

export const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  pointer-events: none;
  transition: transform 300ms ease-in-out;
`;

const Box1 = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  position: relative;
  animation: ${ keyFrameExampleOne } 2s ease-in-out 0s infinite;
`;

export default Box1;
