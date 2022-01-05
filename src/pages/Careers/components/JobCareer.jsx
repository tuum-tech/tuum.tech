import React, { useState } from 'react';
import styled from 'styled-components';

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

          <a className='apply' href='mailto:contact@tuum.tech'>
            APPLY FOR THIS JOB
          </a>
        </div>
      )}
    </Container>
  );
};

export default JobCareer;
