import React from "react";
import Header from "../components/Header";

const Container = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {children}
    </div>
  );
};

export default Container;
