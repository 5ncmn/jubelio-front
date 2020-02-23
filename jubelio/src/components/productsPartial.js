import React, { useEffect, useState, useContext } from "react";
import { StoreProvider, StoreContext } from "../store";
import ProductsRow from "./ProductsRow";
import { useObserver } from "mobx-react";

export default ({ productSelect }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.fetchProducts();
  }, []);

  return useObserver(() => (
    <div>
      {store.products &&
        store.products.map((eachBlock, index) => (
          <div key={index}>
            <ProductsRow productSelect={productSelect} block={eachBlock} />
          </div>
        ))}
    </div>
  ));
};
