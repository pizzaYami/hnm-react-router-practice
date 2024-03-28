import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard.tsx";
import { Col, Container, Row } from "react-bootstrap";

function ProductAll() {
  const [productList, seProductList] = useState([]);

  const getProducts = async () => {
    let url = `http://localhost:4000/products`;
    let res = await fetch(url);
    let data = await res.json();
    seProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container fluid>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProductAll;
