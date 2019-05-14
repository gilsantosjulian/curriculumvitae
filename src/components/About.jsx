import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  height: 190px;
  border: 2px solid #009688;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #009688;
`;

const AboutProfession = styled.p`
	margin; .2em 0 1em 0;
	letter-spacing: 1.6px;
	font-weight: 300;
	color: #009688;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weiht: 300;
  text-align: justify;
`;

const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weiht: 500;
`;

const About = ({ avatar, name, profession, bio, address, social }) => {
  return (
    <AboutStyle>
      <div className="About-container">
        <AboutAvatar>
          <figure>
            <AboutImg src={avatar} alt={name} />
          </figure>
        </AboutAvatar>
        <AboutName>
          <AboutH2>{name}</AboutH2>
        </AboutName>
        <AboutProfession>{profession}</AboutProfession>
        <AboutBio>{bio}</AboutBio>
        <AboutLocation>{address}</AboutLocation>
        <div id="about-social">
          <Social social={social} />
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
