import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  console.log(item);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={showDetail}>
      <img src={item?.img} alt="girl" className="product-image" />
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
}

export default ProductCard;
