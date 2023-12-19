import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { getImages } from 'helper/API';

export class App extends Component {
  state = {
    imagesList: [],
    isLoading: false,
    isModal: false,
    // isLoadMore: false,
    value: '',
  };

  componentDidMount() {
    // console.log('DidMount');
  }

  componentDidUpdate(_, prevState) {
    console.log('update');
    if (prevState.value !== this.state.value) {
      getImages(this.state.value).then(data =>
        this.setState({ imagesList: data.hits })
      );
    }
  }

  getSearchQuery = value => {
    this.setState({ value });
  };
  render() {
    // console.log('render');
    // getImages('cat').then(data => {
    //   this.setState({ imagesList: data.hits });
    // });

    const { isLoading, isLoadMore, isModal, imagesList } = this.state;

    // console.log(imagesList.length);
    return (
      <>
        <Searchbar onSubmit={this.getSearchQuery} />
        <ImageGallery imagesList={this.state.imagesList} />
        {imagesList.length > 0 && <Button />}
        {isLoading && <Loader />}
        {isModal && <Modal />}
      </>
    );
  }
}
