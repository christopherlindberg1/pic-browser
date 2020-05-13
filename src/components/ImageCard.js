import React from "react";


class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      spans: 0,
      overlayHeight: 0,
    }; 

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setImageStyles);
  }

  setImageStyles = () => {
    const height= this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 15);

    this.setState({ spans, overlayHeight: height });
  }

  render() {
    const { urls, description } = this.props.image;

    
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}`, position: "relative"}}
        onClick={(e) => {
          this.props.showOverLayGallery(urls.regular, description);
        }}
      >
        <div
          className="image-overlay"
          style={{ height: this.state.overlayHeight }}
        >
        </div>
        <img
          className="grid-img"
          ref={ this.imageRef }
          src={ urls.small }
          alt={ description }
        />
      </div>
    )
  }
}


export default ImageCard;