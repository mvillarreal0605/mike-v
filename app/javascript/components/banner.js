import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["The best way to tell the future...", "Is to create it.", "Let's do that.", "Together."],
    typeSpeed: 50,
    loop: true,
  });
}

export { loadDynamicBannerText };