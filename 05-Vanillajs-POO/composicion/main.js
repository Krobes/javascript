import { Price } from "./classList/Price.js";
import { Review } from "./classList/Review.js";
import { Product } from "./classList/Product.js";

const review = new Review(4.6, 73);
const price = new Price("USD", 399);
const product = new Product("New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
"https://www.amazon.com/dp/B087623TMW", 
"https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
335.8, 
price, 
review);

const div = document.createElement("div");
div.id = "container";
document.body.appendChild(div);
const ul = document.createElement("ul");
div.appendChild(ul);

Object.entries(product).forEach(([key, value]) => {
  let li = document.createElement("li");
  if (key === "price") {
    const [moneda, valor] = Object.entries(value)[0];
    const [subKey, subValue] = Object.entries(value)[1];
    li.textContent = subKey + " = " + subValue + valor;
    ul.appendChild(li);
  } 
  else if(key === "reviews"){
    Object.entries(value).forEach(([subKey, subValue]) => {
      let la = document.createElement("li");
      la.textContent = subKey + " = " + subValue;
      ul.appendChild(la);
    });
  }
  else {
    li.textContent = key + " = " + value;
    ul.appendChild(li);
  }
});





