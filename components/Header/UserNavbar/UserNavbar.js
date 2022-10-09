import Link from "next/link";

import React, { useState } from "react";

import NavItem from "../NavItem";


const MENU_LIST = [
  { text: "Notificaciónes", href: "/" },
  { text: "Equipamiento", href: "/Equipamiento" },
  { text: "Adeudo", href: "/Adeudo" },
];

  export default function Navbar () {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    return (
        
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">Electrónica I</h1>
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>

);
}
