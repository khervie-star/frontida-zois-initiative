import React from "react";
import { HeroTitle, TextBody } from "../../atoms/common";
import Navbar from "../../molecules/navbar";
import TopNavigation from "../../molecules/topNav";
import { HeaderWrapper, HeaderDescription, HeaderBody } from "./styles";

const Header = (props: any) => {
  return (
    <>
      <HeaderWrapper>
        <TopNavigation />
        <Navbar />
        <HeaderBody>
          <HeaderDescription>
            <HeroTitle>Frontida Zois Initiative</HeroTitle>
            <TextBody darkBg>
              Strengthen your community and your social network when you
              volunteer. Make connections with the people you are helping, and
              cultivate friendships with other volunteers.
            </TextBody>
          </HeaderDescription>
        </HeaderBody>
      </HeaderWrapper>
    </>
  );
};

export default Header;
