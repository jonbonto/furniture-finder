import React from 'react'
import { Input } from 'antd';

export default function Search() {

  const handleChange = (e) => {
    console.log("search: " + e.target.value)
  }
  return (
    <Input placeholder="Search Furniture" onChange={handleChange}/>
  )
}
