import 'bootstrap';
import { initUpdateNavbarOnScroll } from "../components/navbar";
import { loadDynamicBannerText } from "../components/banner";
import { navLinks } from "../components/navLinks";
/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


function initMap() {
  // The location of KC
  var kc = {lat: 39.0997, lng: -94.5786};
  // The map, centered at KC
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: kc});
  // The marker, positioned at KC
  var marker = new google.maps.Marker({position: kc, map: map});
}

navLinks();
initMap();
initUpdateNavbarOnScroll();
loadDynamicBannerText();

