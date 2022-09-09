import React from 'react'
import { Wrapper, ListWrapper, FirstListItem, ListItem } from "./styles";


import PropTypes from 'prop-types'

type TypeList = {
  heading: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}

const FooterCol = ({heading, text1, text2, text3, text4, text5}: TypeList) => {
  return (
    <>
      <Wrapper>
        <ListWrapper>
          <FirstListItem>{heading}</FirstListItem>
          <ListItem>{text1}</ListItem>
          <ListItem>{text2}</ListItem>
          <ListItem>{text3}</ListItem>
          <ListItem>{text4}</ListItem>
          <ListItem>{text5}</ListItem>
        </ListWrapper>
      </Wrapper>
    </>
  );
}

FooterCol.propTypes = {}

export default FooterCol