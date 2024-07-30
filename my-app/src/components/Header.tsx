const Header =()=>{
    return(
        <header className="hidden-xs">
        <div className="container-fluid">
            <div className="row">
            <nav id="menu">
                <div className="center">
                <ul className="left-menu">
                    <li role="presentation">
                    <a href="/">Нүүр</a>
                    </li>
                    <li role="presentation">
                    <a href="/groupiin-taniltsuulga/">
                        Бишрэлт групп
                    </a>
                    </li>
                    <li role="presentation">
                    <a href="/medee-medeelel/">
                        Мэдээ мэдээлэл
                    </a>
                    </li>
                    <li role="presentation">
                    <a href="/niigmiin-hariutslaga/">
                        Нийгмийн хариуцлага
                    </a>
                    </li>
                    <li className="main_logo">
                    {" "}
                    <a href="/" className="logo">
                        <img
                        alt="Бишрэлт групп лого"
                        src="/static/images/logo (1).png"
                        />
                    </a>
                    </li>
                    <li role="presentation">
                    <a href="/hunii-noots/">
                        Хүний нөөц
                    </a>
                    </li>
                    <li role="presentation">
                    <a href="/hudaldan-avalt/">
                        Худалдан авалт
                    </a>
                    </li>
                    <li role="presentation">
                    <a href="/holboo-barih/">
                        Холбоо барих
                    </a>
                    </li>
                    <li>
                    <ul className="social hidden-sm">
                        <li id="langbar" role="presentation">
                        <a href="javascript:;" rel="en" className="lang">
                            EN
                        </a>
                        </li>
                        <li role="presentation">
                        <a
                            href="https://www.facebook.com/BishreltDepartmentStore"
                            target="_blank"
                            className="facebook"
                        >
                            <i className="fa fa-facebook-f" />
                        </a>
                        </li>
                        <li role="presentation">
                        {" "}
                        <a href="#" target="_blank" className="twitter">
                            <i className="fa fa-twitter" />
                        </a>
                        </li>
                        <li role="presentation">
                        <a href="#" target="_blank" className="gmail">
                            <i className="fa fa-google-plus" aria-hidden="true" />
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
                <ul className="search">
                <li>
                    <form className="search-form" role="search" id="searchform">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        defaultValue="хайлт"
                        className="watermark"
                    />
                    </form>
                </li>
                </ul>
            </nav>
            {/* <a href="/">Нүүр</a> */}
            </div>
        </div>
        </header>
    )
}

export default Header;