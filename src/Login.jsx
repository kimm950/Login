import React, { Component } from 'react';
import styled from 'styled-components';
import LoginPanel from './LoginPanel'

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #00acee;
  width: 100%; 
  height: 100%; 
`

export default class Login extends Component {
  render() {
    return (
      <LoginPage>
      <LoginPanel />
      </LoginPage>
    );
  }
}

