import styled from "styled-components";

export const Name = styled.h1`
  font-size: 50px;
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};
`;

export const HeaderMainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 50px;
  z-index: -1;
  background-color: ${(props) => (props.isDarkTheme ? "black" : "lightblue")};
`;

export const SliderCont = styled.div``;

export const ImgCont = styled.div`
  width: 50%;
`;

export const Image = styled.img`
  height: 600px;
  width: 100%;
`;
