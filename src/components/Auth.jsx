import React, { Component } from "react";
import PropTypes from "prop-types";
import { addUser, updateUserLogin } from "../redux/actions";
import { connect } from "react-redux";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authMode: "signin",
      id: 1,
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      successful: false,
    };
    this.saveUser = this.saveUser.bind(this);
    this.changeAuthMode = this.changeAuthMode.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeConfirmPasstHandler = this.changeConfirmPasstHandler.bind(this);
  }

  static propTypes = {
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func.isRequired,
    updateUserLogin: PropTypes.func.isRequired,
  };
  // step 3
  componentDidMount() {}
  changeAuthMode = (e) => {
    e.preventDefault();
    this.setState({
      authMode: this.state.authMode === "signin" ? "signup" : "signin",
      successful: false,
      message: undefined,
    });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeConfirmPasstHandler = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };
  saveUser = (e) => {
    e.preventDefault();
    let user = {
      authMode: "signup",
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    console.log("user => " + JSON.stringify(user));
    user.id = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    this.props.addUser(user);
    this.setState((prevState) => {
      return {
        successful: true,
        message: "Registration Successful",
      };
    });
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          successful: false,
          message: undefined,
          authMode: "signin",
        };
      });
    }, 3000);
  };
  validateLogin = (e) => {
    e.preventDefault();
    let userDetls = this.props.users.filter(
      (item) => item.email === this.state.email
    )[0];
    if (userDetls && userDetls.password === this.state.password) {
      this.setState((prevState) => {
        return {
          successful: true,
          message: "Login Successful",
        };
      });
      userDetls.authMode = "signin";
      this.props.updateUserLogin(userDetls);
      setTimeout(() => this.props.history.push("/articals"), 100);
    } else {
      this.setState((prevState) => {
        return {
          successful: false,
          message: "Login Faild",
        };
      });
    }
  };

  render() {
    if (this.state.authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              {this.state.message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {this.state.message}
                  </div>
                </div>
              )}
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.changeEmailHandler}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.changePasswordHandler}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.validateLogin}
                >
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                don't have an account{" "}
                <a href="#" onClick={this.changeAuthMode}>
                  register?
                </a>
              </p>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                value={this.state.email}
                required={true}
                onChange={this.changeEmailHandler}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                required={true}
                value={this.state.password}
                onChange={this.changePasswordHandler}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                required={true}
                value={this.state.confirmPassword}
                onChange={this.changeConfirmPasstHandler}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.saveUser}
              >
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Already have an account{" "}
              <a href="" onClick={this.changeAuthMode}>
                Login?
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, {
  addUser,
  updateUserLogin,
})(Auth);
