/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
config.language = nv_sitelang;
CKEDITOR.editorConfig = function (config) {
    config.enterMode = CKEDITOR.ENTER_BR;
	// Define changes to default configuration here. For example:
    // config.uiColor = '#AADC6E';
    config.filebrowserBrowseUrl = '/Scripts/Controller/BaiViet/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = 'Scripts/Controller/BaiViet/ckfinder/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = 'Scripts/Controller/BaiViet/ckfinder/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl = 'Scripts/Controller/BaiViet/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flies';
    config.filebrowserImageUploadUrl = 'images';
    config.filebrowserFlashUploadUrl = 'Scripts/Controller/BaiViet/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    CKFinder.setupCKEDitor(null, 'Scripts/Controller/BaiViet/ckfinder/')
    config.codeSnippet_theme = 'github';
};
