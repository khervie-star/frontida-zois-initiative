import styled, { css } from "styled-components";
import { BtnProps } from "./types";

export const ContainedButton = ({ children, onClick, disabled }: BtnProps) => {
  return (
    <ContBtn disabled={disabled} onClick={onClick}>
      {children}
    </ContBtn>
  );
};

export const ContBtn = styled.button`
  background: #d948a6;
  border: 1px solid #d948a6;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18.75px;
  text-align: center;
  letter-spacing: -0.1px;
  box-sizing: border-box;
  border-radius: 0;
  padding: 14px 27px;
  color: #fff;
  cursor: pointer;
  ${({ disabled }: BtnProps) =>
    disabled
      ? css`
          color: #a0aaba;
          border-color: #a0aaba;
        `
      : css`
          color: #007afb;
          border-color: #007afb;
        `}
`;

export const OutlinedButton = ({ children, onClick, disabled }: BtnProps) => {
  return (
    <OutlBtn disabled={disabled} onClick={onClick}>
      {children}
    </OutlBtn>
  );
};

export const OutlBtn = styled.button`
  background: transparent;
  border: 1px solid #d948a6;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18.75px;
  text-align: center;
  letter-spacing: -0.1px;
  box-sizing: border-box;
  border-radius: 0;
  padding: 14px 27px;
  color: #d948a6;
  cursor: pointer;
  ${({ disabled }: BtnProps) =>
    disabled
      ? css`
          color: #a0aaba;
          border-color: #a0aaba;
        `
      : css`
          color: #007afb;
          border-color: #007afb;
        `}
`;
