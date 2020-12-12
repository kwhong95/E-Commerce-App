import React from 'react'
import { Card } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

import './Product.css';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <Card
        className="root"
        cover={<img className="media" alt="productImg" src={product.media.source} />}
        actions={[
        <ShoppingCartOutlined className="cartButton" key="Add To Cart" onClick={() => addToCart(product.id, 1)}/>
      ]}
      >
        <div className="cardTop"><h3>{product.name}</h3><h3>{product.price.formatted_with_symbol}</h3></div>
        <div className="cardDesc" dangerouslySetInnerHTML={{ __html: product.description }} />
      </Card>
    </div>
  )
}

export default Product
