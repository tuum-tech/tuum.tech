import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  background: #17171b;
  padding: 92px 12px 92px 92px;

  margin-bottom: 626px;
`;

const TextArea = styled.div`
  margin-left: 20%;
  border-left: 3px solid white;
  padding: 70px 80px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;

  display: flex;
  align-items: center;

  color: #ffffff;
`;

const Feedback = () => {
  return (
    <Conatiner>
      <TextArea>
        “Find out how Tuum Technologies’ products are helping developers benefit
        from blockchain technology on an open Internet. “
      </TextArea>
    </Conatiner>
  );
};

export default Feedback;
