import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { linkedInURL, resumeURL } from "../data";
// Icons
import { FaGithub, FaLinkedin, FaRegListAlt } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const {  html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a href={html_url} aria-label="Check out my GitHub profile." className="link-icons">
        <FaGithub />
      </a>
      <a href={linkedInURL} aria-label="Check out my LinkIn profile." className="link-icons">
        <FaLinkedin />
      </a>
      <a href={resumeURL} aria-label="Check out my website." className="link-icons">
       <FaRegListAlt />
      </a>

    </StyledSocialLinks>
  );
}
