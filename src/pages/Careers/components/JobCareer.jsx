import React, { useState } from 'react';
import styled from 'styled-components';

import { SectionText, ContentText } from '../../../components/Texts';

const Container = styled.div`
  margin-top: 25px;
  padding: 40px 30px;
  background: white;
  border-radius: 20px;

  .content {
    padding-top: 30px;
  }

  .apply {
    background: rebeccapurple;
    padding: 15px;
    border-radius: 5px;
    color: white;
    display: block;
    margin: 50px auto 0;
    width: 200px;
    text-align: center;
  }
`;

const Header = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 45px;
  text-align: center;
  color: #17171b;

  margin-bottom: 0;
  cursor: pointer;
  text-align: left;

  @media only screen and (max-width: 762px) {
    font-size: 45px;
    line-height: 52px;
  }
`;

const Intro = styled(SectionText)`
  margin: 0;
`;

const Text = styled(ContentText)``;

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
          <Intro style={{ fontWeight: 'bold' }}>Location</Intro>
          <Text>{location.area}</Text>
          {location.isRemote && <Text>*Remote</Text>}

          <br />
          <Intro>{intro}</Intro>

          {showWhatIsProfile && (
            <>
              <br />
              <Text style={{ fontWeight: 'bold' }}>What is Profile?</Text>
              <Text style={{ marginTop: '10px' }}>
                Profile is a Web3 platform that gives users complete control of
                their personal digital world, all in one place. From
                self-creation of digital identity (Decentralized Identifier) to
                blockchain verified credentials, Profile kickstarts this unique
                journey for Web3 users and finally gives them a way to interact
                securely on the internet.
              </Text>
              <Text style={{ marginTop: '10px' }}>
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
              </Text>
              <Text style={{ marginTop: '10px' }}>
                At Profile, we’re on the hunt for a product engineer with a
                passion for new technologies, someone that has an eye for design
                and is anxious to build a leading web3 social platform.
              </Text>
              <Text style={{ marginTop: '10px' }}>
                Ideally those interested in reaching out should have prior
                experience in product design and frontend engineering. As the
                platform undergoes a transition from one year of Beta
                development to production this person must be ready for rapid
                design system development.
              </Text>
            </>
          )}
          {dayToday && dayToday.length > 0 && (
            <>
              <br />
              <Text style={{ fontWeight: 'bold' }}>Day-to-Day</Text>
              <ul>
                {dayToday.map((day) => (
                  <li>
                    <Text>{day}</Text>
                  </li>
                ))}
              </ul>
            </>
          )}
          {skills && skills.length > 0 && (
            <>
              <br />
              <Text style={{ fontWeight: 'bold' }}>Skills</Text>
              <ul>
                {skills.map((skill) => (
                  <li>
                    <Text>{skill}</Text>
                  </li>
                ))}
              </ul>
            </>
          )}
          {extras && extras.length > 0 && (
            <>
              <br />
              <Text style={{ fontWeight: 'bold' }}>Extra</Text>
              <ul>
                {extras.map((extra) => (
                  <li>
                    <Text>{extra}</Text>
                  </li>
                ))}
              </ul>
            </>
          )}

          <a className='apply' href='mailto:contact@tuum.tech'>
            APPLY FOR THIS JOB
          </a>
        </div>
      )}
    </Container>
  );
};

export default JobCareer;
