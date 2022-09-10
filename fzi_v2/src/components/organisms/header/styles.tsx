import styled from "styled-components";
import header from "../../../assets/images/header.jpg";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-image: url("${header}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
`;

export const HeaderBody = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  padding: 0 8em;
  justify-content: start;
  align-items: center;
  text-align: left;
`;

export const HeaderDescription = styled.div`
  width: 40%;
`;
