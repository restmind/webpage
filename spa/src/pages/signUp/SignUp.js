import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/Button.styled";
import { ContentImg, SignUpText, Content, SignUpInputs, RoleRadio, ChooseRole, NameInputs, DontHaveAcc, GoogleButton, BackgroundWrapper, ContentWrapper, LoginBtnLink, StyledInput } from "./SignUp.styled";

function SignUp() {
    const [user, setUser] = useState(
        {
            email:'',
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
        "email": user.email,
        "username": user.username,
        "password": user.password
        }
        console.log(user);
        axios.post(apiBaseUrl+'sign-up', payload)
        .then(function (response) {
        console.log(response);
        if(response.data.code == 200){
        console.log("Login successfull");
        }
        else if(response.data.code == 204){
        console.log("Username password do not match");
        alert("username password do not match")
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
                    <SignUpText>
                        <h2>Create account</h2>
                    </SignUpText>
                    <Content>
                        <SignUpInputs>
                            <GoogleButton><img src="\images\icon-google.svg" alt="google icon"></img> Sign In with Google</GoogleButton>
                            <hr data-content="OR"></hr>
                            <label>Email adress</label>
                            <StyledInput value={user.email} type="email" onChange={handleChange} name="email"></StyledInput>
                            <label>Username</label>
                            <StyledInput value={user.username} type="name" onChange={handleChange} name="username"></StyledInput>
                            <label>Password</label>
                            <StyledInput value={user.password} type="password" onChange={handleChange} name="password"></StyledInput>
                            <DontHaveAcc>
                                <h5>Already have an account?</h5>
                                <Link to="/sign-in">Log In</Link>
                            </DontHaveAcc>
                            <LoginBtnLink to="/">
                                <Button primary htmlType="submit" onClick={handleClick}>Create account</Button>
                            </LoginBtnLink>
                        </SignUpInputs>
                        <ContentImg>
                        <img src="images\illustration-1.svg" alt="illustration" />
                        </ContentImg>
                    </Content>
                </ContentWrapper>
            </BackgroundWrapper>
        </React.Fragment>
);
}

export default SignUp;