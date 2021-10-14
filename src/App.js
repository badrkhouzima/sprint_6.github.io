import React, { Fragment, useState } from "react";
/*import "./App.css";*/
import Scene from "./components/scene/Scene";
import Intro from "./components/scene/Intro";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <Fragment>
      {showIntro ? <Intro setShowPage={setShowIntro} /> : <Scene />}
    </Fragment>
  );
};

export default App;
