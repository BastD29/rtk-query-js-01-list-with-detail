import React from "react";
import { Products } from "./components/Products";
import { Routes, Route } from "react-router";
import { ProductDetail } from "./components/ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}
