import React from "react";
import "../styles/PhotoGroup.scss"
import PizzaA from "../../../assets/photo-pizzaA.jpg";

export const PhotoGroup = () => {
  return (
    <div className="b-photo-container">
      <img src={PizzaA} alt="pizza A" />
      <img src={PizzaA} alt="pizza B" />
      <img src={PizzaA} alt="pizza C" />
    </div>
  );
};
