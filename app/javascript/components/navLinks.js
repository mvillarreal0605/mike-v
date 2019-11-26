const navLinks = () => {

const navbarItems = document.querySelectorAll('.navbar_list_item');

  navbarItems.forEach((item) => {
   item.addEventListener('click', () => {
     event.preventDefault();
     let section = document.querySelector(item.childNodes[1].getAttribute('href'));
     section.scrollIntoView({
       behavior: 'smooth',
       block: 'start'
     });
//     setTimeout(() => section.focus(), 500);
    
   })
  })
}

export { navLinks };