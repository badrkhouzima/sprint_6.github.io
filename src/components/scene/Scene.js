import React from "react";
import textData from "../data/data.json";
import { Border } from "../../styled.js";
/*
podemos usar la metoda map para mostrar los datos del fechiro json
pero he usado los props 
{textData.map((ele) => {
        return <p>{ele}</p>  
      })}
*/
const Scene = ({ param1, param2, param3, param4 }) => (
  <div className="posts">
    <div>
      <Border>{(param1 = textData[0])}</Border>
      <Border>{(param2 = textData[1])}</Border>
      <Border>{(param3 = textData[2])}</Border>
      <Border>{(param4 = textData[3])}</Border>
    </div>
  </div>
);


export default Scene;


