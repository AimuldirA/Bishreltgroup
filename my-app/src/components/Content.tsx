"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Content = () => {
  return (
    <div id="content">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="item">
            <img
              src="/static/images/2 (1).jpg"
              alt="Бишрэлт Группийн “НЭЭЛТТЭЙ 200 АЖЛЫН БАЙР” өдөрлөг амжилттай болж өндөрлөлөө"
              className="slide-image"
              style={{ width: '100vw' }}
            />
            <div className="bs-slider-overlay" />
            <div className="slide-text slide_style_center">
              <small>#Онцлох мэдээ</small>
              <h1>Бишрэлт Группийн “НЭЭЛТТЭЙ 200 АЖЛЫН БАЙР” өдөрлөг амжилттай болж өндөрлөлөө</h1>
              <p className="hidden-xs">
                Бишрэлт Групп “НЭЭЛТТЭЙ 200 АЖЛЫН БАЙР” өдөрлөг 2018 оны 10-р сарын 06-нд Бишрэлт Зочид буудлын ...
              </p>
              <div className="more-button">
                <a
                  href="/%D0%B1%D0%B8%D1%88%D1%80%D1%8D%D0%BB%D1%82-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B8%D0%B9%D0%BD-%D0%BD%D1%8D%D1%8D%D0%BB%D1%82%D1%82%D1%8D%D0%B9-200-%D0%B0%D0%B6%D0%BB%D1%8B%D0%BD-%D0%B1%D0%B0%D0%B9%D1%80-%D3%A9%D0%B4%D3%A9%D1%80%D0%BB%D3%A9%D3%A9/"
                  className="btn"
                >
                  Дэлгэрэнгүй
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <img
              src="/static/images/8R7A3208.jpg"
              alt="Бишрэлт групп гадаад хамтын ажиллагаагаа өргөжүүлж “Ази, Номхон далайн бүс нутгийн Худалдаа, Аж Үйлдвэрийн Танхимуудын Нэгдсэн Холбоо (CACCI)”-ны “Байнгын гишүүн компани” боллоо"
              className="slide-image"   
              style={{ width: '100vw' }}
            />
            <div className="bs-slider-overlay" />
            <div className="slide-text slide_style_center">
              <small>#Онцлох мэдээ</small>
              <h1>Бишрэлт групп гадаад хамтын ажиллагаагаа өргөжүүлж “Ази, Номхон далайн бүс нутгийн Худалдаа, Аж Үйлдвэрийн Танхимуудын Нэгдсэн Холбоо (CACCI)”-ны “Байнгын гишүүн компани” боллоо</h1>
              <p className="hidden-xs">
                Монгол Улсад 2018 оны 9 дүгээр сарын 5-10-ны өдрүүдэд "Ази, Номхон далайн бүс нутгийн Худалдаа, А...
              </p>
              <div className="more-button">
                <a
                  href="/%D0%B1%D0%B8%D1%88%D1%80%D1%8D%D0%BB%D1%82-%D0%B3%D1%80%D1%83%D0%BF%D0%BF-%D0%B3%D0%B0%D0%B4%D0%B0%D0%B0%D0%B4-%D1%85%D0%B0%D0%BC%D1%82%D1%8B%D0%BD-%D0%B0%D0%B6%D0%B8%D0%BB%D0%BB%D0%B0%D0%B3%D0%B0%D0%B0%D0%B3%D0%B0%D0%B0-%D3%A9%D1%80%D0%B3%D3%A9%D0%B6%D2%AF%D2%AF%D0%BB%D1%8D%D1%85-%D0%B0%D0%B7%D0%B8-%D0%BD%D0%BE%D0%BC%D1%85%D0%BE%D0%BD-%D0%B4%D0%B0%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B1%D2%AF%D1%81-%D0%BD%D1%83%D1%82%D0%B3%D0%B8%D0%B9%D0%BD-%D1%85%D1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%B0-%D0%B0%D0%B6-%D2%AF%D0%B9%D0%BB%D0%B4%D0%B2%D1%8D%D1%80%D0%B8%D0%B9%D0%BD-%D1%82%D0%B0%D0%BD%D1%85%D0%B8%D0%BC%D1%83%D1%83%D0%B4%D1%8B%D0%BD-%D0%BD%D1%8D%D0%B3%D0%B4%D1%81%D1%8D%D0%BD-%D1%85%D0%BE%D0%BB%D0%B1%D0%BE%D0%BE-cacci-%D0%BD%D1%8B-%D0%B1%D0%B0%D0%B9%D0%BD%D0%B3%D1%8B%D0%BD-%D0%B3%D0%B8%D1%88%D2%AF%D2%AF%D0%BD-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8-%D0%B1%D0%BE%D0%BB%D0%BB%D0%BE%D0%BE/"
                  className="btn"
                >
                  Дэлгэрэнгүй
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <img
              src="http://bishreltgroup.mn/media/bishrelt/content/Bishrelt_Properties/1.png"
              alt="“БАРИЛГА ЭКСПО – 2018” ҮЗЭСГЭЛЭН БОЛЖ ӨНДӨРЛӨЛӨӨ"
              className="slide-image"
            />
            <div className="bs-slider-overlay" />
            <div className="slide-text slide_style_center">
              <small>#Онцлох мэдээ</small>
              <h1>“БАРИЛГА ЭКСПО – 2018” ҮЗЭСГЭЛЭН БОЛЖ ӨНДӨРЛӨЛӨӨ</h1>
              <p className="hidden-xs">
                Жил бүр зохион байгуулагддаг барилгын салбарын хамгийн том үзэсгэлэн “БАРИЛГА ЭКСПО - 2018” олон ...
              </p>
              <div className="more-button">
                <a
                  href="/%D0%B1%D0%B0%D1%80%D0%B8%D0%BB%D0%B3%D0%B0-%D1%8D%D0%BA%D1%81%D0%BF%D0%BE-2018-%D2%AF%D0%B7%D1%8D%D1%81%D0%B3%D1%8D%D0%BB%D1%8D%D0%BD-%D0%B1%D0%BE%D0%BB%D0%B6-%D3%A9%D0%BD%D0%B4%D3%A9%D1%80%D0%BB%D3%A9%D0%BB%D3%A9%D3%A9/"
                  className="btn"
                >
                  Дэлгэрэнгүй
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Content;
