import React from 'react'
import { PageHeader, Badge, Button } from 'antd';
import { ShoppingFilled } from '@ant-design/icons';
 
import './Navbar.css';

const Navbar = ({ totalItems }) => {
  return (
    <div className="header">
      <PageHeader
        avatar={{src:'https://e7.pngegg.com/pngimages/123/106/png-clipart-apple-logo-logo-apple-icon-information-apple-logo-logo-monochrome.png'}}
        title="Apple Sub Store"
        extra={[
          <Badge count={totalItems}>
            <Button type="primary" icon={<ShoppingFilled />} />
          </Badge>
        ]}
      />
    </div>
  )
}

export default Navbar
