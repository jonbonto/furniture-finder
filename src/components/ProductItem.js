import React from "react";
import { Card, Tag, Typography } from "antd";

const { Paragraph, Text } = Typography;

const colorConfigs = {
  Classic: "gold",
  Midcentury: "volcano",
  Scandinavian: "magenta",
  Modern: "cyan",
  Contemporary: "geekblue"
};

export default function ProductItem({ product }) {
  const furnitureStyles = product.furniture_style.map(style => (
    <Tag color={colorConfigs[style]} key={style}>
      {style}
    </Tag>
  ));

  return (
    <Card
      title={product.name}
      extra={product.price}
      headStyle={{ border: "none" }}
      bodyStyle={{ paddingTop: 0 }}
    >
      <Paragraph>{product.description}</Paragraph>
      <div className="product-footer">
        <div className="product-styles">{furnitureStyles}</div>
        <Text>{product.delivery_time} days</Text>
      </div>
    </Card>
  );
}
