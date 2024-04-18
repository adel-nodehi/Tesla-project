function OpenSlide(evt, SlideName, Explanation) {
  var i, video, ButtonChange, comment;
  video = document.getElementsByClassName('video');
  for (i = 0; i < video.length; i++) {
    video[i].style.display = 'none';
  }
  comment = document.getElementsByClassName('comment');
  for (i = 0; i < comment.length; i++) {
    comment[i].style.display = 'none';
  }

  ButtonChange = document.getElementsByClassName('ButtonChange');
  for (i = 0; i < ButtonChange.length; i++) {
    ButtonChange[i].className = ButtonChange[i].className.replace(
      ' change',
      ''
    );
  }

  document.getElementById(Explanation).style.display = 'block';
  document.getElementById(SlideName).style.display = 'block';

  evt.currentTarget.className += ' change';
}
let index = 0;
let transitionDelay = 8000;

let slideContainer = document.querySelector('.header__bottom');
let slides = slideContainer.querySelectorAll('.slide');

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay / 1000}s linear`;
}

showSlide(index);

function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? 'block' : 'none';
  });
  index++;
  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(() => showSlide(index), transitionDelay);
