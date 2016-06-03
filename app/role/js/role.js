/**
 * =================================================================
 * 角色业务模块
 * @Author Night
 * @Date 2016年6月2日
 * =================================================================
 */
define(['jquery','bootbox'],function($,bb){
	var App = function () {
		
	};

	App.prototype = {
		init : function(){
			bb.alert({
				title : '系统说明',
				message : '角色业务逻辑在自己的js中实现.'
			});
		}
	};

	return new App();
});