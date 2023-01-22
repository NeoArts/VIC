import React from "react";
import "./Grid.css";
import image1 from "../../assets/images/LauraVictoriaMartinez1.webp"
import image1full from "../../assets/images/LauraVictoriaMartinez1.jpg"
import image2 from "../../assets/images/LauraVictoriaMartinez2.webp"
import image2full from "../../assets/images/LauraVictoriaMartinez2.jpg"
import image3 from "../../assets/images/LauraVictoriaMartinez3.webp"
import image3full from "../../assets/images/LauraVictoriaMartinez3.jpg"
import image4 from "../../assets/images/LauraVictoriaMartinez4.webp"
import image4full from "../../assets/images/LauraVictoriaMartinez4.jpg"
import image6 from "../../assets/images/LauraVictoriaMartinez6.webp"
import image6full from "../../assets/images/LauraVictoriaMartinez6.jpg"
import image7 from "../../assets/images/LauraVictoriaMartinez7.webp"
import image7full from "../../assets/images/LauraVictoriaMartinez7.jpg"
import image8 from "../../assets/images/LauraVictoriaMartinez8.webp"
import image8full from "../../assets/images/LauraVictoriaMartinez8.jpg"
import ImageCover from "../ImageCover/ImageCover";

const Grid = ( props ) => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <ImageCover src={[image1, image6]} first={props.first} fullScreen={[image1full, image6full]}/>
      </div>
      <div className="grid-item">
        <div className="grid-item-img" style={(!props.first) ? {height: "100%"} : {paddingBottom: "10px"}}>
          <ImageCover src={[image4, image7]} first={props.first} fullScreen={[image4full, image7full]}/>
        </div>
        {props.first && <div className="grid-item-img">
          <ImageCover src={[image3, image3]} first={props.first} fullScreen={[image3full, image3full]}/>
        </div>}
      </div>
      <div className="grid-item">
        <ImageCover src={[image2, image8]} first={props.first} fullScreen={[image2full, image8full]}/>
      </div>
    </div>
  );
};

export default Grid;
