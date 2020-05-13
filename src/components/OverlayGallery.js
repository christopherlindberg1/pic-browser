import "./OverlayGallery.css";
import React from "react";


class OverlayGallery extends React.Component {

  state = {
    imageDescription: this.props.overlayGalleryImageDescription,
  }

  closeOverlayGallery = () => {
    this.props.closeOverlayGallery()
  }


  render() {

    console.log(this.props.imageDescription);

    return (
      <div
        className="overlay-gallery"
      >
        <div
          id="overlay-gallery-exit-button"
          onClick={ e => this.closeOverlayGallery() }
        >
          x
        </div>
        <div className="overlay-gallery-content">
          <div className="image-container">
            <img className="image" src={ this.props.imageUrl } alt={ this.props.imageDescription } />
          </div>
          <div className="image-description-container">
            <p className="image-description">
              { this.state.imageDescription }
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default OverlayGallery;