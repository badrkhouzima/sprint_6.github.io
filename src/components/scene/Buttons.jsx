import React from "react";
import { Button } from "../../styled";
const Buttons = (props) => {
  const backHandler = () => {
    props.setCounter(props.counter - 1);
    if (props.counter === -2) {
      props.setCounter((preCoun) => (preCoun = 3));
    } else if (props.counter === 0) {
       props.setCounter(3);
    } else if (props.counter === 1) {
    } else if (props.counter === 2) {
    } else if (props.counter === 3) {
    } 
  };
  const forwardHandler = () => {
    props.setCounter(props.counter + 1);
    if (props.counter === 0) {
    } else if (props.counter === 1) {
    } else if (props.counter === 2) {
    } else if (props.counter === 3) {
       props.setCounter(0);
    } 
  };
  return (
    <>
      <Button onClick={backHandler}>Backward</Button>
      <Button onClick={forwardHandler}>Forward</Button>
    </>
  );
};
export default Buttons;
