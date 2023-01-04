import React, { useState } from 'react'
import { AnimatedLogo, Button, FancyButton, StyleButton, SubmitButton } from '../style-components/Button/Buttons';
import { CenterDiv } from '../style-components/CenterDiv/CenterDiv';
import logo from "../logo.svg"

export default function Prectice() {
  const [show, setShow] = useState(false);
  const displayClick = () => {
    setShow(!show);
  };

  return (
    <CenterDiv>
      <AnimatedLogo src={logo} />
      <div>
        <button>Button</button>
        <br />
      </div>
      <div>
        <StyleButton>New Button</StyleButton>
        <SubmitButton type="submit">Me submit hu me submit hu</SubmitButton>
      </div>
      <div>
        <Button>Normal</Button>
        <Button primary onClick={displayClick}>
          Primary
        </Button>
        {show && <h1>Apurv</h1>}
        <br />
      </div>
      <div>
        <FancyButton>FancyButton</FancyButton>
        <br />
      </div>
    </CenterDiv>
  )
}
