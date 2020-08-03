// ===================================== Our services =========================================

const $ourServicesButton = $('.tabs-title');
const $tabs = $('.tabs-content li[data-tab]');

$ourServicesButton.on('click', function () {
    const serviceTabIndex = $(this).index();
    $ourServicesButton.removeClass('active');
    $(this).addClass('active');
    $tabs.each(function (index) {
        if (index === serviceTabIndex) {
            $tabs.eq(index).css({'display': 'flex'});
        } else {
            $tabs.eq(index).css({'display': 'none'});
        }
    })
});
//----------------------- Button Add More ----------------------------------------

const $loadMoreImages = $('.example-load-button');
const $cubeLoader = $('#cube-loader');
const $cardHolder = $('.card-content-block');
const $blockOfButtons = $('.block-of-buttons');
$loadMoreImages.on('click', function () {
    if ($cardHolder.hasClass('.button-used') === true) {
        console.log($cardHolder);
        $loadMoreImages.css({'opacity': '0'});
        $cubeLoader.css({'display': 'initial'});
        setTimeout(function () {
            $cardHolder.css({'max-height': '1854px'});
            $cubeLoader.css({'display': 'none'});
            $loadMoreImages.css({'display': 'none'});
            $blockOfButtons.css({'display': 'none'});
        }, 2000);
    } else if ($cardHolder.hasClass('button-used') === false) {
        $loadMoreImages.css({'opacity': '0'});
        $cubeLoader.css({'display': 'initial'});
        setTimeout(function () {
            $cardHolder.addClass('.button-used');
            $cardHolder.css({'max-height': '1236px'});
            $cubeLoader.css({'display': 'none'});
            $loadMoreImages.css({'opacity': '1'});
        }, 2000);
    }
});

//----------------------------------------------------------------------------------
// ===================================== Our Amazing =========================================

const $amazingButton = $('.example-style-buttons');
let $ourAmazingWrapper = $('.card-content-block figure');
$amazingButton.on('click', function () {
    let selectedItem = $(this).data().name;
    console.log(selectedItem);
    $amazingButton.removeClass('active-example-button');
    $(this).addClass('active-example-button');
    if (selectedItem !== 'ALL') {
        $ourAmazingWrapper.not(`[data-type-name="${selectedItem}"]`).css({'display': 'none'});
        $(`figure[data-type-name='${selectedItem}']`).css({'display': 'flex'});
    } else {
        $ourAmazingWrapper.css({'display': 'flex'});
    }
});

//======================================== Slider ===================================

$('.top-slider-block').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.switcher-block',
    fade: true,
    variableWidth: true,
    infinite: true,
});


$('.switcher-block').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    draggable: false,
    asNavFor: '.top-slider-block',
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    variableWidth: true,
});

