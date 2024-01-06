import React from "react";
import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png"

const reactDescriptions = ["Fundamentals", "Crucial", "Core"];
const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export const Header = () => {
  const index = getRandomInt(2);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[index]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
};