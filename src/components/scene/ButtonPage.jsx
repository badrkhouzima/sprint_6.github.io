import React, {useState} from 'react'
import { } from "../../styled";
import Scene from "./Scene";
import Intro from "./Intro";
function ButtonPage() {
    const [showPage, setShowPage] = useState(true);
    
  return (
    <div>
      {showPage ? <Intro setShowPage={setShowPage} /> : <Scene />}
    </div>
  );
}

export default ButtonPage
