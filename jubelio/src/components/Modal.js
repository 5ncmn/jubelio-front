import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { StoreProvider, StoreContext } from "../store";
import { useObserver } from "mobx-react";
import "./modal.css";

export default ({ setModalVisible, selectedProduct }) => {
  const store = useContext(StoreContext);

  const [name, setName] = useState(selectedProduct.name);
  const [sku, setSku] = useState(selectedProduct.sku);
  const [price, setPrice] = useState(selectedProduct.price);
  const [productNumber, setProductNumber] = useState(
    selectedProduct.productnumber
  );
  const [productImages, setProductImages] = useState(
    selectedProduct.productimages
  );
  const [imageCount, setImageCount] = useState(
    selectedProduct.productimages.length
  );

  const handleSubmit = event => {
    event.preventDefault();
    store.editProduct(
      {
        name,
        sku,
        price,
        productnumber: productNumber,
        productimages: productImages
      },
      selectedProduct.productnumber
    );
  };

  const addImageInput = () => {
    setImageCount(imageCount + 1);
    setProductImages([...productImages, ""]);
  };

  const removeImageInput = () => {
    setImageCount(imageCount - 1);
    setProductImages(productImages.slice(0, productImages.length - 1));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name == "sku") setSku(value);
    else if (name == "name") setName(value);
    else if (name == "price") setPrice(value);
    else if (name == "productNumber") setProductNumber(value);
  };

  const editImage = (value, index) => {
    let imagesArr = [...productImages];
    imagesArr[index] = value;
    setProductImages(imagesArr);
  };

  return (
    <div className="modal display-block">
      <div className="modal-main">
        <div
          style={{
            flexDirection: "column",
            textAlign: "left"
          }}
        >
          <form onSubmit={handleSubmit}>
            <p style={{ marginBottom: 0, fontWeight: 700, color: "#153a50" }}>
              SKU
            </p>
            <input
              type="text"
              name="sku"
              value={sku}
              className="modal-input"
              onChange={handleInputChange}
            />
            <p style={{ marginBottom: 0, fontWeight: 700, color: "#153a50" }}>
              Name
            </p>
            <input
              type="text"
              name="name"
              value={name}
              className="modal-input"
              onChange={handleInputChange}
            />
            <p style={{ marginBottom: 0, fontWeight: 700, color: "#153a50" }}>
              Price
            </p>
            <input
              type="number"
              name="price"
              value={price}
              className="modal-input"
              onChange={handleInputChange}
            />
            <p style={{ marginBottom: 0, fontWeight: 700, color: "#153a50" }}>
              Product Number
            </p>
            <input
              type="number"
              name="productNumber"
              value={productNumber}
              className="modal-input"
              onChange={handleInputChange}
            />

            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 32
              }}
            >
              <p style={{ margin: 0, fontWeight: 700, color: "#153a50" }}>
                Images
              </p>

              <div style={{ flexDirection: "row", display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "#153a50",
                    borderRadius: 4,
                    padding: 8,
                    marginRight: 16
                  }}
                  onClick={addImageInput}
                >
                  <FontAwesomeIcon icon={faPlus} color="#fff" />
                </div>
                <div
                  style={{
                    backgroundColor: "#153a50",
                    borderRadius: 4,
                    padding: 8
                  }}
                  onClick={removeImageInput}
                >
                  <FontAwesomeIcon icon={faMinus} color="#fff" />
                </div>
              </div>
            </div>
            {productImages != null &&
              productImages.map((image, index) => {
                return (
                  <input
                    type="text"
                    name={`productImage-${index}`}
                    value={image}
                    className="modal-input"
                    onChange={event => editImage(event.target.value, index)}
                  />
                );
              })}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <button onClick={() => setModalVisible(false)}>close</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
