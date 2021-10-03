import React, { useState } from "react";
//import "../../App.css";

import Scenes from "./Scenes";
import { BackGround } from "../../styled";

const Scene = () => {
  const [counter, setCounter] = useState(0)
  return (
    <BackGround image={counter}>
      <Scenes counter={counter} setCounter={setCounter} />
    </BackGround>
  );
};
export default Scene;
