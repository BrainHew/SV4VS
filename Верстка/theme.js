function darkmode(){
    const body = document.body
    const wasDarkmode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
    document.querySelector('.block1').classList.toggle('changeBlok1', !wasDarkmode)
    document.querySelector('.block2').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block3').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block4').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block5').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block6').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block7').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block8').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block9').classList.toggle('changeBlok2', !wasDarkmode)
    document.querySelector('.block10').classList.toggle('changeBlok2', !wasDarkmode)
}

document.querySelector('.btn').addEventListener('click',darkmode)
function onload(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true' )
    document.querySelector('.block1').classList.toggle('changeBlok1', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block2').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block3').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block4').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block5').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block6').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block7').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block8').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block9').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
    document.querySelector('.block10').classList.toggle('changeBlok2', localStorage.getItem('darkmode') === 'true')
}

document.addEventListener('DOMContentLoaded', onload)

$('#something').on('click', function() {
    if (!$(this).hasClass('clicked') && localStorage.getItem('darkmode') === 'true') { // если класса нет
      $(this).addClass('clicked'); // добавляем класс
        document.getElementById("big1").style.color = 'white';
        document.getElementById("big2").style.color = 'white';
        document.getElementById("big3").style.color = 'white';
        document.getElementById("small1").style.color = 'white';
        document.getElementById("small2").style.color = 'white';
        document.getElementById("small3").style.color = 'white';
        document.getElementById("big4").style.color = 'white';
        document.getElementById("big5").style.color = 'white';
        document.getElementById("big6").style.color = 'white';
        document.getElementById("big7").style.color = 'white';
        document.getElementById("small4").style.color = 'white';
        document.getElementById("small5").style.color = 'white';
        document.getElementById("small6").style.color = 'white';
        document.getElementById("small7").style.color = 'white';
    } else { // если есть
      $(this).removeClass('clicked'); // убираем класс
        document.getElementById("big1").style.color = 'black';
        document.getElementById("big2").style.color = 'black';
        document.getElementById("big3").style.color = 'black';
        document.getElementById("small1").style.color = 'black';
        document.getElementById("small2").style.color = 'black';
        document.getElementById("small3").style.color = 'black';
        document.getElementById("big4").style.color = 'black';
        document.getElementById("big5").style.color = 'black';
        document.getElementById("big6").style.color = 'black';
        document.getElementById("big7").style.color = 'black';
        document.getElementById("small4").style.color = 'black';
        document.getElementById("small5").style.color = 'black';
        document.getElementById("small6").style.color = 'black';
        document.getElementById("small7").style.color = 'black'; // код для второго клика
    }
  });

  if(localStorage.getItem('darkmode') === 'true')
  {
    document.getElementById("big1").style.color = 'white';
    document.getElementById("big2").style.color = 'white';
    document.getElementById("big3").style.color = 'white';
    document.getElementById("small1").style.color = 'white';
    document.getElementById("small2").style.color = 'white';
    document.getElementById("small3").style.color = 'white';
    document.getElementById("big4").style.color = 'white';
    document.getElementById("big5").style.color = 'white';
    document.getElementById("big6").style.color = 'white';
    document.getElementById("big7").style.color = 'white';
    document.getElementById("small4").style.color = 'white';
    document.getElementById("small5").style.color = 'white';
    document.getElementById("small6").style.color = 'white';
    document.getElementById("small7").style.color = 'white';
  }