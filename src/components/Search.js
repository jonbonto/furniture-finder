import React from 'react'
import _ from "lodash";
import { Input } from 'antd';

import { useSearch } from "../context/search-context";

const debounced = _.debounce((func, value) => {
  func(value);
}, 500)

export default function Search() {

  const { setSearch } = useSearch()

  const handleChange = (e) => {
    debounced(setSearch, e.target.value);
  }
  return (
    <Input placeholder="Search Furniture" onChange={handleChange}/>
  )
}
