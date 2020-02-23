import React from "react";
import ProductCard from "./ProductCard";

export default ({ block, productSelect }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 320,
        display: "flex",
        flexDirection: "row"
      }}
    >
      {block.map((eachProduct, index) => (
        <ProductCard
          key={index}
          product={eachProduct}
          productSelect={productSelect}
        />
      ))}
    </div>
  );
};
