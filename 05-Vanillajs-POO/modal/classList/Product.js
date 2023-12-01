export class Product {
  nameProduct;
  urlProducto;
  urlImage;
  score;
  price;
  reviews;
  constructor(nameProduct, urlProducto, urlImage, score, price, reviews) {
    this.nameProduct = nameProduct;
    this.urlProducto = urlProducto;
    this.urlImage = urlImage;
    this.score = score;
    this.price = price;
    this.reviews = reviews;
  }
}
