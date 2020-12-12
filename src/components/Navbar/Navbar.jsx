import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { PageHeader, Badge, Button } from 'antd';
import { ShoppingFilled } from '@ant-design/icons';
 
import './Navbar.css';

const Navbar = ({ totalItems }) => {
  const location = useLocation();

  return (
    <div className="header">
      <PageHeader
        avatar={{src:'https://e7.pngegg.com/pngimages/123/106/png-clipart-apple-logo-logo-apple-icon-information-apple-logo-logo-monochrome.png'}}
        title="Apple Sub Store"
        extra={[
          <Link to="/cart">
            {location.pathname === '/' && (
              <Badge count={totalItems}>
                <Button type="primary" icon={<ShoppingFilled />} />
              </Badge>
            )}
          </Link>
        ]}
      />
    </div>
  )
}

export default Navbar
