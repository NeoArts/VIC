import React, { useState } from "react";
import "./ImageCover.css";

function ImageCover(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="image">
      <div className={`full-screen ${isOpen ? "open" : ""}`}>
        <p className="close-full" onClick={handleClick}>X</p>
        <img
          src={props.first ? props.fullScreen[0] : props.fullScreen[1]}
          alt="Laura Victoria"
        />
      </div>
      <img
        src={props.first ? props.src[0] : props.src[1]}
        alt="Laura Victoria"
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCover;
