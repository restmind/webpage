import styled from "styled-components"
import { Link } from "react-router-dom";


export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F9F5F2;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 420px) {
    background-color: white;
  }
`;

export const ContentWrapper = styled.div`
  background-color: white;
  width: 90%;
  height: 92vh;
  border-radius: 0%  0% 50px 50px;
`;

export const Content = styled.div`
 display: flex;
 justify-content: space-evenly;
 align-items: flex-start;
`;

export const SignInText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20vh;
  padding-bottom: 5vh;
  h2{
      padding-left: 7vw;
      font-weight: 500;
  }
  @media screen and (max-width: 420px) {
    justify-content: center;
    padding-top: 15vh;
    h2 {
      padding: 0;
    }
  }
`;

export const SignInInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #9098B1;

  label {
      align-self: flex-start;
      padding-bottom: 5px;
  }
  hr {
    width: 369px;
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .8;
  margin: 3vh 0;
  &:before {
    content: '';
    background-color: #9098B1;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 .5em;
    line-height: 1.5em;
    color: #9098B1;
    background-color: #fcfcfa;
  }
}
@media screen and (max-width: 420px) {

  hr {
    width: 80vw;
  }
  }
`;
export const StyledInput = styled.input`
    width: 363px;
    height: 40px;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    margin-bottom: 30px;
  @media screen and (max-width: 420px) {
    width: 80vw;
  }
`;

export const GoogleButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
  color: #9098B1;
  width: 100%;
  height: 45px;
  font-weight: 500;
  background-color: white;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  img {
    padding-right: 12px;
  }
`;
export const ContentImg = styled.div`
padding-top: 5vh;
  img{
      width: 140%;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const DontHaveAcc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: flex-start;
    h5 {
      padding: 0 10px;
    }
    a {
      font-size: 12px;
      color: #FE862C;
      text-decoration: none;
    }
`;

export const LoginBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 10vh 0 5vh 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;