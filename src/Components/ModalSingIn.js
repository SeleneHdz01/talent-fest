import React, { Component } from "react";
import { Icon } from "antd";

// const proxyurl = "https://guarded-harbor-23202.herokuapp.com/";
// const url = "https://localhost:3000/api/signin"; // site that doesn’t send Access-Control-*
// fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

const signin = user => {
  return fetch(`https://guarded-harbor-23202.herokuapp.com/api/signin`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "appication/json",
      "Access-Control-Allow-Origin":
        "https://guarded-harbor-23202.herokuapp.com",
      "Content-Type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

class ModalSingIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.loginToDB = this.loginToDB.bind(this);
  }

  onChangeEmail(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  onChangePassword(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.email);
  }

  loginToDB(event) {
    event.preventDefault();
    // this.setState({ loading: true })
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    console.log(user);
    signin(user).then(data => {
      if (data.err) {
        this.setState({ error: data.error, loading: false });
      }
      // else {
      //   //authenticate
      //   authenticate(data, () => {
      //     this.setState({ redirectToReferer: true });
      //   });
      // }
    });
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          {" "}
          <Icon type="solution" />
          Administrador
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Inicia Sesion
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">
                      Correo:
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="recipient-name"
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Contraseña:
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="message-text"
                      onChange={this.onChangeEmail}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={this.loginToDB}
                >
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSingIn;

// export default class ModalSingIn extends Component {
//   render() {

//   }
// }
