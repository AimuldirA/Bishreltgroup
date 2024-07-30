import React from 'react'

export default function page() {
  return (
    <div id="content">
    <div
      className="sub-header"
      style={{
        backgroundImage:
          'url("/static/images/cloud_computing_services.jpg")'
      }}
    >
      <div className="overlay" />
      {/* <img src="/media/bishrelt/content/cloud_computing_services.jpg"> */}
      <div className="container">
        <div className="row text">
          <h1> Хамтран ажиллах санал </h1>
          <ol className="breadcrumb">
            <li>
              <a href="/">Нүүр</a>
            </li>
            <li>
              <a href="/hudaldan-avalt/">
                Хамтран ажиллах санал
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <section className="top">
      <div className="container">
        <div className="row">
          <article className="body">
            <div className="col-md-3 col-sm-3">
              <div className="row">
                <ul className="page-menu">
                  <li className="">
                    <a href="/hudaldan-avalt/hudaldan-avaltin-bodlogo/">
                      Худалдан авалтын бодлого
                    </a>
                  </li>
                  <li className="">
                    <a href="/hudaldan-avalt/shalguur-uzuulelt/">
                      Шалгуур үзүүлэлт
                    </a>
                  </li>
                  <li className=" active ">
                    <a href="/hudaldan-avalt/">
                      Хамтран ажиллах санал
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-sm-9">
              <div className="row">
                <div className="right_content">
                  <h2 className="colored">Хамтран ажиллах санал</h2>
                  <ul className="article-list">
                    <li className="row">
                      <div className="col-sm-8 col-xs-12">
                        <a href="#" data-toggle="modal" data-target="#modal28">
                          {/* <img alt="Бишрэлт Групп”-ийн хэрэгжүүлж буй барилгын төслүүдийн хэрэгцээнд БАРИЛГЫН МАТЕРИАЛЫН ХАНГАМЖИЙН БАРАА нийлүүлж хамтран ажиллах компани сонгон шалгаруулах" src="/static/sites/bishrelt/default/images/.7576933556202577798_200_x_200.jpg"/> */}
                          Бишрэлт Групп”-ийн хэрэгжүүлж буй барилгын төслүүдийн
                          хэрэгцээнд БАРИЛГЫН МАТЕРИАЛЫН ХАНГАМЖИЙН
                          БАРАА&nbsp;нийлүүлж хамтран ажиллах компани сонгон
                          шалгаруулах
                        </a>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <time>
                          <i className="fa fa-calendar" /> Зарласан өдөр:
                          2017-08-17 00:00
                        </time>
                        <time>
                          <i className="fa fa-calendar" /> Хүлээн авах өдөр
                          2017-09-30 00:00
                        </time>
                      </div>
                    </li>
                    {/* Modal */}
                    <div
                      className="modal fade bd-example-modal-lg"
                      id="modal28"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myModalLabel"
                    >
                      <div className="modal-dialog  modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                              Бишрэлт Групп”-ийн хэрэгжүүлж буй барилгын
                              төслүүдийн хэрэгцээнд БАРИЛГЫН МАТЕРИАЛЫН ХАНГАМЖИЙН
                              БАРАА&nbsp;нийлүүлж хамтран ажиллах компани сонгон
                              шалгаруулах
                            </h4>
                          </div>
                          <div className="modal-body">
                            <p>
                              <strong data-redactor-tag="strong">
                                Компанид тавигдах ерөнхий шаардлага
                              </strong>
                              :
                            </p>
                            <ul>
                              <li>
                                Тухайн чиглэлээр 2 ба түүнээс дээш жилийн ажлын
                                туршлагатай байх
                              </li>
                              <li>
                                Үйл ажиллагаа эрхлэх холбогдох зөвшөөрлүүдийг
                                бүрэн авсан байх
                              </li>
                              <li>Санхүүгийн чадамжтай байх</li>
                              <li>Албан ёсны дистерьбютер, үйлдвэрлэгч байх</li>
                            </ul>
                            <p>
                              <strong data-redactor-tag="strong">
                                Компанид тавигдах бусад шаардлага
                              </strong>
                            </p>
                            <ul>
                              <li>
                                Бүтээгдэхүүн хадгалах шаардлага хангасан агуулах,
                                худалдааны цэгтэй байх
                              </li>
                              <li>
                                Бүтээгдэхүүн нь мэргэжлийн хяналт, магадлан
                                шинжилгээгээр, чанарын шаардлага хангасан, аюулгүй
                                болох нь батлагдсан байх
                              </li>
                              <li>
                                Бүтээгдэхүүнийг хүргэх хугацааг зөв нарийн тооцож,
                                тохирсон хугацаандаа хүргэх, зориулалтын техниктэй
                                байх
                              </li>
                              <li>Мэргэшсэн туршлагатай ажиллах хүчинтэй байх</li>
                            </ul>
                            <p>
                              <strong>Холбоо барих</strong>
                              <br />
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Бишрэлт Холдинг ХХК-ийн ЗХНГ-ын Хангамж,
                              үйлчилгээний алба
                              <br />
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Хаяг: Хаяг: Монгол улс, Улаанбаатар хот 211238,
                              Чингэлтэй дүүрэг, Самбуугийн гудамж-43
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Утас: Утас: +976-11-316859
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Факс: (976)-11-310833 ХҮАлбанд
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Имэйл хаяг: sourcing@bishreltholding.mn холбоо барих
                            </p>
                            <p className="price">
                              <i className="fa fa-clock-o" /> Үнийн санал ирүүлэх
                              хугацаа: 2017-09-30 00:00
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              data-dismiss="modal"
                            >
                              хаах
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <li className="row">
                      <div className="col-sm-8 col-xs-12">
                        <a href="#" data-toggle="modal" data-target="#modal27">
                          {/* <img alt="“Бишрэлт Групп”-ийн хараат охин компаниудын хэрэгцээнд БҮХ ТӨРЛИЙН ХАНГАМЖИЙН БАРАА нийлүүлж хамтран ажиллах компани сонгон шалгаруулах." src="/static/sites/bishrelt/default/images/.7576933556202577798_200_x_200.jpg"/> */}
                          “Бишрэлт Групп”-ийн хараат охин компаниудын
                          хэрэгцээнд&nbsp;БҮХ ТӨРЛИЙН ХАНГАМЖИЙН
                          БАРАА&nbsp;нийлүүлж хамтран ажиллах компани сонгон
                          шалгаруулах.
                        </a>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <time>
                          <i className="fa fa-calendar" /> Зарласан өдөр:
                          2017-08-17 00:00
                        </time>
                        <time>
                          <i className="fa fa-calendar" /> Хүлээн авах өдөр
                          2017-08-30 00:00
                        </time>
                      </div>
                    </li>
                    {/* Modal */}
                    <div
                      className="modal fade bd-example-modal-lg"
                      id="modal27"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myModalLabel"
                    >
                      <div className="modal-dialog  modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="myModalLabel">
                              “Бишрэлт Групп”-ийн хараат охин компаниудын
                              хэрэгцээнд&nbsp;БҮХ ТӨРЛИЙН ХАНГАМЖИЙН
                              БАРАА&nbsp;нийлүүлж хамтран ажиллах компани сонгон
                              шалгаруулах.
                            </h4>
                          </div>
                          <div className="modal-body">
                            <p>
                              <strong data-redactor-tag="strong">
                                Компанид тавигдах ерөнхий шаардлага
                              </strong>
                              :
                            </p>
                            <ul>
                              <li>
                                Тухайн чиглэлээр 2 ба түүнээс дээш жилийн ажлын
                                туршлагатай байх
                              </li>
                              <li>
                                Үйл ажиллагаа эрхлэх холбогдох зөвшөөрлүүдийг
                                бүрэн авсан байх
                              </li>
                              <li>Санхүүгийн чадамжтай байх</li>
                              <li>Албан ёсны дистерьбютер, үйлдвэрлэгч байх</li>
                            </ul>
                            <p>
                              <strong data-redactor-tag="strong">
                                Компанид тавигдах бусад шаардлага
                              </strong>
                            </p>
                            <ul>
                              <li>
                                Бүтээгдэхүүн хадгалах шаардлага хангасан агуулах,
                                худалдааны цэгтэй байх
                              </li>
                              <li>
                                Бүтээгдэхүүн нь мэргэжлийн хяналт, магадлан
                                шинжилгээгээр, чанарын шаардлага хангасан, аюулгүй
                                болох нь батлагдсан байх
                              </li>
                              <li>
                                Бүтээгдэхүүнийг хүргэх хугацааг зөв нарийн тооцож,
                                тохирсон хугацаандаа хүргэх, зориулалтын техниктэй
                                байх
                              </li>
                              <li>Мэргэшсэн туршлагатай ажиллах хүчинтэй байх</li>
                            </ul>
                            <p>
                              <strong>Холбоо барих</strong>
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Бишрэлт Холдинг ХХК-ийн ЗХНГ-ын Хангамж,
                              үйлчилгээний алба
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Хаяг: Хаяг: Монгол улс, Улаанбаатар хот 211238,
                              Чингэлтэй дүүрэг, Самбуугийн гудамж-43
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Утас: Утас: +976-11-316859
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Факс: (976)-11-310833 ХҮАлбанд
                            </p>
                            <p style={{ marginLeft: 20 }}>
                              Имэйл хаяг: sourcing@bishreltholding.mn холбоо барих
                              <strong />
                            </p>
                            <p className="price">
                              <i className="fa fa-clock-o" /> Үнийн санал ирүүлэх
                              хугацаа: 2017-08-30 00:00
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              data-dismiss="modal"
                            >
                              хаах
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="clear" />
          </article>
        </div>
      </div>
    </section>
  </div>
  
  )
}