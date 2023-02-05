import React, { Component } from "react";
import "./App.scss";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route } from "react-router";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
