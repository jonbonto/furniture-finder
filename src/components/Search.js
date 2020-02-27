import React from "react";
import _ from "lodash";
import { Input, Row, Col } from "antd";

import { useSearch } from "../context/search-context";

const debounced = _.debounce((func, value) => {
  func(value);
}, 500);

export default function Search() {
  const { setSearch } = useSearch();

  const handleChange = e => {
    debounced(setSearch, e.target.value);
  };
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Input placeholder="Search Furniture" onChange={handleChange} />
      </Col>
    </Row>
  );
}
