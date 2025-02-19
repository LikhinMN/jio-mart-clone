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
            <div class="product-price">&#8377; ${((product.OriginalPrice)/100-(product.OriginalPrice*product.discountPercebtage/100)/100).toFixed(2)}</div>
            <div class="product-discount-container">
              <div class="product-discount">
                <div class="product-discount-price">&#8377; ${(product.OriginalPrice/100).toFixed(2)}</div>
                <div class="product-discount-percentage">${product.discountPercebtage}% OFF</div>
              </div>
            </div>
            <div class="product-button-container">
              <div class="product-add-button">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      `;
});
document.querySelector(".product-grid").innerHTML = productHTML;
