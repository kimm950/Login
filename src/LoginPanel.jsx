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
    
    const [ email, setEmailValue ] = useState("")
    const [ password, setPasswordValue ] = useState("")

    const handleLogin = () => {
        if(email === "email" && password === "password") {
            return alert("Log in sucess")
        } else {
            return alert("Invalid Username and password")
        }
    }
 return (
    <LoginForm>
        <>
        <h3>Log in</h3>
        <Input 
         type="text"
         placeholder="Email Address"
         value={email}
         onChange={(e)=> setEmailValue(e.target.value)}
        />
        <Input 
         type="text"
         placeholder="Password"
         value={password}
         onChange={e => setPasswordValue(e.target.value)}
        />
        <Input 
         className="submit-button" 
         type ="submit" 
         value="Log in"
         onClick={handleLogin}
         />
        </>
    </LoginForm>
 );
}

export default LoginPanel