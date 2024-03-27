import React from "react";

function ProductCard({ item }) {
  console.log(item);

  return (
    <div>
      <img src={item?.img} alt="girl" />
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new && "신제품"}</div>
    </div>
  );
}

export default ProductCard;
