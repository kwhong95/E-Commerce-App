import React from 'react'
import { Card, Button } from 'antd'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import './CartItem.css'

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {

  return (
    <div>
      <Card
        cover={<img className="media" alt="ItemImg" src={item.media.source} />} 
        actions={[
          <div className="cardBottom">
            <Button type="text" icon={<DownOutlined />} onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} />
            <div className="cardQty">{item.quantity}</div>
            <Button type="text" icon={<UpOutlined />} onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}/>
          </div>
          ,
          <Button 
            key="1" 
            type="primary" 
            danger
            onClick={() => handleRemoveFromCart(item.id)}
          >
              REMOVE
          </Button>
        ]}
      >
        <div><h2>{item.name}</h2><h3>{item.line_total.formatted_with_symbol}</h3></div>  
      </Card>  
    </div>
  )
}

export default CartItem;
