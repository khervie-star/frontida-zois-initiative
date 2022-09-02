import styled, { css } from "styled-components";
import { device } from "../../../Global";
import { CommonTypes } from "./types";

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 64px;
  font-family: Raleway;
  font-style: normal;
  line-height: 75.14px;
  color: #fff;
  margin-top: 5rem;
`;

export const SectionTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;
  font-family: Raleway;
  line-height: 47px;
  letter-spacing: -0.4px;
  color: #871551;
  margin-top: 5rem;
`;

export const TextBody = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  margin-top: 1rem;
  color: ${({ darkBg }: CommonTypes) => (darkBg ? "#fff" : "#242424")};
`;

export const SubActionText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #d948a6;
  margin-top: 1rem;
`;

export const Card = styled.div`
  color: #43566a;
  background: #ffffff;
  border: 1px solid #e1e8f4;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  height: 104px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ active }: CommonTypes) =>
    active
      ? css`
          color: #007afb;
          border-color: #007afb;
        `
      : css`
          color: #43566a;
          border-color: #e1e8f4;
        `}
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
    margin: auto;
  }
`;

export const CardLabel = styled.p`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #43566a;
  // margin-top: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-row: 300px;
  margin: 5rem 0rem;
`;

export const Display = styled.div`
  display: flex;
  margin: 4.7rem 5rem 8.2rem 5rem;
  @media ${device.tablet} {
    flex-wrap: wrap;
    margin: 4.7rem 2.5rem 8.2rem 2.5rem;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
    margin: 4.7rem 1.5rem 8.2rem 1.5rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: ${({ flexWrap }: CommonTypes) => (flexWrap ? "wrap" : "nowrap")};
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const FlexText = styled.div`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${({ withIcon }: CommonTypes) => (withIcon ? "#007AFB" : "#324a64")};
`;

export const RoundedImage = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 0px 0px 0px 200px;
  box-shadow: rgba(217, 72, 166, 0.15) -45px 45px;
`;
