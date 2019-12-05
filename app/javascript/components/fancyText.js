import Typed from 'typed.js';

const fancyText = () => {
  new Typed('#product-text', {
    strings: ["product...^1000",
    "brand...^1000",
    "business...^1000",
    "ideas...^1000"
    ],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true,
  });
}

export { fancyText };