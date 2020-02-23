import React, { createContext } from "react";
import { useLocalStore, useObserver } from "mobx-react";
import ProductListBlock from "../helpers/productListBlock";
import Axios from "axios";

export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    products: [],
    productsFetchLoading: false,
    productsFetchError: false,
    modalVisible: false,
    selectedProduct: null,
    editProduct: async (update, productNumber) => {
      // edit product goes here
      try {
        console.log("update ->", update);
        const { data } = await Axios({
          method: "PUT",
          url: `http://localhost:3001/${productNumber}`,
          data: {
            ...update
          }
        });

        if (data.code == "002") {
          // nothing changes
        } else {
          store.products = ProductListBlock(data.data, 4);
        }
      } catch (err) {
        return err;
      }
    },
    deleteProduct: async product => {
      try {
        const { data } = await Axios({
          method: "DELETE",
          url: `http://localhost:3001/${product.productnumber}`
        });

        if (data.code == "002") {
          // nothing changes
        } else {
          store.products = ProductListBlock(data.data, 4);
        }
      } catch (err) {
        return err;
      }
    },
    fetchProducts: async () => {
      try {
        const { data } = await Axios({
          method: "GET",
          url: "http://localhost:3001"
        });

        store.products = ProductListBlock(data, 4);
      } catch (err) {
        return err;
      }
    },
    get productCount() {
      return store.products.length;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
