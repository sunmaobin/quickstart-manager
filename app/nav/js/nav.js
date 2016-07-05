/**
 * =================================================================
 * 处理导航操作
 * @Author Night
 * @Date 2016年6月2日
 * =================================================================
 */

define(['config','ejs','bootstrap','bootbox','util.storage'], function (config,ejs,bs,bb,cache) {
    var Nav = function () {
        this.userInfo = JSON.parse(cache.getItem(config.keys.keyUser));
        this.tplDir = "app/nav/tpl/";
    };

    Nav.prototype = {
        getUserInfo: function () {
            var tpl = new EJS({url:this.tplDir+'user_info.ejs'}).render(this.userInfo);
            bb.alert({
                title: '用户信息',
                message: tpl
            });
        },
        changePwd: function () {
            var tpl = new EJS({url:this.tplDir+'change_passwd.ejs'}).render();
            bb.alert({
                title: '修改密码',
                message: tpl,
                callback : function(){
                    bb.alert({
                        title : '恭喜你',
                        message : '密码修改成功.'
                    });
                }
            });
        },
        logout : function () {
            bb.confirm({
                title : '温馨提示',
                message : '确定退出系统？',
                callback : function (result) {
                    if(result){
                        //TODO:处理退出逻辑
                        //清空缓存并重定向到登录页
                        cache.removeItem(config.keys.keyToken);
                        location.href = "./login.html";
                    }
                }
            });
        }
    };

    return new Nav();
});