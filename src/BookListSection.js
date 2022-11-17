import React from "react";
import { MdOutlineBedroomParent } from "react-icons/md";
import { RiReservedLine } from "react-icons/ri";
import styled from "styled-components";
import { primary, secondary } from "./Color";
import Plx from "react-plx";
import { ReactComponent as Svg } from "./assets/snapptrip-logo.svg";
const Div = styled.div`
  width: 100%;
  background-color: ${secondary};
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
export default function BookListSection() {
  return (
    <Div id="book">
      <div className="container">
        <div className="rooms-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "5px solid #fff",
              paddingBottom: 10,
            }}
          >
            <RiReservedLine size={60} color={"white"} />
            <div
              style={{
                marginLeft: 10,
                marginRight: 10,
                fontSize: 40,
                color: "white",
              }}
            >
              رزرو اتاق
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 mb-3">
            <div className="about-text text-center">
              شما می توانید با مراجعه به وبسایت های رزرو هتل که در همین قسمت
              تعدادی از بهترین و معتبر ترین آن ها وجود دارند، اقدام به رزرو اتاق
              در هتل بین المللی آلاله شعبه مرکزی نمایید.
            </div>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-10 mt-5">
            <div className="main-section mt-3">
              <div className="row">
                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center website-card">
                  <a
                    href="https://hotelyar.com/hotel/1077/%D9%87%D8%AA%D9%84-%D8%A2%D9%84%D8%A7%D9%84%D9%87-2-%D9%82%D8%B4%D9%85"
                    className="website-link"
                  >
                    <img
                      src={require("./assets/hotelyar.png")}
                      className="website-image"
                      style={{ width: 100, height: 100, borderRadius: 5 }}
                    />
                  </a>
                </div>

                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center website-card">
                  <a
                    href="https://www.snapptrip.com/%D8%B1%D8%B2%D8%B1%D9%88-%D9%87%D8%AA%D9%84/%D8%AF%D8%B1%DA%AF%D9%87%D8%A7%D9%86/%D9%87%D8%AA%D9%84-%D8%A2%D9%84%D8%A7%D9%84%D9%87-%D9%85%D8%B1%DA%A9%D8%B2%DB%8C"
                    className="website-link d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "white",
                      height: 100,
                      width: 100,
                      borderRadius: 5,
                      border: "1px solid #ddd",
                    }}
                  >
                    <Svg />
                  </a>
                </div>
                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center website-card">
                  <a
                    href="https://jainjas.com/hotel_qeshm-alaleh2"
                    className="website-link"
                    style={{
                      backgroundColor: "#1e9b4d",
                      padding: "10px 12px 5px 12px",
                      borderRadius: 5,
                    }}
                  >
                    <img
                      src={require("./assets/jainjas.png")}
                      className="website-image"
                    />
                  </a>
                </div>
                <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center website-card">
                  <a
                    href="https://www.iran-booking.com/hotels/alaleh-2-hotel-qeshm"
                    className="website-link d-flex justify-content-center align-items-center website-card"
                    style={{
                      backgroundColor: "white",
                      padding: "10px 12px 5px 12px",
                      borderRadius: 5,
                      maxWidth: 120,
                      height: 100,

                      border: "1px solid #ddd",
                    }}
                  >
                    <img
                      src={require("./assets/iranbooking.png")}
                      className="website-image"
                      style={{ width: "95%" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </Div>
  );
}
