import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

class Header extends Component {
  //dynamic rendering of loging link lable
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return <FlatButton label="Login With Google" href="/auth/google" />;
      default:
        return <FlatButton label="Logout" href="/auth/logout" />;
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title={
            <Link
              to={this.props.auth ? "/surveys" : "/"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Emelia
            </Link>
          }
          iconElementLeft={<div />}
          iconElementRight={this.renderContent()}
        />
      </div>
    );
  }
}
//normal syntax
// function mapStateToProps(state){
// return{
//   auth:state.auth
// }
// }

function mapStateToProps({ auth }) {
  // auth:auth
  return { auth };
}

export default connect(mapStateToProps)(Header);
