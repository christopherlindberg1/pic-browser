import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import OverlayGallery from "./OverlayGallery";
import Footer from "./Footer";
import FooterSeparator from "./FooterSeparator";
import ApiError from "./ApiError";

import unsplash from "../api/unsplash";


class App extends React.Component {
  
  state = {
    images: [],
    ApiResponseCode: 200,
    overlayGalleryOpen: false,
    overlayGalleryImageUrl: "",
    overlayGalleryImageDescription: "",
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    }).catch((error) => {
      this.setState({ ApiResponseCode: 403 });
    });

    if (response) {
      this.setState({ images: response.data.results, ApiResponseCode: 200 })
      console.log(this.state.images);
    }
  }

  showOverLayGallery = (imageUrl, imageDescription) => {
    this.setState({
      overlayGalleryImageUrl: imageUrl,
      overlayGalleryImageDescription: imageDescription !== null ? imageDescription : "No description available",
      overlayGalleryOpen: true
    });
  }

  closeOverlayGallery = () => {
    this.setState({
      overlayGalleryOpen: false
    });
  }

  contentToRender(ApiResponseCode) {
    if (ApiResponseCode === 200) {
      return (
        <ImageList
          images={this.state.images}
          showOverLayGallery={ this.showOverLayGallery }
        />
      );
    } else if (ApiResponseCode === 403) {
      return (
        <ApiError message="" />
      );
    }
  }

  render() {
    return (
      <div
        id="app"
        className="ui container"
        onClick={(e) => {
          if (e.target.classList.contains("overlay-gallery-content") || e.target.classList.contains("overlay-gallery")) {
            this.closeOverlayGallery ();
          }
        }
        }
      >
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        { this.contentToRender(this.state.ApiResponseCode) }
        
        {
          this.state.overlayGalleryOpen &&
          <OverlayGallery
            closeOverlayGallery={ this.closeOverlayGallery }
            imageUrl={ this.state.overlayGalleryImageUrl }
            imageDescription={ this.state.overlayGalleryImageDescription }
          />
        }
        <FooterSeparator />
        <Footer />
      </div>
    )
  }
}


export default App;