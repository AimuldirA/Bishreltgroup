const Static=()=>{
    return(
        <div id="static">
            <section
            className="static_section"
            style={{
                backgroundImage: 'url("/static/images/bg.png")'
            }}
            >
            <div className="container">
                <div id="facts" className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <img
                    src="/static/images/icon1.png"
                    data-image="zv48ow3vthyx"
                    />
                    <br />
                    <h6>
                    Тасралтгүй үйл ажиллагаа
                    <br />
                    </h6>
                    <h1>
                    <span>25</span>жил
                    </h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <img
                    src="/static/images/icon2.png"
                    data-image="kgclbnsszm9n"
                    />
                    <br />
                    <h6>Гишүүн салбар компани</h6>
                    <h1>
                    <span>11</span>компани
                    </h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <img
                    src="/static/images/icon3.png"
                    data-image="clon5d9u4s50"
                    />
                    <br />
                    <h6>Нийт ажилчдын тоо</h6>
                    <h1>
                    <span>1500</span>гаруй
                    </h1>
                </div>
                </div>
            </div>
            </section>

        </div>
    )
}
export default Static;