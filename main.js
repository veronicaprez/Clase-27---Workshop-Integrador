// CREA UNA CLASE PARA LOS PRODUCTOS
class Products {
  constructor(name, price, inCart) {
    this.name = name;
    this.price = price;
    this.inCart = inCart;
  }
}
//ARRAY CON TODOS LOS PRODUCTOS
let cartArray = [
  new Products("Vans", 4500, 0),
  new Products("Adidas", 6500, 0),
  new Products("DC", 5000, 0),
];
// AGREGA PRODUCTOS AL CARRITO
const btnAddToCart = document.getElementsByClassName("btn-addcart");
console.log(btnAddToCart); // checkeo que este tomando bien los elementos
for (i = 0; i < btnAddToCart.length; i++) {
  let buttonAdd = btnAddToCart[i];
  buttonAdd.addEventListener("click", itemsInCart);
}
onLoadItemsInCart();
// FUNCIÓN PARA AGREGAR ITEMS AL CARRITO
function itemsInCart() {
  let itemsInCart = localStorage.getItem("itemsInCart");
  itemsInCart = parseInt(itemsInCart);
  if (itemsInCart) {
    localStorage.setItem("itemsInCart", itemsInCart + 1);
    document.getElementById("cart-logo").textContent =
      "(" + (itemsInCart + 1) + ")";
  } else {
    localStorage.setItem("itemsInCart", 1);
    document.getElementById("cart-logo").textContent = "(" + 1 + ")";
  }
}
// FUNCIÓN PARA GUARDAR LOS ITEMS AGREGADOS AL LOCALSTORAGE
function onLoadItemsInCart() {
  let itemsInCart = localStorage.getItem("itemsInCart");
  if (itemsInCart) {
    document.getElementById("cart-logo").textContent = "(" + itemsInCart + ")";
  }
}
