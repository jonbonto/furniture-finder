import React from 'react'
import { Col, Row } from 'antd'

import ProductItem from './ProductItem'

export default function ProductList({products}) {
  const productsList = products.map(product => (
    <Col key={product.name} sm={24} md={12}>
      <ProductItem product={product} />
    </Col>
  ))
  return (
    <Row gutter={[16, 16]}>
      {productsList}    
    </Row>
  )
}
