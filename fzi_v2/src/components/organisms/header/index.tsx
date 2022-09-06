import React from "react";
import { HeroTitle, TextBody } from "../../atoms/common";
import Navbar from "../../molecules/navbar";

const Header = (props: any) => {
  return (
    <>
      <Navbar />
      <div>
        <HeroTitle>Frontida Zois Initiative</HeroTitle>
        <TextBody>
          Strengthen your community and your social network when you volunteer.
          Make connections with the people you are helping, and cultivate
          friendships with other volunteers.
        </TextBody>
      </div>
    </>
  );
};

export default Header;
