import React from 'react'

export default function page() {
  return (
    <div id="content">
    <div
      className="sub-header"
      style={{
        backgroundImage:
          'url("/static/images/image_4.jpg")'
      }}
    >
      <div className="overlay" />
      {/* <img src=""> */}
      <div className="container">
        <div className="row text">
          <h1> Хүний нөөцийн бодлого </h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">Нүүр</a>
            </li>
            <li>
              <a href="/hunii-noots/">
                Хүний нөөцийн бодлого
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <section className="top about_section">
      <div className="container">
        <div className="row">
          <article className="body">
            <div className="col-md-3 col-sm-3">
              <div className="row">
                <ul className="page-menu">
                  <li className=" active ">
                    <a href="/hunii-noots/">
                      Хүний нөөцийн бодлого
                    </a>
                  </li>
                  <li className="">
                    <a href="/hunii-noots/songon-shalgaruulalt/">
                      Сонгон шалгаруулалтын үе шат
                    </a>
                  </li>
                  <li className="">
                    <a href="/hunii-noots/neelttei-ajliin-bair/">
                      Нээлттэй ажлын байр
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-9">
              <div className="row">
                <div className="right_content">
                  <h2 className="colored">Хүний нөөцийн бодлого</h2>
                  <p></p>
                  <p>
                    Группийн алсын хараа, эрхэм зорилго, хамт олны үзэл баримтлал,
                    группийн урт болон дунд хугацааны бодлогын баримт бичиг,
                    баримтлах зарчим, хүрэх үр дүнтэй нийцсэн, харилцан уялдаатай
                    байхыг эрхэмлэнэ
                  </p>
                  <ul>
                    <li>
                      Хүний нөөцийн зохистой бодлогыг хэрэгжүүлж ажиллагсдын эрх,
                      эрх чөлөөг хүндэтгэж, эрүүл аюулгүй орчинд хөдөлмөрлөх
                      нөхцлийг бүрдүүлж, хамт олон, хувь хүний үзэл бодол, хүсэл
                      сонирхолыг дээдэлнэ
                    </li>
                    <li>
                      Компанийн ажилтан бүр эрхэлсэн ажилдаа чин сэтгэлээсээ
                      хандаж, үргэлж шинийг эрэлхийлэн бүтээлчээр ажиллаж,
                      хөдөлмөрийн үр дүнгээ шударгаар үнэлүүлэх нэгдсэн системийг
                      бүрдүүлнэ
                    </li>
                  </ul>
                  <p />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>  
  )
}
