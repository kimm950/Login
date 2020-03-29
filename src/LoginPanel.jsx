import React, { useState } from 'react'
import styled from 'styled-components'

const LoginForm = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  .submit-button {
    width: 100%;
    height: 10vh;
    color: #00acee;
    font-size: 22px;
    &:hover{
        transition: 0.3s;
        background-color: #00acee;
        border: 1px solid #fff;
        color: #fff;
    }
  }
  > h3 {
    color: #fff;
  }
`
const Input = styled.input`
    width: 300px;
    height: 5vh;
    border-radius: 8px;
    border: 1px solid #00acee;
    display: block;
    margin: 20px 0 0 0;
    padding-left: 10px;
    font-weight: bold;
    color: #00acee;
    ::placeholder {
    color: #00acee;
    }
`

const LoginPanel = () => {
    const [ EmailValue, setEmailValue ] = useState('')
 return (
    <LoginForm>
        <>
        <h3>Log in</h3>
        <Input 
         type="text"
         placeholder="Email Address"
        />
        <Input 
         type="text"
         placeholder="Password"
        />
        <Input 
         className="submit-button" 
         type ="submit" 
         value="Log in"
         />
        </>
    </LoginForm>
 );
}

export default LoginPanel