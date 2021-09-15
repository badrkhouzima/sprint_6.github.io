import React, {useState} from 'react';
import arr from "../data/data";
import {Button, Paragraph} from "../../styled"

const Buttons = () => {
 const [counter, setCounter] = useState(-1);

 const backHandler = () => {
   setCounter(counter - 1);
 };
 const forwardHandler = () => {
   setCounter(counter + 1);

   if (counter == 0) {
   } else if (counter == 1) {
   } else if (counter == 2) {
   } else if (counter == 3) {
   }
 };
 
   return (
     <>
       <Button onClick={backHandler}>Backward</Button>
       <Button onClick={forwardHandler}>Forward</Button>
       {arr.map((ele, index) => (
         <Paragraph color={index === counter}> {ele} </Paragraph>
       ))}
     </>
   );
}
export default Buttons;