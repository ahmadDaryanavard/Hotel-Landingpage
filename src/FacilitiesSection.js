import React from "react";
import { MdRoomService } from "react-icons/md";
import styled from "styled-components";
import { primary, secondary } from "./Color";
import Plx from "react-plx";
const Div = styled.div`
  width: 100%;
  background-color: ${primary};
  padding-top: 160px;
  padding-bottom: 120px;
  .hotel-image {
    border-radius: 10px;
    width: 100%;
  }

  .about-text {
    line-height: 2;
    font-size: 20px;
    color: #bbbbbb;
    margin-top: 30px;
  }
  .rooms-header {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
  }
  .header-text {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 40px;
    color: #bbbbbb;
  }

  @media (max-width: 768px) {
    .not-in-mobile {
      display: none;
    }
    .header-text {
      margin-left: 5px;
      margin-right: 5px;
      font-size: 32px;
    }
  }
`;

const parallax1Data = [
  {
    start: ".start-element1",
    end: ".end-element1",
    properties: [
      {
        startValue: 60,
        endValue: 0,
        property: "rotate",
      },
    ],
  },
];
const parallax2Data = [
  {
    start: ".start-element1",
    end: ".end-element1",
    properties: [
      {
        startValue: -60,
        endValue: 0,
        property: "rotate",
      },
    ],
  },
];
const parallax3Data = [
  {
    start: ".start-element1",
    end: ".end-element2",
    properties: [
      {
        startValue: 300,
        endValue: 360,
        property: "rotate",
      },
    ],
  },
];
const parallax4Data = [
  {
    start: ".start-element1",
    end: ".end-element2",
    properties: [
      {
        startValue: -300,
        endValue: -360,
        property: "rotate",
      },
    ],
  },
];
export default function FacilitiesSection() {
  return (
    <Div>
      <div className="container">
        <div className="rooms-header">
          <div className="start-element1"></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "5px solid #ffffff",
              paddingBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MdRoomService size={60} color={secondary} />
            <div className="header-text">امکانات و سرویس ها</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 my-2">
            <Plx className="MyAwesomeParallax" parallaxData={parallax1Data}>
              <div className="image-place">
                <img
                  className="hotel-image"
                  src={require("./assets/service2.jpg")}
                  alt="هتل آلاله"
                />
              </div>
            </Plx>
            <div className="end-element1"></div>
          </div>
          <div className="col-lg-6 my-2">
            <Plx className="MyAwesomeParallax" parallaxData={parallax2Data}>
              <div className="image-place">
                <img
                  className="hotel-image"
                  src={require("./assets/service1.jpg")}
                  alt="هتل آلاله"
                />
              </div>
            </Plx>
            <div className="end-element1"></div>
          </div>

          <div className="col-lg-6 mt-4 not-in-mobile">
            <Plx className="MyAwesomeParallax" parallaxData={parallax3Data}>
              <div className="image-place">
                <img
                  className="hotel-image"
                  src={require("./assets/service3.jpg")}
                  alt="هتل آلاله"
                />
              </div>
            </Plx>
          </div>
          <div className="col-lg-6 mt-4 not-in-mobile">
            <Plx className="MyAwesomeParallax" parallaxData={parallax4Data}>
              <div className="image-place">
                <img
                  className="hotel-image"
                  src={require("./assets/service4.jpg")}
                  alt="هتل آلاله"
                />
              </div>
            </Plx>
            <div className="end-element2"></div>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-4">
            <div className="about-text">
              هتل دارای 44 اتاق و سوئیت‌های تمیز و شیک در ساختمانی 8 طبقه است که
              در سال 1394 ساخته شده‌اند. خدمات خانه‌داری در این هتل به مهمانان
              ارائه می‌شود.
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </Div>
  );
}
