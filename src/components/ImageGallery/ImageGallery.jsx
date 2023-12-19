import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    console.log(this.props);
    return (
      <Gallery>
        {this.props.imagesList.map(el => {
          return (
            <ImageGalleryItem
              key={el.id}
              tags={el.tags}
              url={el.webformatURL}
            />
          );
        })}
        ;
      </Gallery>
    );
  }
}
