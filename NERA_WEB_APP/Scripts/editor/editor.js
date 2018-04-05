$(document).ready(function () {
    var editor = CKEDITOR.replace('Item_Content',
        {

            customConfig: '/Scripts/Controller/BaiViet/ckeditor/ckeditor.js',
            cloudServices_tokenUrl: '/Scripts/Controller/BaiViet/ckeditor/config.js',
        }, {

            htmlEncodeOutput: true
        });
   
})
    