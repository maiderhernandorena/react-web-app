import React from 'react';

import Link from './Link'

type TextType = 'title' | 'subtitle' | 'link' |'p'

type TextProps = {
  message: string;
  link?: string;
  type?: TextType;
}

const Text: React.FC<TextProps> = ({ message, type, link }) => {
  if (type === 'title') {
    return <h1>{message}</h1>
  }

  if (type === 'subtitle') {
    return <h4>{message}</h4>
  }

  if (type === 'link' && link) {
    return <Link link={link} message={message}/>
  }

  return <p >{message}</p>
}

Text.defaultProps = {
  type: 'p'
} as Partial<TextProps>

export default Text;
