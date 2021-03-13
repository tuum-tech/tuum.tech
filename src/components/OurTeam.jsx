import React from 'react';
import styled from 'styled-components';

import teamData from '../constants/team';

const Member = styled.div`
  width: 160px;
  margin: 70px auto 0;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }

  .emptyArea {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: white;
  }

  .name {
    margin-top: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 30px;
    color: #17171b;
  }

  .role {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #4a5568;
  }
`;

const OurTeam = () => {
  return (
    <div className='row'>
      {teamData &&
        teamData.length > 0 &&
        teamData.map((member) => (
          <Member
            key={member.name + member.role}
            className='col-lg-3 col-md-4 col-sm-4 col-xs-6'
          >
            {member.avatar ? (
              <img src={member.avatar} />
            ) : (
              <div className='emptyArea' />
            )}

            <p className='name'>{member.name}</p>
            <p className='role'>{member.role}</p>
          </Member>
        ))}
      <Member />
    </div>
  );
};

export default OurTeam;
