/**
 * =================================================================
 * 前端存储工具类
 * @Author Night
 * @Date 2016年6月3日
 * =================================================================
 */

define(['config'], function (config) {
    var Storage = function () {
        this.keys = config.keys;
    };

    Storage.prototype = {
        setItem : function (key,obj) {
            localStorage.setItem(key,obj);
        },
        getItem : function (key) {
            return localStorage.getItem(key);
        },
        removeItem : function(key){
            localStorage.removeItem(key);
        }
    };

    //单例工厂，确保工具类全局唯一
    var StorageFactory = (function () {
        var storage;
        return {
            getStorage : function(){
                if(!storage){
                    storage = new Storage();
                };
                return storage;
            }
        }
    })();

    return StorageFactory.getStorage();
});