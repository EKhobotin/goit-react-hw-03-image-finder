import React, { Component } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay class="overlay">
        <ModalDiv class="modal">
          ТУТ БУДЕ КАРТИНКА
          <img src="" alt="PICTURE" />
        </ModalDiv>
      </Overlay>
    );
  }
}
