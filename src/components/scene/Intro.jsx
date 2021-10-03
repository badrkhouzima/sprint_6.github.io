import React from 'react'
import { Button1, Title, Intropage } from "../../styled";


const Intro = (props) => {
  return (
    <Intropage>
      <Title>
        We are glad that you choose to navigate through our story
        <Button1 onClick={() => props.setShowPage(false)}
        >Hey..! From Here, You Just Need To Pinch</Button1>
      </Title>
    </Intropage>
  );
};

export default Intro;





