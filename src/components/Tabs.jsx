import React from "react";

export const Tabs = ({ children, buttons, ButtonsContainer = "menu" }) => {
  // if prop is buttonsContainer then we have to change
  // so React treats it like a custom component
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};
