import React, { useContext } from "react";
import PriceFormat from "../helpers/priceFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../store";

export default ({ product, productSelect }) => {
  const store = useContext(StoreContext);

  if (Object.keys(product) == 0) {
    return <div style={{ flex: 1, margin: 8 }} />;
  } else {
    return (
      <div
        key={product.productnumber}
        style={{
          width: 240,
          overflow: "hidden",
          margin: 8,
          boxShadow: "0px 2px 14px -2px rgba(0,0,0,0.1)",
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            height: 240,
            width: 240,
            overflow: "hidden"
          }}
        >
          {product.productimages[0] && (
            <img
              src={product.productimages[0]}
              style={{
                objectFit: "cover",
                maxHeight: "100%",
                maxWidth: "100%"
              }}
            />
          )}
        </div>

        <div
          style={{
            textAlign: "left",
            width: "100%"
          }}
        >
          <div
            style={{
              padding: 8
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#153a50",
                fontSize: 14,
                marginBottom: 8,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                fontWeight: 700
              }}
            >
              {product.name}
            </p>
            <p
              style={{
                color: "rgb(205, 37, 39)",
                fontSize: 14,
                margin: 0,
                fontWeight: 700
              }}
            >
              {PriceFormat(product.price)}
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                marginTop: 32,
                alignItems: "center"
              }}
            >
              <div
                style={{
                  flex: 1,
                  textAlign: "center"
                }}
                onClick={() => productSelect(product)}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ fontSize: 14 }}
                  color="#153a50"
                />
                {/* EDIT */}
              </div>
              <div
                style={{
                  width: 1,
                  height: 24,
                  backgroundColor: "#000",
                  opacity: 0.2
                }}
              />

              <div
                style={{ flex: 1, textAlign: "center" }}
                onClick={() => store.deleteProduct(product)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ fontSize: 14 }}
                  color="#153a50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
