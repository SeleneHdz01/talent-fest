import React, { Component } from "react";
import { Icon } from "antd";

const signin = user => {
  return fetch(`https://guarded-harbor-23202.herokuapp.com/signin`, {
    method: "POST",
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
    console.log(this.state.password);
  }

  loginToDB(event) {
    event.preventDefault();
    // this.setState({ loading: true })
    // const { email, password } = this.state;
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log("user", user);
    signin(user).then(data => {
      console.log("data", data);

      if (data.err) {
        this.setState({ error: data.error, loading: false });
      }

      if (data.token) {
        console.log("logueado!!!");
      } else {
        console.log("error login");
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
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          {" "}
          <Icon type="solution" />
          Administrador
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Inicia Sesion
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Correo:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="recipient-name"
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Contraseña:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="message-text"
                      onChange={this.onChangePassword}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
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
