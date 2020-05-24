
/**
 * NAVIGATION BURGER MENU
 */

window.onload = function (){

  var burger = document.querySelector('.burger');
  var nav = document.querySelector('#'+ burger.dataset.target)

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active')
  });
  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

  let age = getAge("2001-06-16")
  for (let el of document.getElementsByClassName("age")) {
    el.innerHTML = age;
  }

}
