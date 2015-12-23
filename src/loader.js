/**
 * Created by linxiaojie on 2015/12/15.
 */
function Loader(opts){
    this.isLoading = !1;
    this.url = opts.url || '';
    this.$el = $(opts.el || 'div');
    this.$cnt = opts.cnt ? $(opts.cnt) : this.$el;
    this.init();
    this.disable = opts.disable || !1;
    this.curPage = parseInt(opts.curPage || 1, 10);
    this.totalPage = parseInt(opts.totalPage || 1, 10);
    this.totalRows = parseInt(opts.totalRows || 13, 10);
    this.event = $({});
}

Loader.prototype = {
    load : function(){
        var me = this,
            curPage = me.curPage;
        curPage++;
        if(curPage > me.totalPage || me.isLoading){
            return ;
        }
        me.isLoading = 1;
        var url = me.url ;
        url += (url.indexOf('?') > -1 ? '&' : '?' ) + 'currentPage=' + curPage + '&totalRows=' + me.totalRows;
        $.ajax({
            url: url,
            method: 'GET',
            /* timeout: 5000, //请求超时，看平台需不要设就设吧*/
            cache: false
        }).done(function(res){
            /*
             此处把取到的模板spend到指定节点 $cnt
             */
            me.$cnt.append(res);
            me.curPage = curPage;
            me.event.trigger('loader.loaded');
        }).fail(function(xml){
            me.event.trigger('loader.error');
        }).always(function(){
            me.isLoading = !1;
            me.event.trigger('loader.always');
        })
    },
    init: function(){
        var me = this,
            $el = me.$el,
            el = me.$el[0];
        $el.on("scroll", function(){
            if(me.disable ||me.isLoading || me.curPage == me.totalPage){
                return;
            };
            var scrollHeight = el.scrollHeight,
                height = $el.height(),
                scrollTop = el.scrollTop;
            if(scrollTop + height + 50 > scrollHeight){
                me.load();
            }
        })
    },
    setDisabled: function(disable){
        this.disable = !!disable;
    },
    on: function(){
        this.event.on.apply(this.event, [].slice.call(arguments));
    }
};