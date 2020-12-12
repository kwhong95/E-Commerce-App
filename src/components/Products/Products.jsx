import React from 'react';
import { Row, Col } from 'antd';
import Product from './Product/Product';

import './Products.css';

const Products = ({ products, addToCart }) => {
  return (
    <main className="content">
      <div className="toolbar" />
          <Row gutter={[16, 16]} justify="center" style={{display: "flex"}}>
            {products.map((product) => (
              <Col style={{display: "flex"}} key={product.id} xs={24} sm={12} md={8} lg={6} >
                <Product product={product} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
    </main>
  )
}

export default Products
