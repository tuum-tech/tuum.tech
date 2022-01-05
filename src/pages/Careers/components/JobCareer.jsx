import React, { useState } from 'react';
import styled from 'styled-components';

import profileLogo from '../../../assets/img/profile_logo.png';

const Container = styled.div`
  margin-top: 25px;
  padding: 35px;
  background: white;
  border-radius: 20px;

  .content {
    padding-top: 30px;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 30px;

      letter-spacing: 0.05em;
    }
  }

  .profileLogo {
    width: 150px;
    margin: 30px 0 10px;
  }
`;

const Header = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 30px;
  text-align: left;
  color: #17171b;

  margin-bottom: 0;
  cursor: pointer;

  @media only screen and (max-width: 762px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

const ApplyButton = styled.a`
  margin: 30px auto;
  width: 200px;
  display: block;
  padding: 20px 40px;

  background: linear-gradient(178.87deg, #995aff -13.48%, #dc59bf 92.25%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15),
    0px 10px 25px rgba(177, 40, 255, 0.25);
  border-radius: 10px;

  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;

  text-align: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.2s Ease-out;
  background-position: 0% 50%;
  background-size: 100%;

  &:hover {
    transition: all 0.2s Ease-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15),
      0px 10px 50px rgba(177, 40, 255, 0.3);
    background-size: 200%;
    background-position: bottom 400%;
    transform: scale(1.2);
    color: white;
  }

  &:focused {
    transition: all 0.5s Ease-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15),
      0px 10px 50px rgba(177, 40, 255, 0.25);
    background-color: rgba(115, 67, 192, 1);
  }
`;

const JobCareer = ({
  title,
  location,
  intro,
  showWhatIsProfile = true,
  dayToday,
  skills,
  extras,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Header className='title' onClick={() => setOpen(!open)}>
        {title}
      </Header>
      {open && (
        <div className='content'>
          <p style={{ fontWeight: 'bold' }}>Location</p>
          <p style={{ marginTop: '10px' }}>{location.area}</p>
          {location.isRemote && <p>*Remote</p>}

          <br />
          <p>{intro}</p>

          {showWhatIsProfile && (
            <>
              <br />
              <img src={profileLogo} alt='profile' className='profileLogo' />
              <p style={{ fontWeight: 'bold' }}>What is Profile?</p>
              <p style={{ marginTop: '10px' }}>
                Profile is a Web3 platform that gives users complete control of
                their personal digital world, all in one place. From
                self-creation of digital identity (Decentralized Identifier) to
                blockchain verified credentials, Profile kickstarts this unique
                journey for Web3 users and finally gives them a way to interact
                securely on the internet.
              </p>
              <p style={{ marginTop: '10px' }}>
                Tuum Technologies is the software company behind{' '}
                <a
                  href='https://profile.site/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Profile.site
                </a>{' '}
                with a mission to empower users to create, secure, and build
                their own unique Web3 identity and digital spaces.
              </p>
              <p style={{ marginTop: '10px' }}>
                At Profile, we’re on the hunt for a product engineer with a
                passion for new technologies, someone that has an eye for design
                and is anxious to build a leading web3 social platform.
              </p>
              <p style={{ marginTop: '10px' }}>
                Ideally those interested in reaching out should have prior
                experience in product design and frontend engineering. As the
                platform undergoes a transition from one year of Beta
                development to production this person must be ready for rapid
                design system development.
              </p>
            </>
          )}
          {dayToday && dayToday.length > 0 && (
            <>
              <br />
              <p style={{ fontWeight: 'bold' }}>Day-to-Day</p>
              <ul style={{ marginTop: '10px' }}>
                {dayToday.map((day) => (
                  <li>
                    <p>{day}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {skills && skills.length > 0 && (
            <>
              <br />
              <p style={{ fontWeight: 'bold' }}>Skills</p>
              <ul style={{ marginTop: '10px' }}>
                {skills.map((skill) => (
                  <li>
                    <p>{skill}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {extras && extras.length > 0 && (
            <>
              <br />
              <p style={{ fontWeight: 'bold' }}>Extra</p>
              <ul style={{ marginTop: '10px' }}>
                {extras.map((extra) => (
                  <li>
                    <p>{extra}</p>
                  </li>
                ))}
              </ul>
            </>
          )}

          <ApplyButton href='mailto:contact@tuum.tech'>Apply now</ApplyButton>
        </div>
      )}
    </Container>
  );
};

export default JobCareer;
