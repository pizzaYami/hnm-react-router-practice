import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard.tsx";

function ProductAll() {
  const [productList, seProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:3001/products`;
    let res = await fetch(url);
    let data = await res.json();
    seProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductAll;
