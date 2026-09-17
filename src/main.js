'use strict';

console.log('Приложение запущено!');

(function() {
  const sizes = {
    '100': { price: '349,20', priceOld: '326,40', sku: '01306' },
    '500': { price: '1 646', priceOld: '1 432', sku: '01307' },
    '1000': { price: '2 592', priceOld: '2 064', sku: '01308' },
    '5000': { price: '8 710', priceOld: '6 320', sku: '01309' },
  };
  const $productSizes = document.getElementById('product-sizes');
  const $productSku = document.querySelectorAll('.product__sku span');
  const $productPrice = document.querySelectorAll('.product__price-new span');
  const $productPriceOld = document.querySelectorAll('.product__price-old span');

  $productSizes.addEventListener('change', function() {
    const size = sizes[this.value];
    $productSku.forEach(item => item.textContent = size.sku);
    $productPrice.forEach(item => item.textContent = size.price);
    $productPriceOld.forEach(item => item.textContent = size.priceOld);
  });
})();