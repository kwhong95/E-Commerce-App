import React from 'react'
import { Card } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import './Product.css';

const Product = ({ product }) => {
  return (
    <div>
      <Card 
        className="root"
        cover={<img className="media" alt="productImg" src={product.img} />}
        actions={[
        <ShoppingCartOutlined key="Add To Cart"/>
      ]}
      >
        <div className="cardTop"><h3>{product.name}</h3><h3>{product.price}</h3></div>
        <div className="cardDesc">{product.desc}</div>
      </Card>
    </div>
  )
}

export default Product
