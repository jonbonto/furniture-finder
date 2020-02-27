import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import "./App.css";
import ProductList from "./components/ProductList";
import Search from "./components/Search";
import Filter from "./components/Filter";
import FilteredList from "./components/FilteredList";
import { FilterProvider } from "./context/filtered-context";

const { Header, Content } = Layout;

function App() {
  return (
    <FilterProvider>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#106CC8",
            height: "unset"
          }}
        >
          <div style={{ width: "50%" }}>
            <Search />
          </div>
          <Filter />
        </Header>
        <Content style={{ padding: "150px 50px 50px 50px" }}>
          <FilteredList />
        </Content>
      </Layout>
    </FilterProvider>
  );
}

export default App;
