import React from 'react';
import { Row, Col } from 'antd';
import Product from './Product/Product';

import './Products.css';

const products = [
  { id: 1, name: 'Macbook', desc: 'Apple Macbook', price:'₩1400000', img:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000" },
  { id: 2, name: 'IPAD', desc: 'Apple IPAD', price:'₩490000', img:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-2020-hero-space-wifi-select?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1598915064000" },
]

const Products = () => {
  return (
    <main className="content">
      <div className="toolbar" />
          <Row gutter={[16, 16]} justify="center">
            {products.map((product) => (
              <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
    </main>
  )
}

export default Products
