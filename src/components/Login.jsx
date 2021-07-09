import React from "react";
import Input from "./Input";

export default function Login(props) {
  return (
    <div>
      <form className="form">
        <Input type="text" name="username" placeholder="username" />
        <Input type="password" name="password" placeholder="password" />
        {!props.isRegistered && <Input type="password" name="password" placeholder="confirm password" />}
        <button type="submit">
        {props.isRegistered?"Login":"Register"}
        </button>
      </form>
    </div>
  )};
