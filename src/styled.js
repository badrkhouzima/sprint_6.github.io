import styled from "styled-components";
import dataImg from "./components/data/data";

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

export const BackgroundImage = styled.div`
  border: 1px solid #000;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  background-image: url(${(props) => props.image === 0 ? dataImg[0].img : props.image === 1 ? dataImg[1].img : props.image === 2 ? dataImg[2].img : dataImg[3].img});
  background-repeat: "no-repeat";
  justify-content: center;
  flex-direction: column;
  align-items: center; ;
`;

export const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #b2c0f5;
`;

const getColorRandom = () => {
  const randomColor = Math.random().toString(16).substr(-6);
  return `#${randomColor}`;
};

export const Button1 = styled.button`
  padding: auto;
  margin: 100px auto;
  border: 1px solid #000;
  border-radius: 5px;
  width: 46vw;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getColorRandom()};
  &:hover {
    background-color: ${getColorRandom()};
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
    background-color: ${getColorRandom()};
  }
`;
