$(function () {
  $(".services__slider").slick({
    arrows: true,
    dots: true,
    dotsClass: "services-dots",
    prevArrow: '<button type="button" class="slick-btn slick-btn-services slick-prev-services"><img src="images/arrow-left.svg" alt=" "></button>',
    nextArrow: '<button type="button" class="slick-btn slick-btn-services slick-next-services"><img src="images/arrow-right.svg" alt=" "></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $("#file").on("change", function () {
    $(".file-span").text(this.files[0].name);
  });

  $(".works__slider").slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-btn-work slick-prev-work"><img src="images/arrow-left.svg" alt=" "></button>',
    nextArrow: '<button type="button" class="slick-btn slick-btn-work slick-next-work"><img src="images/arrow-right.svg" alt=" "></button>',
    fade: true,
    dotsClass: "works-dots",
    draggable: false,
    autoplaySpeed: 10000,
    autoplay: true,
    swipe: true,
  });

  $(".works__slider-image").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    fixedContentPos: true,
    mainClass: "mfp-img-mobile mfp-with-zoom",
    image: {
      verticalFit: true,
    },
  });

  $(".services__item-button").on("click", function (e) {
    e.preventDefault();
  });

  $(".services__item-button").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#username",
    modal: true,
    fixedContentPos: true,
  });

  $(".popup-modal-dismiss").on("click", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  $(".phone").mask("+7 (999) 999 99 99");

  $("#form1").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните поле!",
      },
      phone: {
        required: "Заполните поле!",
      },
    },
    submitHandler: function () {
      alert("Спасибо, форма успешно отправлена!");
      form.submit();
    },
  });
  $("#form2").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните поле!",
      },
      phone: {
        required: "Заполните поле!",
      },
    },
    submitHandler: function () {
      alert("Спасибо, форма успешно отправлена!");
      form.submit();
    },
  });
  $("#form3").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните поле!",
      },
      phone: {
        required: "Заполните поле!",
      },
    },
    submitHandler: function () {
      alert("Спасибо, форма успешно отправлена!");
      form.submit();
    },
  });
  $("#form4").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните поле!",
      },
      phone: {
        required: "Заполните поле!",
      },
    },
    submitHandler: function () {
      alert("Спасибо, форма успешно отправлена!");
      form.submit();
    },
  });
});
