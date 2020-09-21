import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import styled from "styled-components";

export default class Login extends Component {
  render() {
    return (
      <>
        <HomeNavbar></HomeNavbar>
        <LoginContainer>
          <form>
            <h3>Sign In</h3>

            <div className="form-group">
              <p className="text">Email address</p>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <p className="text">Password</p>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="customCheck1"
                />
                <p className="form-check-label text" htmlFor="customCheck1">
                  Remember me
                </p>
              </div>
            </div>

            <Link
              to="/home"
              type="submit"
              className="btn btn-primary btn-block"
            >
              Submit
            </Link>
            <p className="forgot-password text-right">
              <Link to="/home">Forgot password?</Link>
            </p>
          </form>
        </LoginContainer>
      </>
    );
  }
}

const LoginContainer = styled.div`
  margin: 5rem auto;
  padding: 3rem;
  width: 30rem;

  h3 {
    margin: 0 0 3rem;
  }

  .text {
    text-align: left;
  }
`;
