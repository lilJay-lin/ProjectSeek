/**
 * Created by linxiaojie on 2015/12/4.
 */
var View = require('./view'),
    request = require('./request'),
    _template = require('./tpl/order.html'),
    Events = require('./event'),
    GlobalEvent = require('./global.event');
/*
* 20160504领取0元包，提示"暂时无法订购哟"
*/
var Toast = require('./toast');
var toast = new Toast({
    el: document.body
});
var OrderDialog= View.extends({
    template: _template,
    events: {
        'click .cancel': 'cancel',
        'click .btn': 'order'
    },
    cancel: function(e){
        e.preventDefault();
        this.$orderSuccess.hide();
        this.$order.hide();
    },

    order: function(e){
        e.preventDefault();
        var me = this;
        var url = this.model.order;
        /*
         * 20160504领取0元包，提示"暂时无法订购哟"
         */
        if(1){
            toast.show('暂时无法订购哟');
            return ;
        }
        if(me.$orderBtn.data('lock') == 'lock'){
            return ;
        }
        request.post(url)
            .done(function(res){
                if(res.retcode == '0'){
                    me.$order.hide();
                    me.$orderSuccess.show();
                    setTimeout(function(){
                        me.$orderSuccess.hide();
                        Events.trigger(GlobalEvent.order.success, [res]);
                    }, 2000);
                }else{
                    Events.trigger(GlobalEvent.order.success, [res]);
                }
            }).fail(function(xml, status){
                Events.trigger(GlobalEvent.order.error, [xml, status]);
            }).always(function(){
                me.$orderBtn.data('lock', '');
            });
    },
    urlEncode: function(param, key, encode) {
        if(param==null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
        } else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += this.urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    },
    init: function(){
        var me = this;
        me.render();
        me.$order = me.$('.js-order');
        me.$orderSuccess = me.$('.js-order-success');
        me.$orderBtn = me.$(".btn");
    },
    render: function(){
        var me = this;
        if(!!me.$order && me.$order.length > 0){
            return;
        }
        me.$el.html(me.template({}));
    },
    show: function(){
        this.$order.show();
    },
    setup: function(opts){
        this.model = $.extend({}, opts);
        this.on();
    },
    on: function(){
        var model = this.model;
        this.off();
        var success = typeof model.success == 'function' ? model.success : function(){};
        var error = typeof model.error == 'function' ? model.error : function(){};
        Events.on(GlobalEvent.order.success, success);
        Events.on(GlobalEvent.order.error, error);
    },
    off: function(){
        Events.off('order');
    }
});

module.exports = OrderDialog;