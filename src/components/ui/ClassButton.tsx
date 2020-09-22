import React, { Component } from 'react';
import Text from './Text'

type ButtonProps = {
  onPress?: () => void
  label?: string
}

type ButtonState = {
  loading: boolean
}

class Button extends Component<ButtonProps, ButtonState> {

  state = {
    loading: true
  }
  
  render() {
    const { label, onPress, children } = this.props

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
}

export default Button;
