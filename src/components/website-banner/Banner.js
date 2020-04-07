import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import homeImage from "../../images/homeImage.jpg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Styles = styled.div`
  .jumbotron {
    background: url(${homeImage}) no-repeat bottom rgba(0, 0, 0, 0.8);
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
      url(${homeImage});
    background-size: cover;
    height: 100vh;
  }
  * {
    margin: 0;
    // padding: 0;
  }
  p {
    font-size: 20px;
    padding-top: 20px;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
    color: white;
    padding-top: 100px;
  }
  .buttContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 150px;
    font-family: "Roboto", sans-serif;
  }
  .banner-title {
    font-size: 100px;
  }
  .banner-description {
    font-size: 50px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      {/* <div className="overlay"></div> */}
      <div className="info">
        <h1 className="banner-title">CHILLFLIX</h1>
        <p className="banner-description">
          Watch Your Favorite Movies and Tv Shows!
        </p>
      </div>
      <div className="buttContainer">
        <Link to="/Movies">
          <Button label="Movies" />
        </Link>
        <br />

        <br />
        <Link to="/Shows">
          <Button label="Shows" />
        </Link>
        <br />

        <br />
        <Link to="/Library">
          <Button label="Library" />
        </Link>
      </div>
    </Jumbo>
  </Styles>
);
