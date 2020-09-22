import React from 'react';

type ImageLayout = {
  width?: string
  height?: string
}

type ImageProps = {
  source: string,
  layout?: ImageLayout
}

const Image: React.FC<ImageProps> = ({ source, layout }) => {
  return (
        <img alt='img' src={source} width={layout?.width} height={layout?.height}/>
  );
}

Image.defaultProps = {
  layout: {
    width: '100',
    height: '100'
  }
} as Partial<ImageProps>;

export default Image;
