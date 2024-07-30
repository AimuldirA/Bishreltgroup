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
                <h1> Шалгуур үзүүлэлт </h1>
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
                    <a href="/hudaldan-avalt/shalguur-uzuulelt/">
                    Шалгуур үзүүлэлт
                    </a>
                </li>
                {/* <li class="active"><a href="/%D1%88%D0%B0%D0%BB%D0%B3%D1%83%D1%83%D1%80-%D2%AF%D0%B7%D2%AF%D2%AF%D0%BB%D1%8D%D0%BB%D1%82/">Шалгуур үзүүлэлт</a></li> */}
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
                        <a href="/hudaldan-avalt/hudaldan-avaltin-bodlogo/">
                            Худалдан авалтын бодлого
                        </a>
                        </li>
                        <li className=" active ">
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
                        <h2 className="colored">Шалгуур үзүүлэлт</h2>
                        <p></p>
                        <p>
                        Бишрэлт Группийн худалдан авалтын үйл ажиллагаа нь шилдэг
                        туршлага, стандартад нийцсэн ил тод, шударга зарчим бүхий
                        худалдан авалтын бодлого, журмуудын дагуу явагддаг. Бүх
                        боломжит нийлүүлэгчдийг ижил шалгуураар дүгнэж, сонголт хийдэг
                        ба бидэнтэй хамтран ажиллах хүсэлтэй нийлүүлэгчдэд дараах
                        ерөнхий шаардлагуудыг тавьдаг. Үүнд:
                        </p>
                        <ul>
                        <li>
                            2-оос доошгүй жил тогтвортой байнгын үйл ажиллагаа явуулсан:
                        </li>
                        <li>Мэргэшсэн, чадварлаг боловсон хүчинтэй;</li>
                        <li>Санхүүгийн чадвар, чадамжтай;</li>
                        <li>Хөдөлмөр хамгаалал, аюулгүй ажиллагааг хангасан;</li>
                        <li>
                            Бараа бүтээгдэхүүний шууд үйлдвэрлэгч эсвэл албан ёсны эрх
                            бүхий төлөөлөгч/дистрибютер;
                        </li>
                        <li>
                            Бараа нийлүүлэх албан ёсны дистрибютор, борлуулах эрх бүхий
                            байх;
                        </li>
                        <li>
                            Ажил гүйцэтгэх тусгай зөвшөөрлийг холбогдох байгууллагаас
                            авсан байх;
                        </li>
                        <li>
                            Сүүлийн 2 жилийн хугацаанд гэрээний үүргээ ноцтой зөрчсөн
                            болон биелүүлээгүй гэсэн зөрчилгүй байх;
                        </li>
                        <li>Бараа, ажил үйлчилгээндээ чанарын баталгаа гаргах;</li>
                        <li>Борлуулалтын дараах үйлчилгээ үзүүлэх чадвартай байх;</li>
                        <li>
                            Бишрэлт Группээс тавих шаардлага, нөхцлүүдийн дагуу
                            нийлүүлэлт хийх;
                        </li>
                        <li>
                            Үйл ажиллагаа, бүтээмжийг дээшлүүлэх болон эрчим хүч хэмнэх;
                        </li>
                        <li>Нийт зардлыг багасгах.</li>
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
    </div>
  )
}