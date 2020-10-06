import React, { useState } from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as Cog } from "./icons/cog.svg";
import { ReactComponent as Chevron } from "./icons/chevron.svg";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as Arrow } from "./icons/arrow.svg";
function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" onClick={() => setOpen(!open)} className="icon-button">
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My profile</DropdownItem>
          <DropdownItem
            leftIcon={<Cog />}
            rightIcon={<Chevron />}
            goToMenu="settings"
          >
            Setting
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<Arrow />} goToMenu="main" />
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
          <DropdownItem>Setting</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
