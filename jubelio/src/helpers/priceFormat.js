export default price => {
  console.log(price);
  return Intl.NumberFormat("ID", { style: "currency", currency: "IDR" })
    .format(price)
    .split(",")[0];
};
