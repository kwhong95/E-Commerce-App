import React from 'react'
import { Card, Button, InputNumber } from 'antd'

const CartItem = ({ item }) => {
  return (
    <div>
      <Card
        cover={<img className="media" alt="ItemImg" src={item.media.source} />} 
        actions={[
          <InputNumber 
            min={0} max={99} 
            defaultValue={item.quantity}
          />,
          <Button key="1" type="primary" danger>REMOVE</Button>
        ]}
      >
        <div><h2>{item.name}</h2><h3>{item.price.formatted_with_symbol}</h3></div>  
      </Card>  
    </div>
  )
}

export default CartItem;
