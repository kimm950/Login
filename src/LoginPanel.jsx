import React, { useState } from 'react'
import styled from 'styled-components'

const LoginForm = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: 0px 1px 6px 0px rgba(51,51,51,0.3);
  border-radius: 8px;
  background-color: #fff;
  padding: 30px;
  font-family: Arial, Helvetica, sans-serif;
  .submit-button {
    width: 100%;
    height: 10vh;
  }
`
const Input = styled.input`
    width: 100%;
    height: 5vh;
    border-radius: 8px;
    border: 1px solid rgba(51,51,51,0.3);
    display: block;
    margin: 20px 0 0 0;
    padding-left: 10px;
    ::placeholder {
    color: rgba(51,51,51,0.3);
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
        <input 
         className="submit-button" 
         type ="submit" 
         value="Log in"
         />
        </>
    </LoginForm>
 );
}

export default LoginPanel