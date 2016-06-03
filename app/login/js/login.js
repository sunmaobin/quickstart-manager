/**
 * =================================================================
 * 登录业务模块
 * @Author Night
 * @Date 2016年6月1日
 * =================================================================
 */

/**
 * 执行avalon初始化扩展
 */
require(['extend.avalon','config'], function (ae,config) {
    //avalon nav model
    var model = config.model.nav;

    //隐藏header 右侧的nav操作按钮
    model.app.home = false;
});

/**
 * login页面业务处理
 */
require(['config','jquery','extend.jquery','bootbox','valid.form','util.storage'], function(config,$,je,bb,valid,cache) {
    //提交数据
    $("#btn-login").click(function () {
        $('#frm-login').bootstrapValidator('validate');
    });

    //验证表单并成功后
    validForm(function () {
        //Ajax提交后台
        //获取返回数据写入localStorage
        //跳转到首页

        var userName = $("#frm-login").getFrmData().userName;

        //演示使用的逻辑，实际callback需要Ajax回调处理。
        bb.alert({
            title : '温馨提示',
            message : '恭喜你「'+userName+'」，登录成功.',
            callback : function(){
                var user = {
                    userName : userName
                };
                cache.setItem(config.keys.keyUser,JSON.stringify(user));
                cache.setItem(config.keys.keyToken,"A2232CSAFDF3423SDADFSDFAFDSA");

                location.href = "./#!/main/home";
            }
        });
    });
});

/**
 * 表单验证
 */
var validForm = function (callback) {
    $("#frm-login").bootstrapValidator({
        message: 'This value is not valid',
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }
            },
            passWord: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        e.preventDefault();
        callback && callback();
    });
};
