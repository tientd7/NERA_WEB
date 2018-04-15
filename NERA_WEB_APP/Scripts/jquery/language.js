$('.country-vietnam').click(function () {
    $('.selected-vn').show();
    $('.selected-en').hide();
    $('.flag').css("background", "url('../../Media/images/flags/vietnam.svg') no-repeat center");

});
$('.country-england').click(function () {
    $('.selected-en').show();
    $('.selected-vn').hide();
    $('.flag').css("background", "url('../../Media/images/flags/united-kingdom.svg') no-repeat center");

});