import { useEffect, useState } from "react";
import ReactFileReader from "react-file-reader";
import { v4 as uuid } from "uuid";
import "./Home.css";

const getLocalStorageItem = () => {
  const list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

export const Home = () => {
  const [imageList, setImageList] = useState(getLocalStorageItem());

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(imageList));
  }, [imageList]);

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
          <button className="homeBtn">Upload</button>
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
