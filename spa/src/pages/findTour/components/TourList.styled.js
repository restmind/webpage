import styled from "styled-components";
import {colors} from "../../../constants/StylingConstants"

export const Wrapper = styled.div`
  margin: 40px;
  display: flex;
  gap: 23px;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
      flex-direction:column;
      justify-content: center;
      align-items: center;
  }
`;

export const ListContainer = styled.div`
  width: 875px;
  background-color: white;
  height: max-content;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 17px 20px 100px;
  @media screen and (max-width: 420px) {
    width: 80vw;
    padding: 0px 10 0px; 
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.COLOR_YELLOW_100};
  background-image: url("images/banner-line-vector.svg");
  width: 100%;
  height: 214px;
  box-sizing: border-box;
  border-radius: 30px;
  padding: 40px 60px;
  img{
    height: 240px;
    margin-top: -100px;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin-top: -10px;
  h6{
    font-weight: 400;
  }
`;

export const BannerButton = styled.button`
  background-color: ${colors.COLOR_WHITE};
  height: 42px;
  width: max-content;
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${colors.TEXT_PRIMARY};
  border-radius: 5px;
  padding: 0 30px;
`;

export const SearchBar = styled.div`
  height: 95px;
  margin: 30px 10px;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export const SearchBarInputs = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 420px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const ToursWrapper = styled.div`
  margin: 80px auto 20px;
  width: 87%;
  display: flex;
  flex-direction: column;
  gap: 44px;
  @media only screen and (max-width: 420px) {
    margin: 20px auto 0;
  }
`;
