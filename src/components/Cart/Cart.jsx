import React from 'react'
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import { LeftOutlined } from '@ant-design/icons'

import './Cart.css';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => {
    return(
      <div>Your Cart is Empty... Adding to Some!!!</div>
    )
  }

  if (!cart.line_items) return 'Loading';

  const FilledCart = () => {
    return(
      <>
        <Row gutter={[16, 16]}>
          {cart.line_items.map((lineItem) => (
            <Col xs={24} sm={8} key={lineItem.id}>
              <CartItem 
                item={lineItem}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </Col>
          ))}
        </Row>
        <div className="cartBottom">
          <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
          <div>
            <Button className="emptyCartBtn" type="primary" danger onClick={handleEmptyCart}>EMPTY CART</Button>
            <Link to="/checkout"><Button className="checkoutBtn" type="primary">CHECKOUT</Button></Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="toolbar" />
      <div className="root">
        <div className="cartTitle">
          <Link to="/">
            <Button className="cartTitleBtn" type="text" icon={<LeftOutlined size="large" />} />
          </Link>
          Shopping Cart
        </div>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
      </div>
    </>
  )
}

export default Cart;
