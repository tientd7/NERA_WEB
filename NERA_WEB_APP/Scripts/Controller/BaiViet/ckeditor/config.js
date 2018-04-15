/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.config.autoParagraph = true;
CKEDITOR.editorConfig = function (config) {
    config.language = 'en';
    
    //config.enterMode = CKEDITOR.ENTER_BR;
    //config.shiftEnterMode = CKEDITOR.ENTER_P
    //config.autoParagraph = false; // stops automatic insertion of <p> on focus
    config.filebrowserBrowseUrl = '../Scripts/Controller/BaiViet/ckfinder/ckfinder.html?type=Files';
    config.filebrowserImageBrowseUrl = '/Scripts/Controller/BaiViet/ckfinder/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = '/Scripts/Controller/BaiViet/ckfinder/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl = '/Scripts/Controller/BaiViet/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = '/Scripts/Controller/BaiViet/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = '/Scripts/Controller/BaiViet/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    //CKFinder.setupCKEDitor(null, 'Scripts/Controller/BaiViet/ckfinder/')
};
