import React from "react";
import ImageUploader from "react-images-upload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: pictureFiles,
      //   pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  }
}
export default App;

//  this will use hooks

// import React, { useState } from "react";
// import ImageUploader from "react-images-upload";

// const App = props => {
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

// export default App;
