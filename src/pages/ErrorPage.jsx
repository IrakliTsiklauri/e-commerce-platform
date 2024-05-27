import React from "react";
import styled from "styled-components";
import errorImg from "../images/errorimg.jpg";

const ErrorPage = () => {
  return (
    <Error>
      <Errortext>
        <h2>SORRY</h2>
        <h4>PAGE NOT FOUND</h4>
        <span>404</span>
      </Errortext>
      <ErrorImage>
        <img src={errorImg} alt="" />
      </ErrorImage>
    </Error>
  );
};

export default ErrorPage;

const Error = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) and (max-width: 900px) {
   grid-template-columns:1fr;
  }
`;

const Errortext = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 68vh;
  gap: 20px;

  h2 {
    font-size: 58px;
    font-weight: 700;
    color: #7b7be4;
  }

  h4 {
    font-size: 38px;
    font-weight: 400;
    color: #e37777;
  }

  span {
    font-size: 120px;
    font-weight: 700;
    color: #912727;
    animation: emergencyCall 2s infinite;

    @keyframes emergencyCall {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
  }
`;

const ErrorImage = styled.div`
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 450px;
    position: relative;
    animation: errorimage 4s infinite;

    @keyframes errorimage {
      0% {
        transform: perspective(800px) rotateY(0deg);
      }
      50% {
        transform: perspective(800px) rotateY(180deg);
      }
      100% {
        transform: perspective(800px) rotateY(360deg);
      }
    }
  }
`;
