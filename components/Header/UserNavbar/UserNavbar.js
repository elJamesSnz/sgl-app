import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, Icon, Container, Button } from "semantic-ui-react";
//constantes
import MENU_LIST from "../../../utils/constants";
//compontentes
import NavItem from "../NavItem";
import MainModal from "../../Modal/MainModal";
import Auth from "../../Auth";
import useAuth from "../../../hooks/useAuth";
import { getMeApi } from "../../../api/user";
import { authFetch } from "../../../utils/fetch";
import Panel from "../../../pages/panel";

export default function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [showModal, setShowModal] = useState(false);
  const [titleModel, setTitleModel] = useState("Iniciar sesión");
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();

  useEffect(() => {
    (async () => {
      //función asíncrona que se autoejecuta onload
      const response = await authFetch(logout);
      if (response) {
      }
    })();
  }, []);

  const onShowModal = () => {
    setShowModal(true);
  };
  const onCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="menu nav">
        <div className="nav__options main-container">
          {auth ? (
            <div>
            <div className="e">
              <Link href={"/Equipamiento"} > Equipamiento  </Link>
            </div>
            <div className="a">
              <Link href={"/Adeudo"}> Adeudo </Link>
            </div>
            </div>
          ) : (
            <>
              <NavBarOptions
                MENU_LIST={MENU_LIST}
                navActive={navActive}
                setNavActive={setNavActive}
                activeIdx={activeIdx}
                setActiveIdx={setActiveIdx}
                onShowModal={onShowModal}
                user={user}
                logout={logout}
                setShow={setShowModal}
              />
              <Panel logout={logout} idUser={auth?.idUser} />
            </>
          )}
        </div>
        <MainModal
          show={showModal}
          setShow={setShowModal}
          title={titleModel}
          size="small"
        >
          <Auth onCloseModal={onCloseModal} setTitleModel={setTitleModel} />
        </MainModal>
      </div>
    </>
  );
}

function NavBarOptions(props) {
  const { MENU_LIST, user, onShowModal } = props;

  return (
    <Menu>
      {user ? (
        <>
          <Link href={"/"}>
            <a>
              <h1 className="lab">Electrónica I</h1>
            </a>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          ></div>
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
        </>
      ) : (
        <div className="menu__right">
          <Menu.Item onClick={onShowModal}>
            <Icon name="user outline" />
            Mi cuenta
          </Menu.Item>
        </div>
      )}
    </Menu>
  );
}
