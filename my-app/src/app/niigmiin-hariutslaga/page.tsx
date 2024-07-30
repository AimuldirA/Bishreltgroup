import React from 'react'

export default function page() {
  return (
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
        <h1> Нийгмийн хариуцлага </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/">Нүүр</a>
          </li>
          <li>
            <a href="/%D0%BD%D0%B8%D0%B9%D0%B3%D0%BC%D0%B8%D0%B9%D0%BD-%D1%85%D0%B0%D1%80%D0%B8%D1%83%D1%86%D0%BB%D0%B0%D0%B3%D0%B0/">
              Нийгмийн хариуцлага
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <section className="top">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <article className="body" style={{textAlign:"justify"}} >
            <h2 className="colored">Нийгмийн хариуцлага</h2>
            <p></p>
            <p>
              Аливаа амжилт бүтээлээр дүүрэн бизнесийн байгууллага нь хууль эрх
              зүйн хүрээнд ил тод шударга үйл ажиллагаа явуулж, эрүүл мэнд,
              байгаль орчин, нийгэмд сөрөг нөлөөгүй, харилцагч, хамтран ажиллагч
              байгууллага, олон нийтийн өмнө нээлттэй байдлаар нийгэм, эдийн
              засгийн хөгжилд бодит хувь нэмрээ оруулж ажиллахыг уриалдаг.
            </p>
            <p>
              Бишрэлт Групп нь нийгмийн хариуцлагыг дээдлэн, гаргасан амжилт
              ололтынхоо хирээр нийгэмд тустай үйл ажиллагаа явуулсаар ирсэн.
            </p>
            <p>
              Группийн хэмжээнд нийгмийн олон салбарт урт болон дунд хугацааны,
              үр өгөөжтэй хөрөнгө оруулалт хийн, ажиллагсдаа шинээр болон
              тогтвортой ажлын байраар хангах, нийгмийн асуудлыг шийдэхэд
              дэмжлэг үзүүлэн, хөнгөлөлт урамшуулалд хамруулан, ажиллаж амьдрах
              таатай орчин нөхцлийг бүрдүүлэхэд анхаарал хандуулан ажиллахаас
              гадна харилцагч байгууллагуудтайгаа хамтран, дам болон давхар
              ажлын байрыг олноор бий болгон, үндэсний компаниудаа дэмжин
              ажилладаг.
            </p>
            <p>
              Группийн зүгээс улс орон, нийгмийн өмнө хүлээх чухал хариуцлагын
              нэг болох татвар, хураамж, төлбөрөө хуулийн дагуу цаг хугацаандаа
              үнэнч шударгаар төлж, улсын төсвийн бүрдэлд зохих хувь нэмрээ
              оруулан, нийгмийн сайн сайхны төлөөх олон үйлсийг дэмжиж
              ажилласаар байна.
            </p>
            <p />
            <hr />
            <div className="col-md-4 col-lg-4 col-sm-4">
              <div className="sr" style={{textAlign:"center"}}>
              {/* <div className="sr" style={{  justifyContent: 'center' }}> */}
                <img
                  className="sr_back"
                  src="/static/images/green-family-1438555388-list-handheld-0.jpg"
                />
                <div className="gradient" />
                <a
                  href="/%D0%B1%D0%B0%D1%80%D0%B8%D0%BC%D1%82%D0%BB%D0%B0%D1%85-%D0%B7%D0%B0%D1%80%D1%87%D0%B8%D0%BC/"
                  style={{textAlign:"center"}}
                >
                  Баримтлах зарчим
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <div className="sr" style={{textAlign:"center"}}>
                <img
                  className="sr_back"
                  src="/static/images/2_1.jpg"
                />
                <div className="gradient" />
                <a
                  href="/%D0%B1%D0%B8%D0%B4%D0%BD%D0%B8%D0%B9-%D0%BE%D1%80%D0%BE%D0%BB%D1%86%D0%BE%D0%BE/"
                  style={{textAlign:"center"}}
                >
                  Бидний оролцоо
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4">
              <div className="sr" style={{textAlign:"center"}}>
                <img
                  className="sr_back"
                  src="/static/images/idee.png"
                />
                <div className="gradient" />
                <a
                  href="/%D1%86%D0%B0%D0%B0%D1%88%D0%B8%D0%B4-%D1%85%D0%B8%D0%B9%D1%85-%D0%B0%D0%B6%D0%BB%D1%83%D1%83%D0%B4/"
                  style={{textAlign:"center"}}
                >
                  Цаашид хийх ажлууд
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}