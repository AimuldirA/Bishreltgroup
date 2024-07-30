import React from 'react'

export default function page() {
  return (
    <div>
        <div id="content">
        <div
            className="sub-header"
            style={{ backgroundImage: 'url("/static/images/download.jpg")' }}
        >
            <div className="overlay" />
            {/* <img src=""> */}
            <div className="container">
            <div className="row text">
                <h1> Бишрэлт группийн тоо баримтууд </h1>
                <ol className="breadcrumb">
                <li>
                    <a href="/">Нүүр</a>
                </li>
                <li>
                    <a href="/группийн-танилцуулга/">Бишрэлт групп</a>
                </li>
                <li>
                    <a href="/groupiin-taniltsuulga/too-barimt/">
                    Бишрэлт группийн тоо баримтууд
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
                        <h2 className="colored">Бишрэлт группийн тоо баримтууд</h2>
                        <p></p>
                        <h3 style={{textAlign:"center"}}>Группын нийт ажиллагсдын тоо</h3>
                        <p />
                        <p />
                        <p />
                        <p />
                        <p />
                        <p />
                        <p />
                        <figure>
                        <img
                            src="/static/images/aboutus3.jpg"
                            data-image="4lnqg917zd6e"
                        />
                        </figure>
                        <p />
                        <p />
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
