window.addEventListener('load', function(){
    new Glider(document.querySelector('.miniCarousel-lista'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.miniCarousel-anterior',
            next: '.miniCarousel-siguiente'
        },
        //Diseño Responsive para esta librería
        responsive: [
			{
			  // A partir de 450px
			  breakpoint: 450,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},{
			  // A partir de 800px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1
			  }
			},
		]
    });
});