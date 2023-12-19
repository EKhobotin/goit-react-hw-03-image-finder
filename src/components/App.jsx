import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imagesList: [
      { id: 1, webformatURL: 'id-1', tags: 'Rosie Simpson' },
      { id: 2, webformatURL: 'id-2', tags: 'Rosie Sim' },
    ],
  };

  componentDidMount() {
    console.log('DidMount');
  }

  componentDidUpdate() {
    console.log('DidUpdate');
  }

  render() {
    console.log('qwer');
    console.log(this.state.imagesList);
    return (
      <>
        <Searchbar />
        {/* <ImageGalleryItem /> */}
        <ImageGallery imagesList={this.state.imagesList} />
      </>
    );
  }
}
