


// Dialog popup



$('.btn-link-login').click(function () {
    $('.box-dialog').addClass('box-dialog-keyframes');
    $('.box-dialog').removeClass('active-hide');
    $('#username').focus();

})

$('.btn-show-popup').click(function () {

    $('.popup-box').addClass('box-dialog-keyframes');
    $('.popup-box').removeClass('active-hide');
})


$('#btn-close').click(function () {
    $('.box-dialog').addClass('active-hide');
    $('.box-dialog').removeClass('box-dialog-keyframes');

})


$('.btn-close-popup').click(function () {
    $('.popup-box').removeClass('box-dialog-keyframes');
    $('.popup-box').addClass('active-hide');
})


// Chatbox

$('.action-box span').click(function () {
    $('.message-box').toggle(200);
});
