let productHTML = "";
product.forEach((product) => {
  productHTML += `
        <div class="product">
          <span class="wishlist-container">
            <img src="./icons/wishlist.svg" class="icon" />
          </span>
          <div class="product-image-container">
            <img src="${product.Image}" />
          </div>
          <div class="product-details">
            <div class="product-name"><p>${product.name}</p></div>
            <div class="product-price">&#8377; ${(
              product.OriginalPrice / 100 -
              (product.OriginalPrice * product.discountPercebtage) / 100 / 100
            ).toFixed(2)}</div>
            <div class="product-discount-container">
              <div class="product-discount">
                <div class="product-discount-price">&#8377; ${(
                  product.OriginalPrice / 100
                ).toFixed(2)}</div>
                <div class="product-discount-percentage">${
                  product.discountPercebtage
                }% OFF</div>
              </div>
            </div>
            <div class="product-button-container">
              <div class="product-add-button">
                <button class="js-add-to-cart" data-product-id=${
                  product.id
                }>Add</button>
              </div>
            </div>
          </div>
        </div>
      `;
});
document.querySelector(".product-grid").innerHTML = productHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({ productId: productId, quantity: 1 });
    }

    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quantity;
    })
    document.querySelector('.cart-quantity').innerHTML=cartQuantity;
  });
});
