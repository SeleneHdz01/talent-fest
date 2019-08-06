import React, { Component } from 'react'
import ModalSingIn from './ModalSingIn';
import { Icon } from "antd";

export default class Login extends Component {
  render() {
    return (
      <div className="image-login">
        <ModalSingIn />
        <button
          type="button"
          className="btn btn-Usuario">
              <Icon type="user" />{" "}Usuario
          </button>
      </div>
    );
  }
}
