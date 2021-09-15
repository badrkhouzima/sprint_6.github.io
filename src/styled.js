import styled from "styled-components";
import { useState } from "react";

import Scene from "./components/scene/Scene.js";
import img from "./components/assets/img/spaceWall.jpg";
export const TitleInit = styled.h1`
  text-align: center;
`;
export const Paragraph = styled.p`
  margin: 40px;
  padding: 8px;
  border: 1px solid rgb(255, 255, 255);
  color: #fff;
  font-weight: bold;
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 40px;
  border-radius: 35px;
  text-align: center;
  background-color: ${(props) => (props.color ? "red" : props.color)};
`;
//const [color, setColor] = useState("");
export const BackgroundImage = styled.div`
  border: 1px solid #000;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  background-image: url(${img});
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;
// export const Front = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   padding-top: 100px;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   background-color: #b2c0f5;
// `;
export const Button1 = styled.button`
  margin: 20px;
  padding: 8px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 46vw;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #2ee6cd;
  }
`;
export const Button = styled.button`
  margin: 20px;
  padding: 8px;
  border: 1px solid #000;
  width: 46vw;
  height: 40px;
  text-align: center;

  &:hover {
    background-color: #2ee6cd;
  }
`;
