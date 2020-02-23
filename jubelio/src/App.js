import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Axios from "axios";
import ProductListBlock from "./helpers/productListBlock";
import ProductsRow from "./components/ProductsRow";
import Modal from "./components/Modal";
import { useObserver } from "mobx-react";
import { StoreProvider, StoreContext } from "./store";
import ProductsPartial from "./components/productsPartial";

const App = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productSelect = product => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  return useObserver(() => (
    <StoreProvider>
      <div className="App">
        <div
          style={{
            maxWidth: "1200px",
            display: "inline-block"
          }}
        >
          {modalVisible && (
            <Modal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              selectedProduct={selectedProduct}
            />
          )}
          {/* HEADER */}
          <div
            style={{
              flex: 1,
              display: "flex",
              marginBottom: 32,
              marginTop: 16
            }}
          >
            <img
              src={require("./assets/image/jubelio-header.png")}
              style={{
                height: 32,
                width: "auto",
                marginLeft: 16
              }}
            />
          </div>

          {/*  */}
          <ProductsPartial productSelect={productSelect} />
        </div>
      </div>
    </StoreProvider>
  ));
};

export default App;
