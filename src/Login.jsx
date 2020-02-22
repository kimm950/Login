import React, { Component } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  justfy-content: center;
  align-item: center;
  height: 100%;
  margin-top: 50px;
`

const LoginForm = styled.div`
  width: 300px;
  height: 600px;
  box-shadow: 0px 1px 6px 0px rgba(51,51,51,0.3);
  margin: 0 auto;
  border-radius: 8px;
  background-color: #fff
`
export default class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
      <LoginForm />
      </LoginWrapper>
    )
  }
}
