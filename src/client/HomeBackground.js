import React, { Children, useEffect, useState } from "react";

const slideImages = [
  "https://docs.google.com/uc?export=download&id=1X2xAshAohDqlr0AEDd86OrlCgmZknm7h",
  "https://docs.google.com/uc?export=download&id=1jZp0o2Ec0eSS7Mb83sz6BGtTQHQ4xQKQ",
  "https://docs.google.com/uc?export=download&id=15Zja8tY942yYtpjiKR8fgwpvzi6Ko3uU",
  "https://docs.google.com/uc?export=download&id=1vhu9gj9zAiWIO6w-hwReLOCOJ8JcouYd",
];

function HomeBackground({ children }) {
  const [image, setImage] = useState(slideImages[0]);
  const [index, setIndex] = useState(0);
  let timer;

  const Photo = () => {
    return <img className="back-images" src={image} />;
  };
  useEffect(() => {
    displayPhoto();
    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  const displayPhoto = () => {
    timer = setInterval(() => {
      if (index === slideImages.length - 1) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }

      setImage(slideImages[index]);
    }, 4000);
  };
  return (
    <div className="container">
      <Photo current={image}></Photo>
      {children}
    </div>
  );
}

export default HomeBackground;
