class Product {
  name: string;
  price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

function cartTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price * product.quantity;
  }
  return total;
}

const cart: Product[] = [];
function addToCart(name: string, price: number, quantity: number): void {
  const product = new Product(name, price, quantity);
  cart.push(product);
}

addToCart("Apple", 10, 2);
addToCart("Banana", 5, 3);
addToCart("Orange", 8, 4);

const total = cartTotal(cart);
console.log("Total: $" + total);