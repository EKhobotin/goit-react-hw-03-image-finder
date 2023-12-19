import React, { Component } from 'react';
import { ButtonLoadMore, ButtonWrapper } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <ButtonWrapper>
        <ButtonLoadMore type="submit">Load more</ButtonLoadMore>
      </ButtonWrapper>
    );
  }
}
