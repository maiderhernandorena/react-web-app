import React from 'react';

import Text from './ui/Text'
import Date from './ui/Date'
import { getDateString } from '../utils/Date'

const Body = (): React.ReactElement => {
  const date = `Today: ${getDateString()}`

  return (
        <div className='App-body'>
          <Text type='subtitle' message='Hello world!'/>
          <Text 
            message='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <Text 
            message='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
          <Date date={date}/>
        </div>
  );
}

export default Body;
