/**
 * =================================================================
 * jQuery的扩展类
 * @Author Night
 * @Date 2016年6月1日
 * =================================================================
 */

require(["jquery"],function ($) {

    /**
     * 序列化表单并返回
     */
    $.fn.getFrmData = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [ o[this.name] ];
                };
                o[this.name].push(this.value);
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }
});