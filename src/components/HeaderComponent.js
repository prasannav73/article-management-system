import React, { Component } from "react";
import { addUser } from "../redux/actions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  isUserLoggedIn() {
    let userDetls = this.props.users.filter(
      (item) => item.authMode === "signin"
    );
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="" className="navbar-brand">
                Artical Management System
              </a>
            </div>
            <div className="navbar-nav ml-auto">
              {this.props &&
                this.props.users &&
                this.props.users.filter((item) => item.authMode === "signin") &&
                this.props.users.filter((item) => item.authMode === "signin")
                  .length > 0 && (
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      LogOut
                    </a>
                  </li>
                )}
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps, {
  addUser,
})(HeaderComponent);
