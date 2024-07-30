import React from 'react'

export default function page() {
  return (
    <div>
        <div id="content">
        <style
            type="text/css"
            dangerouslySetInnerHTML={{
            __html: "\n\tarticle.body img{\tdisplay: none;}\n"
            }}
        />
        <div
            className="sub-header"
            style={{ backgroundImage: 'url("/static/images/05.png")' }}
        >
            <div className="overlay" />
            {/* <img src=""> */}
            <div className="container">
            <div className="row text">
                <h1> Нээлттэй ажлын байр </h1>
                <ol className="breadcrumb">
                <li>
                    <a href="/">Нүүр</a>
                </li>
                <li>
                    <a href="/hunii-noots/neelttei-ajliin-bair">
                    Нээлттэй ажлын байр
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
                        <a href="/hunii-noots/">
                            Хүний нөөцийн бодлого
                        </a>
                        </li>
                        <li className="">
                        <a href="/hunii-noots/songon-shalgaruulalt/">
                            Сонгон шалгаруулалтын үе шат
                        </a>
                        </li>
                        <li className=" active ">
                        <a href="/hunii-noots/neelttei-ajliin-bair/">
                            Нээлттэй ажлын байр
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-9 col-sm-9 left_border">
                    <h2 className="colored">Нээлттэй ажлын байр</h2>
                    <ul className="hr">
                    <li>
                        <a href="/%D0%B4%D1%8D%D0%BB%D0%B3%D2%AF%D2%AF%D1%80%D0%B8%D0%B9%D0%BD-%D0%B7%D0%BE%D1%85%D0%B8%D0%BE%D0%BD-%D0%B1%D0%B0%D0%B9%D0%B3%D1%83%D1%83%D0%BB%D0%B0%D0%B3%D1%87/">
                        Дэлгүүрийн зохион байгуулагч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B5%D1%80/">
                        График дизайнер{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B6%D0%B5%D1%80/">
                        Маркетингийн менежер{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B1%D1%80%D0%B5%D0%BD%D0%B4-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B6%D0%B5%D1%80/">
                        Бренд менежер
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%82%D0%BE%D0%BE%D1%86%D0%BE%D0%BE%D0%BD%D1%8B-%D0%BD%D1%8F%D0%B3%D1%82%D0%BB%D0%B0%D0%BD-%D0%B1%D0%BE%D0%B4%D0%BE%D0%B3%D1%87/">
                        Тооцооны нягтлан бодогч
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%80%D0%B5%D1%81%D0%B5%D0%BF%D1%88%D0%BD/">
                        Ресепшн{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%82%D1%83%D1%81%D0%BB%D0%B0%D1%85-%D1%82%D0%BE%D0%B3%D0%BE%D0%BE%D1%87/">
                        Туслах тогооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%85%D0%B0%D1%87%D0%B8%D1%80%D0%BD%D1%8B-%D1%82%D0%BE%D0%B3%D0%BE%D0%BE%D1%87/">
                        Хачирны тогооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B3%D1%80%D0%B8%D0%BB%D0%BB-%D1%82%D0%BE%D0%B3%D0%BE%D0%BE%D1%87/">
                        Грилл тогооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B0%D1%85%D0%BB%D0%B0%D1%85-%D1%82%D0%BE%D0%B3%D0%BE%D0%BE%D1%87/">
                        Ахлах тогооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BA%D0%B0%D0%BC%D0%B5%D1%80-%D1%85%D1%8F%D0%BD%D0%B0%D0%B3%D1%87/">
                        Камер хянагч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BA%D0%B0%D1%81%D1%81/">Касс</a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%85%D1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%B0%D0%BD%D1%8B-%D0%B7%D3%A9%D0%B2%D0%BB%D3%A9%D1%85/">
                        Худалдааны зөвлөх{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%81%D1%82%D0%B8%D0%BA%D0%B5%D1%80%D0%BC%D1%8D%D0%BD/">
                        Стикермэн
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BF%D0%BE-%D0%BD%D1%8B-%D0%B6%D0%BE%D0%BB%D0%BE%D0%BE%D1%87/">
                        По-ны жолооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B0%D1%87%D0%B8%D0%B3%D1%87/">Ачигч </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%82%D2%AF%D0%B3%D1%8D%D1%8D%D0%BB%D1%82%D0%B8%D0%B9%D0%BD-%D0%B6%D0%BE%D0%BB%D0%BE%D0%BE%D1%87/">
                        Түгээлтийн жолооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%82%D2%AF%D0%B3%D1%8D%D1%8D%D0%B3%D1%87/">
                        Түгээгч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BC%D0%B5%D1%80%D1%87%D0%B8%D0%BD%D0%B4%D0%B0%D0%B9%D0%B7%D0%B5%D1%80/">
                        Мерчиндайзер
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%85%D1%83%D0%B4%D0%B0%D0%BB%D0%B4%D0%B0%D0%B0%D0%BD%D1%8B-%D1%82%D3%A9%D0%BB%D3%A9%D3%A9%D0%BB%D3%A9%D0%B3%D1%87/">
                        Худалдааны төлөөлөгч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BD%D1%8F%D1%80%D0%B0%D0%B2/">Нярав</a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D1%87/">
                        Техникч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B7%D3%A9%D3%A9%D0%B3%D1%87/">Зөөгч </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%83%D0%B3%D0%B0%D0%B0%D0%B3%D1%87/">Угаагч </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B5%D1%80%D3%A9%D0%BD%D1%85%D0%B8%D0%B9-%D1%82%D0%BE%D0%B3%D0%BE%D0%BE%D1%87/">
                        Ерөнхий тогооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B7%D0%BE%D0%B3%D1%81%D0%BE%D0%BE%D0%BB%D1%8B%D0%BD-%D1%85%D0%B0%D1%80%D1%83%D1%83%D0%BB/">
                        Зогсоолын харуул{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%85%D0%B0%D1%80%D1%83%D1%83%D0%BB/">ХАРУУЛ</a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D2%AF%D0%B9%D0%BB%D1%87%D0%BB%D1%8D%D0%B3%D1%87-%D1%82%D0%B0%D0%BB%D0%B1%D0%B0%D0%B9%D0%BD/">
                        Үйлчлэгч /талбайн/
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D2%AF%D0%B9%D0%BB%D1%87%D0%BB%D1%8D%D0%B3%D1%87-%D3%A9%D1%80%D3%A9%D3%A9-%D2%AF%D0%B9%D0%BB%D1%87%D0%B8%D0%BB%D0%B3%D1%8D%D1%8D/">
                        Өрөө үйлчилгээний ажилтан{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%83%D0%B3%D1%82%D0%B0%D0%B3%D1%87/">Угтагч </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D2%AF%D0%B9%D0%BB%D1%87%D0%BB%D1%8D%D0%B3%D1%87/">
                        Үйлчлэгч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%BE%D1%84%D1%84%D0%B8%D1%81-%D0%B6%D0%BE%D0%BB%D0%BE%D0%BE%D1%87/">
                        Оффис жолооч{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D1%85%D3%A9%D0%B3%D0%B6%D0%BB%D0%B8%D0%B9%D0%BD-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B6%D0%B5%D1%80/">
                        Бизнес хөгжлийн менежер{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%82%D3%A9%D0%BB%D3%A9%D0%B2%D0%BB%D3%A9%D0%BB%D1%82%D0%B8%D0%B9%D0%BD-%D0%BC%D1%8D%D1%80%D0%B3%D1%8D%D0%B6%D0%B8%D0%BB%D1%82%D1%8D%D0%BD/">
                        Төлөвлөлтийн мэргэжилтэн{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%81%D0%B0%D0%BD%D1%85%D2%AF%D2%AF%D0%B3%D0%B8%D0%B9%D0%BD-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B6%D0%B5%D1%80/">
                        Санхүүгийн менежер{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B4%D0%BE%D1%82%D0%BE%D0%BE%D0%B4-%D1%85%D1%8F%D0%BD%D0%B0%D0%BB%D1%82%D1%8B%D0%BD-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B6%D0%B5%D1%80/">
                        Дотоод хяналтын менежер{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B7%D0%B0%D1%85%D0%B8%D1%80%D0%BB%D1%8B%D0%BD-%D1%82%D1%83%D1%81%D0%BB%D0%B0%D1%85/">
                        Захирлын туслах{" "}
                        </a>
                        <ol className="progress">
                        <li data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D0%B0%D1%80%D1%85%D0%B8%D0%B2-%D0%B1%D0%B8%D1%87%D0%B8%D0%B3-%D1%85%D1%8D%D1%80%D0%B3%D0%B8%D0%B9%D0%BD-%D0%B0%D0%B6%D0%B8%D0%BB%D1%82%D0%B0%D0%BD/">
                        Архив бичиг хэргийн ажилтан{" "}
                        </a>
                        <ol className="progress">
                        <li className="is-complete" data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    <li>
                        <a href="/%D1%85%D2%AF%D0%BD%D0%B8%D0%B9-%D0%BD%D3%A9%D3%A9%D1%86%D0%B8%D0%B9%D0%BD-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B6%D0%B5%D1%80-%D1%81%D0%BE%D0%BD%D0%B3%D0%BE%D0%BD-%D1%88%D0%B0%D0%BB%D0%B3%D0%B0%D1%80%D1%83%D1%83%D0%BB%D0%B0%D0%BB%D1%82/">
                        Хүний нөөцийн менежер /сонгон шалгаруулалт/
                        </a>
                        <ol className="progress">
                        <li className="is-complete" data-step={1}></li>
                        <li data-step={2}></li>
                        <li data-step={3}></li>
                        </ol>
                    </li>
                    </ul>
                    <br />
                    <h4 className="colored">Stage</h4>
                    <ol className="progress">
                    <li className="is-complete" data-step={1}>
                        <p> Өргөдөл</p>
                    </li>
                    <li className="is-complete" data-step={2}>
                        <p> Шалгаруулалт</p>
                    </li>
                    <li className="is-complete" data-step={3}>
                        <p> Шийдвэр</p>
                    </li>
                    </ol>
                </div>
                </article>
            </div>
            </div>
        </section>
        </div>
    </div>
  )
}