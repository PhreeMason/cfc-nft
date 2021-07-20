import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import React, { useEffect, useState } from 'react';
import "./header.css"


const Header = ({ t }: any) => {

  const [headerClass, setHeaderClass] = useState("main_h");

  useEffect(() => {
    window.onscroll = () => {
      if(window.pageYOffset > 150 && !headerClass.includes("sticky")) {
        setHeaderClass(headerClass + " sticky")
      } else if (window.pageYOffset < 150) {
        setHeaderClass(headerClass.replace("sticky", ""))
      }
    }
  });

  const mobileToggle = () => {
    if (headerClass.includes("open-nav")) {
      setHeaderClass(headerClass.replace("open-nav", ""))
    } else {
      setHeaderClass(headerClass + " open-nav");
    }
  };


  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    if (headerClass.includes("open-nav")) {
      setHeaderClass(headerClass.replace("open-nav", ""))
    }
  };
  return (
    <header className={headerClass}>

    <div className="row">
        <span className="logo">CFC</span>

        <div onClick={mobileToggle} className="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <nav>
            <ul>
                <li onClick={() => scrollTo("about")}><span>About</span></li>
                <li onClick={() => scrollTo("faq")}><span>FAQ</span></li>
                <li onClick={() => scrollTo("roadmap")}><span>Roadmap</span></li>
                {/* <li onClick={() => scrollTo("about")}><Button>{t("Mint")}</Button></li> */}
            </ul>
        </nav>

    </div>

</header>
  );
};

export default withTranslation()(Header);
