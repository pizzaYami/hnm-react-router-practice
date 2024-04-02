import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const authenticate = useSelector((state) => state.auth.authenticate);
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
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <MenuContainer isMenu={isMenu}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          onClick={() => {
            setIsMenu((prv) => !prv);
          }}
          className="exit"
        />
        <ul>
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MenuContainer>
      <LoginBar>
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="menu"
          onClick={() => {
            setIsMenu((prv) => !prv);
          }}
        />
        <div onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </LoginBar>

      <Logo className="nav-section">
        <img
          onClick={() => {
            navigate("/");
          }}
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
          alt="hnm-logo"
        />
      </Logo>

      <NavBar>
        <ul>
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <SearchBar>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품 검색"
            onKeyDown={(e) => {
              search(e);
            }}
          />
        </SearchBar>
      </NavBar>
    </div>
  );
}

export default Navbar;

const MenuContainer = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  background-color: aliceblue;
  transition: transform 0.3s ease;
  z-index: 20;
  transform: ${(props) =>
    props.isMenu ? "translateX(0)" : "translateX(-200px)"};

  ul {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
  }
  .exit {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
const LoginBar = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .menu {
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    justify-content: flex-end;
    .menu {
      display: none;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
    width: 150px;
    margin-bottom: 30px;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-bottom: 30px;
  ul {
    display: flex;
    list-style-type: none;
    gap: 10px;
  }

  li {
    display: flex;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  position: absolute;
  right: 2vw;
  border-bottom: 1px solid black;
  height: 30px;
  input {
    border: 0;
    outline: none;
  }
`;
