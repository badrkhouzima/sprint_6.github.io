import React, { useState } from "react";
//import "../../App.css";
import Buttons from "./Buttons";
import { BackgroundImage } from "../../styled";
//import Buttons from "./Buttonsxx"
/*
podemos usar la metoda map para mostrar los datos del fechiro json
pero he usado los props 
{textData.map((ele) => {
        return <p>{ele}</p>  
      })}
*/

const Scene = () => {

  return (
    <BackgroundImage>
      <Buttons/>
    </BackgroundImage>
  );
};
export default Scene;
