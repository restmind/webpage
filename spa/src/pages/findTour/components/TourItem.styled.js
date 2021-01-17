import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const TourImg = styled.div`
  img {
    width: 233px;
    height: 156px;
    object-fit: cover;
    border-radius: 15px;
  }
  @media only screen and (max-width: 420px) {
    margin: 0 auto 10px;
    img {
      width: 85vw;
      border-radius: 30px;
      height: 200px;
    }
  }
`;

export const TourDescription = styled.div`
  padding: 10PX 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  h2{
    width: 300px
  }
  @media only screen and (max-width: 420px) {
    width: 90%;
    margin: 0 auto;
    h2 {
      width: 77vw;
    }
  }
`;

export const DescriptionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 420px) {
  align-items: flex-start;
  flex-direction: column;
  margin: 5px 0;
}
`;

export const Review = styled.div`
display: flex;
align-items: center;
gap: 10px;
@media only screen and (max-width: 420px) {
  align-items: flex-start;
  margin: 5px 0;
}
`;

export const Price = styled.div`
  margin: 5px 0;
  width: max-content;
  display: flex;
  align-items: center;
  height: 25px;
  img {
    height: 18px;
    margin-right: 10px;
  }
  h5 {
    margin-left: 10px;
  }
  @media only screen and (max-width: 420px) {
  margin: 15px 0;
}
`;