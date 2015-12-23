/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by linxiaojie on 2015/11/17.
	 */
	var event = __webpack_require__(1);
	var LoginDialog = __webpack_require__(2),
	    OrderDialog = __webpack_require__(11),
	    Toast = __webpack_require__(13),
	    request = __webpack_require__(5),
	    GlobalEvent = __webpack_require__(10);
	
	__webpack_require__(15);
	
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by linxiaojie on 2015/11/17.
	 */
	var o = $({}),
	    slice = [].slice;
	var event = {
	    on: function(){
	        o.on.apply(o, slice.call(arguments));
	    },
	    off: function(){
	        o.off.apply(o, slice.call(arguments));
	    },
	    trigger: function(){
	        o.trigger.apply(o, slice.call(arguments));
	    },
	    one: function() {
	        o.one.apply(o, slice.call(arguments));
	    }
	};
	
	
	module.exports = event;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by linxiaojie on 2015/12/4.
	 */
	
	var View = __webpack_require__(3),
	    request = __webpack_require__(5),
	    _template = __webpack_require__(6),
	    Events = __webpack_require__(1),
	    GlobalEvent = __webpack_require__(10);
	
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
	        Events.on(GlobalEvent.login.success, success);
	        Events.on(GlobalEvent.login.error, error);
	    },
	    off: function(){
	        Events.off('login');
	    }
	});
	
	module.exports = LoginDialog;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by linxiaojie on 2015/11/17.
	 */
	
	//var setOptions = ['configMap'];
	
	var _ = __webpack_require__(4);
	var View = function(options){
	    var me = this;
	    /*$.each(setOptions, function(option){
	        me[option] = options[option];
	    });*/
	    this.cid = _.uniqueId('c');
	    this.el = options['el'];
	    this.options = $.extend({}, this.options, options);
	    this.model = $.extend({}, this.model, options.model || {});
	    this._ensureElement();
	    this.init.apply(this, arguments);
	};
	var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	
	$.extend(View.prototype, {
	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    delegateEvents: function(events) {
	        if (!(events || (events = this.events))) return this;
	        //console.count('delegateEvents');
	        this.undelegateEvents();
	        for (var key in events) {
	            var method = events[key];
	            if (!$.isFunction(method)) method = this[events[key]];
	            if (!method) continue;
	            var match = key.match(delegateEventSplitter);
	            this.delegate(match[1], match[2], $.proxy(method, this));
	        }
	        return this;
	    },
	    delegate: function(eventName, selector, listener) {
	        this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	    },
	    _ensureElement: function() {
	        if (!this.el) {
	            this.setElement($('<div/>'));
	        } else {
	            this.setElement(this.el);
	        }
	    },
	    setElement: function(element) {
	        this.undelegateEvents();
	        this._setElement(element);
	        this.delegateEvents();
	        return this;
	    },
	    _setElement: function(el) {
	        this.$el = el instanceof $ ? el : $(el);
	        this.el = this.$el[0];
	    },
	    undelegateEvents: function() {
	        if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	        return this;
	    },
	    remove: function(){
	        this.undelegateEvents();
	        this.$el && this.$el.remove();
	        return this;
	    },
	    slice: function(cxt){
	        return [].slice.call(cxt);
	    },
	    $: function(el){
	        return this.$el.find(el);
	    },
	    init: function(){},
	    destroy: function(){}
	});
	
	/*
	   暂不做继承
	 */
	View.extends = function(protoProps, staticProps){
	    var parent = this;
	    var child = function(){
	        return parent.apply(this, arguments);
	    };
	
	    $.extend(child, parent, staticProps);
	
	    var Surrogate = function(){this.constructor = child};
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate();
	
	    if(protoProps){
	        $.extend(child.prototype, protoProps);
	    }
	
	    child.__super__ = parent.prototype;
	
	    return child;
	};
	/*$.extend(View.prototype, {
	    template: _
	    init: function(){},
	    destroy: function(){},
	    render: function(){},
	    addEvent: function(){}
	});*/
	
	module.exports = View;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by linxiaojie on 2015/11/17.
	 */
	
	var idCounter = 0;
	
	var _ = {};
	_.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	};
	
	
	
	module.exports = _;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by linxiaojie on 2015/11/17.
	 */
	
	/*
	    封装请求url和请求方法
	 */
	module.exports = {
	/*    login:{
	        isLogin: 'https://10.12.3.221:12630/t.do?requestid=check_login',
	        getVerificationCode: 'https://10.12.3.221:12630/t.do?requestid=getverificationcode',
	        login: 'https://10.12.3.221:12630/t.do?requestid=migupassportvalidate'
	    },*/
	/*    order: {
	        isOrder: 'https://10.12.3.221:12630/t.do?requestid=h5_query',
	        order: 'https://10.12.3.221:12630/t.do?requestid=h5_order'
	    },*/
	    get: function(url, data, beforeSend){
	        data = data == undefined ? null : data;
	        beforeSend = beforeSend == undefined ? function(){} : beforeSend;
	        return $.ajax({
	            url: url,
	            method: 'GET',
	            dataType: 'json',
	           // timeout: 5000, //请求超时，看平台需不要设就设吧
	            cache: false,
	            data: data,
	            beforeSend: beforeSend
	        });
	    },
	    post: function(url, data, beforeSend){
	        data = data == undefined ? null : data;
	        beforeSend = beforeSend == undefined ? function(){} : beforeSend;
	        return $.ajax({
	            url: url,
	            method: 'POST',
	            dataType: 'json',
	            cache: false,
	            data: data,
	            beforeSend: beforeSend
	        });
	    },
	    log: function(msg){
	        console.log(msg);
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(7);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"mask js-mask-login\" style=\"display: none\"><input type=\"hidden\" name=\"sessionid\" class=\"js-sessionid\"><div class=\"login-box\"><div class=\"login-header\"><a href=\"#\" class=\"login-close\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTE2NEUyN0U5NzQ1MTFFNUFBMEVERkM4NjNDMzA1NzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTE2NEUyN0Y5NzQ1MTFFNUFBMEVERkM4NjNDMzA1NzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMTY0RTI3Qzk3NDUxMUU1QUEwRURGQzg2M0MzMDU3NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMTY0RTI3RDk3NDUxMUU1QUEwRURGQzg2M0MzMDU3NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnX8aL8AAAGsSURBVHjaxNhLSgNBEAbgtlD3ZqngA4JHSMCFaI6gq6wU8Q7eJbjQlR5B8BFXWU28gIIRPECOYLXUwNBk+lU11Q1/SCYD8zH9Knqtqqq+MeYeM8DMMBeYhSnTmpY5Zgz4cYc5wqxjjjHvmP0CuEN6dm0ZYiZAX5ptrwDS4t4wO871IVC3moLINpxtMwu8xPwUQvpwX5hrC/zGnBZAhnDW9At0QRsZhbM/oPGHFjIa5wI1kEm4VcAukcm4NmAXyCycDyiJzMaFgBJIFi4GyEGycbHAHKQILgWYghTDpQJr5EkAKYbLARoqZn1IMVwuMIQUw3GAschPDo4LtG2TyvO2Nzfi4LhA32xlvzkuMIQbSeBygWo44xk/0rgtzDk97xGz7AKYi+thPmiNtO2GxudCsos53XrWwBnaDqPrSVAYcxucehIUJsQD7eFZSFCYrUu611dgHKQCpZeSUIExbUOC4jqXhQTlRTgZCQ5uqrBDJCHBwW1rbF8pSAvsK+NSkLv1EbA2LhZ5u+oIWAsXg/w/Ap4XxIWQlQWOMc+04j/RjZo4F/lCllfM1Z8AAwByds8vln2q4AAAAABJRU5ErkJggg==\" alt=\"\"></a><div class=\"login-logo\"><img src=\"/defaultSite/static/public/images/logo2.png\" alt=\"咪咕礼包\"></div><h2>用户注册登录</h2></div><div class=\"login-error-msg\"></div><input name=\"loginName\" placeholder=\"输入手机号码\" class=\"phonenum\"><div class=\"psw-box\"><input name=\"smsValidate\" placeholder=\"输入验证码\" class=\"psw\"> <button type=\"button\" class=\"send-psw\">发送验证码</button></div><div class=\"login-divide\"></div><div class=\"free-gif\"><div class=\"free-gif-logo\"><img src=\"/defaultSite/static/public/images/free_gif.png\" alt=\"\"></div><div class=\"free-gif-txt\">0元免费订，优惠享不停</div><div class=\"free-gif-checkbox-wrap\"><input type=\"checkbox\" id=\"checkboxOneInput\" class=\"free-gif-checkbox\" checked><label for=\"checkboxOneInput\">免费领取</label></div></div><div class=\"login-btns\"><button class=\"login-cancel\">取消</button> <button class=\"login-submit\">登录</button></div></div></div><!--登录成功提示--><div class=\"mask js-mask-success\" style=\"display: none\"><div class=\"login-msg\">登录成功</div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"mask js-mask-login\" style=\"display: none\"><input type=\"hidden\" name=\"sessionid\" class=\"js-sessionid\"><div class=\"login-box\"><div class=\"login-header\"><a href=\"#\" class=\"login-close\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTE2NEUyN0U5NzQ1MTFFNUFBMEVERkM4NjNDMzA1NzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTE2NEUyN0Y5NzQ1MTFFNUFBMEVERkM4NjNDMzA1NzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMTY0RTI3Qzk3NDUxMUU1QUEwRURGQzg2M0MzMDU3NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMTY0RTI3RDk3NDUxMUU1QUEwRURGQzg2M0MzMDU3NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnX8aL8AAAGsSURBVHjaxNhLSgNBEAbgtlD3ZqngA4JHSMCFaI6gq6wU8Q7eJbjQlR5B8BFXWU28gIIRPECOYLXUwNBk+lU11Q1/SCYD8zH9Knqtqqq+MeYeM8DMMBeYhSnTmpY5Zgz4cYc5wqxjjjHvmP0CuEN6dm0ZYiZAX5ptrwDS4t4wO871IVC3moLINpxtMwu8xPwUQvpwX5hrC/zGnBZAhnDW9At0QRsZhbM/oPGHFjIa5wI1kEm4VcAukcm4NmAXyCycDyiJzMaFgBJIFi4GyEGycbHAHKQILgWYghTDpQJr5EkAKYbLARoqZn1IMVwuMIQUw3GAschPDo4LtG2TyvO2Nzfi4LhA32xlvzkuMIQbSeBygWo44xk/0rgtzDk97xGz7AKYi+thPmiNtO2GxudCsos53XrWwBnaDqPrSVAYcxucehIUJsQD7eFZSFCYrUu611dgHKQCpZeSUIExbUOC4jqXhQTlRTgZCQ5uqrBDJCHBwW1rbF8pSAvsK+NSkLv1EbA2LhZ5u+oIWAsXg/w/Ap4XxIWQlQWOMc+04j/RjZo4F/lCllfM1Z8AAwByds8vln2q4AAAAABJRU5ErkJggg==\" alt=\"\"></a><div class=\"login-logo\"><img src=\"/defaultSite/static/public/images/logo2.png\" alt=\"咪咕礼包\"></div><h2>用户注册登录</h2></div><div class=\"login-error-msg\"></div><input name=\"loginName\" placeholder=\"输入手机号码\" class=\"phonenum\"><div class=\"psw-box\"><input name=\"smsValidate\" placeholder=\"输入验证码\" class=\"psw\"> <button type=\"button\" class=\"send-psw\">发送验证码</button></div><div class=\"login-divide\"></div><div class=\"free-gif\"><div class=\"free-gif-logo\"><img src=\"/defaultSite/static/public/images/free_gif.png\" alt=\"\"></div><div class=\"free-gif-txt\">0元免费订，优惠享不停</div><div class=\"free-gif-checkbox-wrap\"><input type=\"checkbox\" id=\"checkboxOneInput\" class=\"free-gif-checkbox\" checked><label for=\"checkboxOneInput\">免费领取</label></div></div><div class=\"login-btns\"><button class=\"login-cancel\">取消</button> <button class=\"login-submit\">登录</button></div></div></div><!--登录成功提示--><div class=\"mask js-mask-success\" style=\"display: none\"><div class=\"login-msg\">登录成功</div></div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	// This file is for use with Node.js. See dist/ for browser files.
	
	var Hogan = __webpack_require__(8);
	Hogan.Template = __webpack_require__(9).Template;
	Hogan.template = Hogan.Template;
	module.exports = Hogan;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	(function (Hogan) {
	  // Setup regex  assignments
	  // remove whitespace according to Mustache spec
	  var rIsWhitespace = /\S/,
	      rQuot = /\"/g,
	      rNewline =  /\n/g,
	      rCr = /\r/g,
	      rSlash = /\\/g,
	      rLineSep = /\u2028/,
	      rParagraphSep = /\u2029/;
	
	  Hogan.tags = {
	    '#': 1, '^': 2, '<': 3, '$': 4,
	    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
	    '{': 10, '&': 11, '_t': 12
	  };
	
	  Hogan.scan = function scan(text, delimiters) {
	    var len = text.length,
	        IN_TEXT = 0,
	        IN_TAG_TYPE = 1,
	        IN_TAG = 2,
	        state = IN_TEXT,
	        tagType = null,
	        tag = null,
	        buf = '',
	        tokens = [],
	        seenTag = false,
	        i = 0,
	        lineStart = 0,
	        otag = '{{',
	        ctag = '}}';
	
	    function addBuf() {
	      if (buf.length > 0) {
	        tokens.push({tag: '_t', text: new String(buf)});
	        buf = '';
	      }
	    }
	
	    function lineIsWhitespace() {
	      var isAllWhitespace = true;
	      for (var j = lineStart; j < tokens.length; j++) {
	        isAllWhitespace =
	          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
	          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
	        if (!isAllWhitespace) {
	          return false;
	        }
	      }
	
	      return isAllWhitespace;
	    }
	
	    function filterLine(haveSeenTag, noNewLine) {
	      addBuf();
	
	      if (haveSeenTag && lineIsWhitespace()) {
	        for (var j = lineStart, next; j < tokens.length; j++) {
	          if (tokens[j].text) {
	            if ((next = tokens[j+1]) && next.tag == '>') {
	              // set indent to token value
	              next.indent = tokens[j].text.toString()
	            }
	            tokens.splice(j, 1);
	          }
	        }
	      } else if (!noNewLine) {
	        tokens.push({tag:'\n'});
	      }
	
	      seenTag = false;
	      lineStart = tokens.length;
	    }
	
	    function changeDelimiters(text, index) {
	      var close = '=' + ctag,
	          closeIndex = text.indexOf(close, index),
	          delimiters = trim(
	            text.substring(text.indexOf('=', index) + 1, closeIndex)
	          ).split(' ');
	
	      otag = delimiters[0];
	      ctag = delimiters[delimiters.length - 1];
	
	      return closeIndex + close.length - 1;
	    }
	
	    if (delimiters) {
	      delimiters = delimiters.split(' ');
	      otag = delimiters[0];
	      ctag = delimiters[1];
	    }
	
	    for (i = 0; i < len; i++) {
	      if (state == IN_TEXT) {
	        if (tagChange(otag, text, i)) {
	          --i;
	          addBuf();
	          state = IN_TAG_TYPE;
	        } else {
	          if (text.charAt(i) == '\n') {
	            filterLine(seenTag);
	          } else {
	            buf += text.charAt(i);
	          }
	        }
	      } else if (state == IN_TAG_TYPE) {
	        i += otag.length - 1;
	        tag = Hogan.tags[text.charAt(i + 1)];
	        tagType = tag ? text.charAt(i + 1) : '_v';
	        if (tagType == '=') {
	          i = changeDelimiters(text, i);
	          state = IN_TEXT;
	        } else {
	          if (tag) {
	            i++;
	          }
	          state = IN_TAG;
	        }
	        seenTag = i;
	      } else {
	        if (tagChange(ctag, text, i)) {
	          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
	                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
	          buf = '';
	          i += ctag.length - 1;
	          state = IN_TEXT;
	          if (tagType == '{') {
	            if (ctag == '}}') {
	              i++;
	            } else {
	              cleanTripleStache(tokens[tokens.length - 1]);
	            }
	          }
	        } else {
	          buf += text.charAt(i);
	        }
	      }
	    }
	
	    filterLine(seenTag, true);
	
	    return tokens;
	  }
	
	  function cleanTripleStache(token) {
	    if (token.n.substr(token.n.length - 1) === '}') {
	      token.n = token.n.substring(0, token.n.length - 1);
	    }
	  }
	
	  function trim(s) {
	    if (s.trim) {
	      return s.trim();
	    }
	
	    return s.replace(/^\s*|\s*$/g, '');
	  }
	
	  function tagChange(tag, text, index) {
	    if (text.charAt(index) != tag.charAt(0)) {
	      return false;
	    }
	
	    for (var i = 1, l = tag.length; i < l; i++) {
	      if (text.charAt(index + i) != tag.charAt(i)) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  // the tags allowed inside super templates
	  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};
	
	  function buildTree(tokens, kind, stack, customTags) {
	    var instructions = [],
	        opener = null,
	        tail = null,
	        token = null;
	
	    tail = stack[stack.length - 1];
	
	    while (tokens.length > 0) {
	      token = tokens.shift();
	
	      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
	        throw new Error('Illegal content in < super tag.');
	      }
	
	      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
	        stack.push(token);
	        token.nodes = buildTree(tokens, token.tag, stack, customTags);
	      } else if (token.tag == '/') {
	        if (stack.length === 0) {
	          throw new Error('Closing tag without opener: /' + token.n);
	        }
	        opener = stack.pop();
	        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
	          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
	        }
	        opener.end = token.i;
	        return instructions;
	      } else if (token.tag == '\n') {
	        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
	      }
	
	      instructions.push(token);
	    }
	
	    if (stack.length > 0) {
	      throw new Error('missing closing tag: ' + stack.pop().n);
	    }
	
	    return instructions;
	  }
	
	  function isOpener(token, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].o == token.n) {
	        token.tag = '#';
	        return true;
	      }
	    }
	  }
	
	  function isCloser(close, open, tags) {
	    for (var i = 0, l = tags.length; i < l; i++) {
	      if (tags[i].c == close && tags[i].o == open) {
	        return true;
	      }
	    }
	  }
	
	  function stringifySubstitutions(obj) {
	    var items = [];
	    for (var key in obj) {
	      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
	    }
	    return "{ " + items.join(",") + " }";
	  }
	
	  function stringifyPartials(codeObj) {
	    var partials = [];
	    for (var key in codeObj.partials) {
	      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
	    }
	    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
	  }
	
	  Hogan.stringify = function(codeObj, text, options) {
	    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
	  }
	
	  var serialNo = 0;
	  Hogan.generate = function(tree, text, options) {
	    serialNo = 0;
	    var context = { code: '', subs: {}, partials: {} };
	    Hogan.walk(tree, context);
	
	    if (options.asString) {
	      return this.stringify(context, text, options);
	    }
	
	    return this.makeTemplate(context, text, options);
	  }
	
	  Hogan.wrapMain = function(code) {
	    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
	  }
	
	  Hogan.template = Hogan.Template;
	
	  Hogan.makeTemplate = function(codeObj, text, options) {
	    var template = this.makePartials(codeObj);
	    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
	    return new this.template(template, text, this, options);
	  }
	
	  Hogan.makePartials = function(codeObj) {
	    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
	    for (key in template.partials) {
	      template.partials[key] = this.makePartials(template.partials[key]);
	    }
	    for (key in codeObj.subs) {
	      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
	    }
	    return template;
	  }
	
	  function esc(s) {
	    return s.replace(rSlash, '\\\\')
	            .replace(rQuot, '\\\"')
	            .replace(rNewline, '\\n')
	            .replace(rCr, '\\r')
	            .replace(rLineSep, '\\u2028')
	            .replace(rParagraphSep, '\\u2029');
	  }
	
	  function chooseMethod(s) {
	    return (~s.indexOf('.')) ? 'd' : 'f';
	  }
	
	  function createPartial(node, context) {
	    var prefix = "<" + (context.prefix || "");
	    var sym = prefix + node.n + serialNo++;
	    context.partials[sym] = {name: node.n, partials: {}};
	    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
	    return sym;
	  }
	
	  Hogan.codegen = {
	    '#': function(node, context) {
	      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
	                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
	                      't.rs(c,p,' + 'function(c,p,t){';
	      Hogan.walk(node.nodes, context);
	      context.code += '});c.pop();}';
	    },
	
	    '^': function(node, context) {
	      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
	      Hogan.walk(node.nodes, context);
	      context.code += '};';
	    },
	
	    '>': createPartial,
	    '<': function(node, context) {
	      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
	      Hogan.walk(node.nodes, ctx);
	      var template = context.partials[createPartial(node, context)];
	      template.subs = ctx.subs;
	      template.partials = ctx.partials;
	    },
	
	    '$': function(node, context) {
	      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
	      Hogan.walk(node.nodes, ctx);
	      context.subs[node.n] = ctx.code;
	      if (!context.inPartial) {
	        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
	      }
	    },
	
	    '\n': function(node, context) {
	      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
	    },
	
	    '_v': function(node, context) {
	      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	    },
	
	    '_t': function(node, context) {
	      context.code += write('"' + esc(node.text) + '"');
	    },
	
	    '{': tripleStache,
	
	    '&': tripleStache
	  }
	
	  function tripleStache(node, context) {
	    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
	  }
	
	  function write(s) {
	    return 't.b(' + s + ');';
	  }
	
	  Hogan.walk = function(nodelist, context) {
	    var func;
	    for (var i = 0, l = nodelist.length; i < l; i++) {
	      func = Hogan.codegen[nodelist[i].tag];
	      func && func(nodelist[i], context);
	    }
	    return context;
	  }
	
	  Hogan.parse = function(tokens, text, options) {
	    options = options || {};
	    return buildTree(tokens, '', [], options.sectionTags || []);
	  }
	
	  Hogan.cache = {};
	
	  Hogan.cacheKey = function(text, options) {
	    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
	  }
	
	  Hogan.compile = function(text, options) {
	    options = options || {};
	    var key = Hogan.cacheKey(text, options);
	    var template = this.cache[key];
	
	    if (template) {
	      var partials = template.partials;
	      for (var name in partials) {
	        delete partials[name].instance;
	      }
	      return template;
	    }
	
	    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
	    return this.cache[key] = template;
	  }
	})( true ? exports : Hogan);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 *  Copyright 2011 Twitter, Inc.
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *  http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */
	
	var Hogan = {};
	
	(function (Hogan) {
	  Hogan.Template = function (codeObj, text, compiler, options) {
	    codeObj = codeObj || {};
	    this.r = codeObj.code || this.r;
	    this.c = compiler;
	    this.options = options || {};
	    this.text = text || '';
	    this.partials = codeObj.partials || {};
	    this.subs = codeObj.subs || {};
	    this.buf = '';
	  }
	
	  Hogan.Template.prototype = {
	    // render: replaced by generated code.
	    r: function (context, partials, indent) { return ''; },
	
	    // variable escaping
	    v: hoganEscape,
	
	    // triple stache
	    t: coerceToString,
	
	    render: function render(context, partials, indent) {
	      return this.ri([context], partials || {}, indent);
	    },
	
	    // render internal -- a hook for overrides that catches partials too
	    ri: function (context, partials, indent) {
	      return this.r(context, partials, indent);
	    },
	
	    // ensurePartial
	    ep: function(symbol, partials) {
	      var partial = this.partials[symbol];
	
	      // check to see that if we've instantiated this partial before
	      var template = partials[partial.name];
	      if (partial.instance && partial.base == template) {
	        return partial.instance;
	      }
	
	      if (typeof template == 'string') {
	        if (!this.c) {
	          throw new Error("No compiler available.");
	        }
	        template = this.c.compile(template, this.options);
	      }
	
	      if (!template) {
	        return null;
	      }
	
	      // We use this to check whether the partials dictionary has changed
	      this.partials[symbol].base = template;
	
	      if (partial.subs) {
	        // Make sure we consider parent template now
	        if (!partials.stackText) partials.stackText = {};
	        for (key in partial.subs) {
	          if (!partials.stackText[key]) {
	            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
	          }
	        }
	        template = createSpecializedPartial(template, partial.subs, partial.partials,
	          this.stackSubs, this.stackPartials, partials.stackText);
	      }
	      this.partials[symbol].instance = template;
	
	      return template;
	    },
	
	    // tries to find a partial in the current scope and render it
	    rp: function(symbol, context, partials, indent) {
	      var partial = this.ep(symbol, partials);
	      if (!partial) {
	        return '';
	      }
	
	      return partial.ri(context, partials, indent);
	    },
	
	    // render a section
	    rs: function(context, partials, section) {
	      var tail = context[context.length - 1];
	
	      if (!isArray(tail)) {
	        section(context, partials, this);
	        return;
	      }
	
	      for (var i = 0; i < tail.length; i++) {
	        context.push(tail[i]);
	        section(context, partials, this);
	        context.pop();
	      }
	    },
	
	    // maybe start a section
	    s: function(val, ctx, partials, inverted, start, end, tags) {
	      var pass;
	
	      if (isArray(val) && val.length === 0) {
	        return false;
	      }
	
	      if (typeof val == 'function') {
	        val = this.ms(val, ctx, partials, inverted, start, end, tags);
	      }
	
	      pass = !!val;
	
	      if (!inverted && pass && ctx) {
	        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
	      }
	
	      return pass;
	    },
	
	    // find values with dotted names
	    d: function(key, ctx, partials, returnFound) {
	      var found,
	          names = key.split('.'),
	          val = this.f(names[0], ctx, partials, returnFound),
	          doModelGet = this.options.modelGet,
	          cx = null;
	
	      if (key === '.' && isArray(ctx[ctx.length - 2])) {
	        val = ctx[ctx.length - 1];
	      } else {
	        for (var i = 1; i < names.length; i++) {
	          found = findInScope(names[i], val, doModelGet);
	          if (found !== undefined) {
	            cx = val;
	            val = found;
	          } else {
	            val = '';
	          }
	        }
	      }
	
	      if (returnFound && !val) {
	        return false;
	      }
	
	      if (!returnFound && typeof val == 'function') {
	        ctx.push(cx);
	        val = this.mv(val, ctx, partials);
	        ctx.pop();
	      }
	
	      return val;
	    },
	
	    // find values with normal names
	    f: function(key, ctx, partials, returnFound) {
	      var val = false,
	          v = null,
	          found = false,
	          doModelGet = this.options.modelGet;
	
	      for (var i = ctx.length - 1; i >= 0; i--) {
	        v = ctx[i];
	        val = findInScope(key, v, doModelGet);
	        if (val !== undefined) {
	          found = true;
	          break;
	        }
	      }
	
	      if (!found) {
	        return (returnFound) ? false : "";
	      }
	
	      if (!returnFound && typeof val == 'function') {
	        val = this.mv(val, ctx, partials);
	      }
	
	      return val;
	    },
	
	    // higher order templates
	    ls: function(func, cx, partials, text, tags) {
	      var oldTags = this.options.delimiters;
	
	      this.options.delimiters = tags;
	      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
	      this.options.delimiters = oldTags;
	
	      return false;
	    },
	
	    // compile text
	    ct: function(text, cx, partials) {
	      if (this.options.disableLambda) {
	        throw new Error('Lambda features disabled.');
	      }
	      return this.c.compile(text, this.options).render(cx, partials);
	    },
	
	    // template result buffering
	    b: function(s) { this.buf += s; },
	
	    fl: function() { var r = this.buf; this.buf = ''; return r; },
	
	    // method replace section
	    ms: function(func, ctx, partials, inverted, start, end, tags) {
	      var textSource,
	          cx = ctx[ctx.length - 1],
	          result = func.call(cx);
	
	      if (typeof result == 'function') {
	        if (inverted) {
	          return true;
	        } else {
	          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
	          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
	        }
	      }
	
	      return result;
	    },
	
	    // method replace variable
	    mv: function(func, ctx, partials) {
	      var cx = ctx[ctx.length - 1];
	      var result = func.call(cx);
	
	      if (typeof result == 'function') {
	        return this.ct(coerceToString(result.call(cx)), cx, partials);
	      }
	
	      return result;
	    },
	
	    sub: function(name, context, partials, indent) {
	      var f = this.subs[name];
	      if (f) {
	        this.activeSub = name;
	        f(context, partials, this, indent);
	        this.activeSub = false;
	      }
	    }
	
	  };
	
	  //Find a key in an object
	  function findInScope(key, scope, doModelGet) {
	    var val;
	
	    if (scope && typeof scope == 'object') {
	
	      if (scope[key] !== undefined) {
	        val = scope[key];
	
	      // try lookup with get for backbone or similar model data
	      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
	        val = scope.get(key);
	      }
	    }
	
	    return val;
	  }
	
	  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
	    function PartialTemplate() {};
	    PartialTemplate.prototype = instance;
	    function Substitutions() {};
	    Substitutions.prototype = instance.subs;
	    var key;
	    var partial = new PartialTemplate();
	    partial.subs = new Substitutions();
	    partial.subsText = {};  //hehe. substext.
	    partial.buf = '';
	
	    stackSubs = stackSubs || {};
	    partial.stackSubs = stackSubs;
	    partial.subsText = stackText;
	    for (key in subs) {
	      if (!stackSubs[key]) stackSubs[key] = subs[key];
	    }
	    for (key in stackSubs) {
	      partial.subs[key] = stackSubs[key];
	    }
	
	    stackPartials = stackPartials || {};
	    partial.stackPartials = stackPartials;
	    for (key in partials) {
	      if (!stackPartials[key]) stackPartials[key] = partials[key];
	    }
	    for (key in stackPartials) {
	      partial.partials[key] = stackPartials[key];
	    }
	
	    return partial;
	  }
	
	  var rAmp = /&/g,
	      rLt = /</g,
	      rGt = />/g,
	      rApos = /\'/g,
	      rQuot = /\"/g,
	      hChars = /[&<>\"\']/;
	
	  function coerceToString(val) {
	    return String((val === null || val === undefined) ? '' : val);
	  }
	
	  function hoganEscape(str) {
	    str = coerceToString(str);
	    return hChars.test(str) ?
	      str
	        .replace(rAmp, '&amp;')
	        .replace(rLt, '&lt;')
	        .replace(rGt, '&gt;')
	        .replace(rApos, '&#39;')
	        .replace(rQuot, '&quot;') :
	      str;
	  }
	
	  var isArray = Array.isArray || function(a) {
	    return Object.prototype.toString.call(a) === '[object Array]';
	  };
	
	})( true ? exports : Hogan);


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by linxiaojie on 2015/11/17.
	 */
	
	/*
	    全局注册的事件，外部可通过此事件通知组件重绘
	    value :　moduleName + '.' + action
	 */
	
	module.exports = {
	    login: {
	        success: 'login.success',
	        error: 'login.error',
	        always: 'login.always'
	    },
	    order: {
	        success: 'order.success',
	        error: 'order.error',
	        always: 'login.always'
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by linxiaojie on 2015/12/4.
	 */
	var View = __webpack_require__(3),
	    request = __webpack_require__(5),
	    _template = __webpack_require__(12),
	    Events = __webpack_require__(1),
	    GlobalEvent = __webpack_require__(10);
	
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(7);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"js-order\" style=\"display: none\"><div class=\"pop_bg\"></div><div class=\"pop2\"><div class=\"pop2_title\">领取礼包</div><div class=\"pop2_con\"><p><img src=\"/defaultSite/static/public/images/five_marketing_bg.png\"></p><p>0元免费订，优惠享不停</p></div><div class=\"btn_div\"><a href=\"javascript:;\" class=\"cancel\">取消</a><a href=\"javascript:;\" class=\"btn\">免费领取</a></div></div></div><div class=\"js-order-success\" style=\"display: none\"><div class=\"pop_bg\"></div><div class=\"pop\"><div class=\"pop_title\">领取成功</div><div class=\"pop_con\"><p>恭喜你，成功领取咪咕体验包！</p><p>0元免费，精彩不断！</p></div></div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"js-order\" style=\"display: none\"><div class=\"pop_bg\"></div><div class=\"pop2\"><div class=\"pop2_title\">领取礼包</div><div class=\"pop2_con\"><p><img src=\"/defaultSite/static/public/images/five_marketing_bg.png\"></p><p>0元免费订，优惠享不停</p></div><div class=\"btn_div\"><a href=\"javascript:;\" class=\"cancel\">取消</a><a href=\"javascript:;\" class=\"btn\">免费领取</a></div></div></div><div class=\"js-order-success\" style=\"display: none\"><div class=\"pop_bg\"></div><div class=\"pop\"><div class=\"pop_title\">领取成功</div><div class=\"pop_con\"><p>恭喜你，成功领取咪咕体验包！</p><p>0元免费，精彩不断！</p></div></div></div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by linxiaojie on 2015/12/15.
	 */
	var View = __webpack_require__(3),
	    _template = __webpack_require__(14);
	
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var H = __webpack_require__(7);
	module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"toast js-toast\"></div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"toast js-toast\"></div>", H);return T.render.apply(T, arguments); };

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./dialog.min.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./dialog.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports
	
	
	// module
	exports.push([module.id, ".mask,\n.pop_bg {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n.mask {\n  z-index: 100;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.login-box,\n.login-msg {\n  left: 50%;\n  text-align: center;\n}\n.login-box {\n  position: absolute;\n  top: 1.3rem;\n  width: 6.3rem;\n  height: 7.5rem;\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  border-radius: 5px;\n  z-index: 102;\n  background-color: #fff;\n  line-height: 1;\n  font-size: 0.3rem;\n}\n.free-gif-txt,\n.login-msg,\n.phonenum {\n  line-height: 0.8rem;\n}\n.login-box > h2 {\n  text-align: center;\n  color: #383838;\n  font-size: .36rem;\n  font-weight: 400;\n}\n.login-header {\n  position: relative;\n  overflow: hidden;\n  height: 1.6rem;\n  width: 100%;\n  background: #f1f1f1;\n}\n.phonenum,\n.psw-box .psw {\n  padding-left: .25rem;\n  background: #fff;\n}\n.phonenum {\n  width: 4.8rem;\n  height: .8rem;\n  outline: 0;\n  border: 1px solid #e0e0e0;\n  border-radius: .1rem;\n  margin-bottom: .3rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  opacity: 1;\n}\n.login-btns,\n.psw-box {\n  -webkit-box-pack: justify;\n  margin: 0 auto;\n}\n.phonenum::-webkit-input-placeholder {\n  color: #c1c1c1;\n}\n.psw-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 4.8rem;\n}\n.psw-box .psw,\n.psw-box > .send-psw {\n  font-size: .3rem;\n  display: block;\n  height: .8rem;\n  line-height: .8rem;\n  border-radius: .1rem;\n  opacity: 1;\n  border: 1px solid #e0e0e0;\n}\n.psw-box .psw {\n  width: 2.4rem;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.psw-box .send-psw,\n.psw-box .send-psw:active,\n.psw-box .send-psw:hover {\n  width: 2.2rem;\n  background: #f9225b;\n  border-color: #f9225b;\n  color: #fff;\n}\n.psw-box .send-psw.disable,\n.psw-box .send-psw:active.disable,\n.psw-box .send-psw:hover.disable {\n  background: #b3b3b3;\n}\n.login-box,\n.login-header {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n.login-btns {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 4.8rem;\n}\n.login-cancel,\n.login-submit {\n  display: block;\n  width: 2.2rem;\n  height: .8rem;\n  outline: 0;\n  font-size: .34rem;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 1px;\n}\n.login-submit {\n  border-color: #f9225b;\n  background: #f9225b;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  color: #fff;\n}\n.login-cancel {\n  border-color: #f9225b;\n  background: #fff;\n}\n.login-logo {\n  margin: .25rem 0 .13rem;\n  text-align: center;\n}\n.login-logo img {\n  width: 1.75rem;\n  height: auto;\n}\n.login-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: inline-block;\n  color: #383838;\n  padding: 0.2rem;\n}\n.login-close img {\n  width: .4rem;\n  height: auto;\n}\n.login-msg {\n  position: absolute;\n  top: 4.3rem;\n  margin-left: -2.5rem;\n  width: 5rem;\n  height: .8rem;\n  background: rgba(255, 255, 255, 0.8);\n  font-size: .28rem;\n  color: #444;\n  border-radius: 0.1rem;\n}\n.free-gif,\n.login-divide {\n  overflow: hidden;\n  width: 4.8rem;\n}\n.login-divide {\n  border-top: 1px dashed #b9b9b9;\n  margin: 0.3rem auto 0.1rem;\n}\n.free-gif {\n  margin: 0 auto;\n  height: 1.9rem;\n  position: relative;\n  text-align: right;\n}\n.free-gif img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1.75rem;\n  height: auto;\n}\n.free-gif-checkbox-wrap {\n  text-align: right;\n  margin: 0.25rem 0;\n}\n.free-gif-checkbox-wrap input[type=checkbox] {\n  visibility: hidden;\n}\n.free-gif-checkbox-wrap label {\n  position: relative;\n  height: .3rem;\n  font-size: .3rem;\n  color: #a0a0a0;\n  vertical-align: middle;\n}\n.free-gif-checkbox-wrap label:before {\n  display: inline-block;\n  content: '';\n  border: 1px solid #f9225b;\n  width: .3rem;\n  height: .3rem;\n  position: absolute;\n  top: 0;\n  left: -0.4rem;\n  vertical-align: middle;\n}\n.free-gif-checkbox-wrap input[type=checkbox]:checked + label:before {\n  background: #f9225b;\n}\n.free-gif-txt {\n  width: 4.2rem;\n  text-align: right;\n  margin-left: .6rem;\n  border: 1px solid #f9225b;\n  color: #f9225b;\n  font-size: .26rem;\n  margin-top: .2rem;\n  padding-right: 0.15rem;\n}\n.login-error-msg {\n  color: red;\n  width: 4.8rem;\n  margin: 0 auto;\n  font-size: .3rem;\n  line-height: 1.2;\n  text-align: left;\n  height: 0.4rem;\n}\n.pop2_con,\n.pop2_title,\n.pop_con,\n.pop_title {\n  text-align: center;\n}\nbody,\nhtml {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.pop_bg {\n  z-index: 101;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.5;\n}\n.pop,\n.pop2 {\n  width: 5rem;\n  top: 50%;\n  left: 50%;\n  margin-left: -2.5rem;\n  position: fixed;\n}\n.pop {\n  z-index: 102;\n  background: #fff;\n  height: 2.4rem;\n  margin-top: -1.2rem;\n  border-radius: 0.12rem;\n}\n.pop_title {\n  color: #fff;\n  font-size: .3rem;\n  background: #f9225b;\n  border-radius: .12rem .12rem 0 0;\n  padding: 0.15rem 0;\n}\n.pop_con {\n  margin-top: 0.3rem;\n}\n.pop_con p {\n  line-height: .5rem;\n  font-size: .28rem;\n  color: #444;\n}\n.pop2 {\n  z-index: 103;\n  background: #fff;\n  height: 4rem;\n  margin-top: -2rem;\n  border-radius: 0.12rem;\n}\n.pop2_title {\n  color: #fff;\n  font-size: .3rem;\n  background: #f9225b;\n  border-radius: .12rem .12rem 0 0;\n  padding: 0.15rem 0;\n}\n.pop2_con img {\n  width: 4rem;\n  height: 1.75rem;\n}\n.pop2_con p {\n  font-size: .28rem;\n  color: #f9225b;\n  margin-bottom: 0.2rem;\n}\n.btn_div a.btn,\n.btn_div a.cancel {\n  font-size: .3rem;\n  width: 1.7rem;\n  display: inline-block;\n  padding: 0.1rem 0;\n}\n.btn_div a.btn,\n.btn_div a.cancel,\n.toast {\n  color: #fff;\n  text-align: center;\n}\n.btn_div {\n  text-align: center;\n}\n.btn_div a.cancel {\n  background: #999;\n}\n.btn_div a.btn {\n  margin-left: .55rem;\n  background: #f9225b;\n}\n.clear {\n  clear: both;\n}\n.toast {\n  position: fixed;\n  z-index: 9999;\n  top: -1000px;\n  left: 0;\n  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);\n  line-height: 1.3;\n  background: rgba(0, 0, 0, 0.8);\n  font-size: .32rem;\n  padding: 5px 10px;\n  max-width: 70%;\n  word-break: break-all;\n  border-radius: 0.06rem;\n}\n", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle2.js.map