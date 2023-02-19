import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
    background: "rgb(255, 255, 255)",
    boxShadow: "rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px",
    borderRadius: "50%",
    border: "4px solid transparent",
    
      }}
      onClick={onClick}
    ></div>
  );
};

export default NextArrow;
