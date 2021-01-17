import styled from "styled-components"
import {colors, fontSizes} from "../../constants/StylingConstants"

export const Button = styled.button`
  margin: ${({ center }) => (center ? '20px 100px 0 100px' : '0')};
  height: 42px;
  border-radius: 5px;
  padding: 0 15px;
  background: ${({ primary }) => (primary ? colors.COLOR_PRIMARY_100 : colors.COLOR_WHITE)};
  white-space: nowrap;
  color: ${({ primary }) => (primary ? colors.COLOR_WHITE : colors.COLOR_PRIMARY_100)};
  font-size: ${({ fontSmall }) => (fontSmall ? fontSizes.font12 : fontSizes.font14)};
  outline: none;
  border: 1px solid ${({ primary }) => (primary ? colors.COLOR_WHITE : colors.COLOR_PRIMARY_100)};
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? colors.COLOR_WHITE : colors.COLOR_PRIMARY_100)};
    color: ${({ primary }) => (primary ? colors.COLOR_PRIMARY_100 : colors.COLOR_WHITE)};
    border: 1px solid ${({ primary }) => (primary ? colors.COLOR_PRIMARY_100 : colors.COLOR_WHITE  )};
  }
  @media only screen and (max-width: 420px) {
    font-size: ${({ fontSmall }) => (fontSmall ? fontSizes.font10 : fontSizes.font12)};
    padding: 0 25px;
  }
`;