import React from "react";
import styled from "styled-components";
import BackgroundImg from "../components/BackgroundImg";
import Header from "../components/Header";

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
  }
`;

const Signup = () => {
  return (
    <Container>
      <BackgroundImg />
      <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>
              Ready to watch ? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="text" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <button>Get started</button>
          </div>
          <button>Login</button>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
