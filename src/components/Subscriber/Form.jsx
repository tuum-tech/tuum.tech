import React from 'react';
import styled from 'styled-components';
import Mailchimp from 'react-mailchimp-form';

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input,
  button {
    display: block;
    width: 250px;
    height: 50px;

    outline: none;

    font-size: 14px;
    line-height: 40px;

    margin: 10px auto;
    border-radius: 10px;
    padding: 0 20px;
  }

  button {
    font-style: normal;
    font-weight: bold;

    color: ${(props) => (props.hasBgImg ? '#4c6fff' : 'white')};
    background: ${(props) => (props.hasBgImg ? 'white' : '#4C6FFF')};
  }

  input {
    border: ${(props) => (props.hasBgImg ? 'none' : '1px solid #97979a')};
  }

  .mailchimpform .msg-alert p {
    width: 100%;
    text-align: center;
    color: white !important;
  }

  @media only screen and (max-width: 992px) {
    button {
      height: 45px;
      font-size: 16px;
    }
  }
`;

const CustomForm = ({ hasBgImg = true }) => {
  const url = process.env.REACT_APP_MAILCHIMP_URL;

  return (
    <ButtonContainer
      hasBgImg={hasBgImg}
      className='col-lg-6 justify-content-lg-end justify-content-center'
    >
      <Mailchimp
        action={url}
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          },
        ]}
        messages={{
          sending: 'Sending...',
          success: 'Thank you for subscribing!',
          error: 'An unexpected internal error has occurred.',
          empty: 'You must write an e-mail.',
          duplicate: 'Too many subscribe attempts for this email address',
          button: 'Subscribe Now',
        }}
        className='mailchimpform'
      />
    </ButtonContainer>
  );
};

export default CustomForm;
