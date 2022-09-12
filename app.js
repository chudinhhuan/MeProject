// var index = 0;

// function changeImage() {
//     var imgs = ['./IMG/slide1.jpg', './IMG/slide2.jpg'];
//     document.querySelector('.slider__img-feature').src = imgs[index];
//     index++;
//     if (index == imgs.length) {
//         index = 0;
//     }
//     // setTimeout(() => {}, 500);
//     // setInterval(changeImage, 3000);
// }

// var imgFeature = document.querySelector('.slider__img-feature');
// var slider_main = document.querySelector('.slider__main')
// index = 0;

// slider_main.addEventListener('click', () => {
//     var imgs = ['./IMG/slide1.jpg', './IMG/slide2.jpg'];
//     // imgFeature.src = imgs[index];
//     // index++;
//     imgFeature.src = imgs[index];
//     index++;
//     if (index == imgs.length) {
//         index = 0;
//     }

// })
var imgFeature = document.querySelector('.slider__img-feature');
var imgs = ['./IMG/slide1.jpg', './IMG/slide2.jpg', './IMG/slide3.jpg'];
var index = 0;

var btnPrev = document.querySelector('.prev');
btnPrev.addEventListener('click', () => {
    imgFeature.src = imgs[index];
    index++;
    if (index == imgs.length) {
        index = 0;
    }

});
var btnNext = document.querySelector('.next');
btnNext.addEventListener('click', () => {
    imgFeature.src = imgs[index];
    index++;
    if (index == imgs.length) {
        index = 0;
    }

});


// Slick Slider
$(document).ready(function() {
    // $('.filtering').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     speed: 400,
    //     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    //     nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

    // });

    // var filtered = false;

    // $('.js-filter').on('click', function() {
    //     if (filtered === false) {
    //         $('.filtering').slick('slickFilter', ':even');
    //         $(this).text('Unfilter Slides');
    //         filtered = true;
    //     } else {
    //         $('.filtering').slick('slickUnfilter');
    //         $(this).text('Filter Slides');
    //         filtered = false;
    //     }
    // });

    // API render

    var mockData = [{
            "id": 1,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 15000,
            "image": "https://product.hstatic.net/200000182297/product/249_323bafa27d0c435d960212218167f16d_1024x1024.jpg",
            "updated_at": "2021-10-05 08:30:00",
            "category_name": "Apple"
        }, {
            "id": 2,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/265_c1604c61c8c04b9e9bb3b18525aa113b_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        }, {
            "id": 3,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/262_086de97bc977465e889a5fbfb422ca0b_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 4,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/1_9e23be8b318b4aa1ab8826f99bb2587f_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 5,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/153_462776ef3ba44955b058d28ba7f475f4_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 6,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/66_61ac158250924ed6ae0406b62a04144a_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 6,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/17_e95e953f1ea74d629338dc542fdfaf47_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 6,
            "title": "ĐẦM CAM TAY BỒNG D05752",
            "price": 799000,
            "discount": 20000,
            "image": "https://product.hstatic.net/200000182297/product/16_5c2da9966dd64a29bbbd9e067a9cb627_1024x1024.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        }
    ]
    var mockData1 = [{
            "id": 1,
            "title": "KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2022",
            "price": 799000,
            "discount": 15000,
            "image": "https://file.hstatic.net/200000182297/article/270790785_2325991570872064_3732375015176452639_n_e0a8a768f6494c68b29ffde935fec684_large.jpg",
            "updated_at": "2021-10-05 08:30:00",
            "category_name": "Apple"
        }, {
            "id": 2,
            "title": "KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2022",
            "price": 799000,
            "discount": 20000,
            "image": "https://file.hstatic.net/200000182297/article/3_c0345a836a13415c8944298911671558_large.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        }, {
            "id": 3,
            "title": "KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2022",
            "price": 799000,
            "discount": 20000,
            "image": "https://file.hstatic.net/200000182297/article/4_c4cfc40daa084a449789de3e4dfa9b98_large.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 4,
            "title": "KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2022",
            "price": 799000,
            "discount": 20000,
            "image": "https://file.hstatic.net/200000182297/article/285634743_2457803104357576_4449744498852558662_n_a415bf75ede64fc997cbc67f348f8153_large.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },
        {
            "id": 5,
            "title": "KHÁM PHÁ 4 HỌA TIẾT ĐANG THỐNG LĨNH HÈ 2022",
            "price": 799000,
            "discount": 20000,
            "image": "https://file.hstatic.net/200000182297/article/web_6fb6ad7b835f456aba636f2a29c0eaf8_large.jpg",
            "updated_at": "2021-10-02 08:30:00",
            "category_name": "Apple"
        },

    ]
    var filtering1 = document.querySelector('.filtering1')
    mockData.forEach(item => {
        var container_item = document.createElement('div')
        container_item.classList.add('item')
        container_item.innerHTML = `
                    <div class="item_img">
                        <img src="${item.image}" alt="">
                        <div class="overlay">
                        </div>
                    </div>
                    <div class="item_title">
                        <a href="">${item.title}</a>
                    </div>
                    <div class="item_price">
                        <span>${item.price}đ</span>
                    </div>
                    
                `
        filtering1.appendChild(container_item)


    })
    var filtering2 = document.querySelector('.filtering2')
    mockData.forEach(item => {
        var container_item = document.createElement('div')
        container_item.classList.add('item')
        container_item.innerHTML = `
                
                <div class="item_img">
                <img src="${item.image}" alt="">
                <div class="overlay">
                </div>
            </div>
            <div class="item_title">
                <a href="">${item.title}</a>
            </div>
            <div class="item_price">
                <span>${item.price}đ</span>
            </div>
                    
                `
        filtering2.appendChild(container_item)


    })
    var filtering3 = document.querySelector('.filtering3')
    mockData1.forEach(item => {
        var container_item = document.createElement('div')
        container_item.classList.add('item')
        container_item.innerHTML = `
                
                <div class="item_img">
                <img src="${item.image}" alt="">
                <div class="overlay">
                </div>
            </div>
            <div class="item_title">
                <a href="">${item.title}</a>
            </div>
            
                `
        filtering3.appendChild(container_item)


    })






    // var mockData = fetch('https://fakestoreapi.com/products')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data => {


    //         console.log(data)
    //         var filtering = document.querySelector('.filtering')

    //         data.forEach(item => {
    //             var container_item = document.createElement('div')
    //             container_item.classList.add('item')
    //             container_item.innerHTML = `

    //                 <div class="item_img">
    //                     <img src="${item.image}" alt="">
    //                 </div>
    //                 <div class="item_title">
    //                     <a href="">${item.title}</a>
    //                 </div>
    //                 <div class="item_price">
    //                     <span>${item.price}đ</span>
    //                 </div>

    //             `
    //             filtering.appendChild(container_item)
    //         })

    //     })







    $('.filtering1').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.filtering2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.filtering3').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
})