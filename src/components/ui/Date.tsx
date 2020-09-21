import React from 'react';


type DateProps = {
  date: Date | string;
}

const Date: React.FC<DateProps> = ({ date }) => {
  return <p className='App-date'>{date}</p>
}


export default Date;
