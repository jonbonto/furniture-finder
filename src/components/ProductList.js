import React from 'react'
import { Col, Row } from 'antd'

import ProductItem from './ProductItem'

export default function ProductList({products}) {
  const productsList = products.map(product => (
    <Col key={product.name} xs={24} sm={12}>
      <ProductItem product={product} />
    </Col>
  ))
  return (
    <Row gutter={[16, 16]}  className="product-list">
      {productsList}    
    </Row>
  )
}
