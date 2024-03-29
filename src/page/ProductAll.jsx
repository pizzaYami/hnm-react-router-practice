import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

function ProductAll() {
  const [productList, seProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(query.get("q"));

    let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    seProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col lg={3} key={item.id}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductAll;
