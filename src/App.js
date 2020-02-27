import React from "react";
import { filterByStyle, filterByDelivery } from "./helpers";
import 'antd/dist/antd.css';
import "./App.css";
import productList from "./response.json";
import ProductList from "./components/ProductList";

const stylesSelected = ["Scandinavian"];
const deliveredTimeSelected = [
  // { id: 1, start: 1, end: 8 },
  { id: 2, start: 8, end: 15 },
  { id: 3, start: 15, end: 30 }
  // { id: 4, start: 31, end: Number.MAX_SAFE_INTEGER }
];
function App() {
  // React.useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await fetch(
  //         "http://www.mocky.io/v2/5c9105cb330000112b649af8"
  //       );
  //       const resJson = await res.json();
  //       const products = resJson.products;
  //       let filteredProducts = products.filter(product =>
  //         filterByStyle(stylesSelected, product.furniture_style)
  //       );

  //       filteredProducts = filteredProducts.filter(product =>
  //         filterByDelivery(deliveredTimeSelected, parseInt(product.delivery_time))
  //       );
  //       console.log(filteredProducts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getProducts();
  // }, []);
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 1080 }}>
      <ProductList products={productList.products} />
    </div>
  );
}

export default App;
