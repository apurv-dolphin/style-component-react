import styled, { keyframes } from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  padding: 15px 15px;
  margin: 10px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#f5026b" : "white")};
  }
`;

export const StyleButton = styled.button`
  background-color: antiquewhite;
  padding: 15px 15px;
  margin: 10px;
  cursor: pointer;
`;

export const FancyButton = styled(StyleButton)`
  background-image: linear-gradient(to right, #f6d364 0%, #fda085 100%);
  border: none;
  &:hover {
    background-image: linear-gradient(to right, #e3bf5b 20%, #f22980 100%);
    border: none;
  }
`;

export const SubmitButton = styled(StyleButton).attrs((props) => ({
  type: "submit",
}))`
  &:active {
    background-color: red;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 10s linear;
`
