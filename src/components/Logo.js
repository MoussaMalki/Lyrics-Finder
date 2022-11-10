import React from "react";

const Logo = () => {
  return (
    <header style={headerStyles}>
      <img src="/images/YOURICSLOGO.png" alt="pic" style={imgStyles} />
      <h2 style={h2Styles}>FIND ANY SONG'S LYRICS</h2>
    </header>
  );
};

export default Logo;

const imgStyles = {
  width: "20rem",
};
const headerStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "5vh",
};
const h2Styles = {
  color: "var(--main-color)",
  fontSize: "1.2rem",
  marginLeft: "1rem",
};
