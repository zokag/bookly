// cart start
const cart=[];
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; // Access the productId from the button's dataset

    let matchingItem = cart.find((item) => item.productId === productId);

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }

    let cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    console.log(cart);
    console.log('Total items in cart:', cartQuantity);
  });
});
function displayCartContent() {
  console.log('Cart contents:');
  cart.forEach((item) => {
    console.log(`Product ID: ${item.productId}, Quantity: ${item.quantity}`);
    // Ovde možete dodati kod za prikazivanje ovih informacija na stranici
  });
}
console.log(cart);

window.onload = function() {
  const cartItems = document.getElementById('cart-items');

  // Prolazimo kroz elemente u cart nizu i pravimo HTML za prikazivanje proizvoda u korpi
  cart.forEach((item) => {
    const productElement = document.createElement('div');
    productElement.classList.add('cart-item');
    productElement.innerHTML = `
      <p>Product ID: ${cart.productId}, Quantity: ${cart.quantity}</p>
    `;
    cartItems.appendChild(productElement);
  });
};
displayCartContent();
// cart end