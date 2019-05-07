import styled from 'styled-components';
import { keyFrameBack } from './KeyFrames';

import Box from './Box';

export const Trigger = styled('div')`
  width: 200px;
  height: 200px;
  border: 20px solid #999;
  background: #ddd;
 
 
 
  &:hover  ${ Box } {
    // transform: translate(200px, 150px) rotate(20deg);
    animation: ${ keyFrameBack } 2s ease-in-out both;
  }
`;

export default Trigger;
