import { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import { v4 as uuid } from "uuid";
import "./Home.css";

export const Home = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [imageList, setImageList] = useState([]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (image) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       console.log(reader.result);
  //       setPreview((prev) => reader.result);
  //     };
  //     reader.readAsDataURL(image);
  //   } else {
  //     setPreview("");
  //   }
  // };

  // const changeHandler = (e) => {
  //   const imageFile = e.target.files[0];
  //   if (imageFile && imageFile.type.substr(0, 5) === "image") {
  //     setImage(imageFile);
  //   }
  // };

  // useEffect(() => {}, []);

  const handleFiles = (files) => {
    setImageList([{ id: uuid(), imageUrl: files.base64[0] }, ...imageList]);
  };

  return (
    <div className="home">
      <div className="homeCenterDiv">
        <ReactFileReader
          base64={true}
          multipleFiles={true}
          handleFiles={handleFiles}
        >
          <button>Upload</button>
        </ReactFileReader>
        <div className="homeImagePreview">
          {imageList.length > 0 &&
            imageList.map(({ id, imageUrl }) => (
              <img
                key={id}
                alt="imagePreview"
                src={imageUrl}
                className="homeImage"
              />
            ))}
        </div>
      </div>
    </div>
  );
};
