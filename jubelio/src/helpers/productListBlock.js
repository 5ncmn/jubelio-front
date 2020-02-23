export default (products, columnLength = 4) => {
  let productsFullBlock = [];
  for (let i = 0; i < products.length; i += columnLength) {
    let productsBlock = products.filter(
      (product, index) => index >= i && index < i + columnLength
    );

    if (productsBlock.length < columnLength) {
      const diff = columnLength - productsBlock.length;
      for (let i = 0; i < diff; i++) {
        productsBlock.push([]);
      }
    }
    productsFullBlock.push(productsBlock);
  }

  return productsFullBlock;
};
