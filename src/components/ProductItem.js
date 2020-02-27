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
    <Tag color={colorConfigs[style]}>{style}</Tag>
  ));

  const title = (
    <div className="product-title">
      <h3>{product.name}</h3>
      <span>{product.price}</span>
    </div>
  );
  return (
    <Card
      title={title}
      headStyle={{ border: "none" }}
      bodyStyle={{ paddingTop: 0, minHeight: 202 }}
    >
      <Paragraph>{product.description}</Paragraph>
      <div className="product-styles">
        {furnitureStyles}
      </div>
      <div className="product-delivery-time">
        <Text>{product.delivery_time} days</Text>
      </div>
    </Card>
  );
}
