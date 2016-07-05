/**
 * =================================================================
 * Require 配置
 * @Author Night
 * @Date 2016年6月2日
 * =================================================================
 */
require.config({
    baseUrl: '.',
    urlArgs: 't=' + '20160601150955',
    waitSeconds: 60,
    paths: {
        'jquery': '//cdn.bootcss.com/jquery/1.12.4/jquery.min',
        'bootstrap' : 'lib/bootstrap/js/bootstrap.min',
        'bootbox' : 'lib/bootbox/bootbox.min',
        'ejs' : 'lib/ejs/ejs.min',
        'extend.jquery': 'res/js/extend/jquery.extend',
        'extend.avalon': 'res/js/extend/avalon.extend',
        'valid.form' : '//cdn.bootcss.com/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min',
        'util.storage' : 'res/js/util/storage.util',
        'mmHistory' : "lib/avalon/mmHistory",
        'mmRouter' : "lib/avalon/mmRouter",
        'config' : 'config/config-app', //系统配置
        'app' : 'app'//业务模块目录
    },
    shim: {
        'jquery': {
            exports: "jQuery"
        },
        'extend.jquery': [
            "jquery"
        ],
        'bootstrap': [
            "jquery"
        ],
        'ejs' : [

        ],
        'bootbox':[
            "jquery",
            "bootstrap"
        ],
        'valid.form' : [
            "bootstrap",
            "css!//cdn.bootcss.com/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css"
        ]
    }
});
