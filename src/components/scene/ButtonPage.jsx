import React, {useState} from 'react'
import { Button1, BackGround } from "../../styled";
import Scene from "./Scene";
import Intro from "./Intro";
function ButtonPage() {
    const [condition, setCondition] = useState(true);
  return (
    <BackGround>
      {condition ? <Intro /> : <Scene />}
      <Button1
        style={{ display: condition ? true : "none" }}
        onClick={() => setCondition(false)}
      >
        Hey..! From Here, You Just Need To Pinch
      </Button1>
    </BackGround>
  );
}

export default ButtonPage
