"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const IndexTop = () => {
  return (
    <section className="top index_top">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-4 col-xs-6 colored body">
            <h3 className="white left">
              <strong>Бишрэлт групп</strong>
            </h3>
            <ul className="menu-list">
              <li>
                <a href="/groupiin-taniltsuulga/mendchilgee">Мэндчилгээ</a>
              </li>
              <li>
                <a href="/groupiin-taniltsuulga/">Группийн танилцуулга</a>
              </li>
              <li>
                <a href="/groupiin-taniltsuulga/biznesiin-chiglel/">Бизнесийн чиглэл</a>
              </li>
              <li>
                <a href="/groupiin-taniltsuulga/bishrelt-groupTuuh/">Бишрэлт Группийн түүх</a>
              </li>
              <li>
                <a href="/groupiin-taniltsuulga/companiin-zasaglal/">Компанийн засаглал</a>
              </li>
              <li>
                <a href="/groupiin-taniltsuulga/too-barimt/">Бишрэлт группийн тоо баримтууд</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 hidden-sm col-xs-6">
            <div className="row">
              <img className="img" alt="Бишрэлт групп" src="/static/images/image_3.jpg" />
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 colored body">
            <h3 className="white">
              <strong>Тендерийн урилга</strong>
            </h3>
            <div className="circle">
              <a href="/hudaldan-avalt/">
                <div className="count">2</div>
              </a>
            </div>
            <p>нээлттэй тендер байна</p>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6 colored body">
            <h3 className="white">
              <strong>Ажлын байр</strong>
            </h3>
            <div className="circle">
              <a href="/hunii-noots/">
                <div className="count">39</div>
              </a>
            </div>
            <p>нээлттэй ажлын байр байна</p>
          </div>
          <div className="clearfix visible-xs" />
          <div className="col-md-4 col-sm-12 col-xs-12 small-car">
            <div className="row" style={{ height: "100%" }}>
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="item">
                    <img
                      src="/static/images/2 (1).jpg"
                      alt="Бишрэлт Группийн “НЭЭЛТТЭЙ 200 АЖЛЫН БАЙР” өдөрлөг амжилттай болж өндөрлөлөө"
                      className="slide-image"
                      style={{ width: '100vw', height: 'auto' }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <img
                      src="/static/images/8R7A3208.jpg"
                      alt="Бишрэлт групп гадаад хамтын ажиллагаагаа өргөжүүлж “Ази, Номхон далайн бүс нутгийн Худалдаа, Аж Үйлдвэрийн Танхимуудын Нэгдсэн Холбоо (CACCI)”-ны “Байнгын гишүүн компани” боллоо"
                      className="slide-image"
                      style={{ width: '100vw', height: 'auto' }}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item active">
                    <img
                      src="http://bishreltgroup.mn/media/bishrelt/content/Bishrelt_Properties/1.png"
                      alt="“БАРИЛГА ЭКСПО – 2018” ҮЗЭСГЭЛЭН БОЛЖ ӨНДӨРЛӨЛӨӨ"
                      className="slide-image"
                      style={{ width: '100vw', height: 'auto' }}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="clearfix visible-xs" />
        </div>
      </div>
    </section>
  );
};

export default IndexTop;
