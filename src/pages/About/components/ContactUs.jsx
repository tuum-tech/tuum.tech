import React from 'react';
import styled from 'styled-components';

import { Section } from '../../../components/layout';

const Container = styled.div`
  min-height: 400px;
`;

const ContactUs = () => {
  return (
    <>
      <Section title='Contact Us' maxWidth='600px' padding='138px 0 0' />
      <Container></Container>
    </>
  );
};

export default ContactUs;
