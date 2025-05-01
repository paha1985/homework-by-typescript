"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
  const priceWithDiscount = (price * (1 - discount / 100)) / months;
  return isInstallment ? priceWithDiscount : price;
};
const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
