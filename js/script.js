const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: 1.5,
  initialSlide: 0,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    678: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

// メニューボタン
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const gnavBg = document.querySelector('.g-nav-area-bg');
const linkBtns = document.querySelectorAll('.g-nav > li > a');


menu.addEventListener('click', () => {
  if ((menu).classList.contains('active')) {
    this.classList.remove('active');
  } else {
    header.classList.toggle('active');
  }
});

gnavBg.addEventListener('click', () => {
  header.classList.remove('active');
});


linkBtns.forEach(linkBtn => {
  linkBtn.addEventListener('click', () => {
    header.classList.remove('active');
  });
});


// ページ内リンク
const headerHeight = document.querySelector("#header").offsetHeight;
const anchors = document.querySelectorAll('a[href^="#"]');

// anchors.forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();

//     const href = anchor.getAttribute('href');
//     const target = document.getElementById(href.replace('#', ''));
//     const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

//     window.scrollTo({
//       top: targetPosition,
//       behavior: 'smooth'
//     });
//   });
// });

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', (e) => {
    e.preventDefault();

    const href = anchors[i].getAttribute('href');
    const target = document.getElementById(href.replace('#', ''));
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scroll({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}


//フェードイン
window.addEventListener('scroll', function() {
  
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const elements = document.querySelectorAll('.grid-item');
  
  elements.forEach(function(element) {
 
    const elementPosition = element.offsetTop;

    if(scroll + windowHeight > elementPosition + 100) {
      element.classList.add('is-scrollIn');
    }
  });
});
