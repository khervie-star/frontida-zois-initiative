import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  MailBoxIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../atoms/icons";
import {
  ContactActions,
  ContactActionsFlex,
  ContactActionsText,
  SocialActionsList,
  SocialListItem,
  Wrapper,
} from "./styles";

const TopNavigation = () => {
  return (
    <Wrapper>
      <ContactActions>
        <ContactActionsFlex>
          <PhoneIcon />
          <ContactActionsText>(+234) 915 226 9331</ContactActionsText>
        </ContactActionsFlex>
        <ContactActionsFlex>
          <MailBoxIcon />
          <ContactActionsText>
            frontidazoisinitiaitive@gmail.com
          </ContactActionsText>
        </ContactActionsFlex>
      </ContactActions>
      <SocialActionsList>
        <SocialListItem>
          <FacebookIcon />
        </SocialListItem>
        <SocialListItem>
          <InstagramIcon />
        </SocialListItem>
        <SocialListItem>
          <TwitterIcon   />
        </SocialListItem>
        <SocialListItem>
          <YoutubeIcon />
        </SocialListItem>
      </SocialActionsList>
    </Wrapper>
  );
};

export default TopNavigation;
