import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./Redux/actions/googleAuthActions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "434607980919-1l11g0ij8onhnsfth53dh45ifoh9ubrt.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "App Name that you used in google developer console API",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui red button"
          tabIndex="0"
        >
          <div className="visible content">Sign Out</div>
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="ui red button"
          tabIndex="0"
        >
          <div className="visible content">Sign In</div>
        </button>
      );
    }
  }

  render() {
    return <>{this.renderAuthButton()}</>;
  }
}
const mapStateToprops = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToprops, { signIn, signOut })(GoogleAuth);
