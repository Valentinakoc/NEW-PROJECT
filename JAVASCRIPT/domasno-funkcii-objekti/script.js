const product1 = {
  name: "Laptop",
  price: 45000,
  inStock: true
};

const product2 = {
  name: "Headphones",
  price: 2500,
  inStock: false
};

const product3 = {
  name: "Keyboard",
  price: 1200,
  inStock: true
};

function printProperties(product) {
  for (let key in product) {
    console.log(`${key}: ${product[key]}`);
  }
  console.log("---------------------");
}

printProperties(product1);
printProperties(product2);
printProperties(product3);


  

  function discountCalculation(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

console.log(discountCalculation(1000, 10)); 

console.log("---------------------");

function calculatePriceWithVAT(price, discount, vat) {
  let afterDiscount = price - (price * discount / 100);
  return afterDiscount + (afterDiscount * vat / 100);
}

console.log(calculatePriceWithVAT(2000, 20, 18)); 

console.log("---------------------");

function getDiscountMessage(item, price, discount) {
  let final = price - (price * discount / 100);
  return `Производ: ${item}, Цена по попуст: ${final} ден.`;
}

console.log(getDiscountMessage("Маичка", 600, 15));

console.log("---------------------");

function applyCoupon(price, couponCode) {
  if (couponCode === "SAVE10") {
    return price * 0.9;
  } else {
    return price;
  }
}

console.log(applyCoupon(500, "SAVE10"));
console.log(applyCoupon(500, "NOPE"));

console.log("---------------------");

function calculateTotal(price, discount = 10) {
  return price - (price * discount / 100);
}

console.log(calculateTotal(1000));      
console.log(calculateTotal(1000, 25));  
