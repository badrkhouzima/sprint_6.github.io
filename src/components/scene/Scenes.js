import React from "react";
import arr from "../data/data";
import { Paragraph } from "../../styled";
import Buttons from "./Buttons";

const Scenes = (props) => {
  return (
    <div>
      <Buttons counter={props.counter} setCounter={props.setCounter} />
      {arr.map((ele, index) => (
        <Paragraph color={index === props.counter}> {ele.txt} </Paragraph>
      ))}
    </div>
  );
};

export default Scenes;
