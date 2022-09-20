

//🍀js0501- Swiper.js library 👉about.html
let swiper_about = new Swiper(".review-slider", {
    loop:true,

    grabCursor:true,

    spaceBetween: 20,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },


    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});



// 🍀accordion  👉about.html. 

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});
