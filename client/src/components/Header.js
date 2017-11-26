import React, { Component } from "react";
import { connect } from "react-redux";
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
        return (
          <div>
            <FlatButton label="Logout" href="/auth/logout" />
          </div>
        );
    }
  }

  render() {
    return (
      <div>
        <AppBar
          title="Emelia"
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
