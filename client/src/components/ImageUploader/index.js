import React from "react";
import ImageUploader from "react-images-upload";
import { Redirect } from "react-router-dom";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop1(pictureFiles, pictureDataURLs) {
    console.log(pictureFiles);
    this.setState({
      pictures: pictureFiles,
      //   pictures: this.state.pictures.concat(pictureFiles)
    });
  }
  onDrop(pictureFiles) {
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        picture: reader.result,
      });
    };

    reader.readAsDataURL(pictureFiles[0]);
  }
  render() {
    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <div>
          <img
            src={this.state.picture}
            alt="pictureTest"
            width="200px"
            height="200px"
          />
          {/* {this.state.pictures.map((picture) => (
            <img src={picture} />
          ))} */}
        </div>
      </div>
    );
  }
}
export default ImageUpload;

//  this will use hooks

// import React, { useState } from "react";
// import ImageUploader from "react-images-upload";

// const ImageUpload = props => {
//   const [pictures, setPictures] = useState([]);

//   const onDrop = picture => {
//     setPictures([...pictures, picture]);
//   };
//   return (
//     <ImageUploader
//       {...props}
//       withIcon={true}
//       onChange={onDrop}
//       imgExtension={[".jpg", ".gif", ".png", ".gif"]}
//       maxFileSize={5242880}
//     />
//   );
// };

// export default ImageUpload;
