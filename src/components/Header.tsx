import React from 'react';

import Text from './ui/Text'
import Image from './ui/Image'
import { AVATAR } from '../Constants'

const Header: React.FC = () => {
  return (
        <header className="App-header">
          <Image source={AVATAR} />
          <Text type='title' message='Maider Hernandorena :)'/>
        </header>
  );
}

export default Header;
