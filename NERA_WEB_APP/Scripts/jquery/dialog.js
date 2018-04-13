


// Dialog popup



$('.btn-link-login').click(function () {
    $('.box-dialog').addClass('box-dialog-keyframes');
    $('.box-dialog').removeClass('active-hide');
    $('#username').focus();

})

$('.btn-show-popup').click(function () {
    $('.popup-box').show().focus();
    $('.popup-box').addClass('box-dialog-keyframes');
    $('.popup-box').removeClass('active-hide');
    $('.txt-name').focus();
    $('.title-add').css("display", "block");
    $('.title-update').css("display", "none");
    $('.title-details').css("display", "none");
    $('.btn-update').css("display", "none");
    $('.btn-add').css("display", "block");
});


//$('.btn-add-pro').click(function () {
//    $('.select-category-sp').show();
//    $('.select-category-dv').hide();

//})
//$('.btn-add-service').click(function () {
//    $('.select-category-sp').hide();
//    $('.select-category-dv').show();
//})




$('.btn-details').click(function () {
    $('.popup-box').addClass('box-dialog-keyframes');
    $('.popup-box').removeClass('active-hide');
    $('.item').attr('disabled', true);
    $('.btn-add').css("display", "none");
    $('.btn-update').css("display", "none");

});

$('.btn-edit').click(function () {
    $('.popup-box').addClass('box-dialog-keyframes');
    $('.popup-box').removeClass('active-hide');
});


$('#btn-close').click(function () {
    $('.box-dialog').addClass('active-hide');
    $('.box-dialog').removeClass('box-dialog-keyframes');

})


$('.btn-close-popup').click(function () {
    $('.popup-box').hide();
    $('.popup-box').removeClass('box-dialog-keyframes');
    $('.popup-box').addClass('active-hide');
    $('.btn-add').css("display", "block");
    $('.btn-update').css("display", "block");
    $('.item').attr('disabled', false);
})


// hiện form thêm
$('.btn-add-data').click(function () {
    $('.tr-add-data').show();
    $('.tr-add-data td input.name').focus();
})



// Chatbox

$('.action-box span').click(function () {
    $('.message-box').toggle(200);
});
