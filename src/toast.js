/**
 * Created by linxiaojie on 2015/12/15.
 */
var View = require('./view'),
    _template = require('./tpl/toast.html');

var Toast = View.extends({
    template: _template,
    render: function($Toast){
      this.$el.append($Toast);
    },
    show: function(msg){
        var me = this,
            color = me.options.color || '#fff',
            background = me.options.background || 'rgba(0, 0, 0, 0.8)';
        var $Toast = $(this.template(this.model));
        me.render($Toast);
        $Toast.text(msg);
        $Toast.css({
            'opacity': '1',
            'display': 'block',
            'top': '40%',
            'left': '50%',
            'background': background,
            'color': color,
            'margin-left': - ($Toast.width() + 20) / 2  + 'px'
        });
        me.hide($Toast);
        return me;
    },
    hide: function($Toast){
        var me = this,
            d = me.options.duration || 1500;
        setTimeout(function(){
            $Toast.animate({
                opacity: 0
            }, 1000, function(){
                $Toast.remove();
            });
        }, d);
    }
});

module.exports = Toast;