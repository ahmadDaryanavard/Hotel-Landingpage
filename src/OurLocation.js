import React from "react";
import { MdOutlinePlace } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { AiOutlinePhone } from "react-icons/ai";
import styled from "styled-components";
import { primary, secondary } from "./Color";
import Plx from "react-plx";
import { ReactComponent as Svg } from "./assets/snapptrip-logo.svg";
const Div = styled.div`
  width: 100%;

  padding-top: 160px;
  padding-bottom: 120px;
  .hotel-image {
    border-radius: 10px;
    width: 100%;
  }

  .about-text {
    line-height: 2;
    font-size: 20px;

    margin-top: 30px;
  }
  .rooms-header {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
  }
  .main-section {
    width: 100%;
    border-radius: 10px;
    background-color: #fff;
    padding: 30px 10px;
  }
  .website-card {
    height: 150px;
  }
  .numbers {
    display: flex;
    flex-direction: row;
  }
  .numbers div {
    flex: 1;
    text-align: center;
    margin-top: 30px;
  }
`;

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0.4,
        endValue: 1,
        property: "scale",
      },
    ],
  },
];
export default function OurLocation() {
  return (
    <Div id="ourlocation">
      <div className="container">
        <div className="rooms-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "5px solid rgb(231, 21, 102)",
              paddingBottom: 10,
            }}
          >
            <MdOutlinePlace size={60} color={"rgb(231, 21, 102)"} />
            <div
              style={{
                marginLeft: 10,
                marginRight: 10,
                fontSize: 40,
                color: "rgb(231, 21, 102)",
              }}
            >
              آدرس ما
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div
            className="col-lg-8 text-center mb-3"
            style={{ fontSize: 20, color: primary }}
          >
            جزیره قشم - شهر درگهان - ابتدای بلوار ساحلی
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-10 my-3">
            <iframe
              width="100%"
              height="400"
              src="https://map.ir/lat/26.965597/lng/56.056849/z/17/p/ما اینجاییم"
            ></iframe>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div
              style={{
                fontSize: 30,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              شماره تماس
            </div>
            <div className="numbers">
              <div>
                <GiRotaryPhone
                  size={24}
                  style={{ marginLeft: 5, marginRight: 5, marginTop: -4 }}
                />
                07635282046
              </div>
              <div>
                <AiOutlinePhone
                  size={24}
                  style={{ marginLeft: 5, marginRight: 5, marginTop: -4 }}
                />
                09305389707
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </Div>
  );
}
