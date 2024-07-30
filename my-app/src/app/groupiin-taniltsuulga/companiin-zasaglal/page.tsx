"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [hyd , setHyd] = useState(false);

    useEffect(() => {
        setHyd(true)
    } , [])
    if (!hyd) return;
  return (
    <div>
        <div id="content">
        <div
            className="sub-header"
            style={{ backgroundImage: 'url("/static/images/05.png")' }}
        >
            <div className="overlay" />
            {/* <img src=""> */}
            <div className="container">
            <div className="row text">
                <h1> Компанийн засаглал </h1>
                <ol className="breadcrumb">
                <li>
                    <a href="/">Нүүр</a>
                </li>
                <li>
                    <a href="/группийн-танилцуулга/">Bishrelt Group</a>
                </li>
                <li>
                    <a href="/groupiin-taniltsuulga/companiin-zasaglal/">
                    Компанийн засаглал
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
                        <a href="/groupiin-taniltsuulga/mendchilgee/">
                            Мэндчилгээ
                        </a>
                        </li>
                        <li className="">
                        <a href="/groupiin-taniltsuulga/">
                            Группийн танилцуулга
                        </a>
                        </li>
                        <li className="">
                        <a href="/groupiin-taniltsuulga/biznesiin-chiglel/">
                            Бизнесийн чиглэл
                        </a>
                        </li>
                        <li className="">
                        <a href="/groupiin-taniltsuulga/bishrelt-groupTuuh/">
                            Бишрэлт Группийн түүх
                        </a>
                        </li>
                        <li className="">
                        <a href="/groupiin-taniltsuulga/companiin-zasaglal/">
                            Компанийн засаглал
                        </a>
                        </li>
                        <li className=" active ">
                        <a href="/groupiin-taniltsuulga/too-barimt/">
                            Бишрэлт группийн тоо баримтууд
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-9 col-sm-9">
                    <div className="row">
                    <div className="right_content">
                        <h2 className="colored">Компанийн засаглал</h2>
                        <p></p>
                        <p />
                        <figure>
                        <img
                            src="/static/images/05.png"
                            data-image="2n2eqiprpdk5"
                        />
                        </figure>
                        <p>
                        Даяаршиж байгаа нийгэм, эдийн засгийн өнөө үед бизнес, хамтын
                        ажиллагааг хөгжүүлэхэд алсын хараатай, удирдлагын шинэ арга
                        барил нэн чухал үүрэгтэй бөгөөд бидний хувьд компанийн "Сайн
                        засаглал"-ын тогтолцоог Группийн удирдлагын бүтцийн бүх
                        түвшинд төлөвшүүлэхэд анхаарч байна.
                        </p>
                        <p>
                        Компанийн зохистой засаглалаар дамжуулан үндэс угсаа, арьс
                        өнгө, шашин шүтлэг, хэл соёл ялгаатай ч хүн төрөлхтөн хамтдаа
                        эв найрамдалтай, энх амгалангаар зэрэгцэн оршиж хөгжих дэлхий
                        ертөнцийг бүтээхийн төлөө Бишрэлтийнхэн зохистой хөгжил,
                        хамтын ажиллагааны бодлогоо боловсруулан баталж, нэгдмэл
                        зорилгоор Улс эх орныхоо эдийн засгийн хөгжилд хөдөлгөгч хүч
                        болон ажилласаар байна.
                        <strong data-redactor-tag="strong"></strong>
                        </p>
                        <p>
                        <strong data-redactor-tag="strong">
                            Бишрэлт группийн засаглалын зарчим:{" "}
                        </strong>
                        </p>
                        <ul>
                        <li>Ил тод</li>
                        <li>Үр ашигтай</li>
                        <li>Зах зээлийг дэмжсэн</li>
                        <li>Хууль тогтоомжид нийцсэн</li>
                        </ul>
                        <p>
                        <strong data-redactor-tag="strong">
                            Бид компанийн зохистой засаглалыг хөгжүүлэхдээ:
                        </strong>
                        </p>
                        <ul>
                        <li>Бизнесийн ёс зүйг дээдлэсэн</li>
                        <li>Хариуцлагатай</li>
                        <li>Найдвартай</li>
                        <li>Ил тод байдлыг хангана</li>
                        </ul>
                        <p />
                        <figure>
                        <img
                            src="/static/images/G_3dhNXDu.png"
                            data-image="zdr3fqo7xo9r"
                        />
                        </figure>
                        <p />
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
