import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/Button.styled";
import { ContentImg, SignInText, Content, SignInInputs, DontHaveAcc, GoogleButton, BackgroundWrapper, ContentWrapper, LoginBtnLink, StyledInput } from "./SignIn.styled";

function SignIn() {
    const [user, setUser] = useState(
        {
            username:'',
            password:''
        }
    );
    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleClick = () => {
        var apiBaseUrl = "http://localhost:4000/api/";
        var payload={
        "email": user.username,
        "password": user.password
        }
        console.log(user);
        axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
        console.log("Login successfull");
        }
        else if(response.data.code == 204){
        console.log("Username password do not match");
        alert("username password do not match")
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
        })
        .catch(function (error) {
        console.log(error);
        });
    };

    return (
    <React.Fragment>
        <BackgroundWrapper>
            <ContentWrapper>
                <SignInText>
                    <h2>Log in</h2>
                </SignInText>
                <Content>
                    <SignInInputs>
                        <Link to="/">
                        <GoogleButton><img src="\images\icon-google.svg" alt="google icon"></img> Sign In with Google</GoogleButton>
                        </Link>
                        <hr data-content="OR"></hr>
                        <label>Email adress</label>
                        <StyledInput value={user.username} type="email" onChange={handleChange} name="username"></StyledInput>
                        <label>Password</label>
                        <StyledInput value={user.password} type="password" onChange={handleChange} name="password"></StyledInput>
                        <DontHaveAcc>
                            <h5>Don't have an account?</h5>
                            <Link to="/sign-up">
                                Sign Up
                            </Link>
                        </DontHaveAcc>
                        <LoginBtnLink to="/">
                            <Button primary htmlType="submit" onClick={handleClick}>Log In</Button>
                        </LoginBtnLink>
                    </SignInInputs>
                    <ContentImg>
                    <img src="images\illustration-1.svg" alt="illustration" />
                    </ContentImg>
                </Content>
            </ContentWrapper>
        </BackgroundWrapper>
    </React.Fragment>
);
}

export default SignIn;