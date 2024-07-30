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
                <h1> Худалдан авалтын бодлого </h1>
                <ol className="breadcrumb">
                <li>
                    <a href="/">Нүүр</a>
                </li>
                <li>
                    <a href="/hudaldan-avalt/">
                    Худалдан авалт
                    </a>
                </li>
                <li>
                    <a href="/hudaldan-avalt/hudaldan-avaltin-bodlogo/">
                    Худалдан авалтын бодлого
                    </a>
                </li>
                {/* <li class="active"><a href="/%D1%85%D1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%BD-%D0%B0%D0%B2%D0%B0%D0%BB%D1%82%D1%8B%D0%BD-%D0%B1%D0%BE%D0%B4%D0%BB%D0%BE%D0%B3%D0%BE/">Худалдан авалтын бодлого</a></li> */}
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
                        <a href="/hudaldan-avalt/hudaldan-avaltin-bodlogo/">
                            Худалдан авалтын бодлого
                        </a>
                        </li>
                        <li className="">
                        <a href="/hudaldan-avalt/shalguur-uzuulelt">
                            Шалгуур үзүүлэлт
                        </a>
                        </li>
                        <li className="">
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
                        <h2 className="colored">Худалдан авалтын бодлого</h2>
                        <p></p>
                        <p>
                        <div>
                            Бишрэлт Группийн хэмжээнд з
                            <div>
                            ахиалга ав
                            <div>
                                хаас нийлүүлэлт хүрт
                                <div>
                                л хийгдэх бүх үе шатуудад{" "}
                                <div>
                                    худалдан авалтын зарчмыг мөрдөж ажиллахын зэрэгцээ
                                    хэрэглэгч, нийлүүлэгчийн хэрэгцээнд нийцсэн, Олон
                                    улсын болон Үндэсний стандарт шаардлагыг хангасан
                                    бүтээгдэхүүн үйлчилгээг авах, нийлүүлэх бодлого
                                    баримтална.
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </p>
                        <p>
                        <div>
                            <div>
                            <div>
                                Бид үйл ажиллагааны тасралтгүй байдлыг хангасан, зардал
                                багатай, найдвартай гадаад, дотоодын ханган
                                нийлүүлэлтийн ложистик сүлжээг бий болгохыг зорин
                                ажилладаг.
                                <br />
                            </div>
                            </div>
                        </div>
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