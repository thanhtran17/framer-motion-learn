import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "antd";

const Box5 = () => {
  const addButtonStyle = {
    "margin-right": "15px",
    width: "100px",
  };

  const control = useAnimation();

  return (
    <div className="box-container">
      <div className="buttons-container" style={{ "margin-bottom": "25px" }}>
        <Button
          onClick={() => {
            control.start({
              x: 1500,
              transition: {
                duration: 2,
              },
            });
          }}
          type="primary"
          style={addButtonStyle}
        >
          Move Right
        </Button>
        <Button
          onClick={() => {
            control.start({
              x: 0,
              transition: {
                duration: 2,
              },
            });
          }}
          type="primary"
          style={addButtonStyle}
        >
          Move Left
        </Button>
        <Button
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: {
                duration: 2,
              },
            });
          }}
          type="primary"
          style={addButtonStyle}
        >
          Circle{" "}
        </Button>
        <Button
          onClick={() => {
            control.start({
              borderRadius: "0%",
              transition: {
                duration: 2,
              },
            });
          }}
          type="primary"
          style={addButtonStyle}
        >
          Square
        </Button>
        <Button
          onClick={() => {
            control.stop();
          }}
          type="primary"
          style={addButtonStyle}
        >
          Stop
        </Button>
      </div>

      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};

export default Box5;
