


// Dialog popup


$('#btn-close').click(function () {
    $('.box-dialog').addClass('active-hide');
    $('.box-dialog').removeClass('box-dialog-keyframes');
})

$('.btn-link-login').click(function () {
    $('.box-dialog').addClass('box-dialog-keyframes');
    $('.box-dialog').removeClass('active-hide');
})



// Chatbox

    $('.action-box span').click(function () {
        $('.message-box').toggle(200);
    });
