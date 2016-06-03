/**
 * =================================================================
 * 业务配置
 * @Author Night
 * @Date 2016年6月2日
 * =================================================================
 */

define([],function () {
    var Config = function () {

    };

    Config.prototype = {
        model : {
            article : avalon.define({
                $id : 'article',
                main : "",
                login: "app/login/page/login.html",
                header : "app/common/page/header.html",
                footer : "app/common/page/footer.html"
            }),
            nav : avalon.define({
                $id : 'nav',
                app : {
                    home : false
                }
            })
        },
        keys : {
            keyToken : 'gd_data_token',
            keyUser : 'gd_data_user'
        }
    };

    return new Config();
});

