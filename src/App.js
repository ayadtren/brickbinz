import "./App.scss";

import React, { Component } from "react";

import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
