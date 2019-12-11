import React from "react";
//import { Divider, Image } from "semantic-ui-react";
import "../styles/PhotoGroup.scss"

export const PhotoGroup = () => {
  return (
    <div className="b-photo-container">
      <img src={"photo-pizzaA.jpg"} alt="slide A" />
      <img src={"photo-pizzaA.jpg"} alt="slide B" />
      <img src={"photo-pizzaA.jpg"} alt="slide C" />
    </div>
  );
};
