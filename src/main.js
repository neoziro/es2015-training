const rateForm = document.getElementById('rateForm');

rateForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const alert = rateForm.querySelector('.alert');
  const rate = +rateForm.rate.value;
  const movie = rateForm.movie.value;
  const valid = Number.isInteger(rate) && rate >= 1 && rate <= 5;

  alert.style.display = 'block';

  alert.classList.toggle('alert-danger', !valid);
  alert.classList.toggle('alert-success', valid);

  alert.innerHTML = valid
    ? `The movie ${movie} has been rated ${rate}!`
    : `Invalid rate ${rate}.`;

  if (movie.startsWith('007'))
    new Audio('http://downloadwap.com/mp3tones/rtones/new/tv-movie/james_bond_007_original-4820.mp3').play();

  if (movie.includes('dark'))
    document.body.style.background = 'black';
});
