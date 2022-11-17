import React from "react";
import styled from "styled-components";
import { secondary, primary } from "./Color";

const Div = styled.div`
  transition: all 0.5s linear;
  display: flex;
  flex-direction: row;
  z-index: 100;
  position: fixed;
  width: 100%;

  background-color: ${secondary};
  color: ${primary};
  padding: 20px 50px;
  align-items: center;
  .sections-list {
    display: flex;
    flex-direction: row;
  }
  .section {
    margin-right: 20px;
    margin-left: 20px;
    color: ${primary};
    font-weight: 700;
    font-size: 20px;
    transition: all 0.5s linear;
    text-decoration: none;
  }
  .section:hover {
    cursor: pointer;
    transition: all 0.5s linear;
    color: #666;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
    .section {
      margin-left: 6px;
      margin-right: 6px;
      font-size: 16px;
    }
  }
`;

export default function Header() {
  return (
    <Div>
      <div className="logo">
        <img
          src={require("./assets/logo.png")}
          alt="alaleh-logo"
          style={{ width: 100 }}
        />
      </div>
      <div className="container sections-list">
        <a className="section" href="#rooms">
          اتاق ها
        </a>
        <a className="section" href="#facilities">
          سرویس ها
        </a>
        <a className="section" href="#book">
          رزرو
        </a>
        <a className="section" href="#ourlocation">
          آدرس ما
        </a>
      </div>
    </Div>
  );
}
