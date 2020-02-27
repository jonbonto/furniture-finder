import React, { useEffect, useState } from "react";
import _ from "lodash";

import ProductList from "./ProductList";
import { filterByStyle, filterByDelivery } from "../helpers";
import { useFilter } from "../context/filtered-context";

export default function FilteredList() {
  const [products, setProducts] = useState([]);

  const { stylesSelected, deliveredTimeSelected } = useFilter() 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://www.mocky.io/v2/5c9105cb330000112b649af8"
        );
        const resJson = await res.json();
        const products = resJson.products;
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  let filteredProducts = products;

  if (!_.isEmpty(stylesSelected)) {
    filteredProducts = filteredProducts.filter(product =>
      filterByStyle(stylesSelected, product.furniture_style)
    );
  }

  if (!_.isEmpty(deliveredTimeSelected)) {
    filteredProducts = filteredProducts.filter(product =>
      filterByDelivery(deliveredTimeSelected, parseInt(product.delivery_time))
    );
  }

  return <ProductList products={filteredProducts} />;
}
