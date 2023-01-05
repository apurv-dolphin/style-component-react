import React, { useState } from 'react'
import { StyleButton } from '../style-components/Button/Buttons';
import { Input } from '../style-components/Input/Input';

export default function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [btn, setBtn] = useState(false);

//style component

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleMouseOver = () => {
    if (userData.email === "" || userData.password === "") {
      setBtn(!btn);
    }
  }

  const handleClick = () => {
    if (userData.email !== "" && userData.password !== "") {
      alert("login sucessfully");
      setUserData({
        email: "",
        password: "",
      })
      setBtn(false)
    } else {
      setBtn(!btn);
    }
  };
  return (
    <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "center",
          margin: "0px auto",
        }}
      >
        <Input placeholder="email" name="email" value={userData.email} onChange={handleChange} />
        <Input placeholder="password" name="password" value={userData.password}  onChange={handleChange} />
        <StyleButton
          style={{
            width: "30%",
            marginLeft: !btn ? "3px" : "500px",
          }}
          onMouseOver={handleMouseOver}
          onClick={handleClick}
        >
          {userData.email !== "" && userData.password !== ""
            ? "abhi maja ayana bhidu😎😎"
            : "detail bhar sale🤬🤬"}
        </StyleButton>
      </div>
  )
}
