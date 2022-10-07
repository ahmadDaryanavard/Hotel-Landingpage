import React from "react";
import { MdOutlineBedroomParent } from "react-icons/md";
import styled from "styled-components";
import { primary } from "./Color";
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
    margin-bottom: 60px;
  }
`;
export default function RoomsSection() {
  return (
    <Div>
      <div className="container">
        <div className="rooms-header">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "5px solid #ffdd3c",
              paddingBottom: 10,
            }}
          >
            <MdOutlineBedroomParent size={60} />
            <div style={{ marginLeft: 10, marginRight: 10, fontSize: 40 }}>
              اتاق های هتل
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="image-place">
              <img
                className="hotel-image"
                src={require("./assets/room2.jpg")}
                alt="هتل آلاله"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-place">
              <img
                className="hotel-image"
                src={require("./assets/room1.jpg")}
                alt="هتل آلاله"
              />
            </div>
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
