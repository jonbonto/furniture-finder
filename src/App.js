import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import "./App.css";
import FilteredList from "./components/FilteredList";
import { FilterProvider } from "./context/filtered-context";
import { SearchProvider } from "./context/search-context";
import Header from "./components/Header";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <SearchProvider>
        <FilterProvider>
          <Header />
          <Content className="content">
            <FilteredList />
          </Content>
        </FilterProvider>
      </SearchProvider>
    </Layout>
  );
}

export default App;
