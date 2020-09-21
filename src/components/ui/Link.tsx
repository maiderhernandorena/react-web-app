import React from 'react';

type LinkProps = {
  link: string
  message?: string
}

const Link: React.FC<LinkProps> = ({ link, message }) => {
  return (
      <a
        className="App-link"
        href={link}
      >
        {message || link}
      </a>
  );
}


export default Link;
