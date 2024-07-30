import React from 'react'

export default function page() {
  return (
    <div>
      <div id="content">
        <div
          className="sub-header"
          style={{
            backgroundImage:
              'url("/static/images/default.jpg")'
          }}
        >
          <div className="overlay" />
          {/* <img src=""> */}
          <div className="container">
            <div className="row text">
              <h1> Сонгон шалгаруулалтын үе шат </h1>
              <ol className="breadcrumb">
                <li>
                  <a href="/">Нүүр</a>
                </li>
                <li>
                  <a href="/hunii-noots/songon-shalgaruulalt/">
                    Сонгон шалгаруулалтын үе шат
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
                      <li className="">
                        <a href="/hunii-noots/">
                          Хүний нөөцийн бодлого
                        </a>
                      </li>
                      <li className=" active ">
                        <a href="/hunii-noots/songon-shalgaruulalt/">
                          Сонгон шалгаруулалтын үе шат
                        </a>
                      </li>
                      <li className="">
                        <a href="/hunii-noots/neelttei-ajliin-bair">
                          Нээлттэй ажлын байр
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9 col-sm-9">
                  <div className="row">
                    <div className="right_content">
                      <h2 className="colored">Сонгон шалгаруулалтын үе шат</h2>
                      <p></p>
                      <h5>
                        Cонгон шалгаруулалтын үйл ажиллагаа нээлттэй, шудрага байх
                        болно
                      </h5>
                      <p>
                        <strong data-redactor-tag="strong">Үндсэн зарчим:</strong>
                      </p>
                      <ul>
                        <li>Шудрага өрсөлдөөнтэй</li>
                        <li>Бүх төрлийн эх үүсвэрээс</li>
                        <li>Ил тод, нээлттэй</li>
                      </ul>
                      <p>
                        <img src="/static/images/Untitled_Diagram_1_aZ5MwJR.png" />
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}