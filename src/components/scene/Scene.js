import React, { useState } from "react";
//import "../../App.css";

import Scenes from "./Scenes";
import { BackgroundImage } from "../../styled";

const Scene = () => {
  const [counter, setCounter] = useState(-1)
  return (
    <BackgroundImage image={counter}>
      <Scenes counter={counter} setCounter={setCounter} />
    </BackgroundImage>
  );
};
export default Scene;
