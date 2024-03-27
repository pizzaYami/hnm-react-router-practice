import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
          alt="hnm-logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="menu-input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품 검색" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;