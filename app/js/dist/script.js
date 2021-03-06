"use strict";

var products = [{
  "name": "Headphones",
  "desc": "a pair of headphones",
  "price": 45.99,
  "originalPrice": 75,
  "discount": 45,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"
}, {
  "name": "Coat",
  "desc": "a awesome coat",
  "price": 120,
  "originalPrice": 120,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/alpha_industries_men_s_cwu_pilot_x_flight_jacket_01_270x335_crop_top.png?v=1480672952"
}, {
  "name": "Sunglasses",
  "desc": "swanky shades",
  "price": 55,
  "originalPrice": 65,
  "discount": 15,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/american_optical_original_pilot_eyewear_57mm_frame_1_270x335_crop_top.png?v=1480672961"
}, {
  "name": "Colour device",
  "desc": "Not sure what this is?!",
  "price": 150,
  "originalPrice": 160,
  "discount": 6,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/aspen_avionics_evolution_01_270x335_crop_top.png?v=1480672974"
}, {
  "name": "Headphones",
  "desc": "a pair of headphones",
  "price": 45.99,
  "originalPrice": 75,
  "discount": 45,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/akg_aviation_av100_anr_headset_01_270x335_crop_top.png?v=1480672940"
}, {
  "name": "Coat",
  "desc": "a awesome coat",
  "price": 120,
  "originalPrice": 120,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/alpha_industries_men_s_cwu_pilot_x_flight_jacket_01_270x335_crop_top.png?v=1480672952"
}, {
  "name": "Sunglasses",
  "desc": "swanky shades",
  "price": 55,
  "originalPrice": 65,
  "discount": 15,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/american_optical_original_pilot_eyewear_57mm_frame_1_270x335_crop_top.png?v=1480672961"
}, {
  "name": "Colour device",
  "desc": "Not sure what this is?!",
  "price": 150,
  "originalPrice": 160,
  "discount": 6,
  "image": "https://cdn.shopify.com/s/files/1/1634/8185/products/aspen_avionics_evolution_01_270x335_crop_top.png?v=1480672974"
}];
var source = document.querySelector('#productsTemplate').innerHTML;
var template = Handlebars.compile(source);
var target = document.querySelector('#products'); // target.innerHTML += template(products)

products.forEach(function (product) {
  // populate the template with the data and insert back into the DOM
  target.innerHTML += template(product);
});
//# sourceMappingURL=script.js.map
