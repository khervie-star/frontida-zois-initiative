import styled from "styled-components";

export const Wrapper = styled.div`
  background: red;
  padding: 1.75em 7.5em;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContactActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContactActionsFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1rem 0 0;
`;

export const ContactActionsText = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 14px;
  line-height: 16.44px;
  color: #353535;
  margin: 0 10px;
`;

export const SocialActionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  display: inline-flex;
`;

export const SocialListItem = styled.li`
  list-style-type: none;
  margin: 0 15px;
  &:nth-last-child(1) {
    margin-right: 0px;
  }
`;
