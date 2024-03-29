import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ProductCard({ item }) {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <Container onClick={showDetail}>
      <ProductImg src={item?.img} alt="girl" />
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>￦ {item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </Container>
  );
}

export default ProductCard;

const Container = styled.div`
  margin-bottom: 10px;
`;

const ProductImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
