import React from 'react';
import Box from './styles/Box';
import Trigger from './styles/Trigger';

export class App extends React.Component {
  render() {
    return (
      <Trigger className='a'>
        <Box className='b'/>
      </Trigger>
    );
  }
}

export default App;
