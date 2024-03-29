import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductDetail() {
  const [productList, seProductList] = useState([]);
  const { id } = useParams();

  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    seProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <img src={productList?.img} alt="product-img" />
      <Wrap>
        <h3>{productList?.title}</h3>
        <h4>￦ {productList?.price}</h4>
        <div>Conscious choice</div>
        <DropdownButton
          size="lg"
          id="dropdown-basic-button"
          title="사이즈 선택"
        >
          <Dropdown.Item href="#/action-1">XL</Dropdown.Item>
          <Dropdown.Item href="#/action-2">L</Dropdown.Item>
          <Dropdown.Item href="#/action-3">M</Dropdown.Item>
          <Dropdown.Item href="#/action-4">S</Dropdown.Item>
          <Dropdown.Item href="#/action-5">XS</Dropdown.Item>
        </DropdownButton>
        <button variant="dark" size="lg">
          추가
        </button>
      </Wrap>
    </Container>
  );
}

export default ProductDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  gap: 30px;
  img {
    width: 50%;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  & > button {
    background-color: black;
    color: white;
    width: 100%;
  }
`;
