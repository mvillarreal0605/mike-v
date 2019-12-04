import Typed from 'typed.js';

const bannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["The best way to tell the future...^2000",
    "Is to create it.^1000",
    "Let's do that.^1000",
    "Together.^5000"
    ],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true,
  });
}

export { bannerText };