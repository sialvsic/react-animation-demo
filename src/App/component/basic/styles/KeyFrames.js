import { keyframes } from 'styled-components';

export const keyFrameGo = keyframes`
  0% {
  
  }
  
  100% {
    transform: translate(200px, 150px) rotate(20deg);
  }
`;

export const keyFrameBack = keyframes`
  0% {
    transform: translate(200px, 150px) rotate(20deg);
  }
  
  100% {
    transform: translate(0, 0);
  }
`;
