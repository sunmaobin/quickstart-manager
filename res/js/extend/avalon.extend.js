/**
 * =================================================================
 * Avalon扩展类
 * @Author Night
 * @Date 2016年6月2日
 * =================================================================
 */
require(['mmHistory','mmRouter','config'], function(his,router,config) {
    //avalon article model
    var model = config.model.article;

    //如果是登录页面，则不做任何操作
    if(location.pathname.indexOf("login.html") > -1){
        //启动avalon
        avalon.scan();

        return false;
    };

    //劫持url hash并触发回调
    avalon.router.get("/*path", function () {
        var page = 'app/main/page/home.html';
        
        //匹配如：/main/home 格式
        if(/\/(\w)*\/(\w)/.test(this.path)){
            var param = this.path.split('/');
            page = 'app/' + param[1] + '/page/' + param[2] + '.html';
        };

        model.main = page;
    });

    //启动回退键监听
    avalon.history.start();

    //启动avalon
    avalon.scan();
});
