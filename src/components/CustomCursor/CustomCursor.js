// import { useRef } from "react";
import "./style.scss";

const CustomCursor = ({ isHovered, cursorRef }) => {
  return (
    <>
      {isHovered ? (
        <div
          className={isHovered ? "app-cursor-hover" : "app-cursor"}
          ref={cursorRef}
        >
          <p
            style={{
              marginTop: "42px",
              marginLeft: "20px",
              fontFamily: "Millimetre-Light",
            }}
          >
            Click me !
          </p>
        </div>
      ) : (
        <div
          className={isHovered ? "app-cursor-hover" : "app-cursor"}
          ref={cursorRef}
        ></div>
      )}
    </>
  );
};

export default CustomCursor;
