/**
 * =================================================================
 * 首页业务模块
 * @Author Night
 * @Date 2016年6月2日
 * =================================================================
 */

/**
 * 执行avalon初始化扩展
 */
require(['extend.avalon']);

/**
 * 初始化主页内容
 */
require(['config','jquery','bootstrap','bootbox','app/nav/js/nav','ejs','util.storage'], function (config,$,bs,bb,nav,ejs,cache) {
    //avalon nav model
    var model = config.model.nav;

    //显示header 右侧的nav操作按钮
    model.app = {
        home : true,
        user : JSON.parse(cache.getItem(config.keys.keyUser))
    };

    //菜单事件
    $(document).on("click","#btn-nav",function (e) {
        switch($(e.target).data('action')){
            case 'info' :
                nav.getUserInfo();
                break;
            case 'passwd' :
                nav.changePwd();
                break;
            case 'logout' :
                nav.logout();
                break;
            default :

        }
    });
});
