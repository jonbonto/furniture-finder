import React from "react";
import { Select, Row, Col } from "antd";
import { useFilter } from "../context/filtered-context";

const { Option } = Select;

const optionsStyle = [
  "Classic",
  "Midcentury",
  "Scandinavian",
  "Modern",
  "Contemporary"
].map(style => (
  <Option key={style} value={style}>
    {style}
  </Option>
));

const deliveredTimesConfig = [
  { id: 1, start: 1, end: 8, label: "1 week" },
  { id: 2, start: 8, end: 15, label: "2 week" },
  { id: 3, start: 15, end: 30, label: "1 month" },
  { id: 4, start: 31, end: Number.MAX_SAFE_INTEGER, label: "& more" }
];

const deliveredTimeOptions = deliveredTimesConfig.map(dt => (
  <Option key={dt.id} value={dt.id}>
    {dt.label}
  </Option>
));

export default function Filter() {
  const { setStyles, setDeliveredTime } = useFilter();
  function handleChangeStyle(value) {
    setStyles(value);
  }

  function handleChangeTime(value) {
    setDeliveredTime(value.map(id => deliveredTimesConfig.find(dtc => dtc.id === id)))
  }

  return (
    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Select
          mode="multiple"
          className="filter"
          placeholder="Furniture Style"
          onChange={handleChangeStyle}
        >
          {optionsStyle}
        </Select>
      </Col>
      <Col xs={24} sm={12}>
        <Select
          mode="multiple"
          className="filter"
          placeholder="Delivery Time"
          onChange={handleChangeTime}
        >
          {deliveredTimeOptions}
        </Select>
      </Col>
    </Row>
  );
}
