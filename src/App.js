import React, { useState } from "react";
/*import "./App.css";*/
import arr from "./components/data/data";
import Scene from "./components/scene/Scene";
import InitialPage from "./components/scene/InitialPage";
import { Button1 } from "./styled";

const App = () => {
  const [condition, setCondition] = useState(true);
  return (
      <>
        <Button1 onClick={() => setCondition(!condition)}>Click here</Button1>
        {condition ? <InitialPage /> : <Scene param={arr} />}
      </>
   
  );
};

export default App;
