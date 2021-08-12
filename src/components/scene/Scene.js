import React from "react";
import textData from "../data/data.json";
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
      <p>{(param1 = textData[0])}</p>
      <p>{(param2 = textData[1])}</p>
      <p>{(param3 = textData[2])}</p>
      <p>{(param4 = textData[3])}</p>
    </div>
  </div>
);


export default Scene;


