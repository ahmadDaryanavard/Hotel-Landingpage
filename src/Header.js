import React from "react";
import styled from "styled-components";
import { secondary, primary } from "./Color";

const Div = styled.div`
  width: 100%;
  background-color: ${secondary};
  color: ${primary};
  padding: 20px 10px;
  .sections-list {
    display: flex;
    flex-direction: row-reverse;
  }
  .section {
    margin-right: 10px;
    margin-left: 10px;
    color: ${primary};
    font-weight: 700;
  }
`;

export default function Header() {
  return (
    <Div>
      <div className="container sections-list">
        <div className="section">section1</div>
        <div className="section">section1</div>
        <div className="section">section1</div>
      </div>
    </Div>
  );
}
