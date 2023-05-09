import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import { Container } from '../../Themes/globalComponents.styled'
import { ContactDetails, ContactLink, FooterContainer, LinkIcon, PersonalInfo, WorkingHour } from "./footer.styled"
export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <ContactDetails>
          <PersonalInfo>
            <h4>Personal Info</h4>
            <address>47 W 13th St, New York, NY 10011, USA</address>
            <p>328422384**</p>
          </PersonalInfo>
          <ContactLink>
            <h2>E-Commerce</h2>
            <p>Make yourself exceptional </p>
            <LinkIcon>
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
            </LinkIcon>
          </ContactLink>
          <WorkingHour>
            <h2>Working Hour</h2>
            <span>24/7</span>
          </WorkingHour>
        </ContactDetails>
        <p>2023 @E-Commerce .all Rights reserved</p>
      </FooterContainer>
    </Container>
  );
}
