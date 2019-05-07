import styled from 'styled-components';
import { keyFrameGo } from './KeyFrames';

// const Box = styled.div`
//   display: inline-block;
//   background: pink;
//   width: 200px;
//   height: 200px;
//   pointer-events: none;
//   transition: transform 300ms ease-in-out;
// `;

const Box = styled.div`
  display: inline-block;
  background: pink;
  width: 200px;
  height: 200px;
  position: relative;
  pointer-events: none;
  animation: ${ keyFrameGo } 2s ease-in-out both;
`;

export default Box;
