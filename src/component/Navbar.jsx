import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
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
  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          onClick={() => {
            navigate("/");
          }}
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
