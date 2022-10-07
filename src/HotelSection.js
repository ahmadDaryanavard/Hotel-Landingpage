import React from "react";
import styled from "styled-components";
import { primary } from "./Color";
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
    color: #eeeeee;
    margin-top: 30px;
  }
`;
export default function HotelSection() {
  return (
    <Div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="image-place">
              <img
                className="hotel-image"
                src={require("./assets/alaleh.jpeg")}
                alt="هتل آلاله"
              />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div className="about-text">
              هتل آلاله مرکزی درگهان در بلوار ساحلی شهر درگهان جزیره قشم قرار
              گرفته است. این هتل 3 ستاره دارای چشم اندازی به ساحل و دریا می‌باشد
              و از رستوران و پنجره اکثر اتاق‌های هتل می‌توانید منظره دریای
              نیلگون خلیج فارس را مشاهده کنید.
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
}
