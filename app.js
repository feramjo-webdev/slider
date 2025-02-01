const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

prevBtn.style.display = 'none';

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});

prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides (First Option)
  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }
  //   end of first option

  //   second option
  if (counter < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (counter > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  //   end of second option

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
