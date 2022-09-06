import * as React from "react";
import { ContainedButton } from "../../atoms/buttons";
import { NavListItem, NavWrapper, Wrapper } from "./styles";

const Navbar = () => {
  const navLinks = [
    {
      key: 1,
      name: "Home",
      href: "#",
    },
    {
      key: 2,
      name: "About",
      href: "#",
    },
    {
      key: 3,
      name: "Our Team",
      href: "#",
    },
    {
      key: 4,
      name: "Projets",
      href: "#",
    },
    {
      key: 5,
      name: "Program",
      href: "#",
    },
    {
      key: 6,
      name: "Gallery",
      href: "#",
    },
    {
      key: 7,
      name: "Contact us",
      href: "#",
    },
    // {
    //   key: 8,
    //   name: "Donate",
    //   href: "#",
    // },
  ];
  return (
    <>
      <Wrapper>
        <NavWrapper>
          {navLinks.map((item, i) => (
            <NavListItem>{item.name}</NavListItem>
          ))}
          <ContainedButton>Donate</ContainedButton>
        </NavWrapper>
      </Wrapper>
    </>
  );
};

export default Navbar;
