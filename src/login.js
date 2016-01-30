/**
 * Created by linxiaojie on 2015/12/4.
 */

var View = require('./view'),
    request = require('./request'),
    _template = require('./tpl/login.html'),
    Events = require('./event'),
    GlobalEvent = require('./global.event');

var LoginDialog = View.extends({
    template: _template,
    events: {
        'click .login-close': 'closeLogin',
        'click .login-cancel': 'closeLogin',
        'touchstart .send-psw': 'sendSmsValidate',
        'click .login-submit': 'submit'
    },
    submit: function(e){
        e.preventDefault();
        var me = this;
        if(!!me.$submit.attr("disabled")){
            return false;
        }
        if(me.checkLoginName() && me.checkSmsValidate()){
            var sessionId = me.$session.val();
            if(sessionId == ''){
                me.$psw.val('');
                me.$errorMsg.text('请重新获取验证码');
                return false;
            }else{
                var receive = me.$orderCheck.is(":checked") ? 1 : 0, text='', flag = false,
                    loginName = me.$phonenum.val(),
                    smsvalidate = me.$psw.val();
                console.log(smsvalidate + '  ' + loginName + ' ' + receive);
                request.post(
                    this.model.login,
                    {
                        "receive": receive,
                        "msisdn" : loginName,
                        "smsvalidate":smsvalidate,
                        "sessionid":sessionId,
                        "authtype":'DS'
                    }
                ).done(function(result){
                        Events.trigger(GlobalEvent.login.logincb, [result]);
                        if(result !=null ){
                            var resultcode = result.resultcode;
                            if(resultcode=="104000"){
                                //var passid = result.usessionid;
                                if(me.model.isAlert){
                                    me.$maskLoginSuccess.show();
                                    setTimeout(function(){
                                        me.$maskLoginSuccess.hide();
                                        Events.trigger(GlobalEvent.login.success, [loginName]);
                                    }, 2000);
                                }else{
                                    Events.trigger(GlobalEvent.login.success, [loginName]);
                                }
                                me.$maskLogin.hide();
                                flag = true;
                            }else if(resultcode=="104209"){
                                text = "短信验证码错误或已失效";
                            }else{
                                text = "请获取短信验证码并填写";
                            }
                        }else{
                            text = "请获取短信验证码并填写";
                        }

                }).fail(function(xml, status){
                        text = "登录失败";
                    console.log("登录失败: " + status);
                        Events.trigger(GlobalEvent.login.error, [xml, status]);
                }).always(function(){
                    me.$errorMsg.text(text);
                    me.$psw.val('');
                    me.$submit.attr("disabled", "disabled");
                    !flag && (me.$submit.removeAttr("disabled"), 1);
                });

            }
            return false;
        }
        return false;
    },
    order: function(){

    },
    closeLogin: function(e){
        e.preventDefault();
        this.$maskLogin.hide();
        return false;
    },
    checkLoginName: function(){
        var me = this, flag = 1, val, regex =/^1[3458]{1}[0-9]{9}$/, text="";
        val = me.$phonenum.val();
        if(val!=''){
            if(val.length<11){
                text = "请输入11位手机号码";
                flag = 0;
            }else if(!regex.test(val)){
                text = "账号格式错误";
                flag = 0;
            }else{
                text = val;
                flag = 1;
            }
        }else{
            text = "账号不能为空";
            flag = 0;
        }
        !flag && (me.$phonenum.val(''),me.$phonenum.attr('placeholder', text));
        return flag;
    },
    /*
        获取短信验证码,id:用户账号id,
        bthid:发送验证码buttonid,
        businessid:验证码标识，1密码重置 2登录验证码 0注册账号

     */
    sendSmsValidate: function(e){
        var me = this, loginName, text ='';
        loginName = me.$phonenum.val();
        e.preventDefault();
        if(!!me.$sendSmsBtn.attr('disabled')){
            return ;
        }
        if(me.checkLoginName()){
            request.post(
                this.model.getVerificationCode,
                {
                    "msisdn" : loginName ,
                    "businessid": 2
                },
                $.proxy(me.setSmsTimeout, me)
            ).done(function(result){
                if(result!=null || result !=""){
                    var resultcode = result.resultcode;
                    if(resultcode=="104000"){
                        me.$session.val(result.sessionid);
                    }else if(resultcode=="104204"){
                        text = "用户已存在";
                    }else if(resultcode=="104222"){
                        text = "用户不存在";
                    }else{
                        text = "发送短信验证码失败";
                    }
                }else{
                    text = "发送短信验证码失败";
                }
                request.log(text);
            }).fail(function(jqXHR){
                    text = "发送短信验证码失败";
                    request.log("发送短信验证码失败");
                    request.log(jqXHR);
                me.clearSmsTimeout();//清除倒计时
            }).always(function(){
                me.$errorMsg.text(text);
            })
        }
    },
    setSmsTimeout: function(){
        var flag = true, text = "发送验证码", me = this;
        me.seconds--;
        if ( me.seconds <= 0 ){
            flag = true;
            me.seconds = 60;
            me.clearSmsTimeout();
            me.smsEnable(flag, text);
        }else{
            flag = false;
            text = "重新发送(" + me.seconds + ")";
            me.smsTimeout = setTimeout(function() {
                me.setSmsTimeout() ;
            }, 1000);
            me.smsEnable(flag, text);
        }
    },
    clearSmsTimeout: function(){
        var me = this;
        me.smsEnable(true, "发送验证码");
        me.seconds = 60;
        clearTimeout(me.smsTimeout);
        //$(".smsValidate").text("");
    },
    smsEnable: function(flag, text){
        this.$sendSmsBtn.css({
            color: flag ? "#fff" : "#BDBDBD"
        }).text(text);

        flag ? this.$sendSmsBtn.removeAttr('disabled') :
            this.$sendSmsBtn.attr("disabled","disabled");
    },
    checkSmsValidate: function(){
        var me = this,
            val = me.$psw.val(),
            text = "", flag = true, regex = /^\d*$/;
        if(val!='' ){
            if(val.length<6 || !regex.test(val)){
                text = "验证码格式错误";
                flag = false;
            }else{
                text = val;
                flag = true;
            }
        }else{
            text = "验证码不能为空";
            flag = false;
        }
        //me.$psw.attr('placeholder', text);
        !flag && (me.$psw.val(''),me.$psw.attr('placeholder', text));
        return flag;
    },
    init: function(){
        var me = this;
        me.render();
        me.$el.html(me.template({}));
        me.$maskLogin = me.$('.js-mask-login');
        me.$maskLoginSuccess = me.$('.js-mask-success');
        me.$phonenum = me.$('.phonenum');
        me.$psw = me.$('.psw');
        me.$session = me.$('.js-sessionid');
        me.$sendSmsBtn = me.$('.send-psw');
        me.$submit = me.$('.login-submit');
        me.$orderCheck = me.$('.free-gif-checkbox');
        me.$errorMsg = me.$('.login-error-msg');
        me.seconds = 60;
    },
    render: function(){
        var me = this;
        if(!!me.$maskLogin && me.$maskLogin.length > 0){
            return ;
        }

    },
    show: function(){
        this.$maskLogin.show();
    },
    /*opts{
        isLogin: '', //判断是否登录: 返回 'true' or 'false' 插件自动判断调用登录弹窗
            // login: '', //请求登录
            getVerificationCode: '', //发送验证码
     isAlert,1
        success: function(res){}, //ajax请求成功回调函数
        error: function(){}, //ajax请求失败回调函数
    }*/
    setup: function(opts){
        this.model = $.extend({}, opts);
        this.on();
    },
    on: function(){
        var model = this.model;
        this.off();
        var success = typeof model.success == 'function' ? model.success : function(){};
        var error = typeof model.error == 'function' ? model.error : function(){};
        var logincb = typeof model.logincb == 'function' ? model.logincb : function(){};
        Events.on(GlobalEvent.login.success, success);
        Events.on(GlobalEvent.login.error, error);
        Events.on(GlobalEvent.login.logincb, logincb);
    },
    off: function(){
        Events.off('login');
    }
});

module.exports = LoginDialog;