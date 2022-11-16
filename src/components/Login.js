import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from '../API'

//Components
import Button from "./Button";

//Styles
import { Wrapper } from "./Login.styles";

//Context
import { Context } from "../context";

const Login = () => {


    const handleSubmit = () => {

    }

    const handleInput = e => {

    }

    return (
        <Wrapper>
            <label>Username:</label>
            <input type='text' value='' name='username' onChange={handleInput} />
            <label>Password:</label>
            <input type='password' value='' name='password' onChange={handleInput} />
            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
}


export default Login;