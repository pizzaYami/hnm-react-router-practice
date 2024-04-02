import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
function ProductAll() {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const [query, setQuery] = useSearchParams();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    console.log(query.get("q"));
    //{dispatch({type.....})} 이런식으로 하면 store로 가버린다.
    // store가기전에 미들웨어를 들려야한다.
    dispatch(productAction.getProducts(searchQuery));
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
