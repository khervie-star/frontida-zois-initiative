import styled, { keyframes, createGlobalStyle } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "820px",
  laptop: "1024px",
  laptopE: "1096px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopE: `(max-width: ${size.laptopE})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export const GlobalStyles = createGlobalStyle`

html{
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
}

body{
  margin: 0;
}
`;

export const Container = styled.div`
  margin: 0;
  box-sizing: border-box;
  color: #ffffff;
  background: #000000;
`;
