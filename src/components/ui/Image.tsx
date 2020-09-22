import React from 'react';

import { Layout } from '../../types'

type ImageProps = {
  source: string | number;
  layout?: Layout
}

const Image: React.FC<ImageProps> = ({ source, layout }) => {
  // convert source to string on url constant
  const url = source  as string

  return (
        <img alt='img' src={url} width={layout?.width} height={layout?.height}/>
  );
}

Image.defaultProps = {
  layout: {
    width: '100',
    height: '100'
  }
} as Partial<ImageProps>;

export default Image;
