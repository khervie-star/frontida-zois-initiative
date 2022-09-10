import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    background-color: #871551;
    

`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  padding-block:20px;
`;
export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom:47px;
`;

export const LastColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-sizing: border-box;
  margin-inline: 15px;
`;

export const LogoWrapper = styled.div`
    height: 150px;
    margin-bottom:30px;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-items: flex-start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;
`;