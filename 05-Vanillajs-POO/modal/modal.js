import { Product } from "./classList/Product.js";
import { Price } from "./classList/Price.js";
import { Review } from "./classList/Review.js";

const review = new Review(4.6, 73);
const price = new Price("USD", 399);
const product = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
  335.8,
  price,
  review
);
const divFirst = document.createElement("div");
document.body.append(divFirst);
const img = document.createElement("img");
img.src = product.urlImage;
img.alt = "imagen";
divFirst.className = "container";
divFirst.appendChild(img);

export function modal() {
  const modal = document.createElement("div");
  modal.id = "myModal";
  modal.className = "modal";
  divFirst.appendChild(modal);

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  modal.appendChild(modalContent);
  datosProducto(product, price, review, modal);
  return modal;
}

function datosProducto(product, price, review, modal) {
  const h3Element = document.createElement("h3");
  h3Element.textContent = product.nameProduct;
  modal.querySelector(".modal-content").appendChild(h3Element);

  let precio = document.createElement("p");
  precio.textContent = "Price = " + price.current_price + price.currency;
  modal.querySelector(".modal-content").appendChild(precio);

  let rating = document.createElement("p");
  rating.textContent = "Rating = " + review.rating;
  modal.querySelector(".modal-content").appendChild(rating);

  let total_reviews = document.createElement("p");
  total_reviews.textContent = "Total reviews = " + review.total_reviews;
  modal.querySelector(".modal-content").appendChild(total_reviews);
}
