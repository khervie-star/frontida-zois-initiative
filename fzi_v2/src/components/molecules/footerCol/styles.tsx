import styled from "styled-components";

export const Wrapper = styled.div`

`

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 227px;
  justify-items: flex-start;
  align-items: flex-start;
  padding:0;
  margin:0;
  text-align:left;
`;

export const FirstListItem = styled.li`
  list-style: none;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  box-sizing: border-box;
  margin-inline: 15px;
`;

export const ListItem = styled.li`
  box-sizing:border-box;
  list-style: none;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #cacaca;
  margin-bottom:10px;
  cursor: pointer;
  margin-inline:15px;

  &:hover{
    color:white;
  }
`;