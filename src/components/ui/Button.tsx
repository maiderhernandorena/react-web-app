import React from 'react';
import Text from './Text'

type ButtonProps = {
  onPress: () => void
  label?: string
}

const Button: React.FC<ButtonProps> = ({ label, onPress, children }) => {
  if (!children && !label) {
    return null
  }

  return (
        <button onClick={onPress}>
          {label && <Text message={label} />}
          {children}
        </button>
  );
}

export default Button;
