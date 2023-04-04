$('#follow').on('click', function() {
    if (!$(this).hasClass('clicked1') ) { // если класса нет
      $(this).addClass('clicked1'); // добавляем класс
      document.getElementById('myImg1').src='10.png'
      document.getElementById('myImg2').src='11.png'
      document.getElementById('myImg3').src='12.png'
      document.getElementById('myImg4').src='13.png'
    } else { // если есть
      $(this).removeClass('clicked1'); // убираем класс
      document.getElementById('myImg1').src='12.png'
      document.getElementById('myImg2').src='11.png'
      document.getElementById('myImg3').src='13.png'
      document.getElementById('myImg4').src='10.png'
    }
  });