import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./Home.css";

export const Home = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [imageList, setImageList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
      console.log(preview);
    } else {
      setPreview("");
    }
    setImageList([{ id: uuid(), imageUrl: preview }, ...imageList]);
  };
  console.log(imageList);

  const changeHandler = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile && imageFile.type.substr(0, 5) === "image") {
      setImage(imageFile);
    }
  };

  // useEffect(() => {
  //   if (image) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setPreview(reader.result);
  //     };
  //     reader.readAsDataURL(image);
  //   } else {
  //     setPreview("");
  //   }
  // }, [image]);

  return (
    <div className="home">
      <div className="homeCenterDiv">
        <form onSubmit={submitHandler}>
          <input type="file" accept="image/*" onChange={changeHandler} />
          <input type="submit" />
        </form>
        {imageList.length > 0 &&
          imageList.map(({ id, imageUrl }) => (
            <div key={id}>
              <img
                alt="imagePreview"
                src={imageUrl}
                style={{ width: "10rem", height: "10rem" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
