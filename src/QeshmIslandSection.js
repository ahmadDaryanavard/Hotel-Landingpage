import React from "react";
import { GiIsland } from "react-icons/gi";
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

export default function QeshmIslandSection() {
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
            <GiIsland size={60} />
            <div style={{ marginLeft: 10, marginRight: 10, fontSize: 40 }}>
              جاذبه های قشم
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
              دره‌ی ستارگان
            </div>
            <div style={{ fontSize: 18, lineHeight: 2 }}>
              دره‌ی ستارگان از قدیم الایام افسانه‌های زیادی را به خود همراه
              داشته است. برخی از بومیان جزیره معتقدند که این دره از شهاب باران
              به وجود آمده و برخی دیگر که درصد بیشتری را تشکیل می‌دهند بر این
              باورند که در روزگاران گذشته ستاره‌های آسمان در این منطقه افتاده
              اند و باعث ایجاد چنین اشکالی در سنگ‌ها شده اند. اهالی دیگر کمی
              ترسناک‌تر به موضوع نگاه کرده و آن‌جا را دره‌ی ارواح می‌نامند، چرا
              که هنگام وزش باد در بین صخره‌ها، صدایی وهم انگیز ایجاد می‌شود که
              گفته می‌شود شبیه به صدای زمزمه‌ی ارواح است.
            </div>
            <div>
              <img
                className="hotel-image mt-4"
                src={require("./assets/dare-setaregan.jpg")}
                alt="هتل آلاله"
              />
            </div>
            <div style={{ fontSize: 18, lineHeight: 2, marginTop: 20 }}>
              به هر طریق دره‌ی ستارگان یکی از منحصربفردترین جاذبه‌های طبیعی در
              کل کشور به شمار می‌رود که در اثر فرسایش آب‌های سطحی، بارش‌های
              رگباری و طوفان‌های شدید در طی سالیان زیاد به وجود آمده است. برخی
              محققان بر این باورند که عمر این دره به دو میلیون سال می‌رسد. دره‌ی
              ستارگان در نزدیکی روستای برکه خلف (در ۵ کیلومتری جنوب جزیره) قرار
              دارد.
            </div>
          </div>

          <div className="col-lg-2"></div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
              تنگه چاه کوه
            </div>
            <div style={{ fontSize: 18, lineHeight: 2 }}>
              دره یا تنگه‌ی چاهکوه در ۷۰ کیلومتری مرکز شهر قشم و در نزدیکی
              روستای چاهوی شرقی قرار دارد. این دره که در اصل از چهار طرف تنگه
              دارد، عمقی برابر ۱۰۰ متر را داراست. این موضوع به معنی این است که
              تا ۱۰۰ متر بالای سر، دیوارهای دره دیده می‌شود. طبیعتاً آب در یک
              جزیره از اهمیت ویژه ای برخوردار است. بومی‌های این منطقه در زمان
              قدیم به منظور هدر نرفتن آب باران در کف دره چند چاه حفر کرده بودند
              و احتمالاً دلیل نام‌گذاری این دره به نام چاهکوه همین موضوع باشد.
              بیش از ۴۰۰ سال از عمر چاه‌های این منطقه می‌گذرد.
            </div>
            <div>
              <img
                className="hotel-image mt-4"
                src={require("./assets/chah-kooh.jpg")}
                alt="هتل آلاله"
              />
            </div>
          </div>

          <div className="col-lg-2"></div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
              غار خربس
            </div>
            <div style={{ fontSize: 18, lineHeight: 2 }}>
              از دیگر جاذبه‌های طبیعی جزیره قشم، غار خربس متعلق به دوران مادها
              است که در ۱۵ کیلومتری جنوب جزیره قرار گرفته و از دنباله‌‌ی
              چین‌خوردگی‌های رشته‌کوه‌های زاگرس به وجود آمده است. از نکته‌های
              قابل‌توجه در مورد این پدیده طبیعی، می‌توان به معماری منحصربه‌فرد و
              رمزآلود آن اشاره کرد که در نوع خود زیبا و جالب است. پرستشگاه مهر و
              الهه‌ی میترا، مکانی برای نگهداری استخوان‌های مردگان و پناهگاه مردم
              هنگام حمله دزدان دریایی، از جمله نظریه‌هایی است که در مورد این غار
              وجود دارد.
            </div>
            <div>
              <img
                className="hotel-image mt-4"
                src={require("./assets/kharbas.jpg")}
                alt="هتل آلاله"
              />
            </div>
          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    </Div>
  );
}
