const Footer=()=>{
    return(
            <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="row">
          <div className="footer-section">
            <div className="col-md-4">
              <div className="footer_logo">
                <a href="/" className="logo">
                  <img
                    alt="Бишрэлт групп лого"
                    src="/static/images/footerlogo.png"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="footer-list">
                <li role="presentation">
                  <a href="/">Нүүр хуудас</a>
                </li>
                <li role="presentation">
                  <a href="/groupiin-taniltsuulga/">
                    Бидний тухай
                  </a>
                </li>
                <li role="presentation">
                  <a href="/medee-medeelel/">
                    Мэдээ мэдээлэл
                  </a>
                </li>
                <li role="presentation">
                  <a href="/groupiin-taniltsuulga/bisnesiin-chiglel/">
                    Бизнесийн чиглэл
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="footer-list">
                <li role="presentation">
                  <a href="/niigmiin-hariutslaga/">
                    Нийгмийн хариуцлага
                  </a>
                </li>
                <li role="presentation">
                  <a href="//">
                    Хамтрагч байгууллага
                  </a>
                </li>
                <li role="presentation">
                  <a href="/%D0%BD%D1%8D%D1%8D%D0%BB%D1%82%D1%82%D1%8D%D0%B9-%D0%B0%D0%B6%D0%BB%D1%8B%D0%BD-%D0%B1%D0%B0%D0%B9%D1%80/">
                    Нээлттэй ажлын байр
                  </a>
                </li>
                <li role="presentation">
                  <a href="/%D1%85%D0%BE%D0%BB%D0%B1%D0%BE%D0%BE-%D0%B1%D0%B0%D1%80%D0%B8%D1%85/">
                    Холбоо барих
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 footer">
        <div className="footer-section">
          <ul className="footer-list contact-list">
            <li>
              <i className="fa fa-phone" /> <span>976-11-316859</span>
            </li>
            <li>
              <i className="fa fa-envelope" />{" "}
              <span> info@bishreltholding.mn</span>
            </li>
            <li>
              <i className="fa fa-map-marker" />{" "}
              <span>
                {" "}
                Улаанбаатар хот, Чингэлтэй дүүрэг 4-р хороо, Самбуугийн гудамж
                43{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="footer-section">
          <h3 className="footer-title">Сошиал холбогдох</h3>
          <ul className="social-network social-circle">
            <li>
              <a
                href="https://www.facebook.com/BishreltDepartmentStore"
                target="_blank"
                className="icoFacebook"
                title="Facebook"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/bishreltfashion"
                target="_blank"
                className="icoTwitter"
                title="Twitter"
              >
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://plus.google.com/107942947540403934348"
                target="_blank"
                className="icoGoogle"
                title="Google +"
              >
                <i className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="full-left"> © 2024 он Бишрэлт Холдинг</div>
        <div className="gerege full-right">
          <div className="gerege-agency">
            <div className="gerege-info">
              <span className="gerege-icon-code" />
              by
            </div>
            <a href="http://gerege.agency/" target="_blank">
              <span className="gerege-icon-char-g" />
              <span className="gerege-icon-char-e" />
              <span className="gerege-icon-char-r" />
              <span className="gerege-icon-char-e" />
              <span className="gerege-icon-char-g" />
              <span className="gerege-icon-char-e" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}
export default Footer;