// navbar background color change section
// $(window).scroll(function () {
//   $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
// })


  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    // console.log(scroll)

    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd")
    }
  })

  // text animaton
  var typed = new Typed('.element', {
    strings: ['Kanis Fatema', 'a Developer', 'a Designer'],
    typeSpeed: 100,
    loop: true
  });

// to do app
$(".btn").click(function () {
  var input = $('.input').val();
  // console.log(input)
  var NewText = $('ol').append(
    '<li>' + input + '<i class="fa-solid fa-trash fas"></i>' + '</li>'
  );
});
$('ol').on('click', '.fas', function () {
  $(this).parent().hide();
});

// chart section
window.onload = function () {
  var option = {
    title: {
      text: 'bar chart last 10 years',
    },
    axisY: {
      title: 'yearly value poarsent %',
    },
    axisX: {
      title: 'year with month',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'january 2010', y: 60 },
          { label: 'january 2011', y: 90 },
          { label: 'january 2012', y: 80 },
          { label: 'january 2013', y: 60 },
          { label: 'january 2014', y: 20 },
          { label: 'january 2015', y: 100 },
          { label: 'january 2016', y: 80 },
        ],
      },
    ],
  };
  $('#barchartContainer').CanvasJSChart(option);
};

// count section
$('.count').counterUp({
  time: 1000,
  delay: 10
});

// carousel section
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplayTimeout: 1000,
  autoplay: true,
  padding: 10,
  margin: 10,
  autoplayHoverPause: true,
  animateOut: 'slideOutUp',
  animateIn: "slideInUp",
  responsive: {
    0: {
      items: 1
    },
    700: {
      items: 3
    },
    1100: {
      items: 4
    }
  }
});

// animation section 
// part one
$('.part-one').waypoint(function () {
  $('.part-one').addClass('animated fadeInLeft');
}, { offset: '50%' });
// part two
$('.part-two').waypoint(
  function () {
    $('.part-two').addClass('animated fadeInDownBig');
  },
  { offset: '50%' }
);
// part three
$('.part-three').waypoint(
  function () {
    $('.part-three').addClass('animated fadeInRight');
  },
  { offset: '50%' }
);
// barchates
  $('.barchates').waypoint(
    function () {
      $('.barchates').addClass('animated fadeInRight');
    },
    { offset: '50%' }
);
// barchat-one
$('.barchat-one').waypoint(
  function () {
    $('.barchat-one').addClass('animated fadeInUpBig');
  },
  { offset: '50%' }
);

