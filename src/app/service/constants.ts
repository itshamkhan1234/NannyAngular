
export enum APITYPE {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete'
}

// Development Api Url
export const BASE_URL = 'https://attalla.com.au:3000/api/';

export const slickConfig = {
	infinite: true,
	draggable: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				centerPadding: "0px",
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				arrows: false,			
				centerPadding: "0px",
				slidesToShow: 1,
				slidesToScroll: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,				
				centerPadding: "0px",
				slidesToShow: 1,
				slidesToScroll: 3,
				dots: true,
			},
		},
	],
};