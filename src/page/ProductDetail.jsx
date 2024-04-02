import React, { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productDetailAction } from "../redux/actions/\bproductDetailAction";

function ProductDetail() {
  const dispatch = useDispatch();
  const { productDetailList } = useSelector((state) => state.productDetail);
  const { id } = useParams();
  console.log("productListDetail", productDetailList[0]);

  const getProducts = async () => {
    dispatch(productDetailAction.getProductDetails(id));
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <img src={productDetailList[0]?.img} alt="product-img" />
      <Wrap>
        <h3>{productDetailList[0]?.title}</h3>
        <h4>￦ {productDetailList[0]?.price}</h4>
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
