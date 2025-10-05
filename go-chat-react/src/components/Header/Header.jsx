import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "./Header.scss";

const Header = (props) => (
  <div className="header">
    <div className="header-content">
      <img
        src={`${process.env.PUBLIC_URL}/finchat_logo.png`}
        alt="Finchat Logo"
        className="header-logo"
      />
      <div className="header-titles">
        <h2 style={{ margin: 0 }}>Welcome to Finchat</h2>
        <p style={{ margin: 0, fontSize: 14 }}>
          Special chat app for traders community
        </p>
      </div>
      {props.isAuthenticated && (
        <MDBBtn
          className="logout-btn"
          color="danger"
          onClick={props.logout}
          style={{ marginLeft: 16 }}
        >
          Logout
        </MDBBtn>
      )}
    </div>
  </div>
);

export default Header;
