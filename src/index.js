/**
 * Created by linxiaojie on 2015/11/17.
 */
var event = require('./event');
var LoginDialog = require('./login'),
    OrderDialog = require('./order'),
    Toast = require('./toast'),
    request = require('./request'),
    GlobalEvent = require('./global.event');

require('./css/dialog.min.css');

$(function(){
    var loginDialog = new LoginDialog({
        el: '#loginDialog'
    });


    var orderDialog = new OrderDialog({
        el: '#orderDialog'
    });

    /*
        options{
            isLogin: '', 判断是否登录
            login: '', 请求登录
            getVerificationCode: '', 发送验证码
            isAlert: 1,//是否弹出成功提示 1是， 0 否,
            isLoginSuccess: function(){},
            success: function(res){}, ajax请求成功回调函数
            error: function(){}, ajax请求失败回调函数
        }
        1.如果已登录，不做任何处理
        2.未登录，弹出弹窗
        3.登录请求发送以下参数：{
             "receive": receive,
             "msisdn" : loginName,
             "smsvalidate":smsvalidate,
             "sessionid":sessionId,
             "authtype":'DS'
             }
        4.登录成功（ajax请求并且登录成功),回调success方法，传回loginName
        5.登录失败（ajax请求失败的时候调用，请求成功登录失败的信息已在登录框做了提示不做回调处理） ，回调error方法，传回xmlhttpRequest,status

     */
    window.requestLogin = function(options){
        var isLogin = !1;
        var opts = $.extend({}, {
            isLogin: '', //判断是否登录: 返回 'true' or 'false' 插件自动判断调用登录弹窗
             login: '', //请求登录
            isAlert: 1,
            getVerificationCode: '', //发送验证码
            isLoginSuccess: function(){},
            success: function(e, res){}, //ajax请求成功回调函数
            error: function(e, xml, status){} //ajax请求失败回调函数
        }, options);
        request.get(opts.isLogin)
            .done(function(res){
                isLogin = res.islogin == 'true' ? 1 : 0;
            }).always(function(){
                if(!isLogin){
                    loginDialog.setup(opts);
                    loginDialog.show();
                }else{
                    opts.isLoginSuccess();
                }
            });
    };

    /*
     options{
             order: '',
             success: function(res){}
             error: function(){}
         }
     */
    window.ajaxCall = function(options){
        var opts = $.extend({}, {
            url: '',
            success: function( res){},
            error: function(){}
        }, options);
        console.log(opts);

        request.get(opts.url).done(function(res){
            opts.success(res);
        }).fail(function(){
            opts.error();
        })
    };
    /*
        options{
            isOrder: 'https://10.12.3.221:12630/t.do?requestid=h5_query',//0：未领取，1已领取,2 鉴权失败
            order: 'https://10.12.3.221:12630/t.do?requestid=h5_order',
            success: function(e, res){} //免费领取请求成功回调 res为请求的json
            error: function(){}//免费领取请求失败回调
        }
     */
    window.requestOrder = function(options){
        var opts = $.extend({}, {
            isOrder: '',//0：未领取，1已领取,2 鉴权失败
            order: '',//发送订购请求
            isOrderSuccess: function(res){},//判断是否已领取的请求成功的回调(鉴权结果）
            success: function(e, res){}, //发送领取请求成功的回调
            error: function(e, xml, status){}
        }, options);
        var  isLogin = !1,isOrder = !1, errormessage = '';
        request.get(opts.isOrder)
            .done(function(res){
                isOrder = res.retcode;
                errormessage = res.errormessage || errormessage;
            }).always(function(){
                if(isOrder == '0' ){
                    orderDialog.setup(opts);
                    orderDialog.show();
                }
                opts.isOrderSuccess({retcode: isOrder, errormessage: errormessage});
            });
    };

    window.Toast = Toast;
});