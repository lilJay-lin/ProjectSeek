var index_html =  "http://wap.dm.10086.cn/waph5/index.html";
/**获取短信验证码60秒倒计时*/
var wait = 60;
function time(o) {
    if (wait == 0) {
        $(o).attr("disabled",false);            
        $(o).attr("value","获取验证码");     
        $(o).css("color","black");
        wait = 60;
    } else {
        $(o).attr("disabled", true);           
        $(o).attr("value", wait+"s后获取");    
        $(o).css("color","red");
        wait--;
        setTimeout(function() {
                time(o);
            },
            1000);
    }
};
/**获取短信验证码*/
function getMsgCode(){	
	 $.ajax({
		 url:get_msgCode_url,type:'post',success:function(d){
			   var result=eval("("+d+")");
			   if(result.code==0){
				   time("#get_msgCode");	
			   }else{
				   $("body").append('<div class="sq_tips">'+result.msg+'</div>');
			        setTimeout(function() {
			            $(".sq_tips").remove();
			        }, 1500);
			   }
	        	        	
	        },
	        error:function (request, status, err) {
	        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
		        setTimeout(function() {
		            $(".sq_tips").remove();
		        }, 1500);
	        }	        	
	 });
}
function encode64(input) {
	  var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv"
	     + "wxyz0123456789+/" + "=";
	         var output = "";
	         var chr1, chr2, chr3 = "";
	         var enc1, enc2, enc3, enc4 = "";
	         var i = 0;
	         do {
	                 chr1 = input.charCodeAt(i++);
	                 chr2 = input.charCodeAt(i++);
	                 chr3 = input.charCodeAt(i++);
	                 enc1 = chr1 >> 2;
	                 enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	                 enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	                 enc4 = chr3 & 63;
	                 if (isNaN(chr2)) {
	                         enc3 = enc4 = 64;
	                 } else if (isNaN(chr3)) {
	                         enc4 = 64;
	                 }
	                 output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2)
	                                 + keyStr.charAt(enc3) + keyStr.charAt(enc4);
	                 chr1 = chr2 = chr3 = "";
	                 enc1 = enc2 = enc3 = enc4 = "";
	         } while (i < input.length);
	
	         return output;
	 }
function debugp(o){
	console.dir(o);
}
/**
 * 得到url上的参数
 */
function dm_getp(name){
	 var search = window.location.search.substr(1);
	 if(search.indexOf(name)!=-1){
		 var ps = search.split('&')
		 for(var i =0;i<ps.length;i++){
			 var p = ps[i];
			 var kv = p.split('=');
			 if(kv.length==2){
				 if(kv[0]==name){
					 return kv[1];
				 }
			 }else{
				 return null;
			 }
		 }
	 }
	 
 }
/**
 * 设置cookie
 */
function setCookie(c_name, value, expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/;HttpOnly";
}
/**
 * 返回cookie
 */
 function getCookie(c_name) {
	    if (document.cookie.length > 0) {
	        c_start = document.cookie.indexOf(c_name + "=");
	        if (c_start != -1) {
	        	c_start = c_start + c_name.length + 1;
	            c_end = document.cookie.indexOf(";", c_start);
	            if (c_end == -1) 
	               c_end = document.cookie.length;
	            return unescape(document.cookie.substring(c_start, c_end));
	        }
	    }
	    return "";
}
var iscookie=1;
var storage = window.localStorage;

if(window.localStorage){
	iscookie=0;
}else{
	storage = window.localStorage;
  //alert('This browser does NOT support localStorage');
}

function showStorage(){
 for(var i=0;i<storage.length;i++){
  //key(i)获得相应的键，再用getItem()方法获得对应的值
  document.write(storage.key(i)+ " : " + storage.getItem(storage.key(i)) + "<br>");
 }
}
/**
 * 设置本地变量，防止不支持localStorage(暂不用)
 */
function getItem(name){
	if(iscookie){
		return getCookie(name);
	}else{
		return storage.getItem(name);
	}
}
function setItem(name,value){
	if(iscookie){
		setCookie(name,value);
	}else{
		storage.setItem(name,value);
	}
}
/**
 * 返回本地变量
 */
function getVal(name){
	if(iscookie){
		return '';
	}else{
		return storage.getItem(name);
	}
}
/**
 * 设置本地变量
 */
function setVal(name,value){
	if(!iscookie){
		storage.setItem(name,value);
	}
}
/**
 * 设置跳转url
 */
function jump(h){
	window.location.href=h;
}
/**
 * iScroll里的内置方法
 */
function loaded() {
	if(myScroll != null){
		myScroll.destroy();
	}
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll = new iScroll('wrapper', {
        useTransition: true,
        onRefresh: function() {
            if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }
        },
        onScrollMove: function() {
            if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function() {
            if (pullUpEl.className.match('flip')) {
            	if(page_num>sum_count){
            		pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '已经到底了...';
            	}else{
            		pullUpEl.className = 'loading';
	                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
	                pullUpAction();
            	}               
            }
        }
    });
    setTimeout(function() {
        document.getElementById('wrapper').style.left = '0';
    }, 800);
}
/**
 * urlEncoder转码
 */
function urlencode(str){  
    str =(str +'').toString();
    return encodeURIComponent(str);
//    return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');
}
/**
 * sso登陆(暂不用)
 */
function sso(url){
    //var ssoUrl = "http://wap.dm.10086.cn/auth/login?display=pbs&service=";
    var ssoUrl = "http://wap.dm.10086.cn/auth/login?renew=1&display=h5&extension=platform::04_portal::09_accessMode::02&service=";
    try{
    var service = window.location.href;
    service = service.replace("undefined", "");
    service = service.replace(/ticket.+/,'');
    service = encodeURIComponent(service);
    if(!url){
      ssoUrl += service;
    }else{
      ssoUrl = url+ '&service=' +service;
    }
    return ;
    window.location.href = ssoUrl;
    }catch(e){
    	alert(e);
    }
 }		
/**
 * 收藏
 */
function dofavor(){
    var self=$(this);
    var name=self.attr('class');
    var opusId = dm_getp('opus_id');
    var chann_id = dm_getp('chann_id');
    if(name=='collect'){
       $.post(sub_url,{
			chann_id:chann_id,
			opus_id:opusId
		},function(ret){ 
		   var data = eval("("+ret+")");
			if(data.sso!=null){
			    //sso();
				 var h = window.location.href+"&fromLogin=1";
				 var url = data.sso+'&service='+encodeURIComponent(h);
	              window.location.href=url;
			    return;
			}
		   if(data.code==0){
	             self.removeClass("collect").addClass("collect_hover");
	             $("body").append('<div class="sq_tips">收藏成功</div>');
	            setTimeout(function() {
	                $(".sq_tips").remove();
	            }, 1500);
		   }
		});
     }else{
       $.post(cancel_url,{
			chann_id:chann_id,
			opus_id:opusId
		},function(ret){ 
		   var data = eval("("+ret+")");
		   if(data.code==0){ 
	             self.removeClass("collect_hover").addClass("collect");
	             $("body").append('<div class="sq_tips">取消收藏</div>');
	            setTimeout(function() {
	                $(".sq_tips").remove();
	            }, 1500);
       	   }
		});
     }
}
/**
 * 点赞
 */
function praise(){
    var self=$(this);
    var name=self.attr('class');
    var opusId = dm_getp('opus_id');
    var channId = dm_getp('chann_id');
    if(name=='praise'){
       $.get(praise_url,{
			opus_id:opusId,
			chann_id:channId
		},function(ret){ 
		   var data = eval("("+ret+")");
			if(data.sso!=null){
			    //sso();
				 var h = window.location.href+"&fromLogin=1";
				 var url = data.sso+'&service='+encodeURIComponent(h);
	              window.location.href=url;
			    return;
			}
		   if(data.info.code==0){
			   $("#praise").html("<i></i>已点赞");
			   self.removeClass("praise").addClass("praise_hover");
               $("body").append('<div class="sq_tips">'+data.info.msg+'</div>');
               setTimeout(function() {
                   $(".sq_tips").remove();
               }, 1500);
		   }else{
                   $("body").append('<div class="sq_tips">'+data.info.msg+'</div>');
                    setTimeout(function() {
                       $(".sq_tips").remove();
                   }, 1500);
		   }
		});
     }else{
    	 $("body").append('<div class="sq_tips">已经点赞过！不能重复点赞</div>');
         setTimeout(function() {
             $(".sq_tips").remove();
         }, 1500);
     }
}
/**
 * 投票
 */
function vote(){
    var self=$(this);
    var name=self.attr('class');
    var opusId = dm_getp('opus_id');
    var channId = dm_getp('chann_id');
    if(name=='vote'){
   
			layer.open({
	            type:1,
	            title: [
	                '投票',
	                'background-color:#ff5000; color:#fff;'
	            ],
	            content:$("#vote_box").html(),
	            btn: ['确认', '取消'], 
	            shadeClose: false,
	            style: 'width:80%;  border:none;',
	            yes: function(index){
	                $.get(vote_url,{
	        			opus_id:opusId,
	        			chann_id:channId
	        		},function(ret){ 
	        		   var data = eval("("+ret+")");
	        			if(data.sso!=null){
	        			    //sso();
	        				 var h = window.location.href+"&fromLogin=1";
	        				 var url = data.sso+'&service='+encodeURIComponent(h);
	        	              window.location.href=url;
	        			    return;
	        			}
	        			 if(data.info.code=="0"){
	                         $("#vote").html("<i></i>已投票");
	                         self.removeClass("vote").addClass("vote_hover");
	                         $("body").append('<div class="sq_tips">'+data.info.msg+'</div>');
	                         setTimeout(function() {
	                             $(".sq_tips").remove();
	                         }, 1500);	
	        		}
	        			 else{
	                         $("body").append('<div class="sq_tips">'+data.info.msg+'</div>');
	                          setTimeout(function() {
	                             $(".sq_tips").remove();
	                         }, 1500);
	                      }
	                      layer.close(index);
	        	            }	 
	                );			
              }
    	});
     }else{
    	 $("body").append('<div class="sq_tips">您今日已为该作品投过票了，请明日再来</div>');
         setTimeout(function() {
             $(".sq_tips").remove();
         }, 1500);
     }
}
//返回所有目录记录
function getMenuList(limit){	  
	  var btnSort = $('#btnSort');
	  var dir = $('#dirlist');
	  var opus_id = dm_getp('opus_id');
	  var chann_id = dm_getp('chann_id');
	  var date = new Date();/*设cookie用*/
	  if(orderby=='0'){
	      orderby = '1';
	      setVal('orderby','1');
        btnSort.html('<i></i>正序</a>');
        
        /*设cookie记忆*/          
        if (/readmode=zx/.test(document.cookie)) {
           date.setTime(date.getTime()-1);
           document.cookie = "readmode=zx; expires="+date.toGMTString();
        }
       date.setTime(date.getTime()+30*60*1000);
       document.cookie = "readmode=dx; expires="+date.toGMTString();
	  }else {
	      btnSort.html('<i></i>倒序</a>');
	      orderby = '0';
	      setVal('orderby','0');
	      /*设cookie记忆*/          
        if (/readmode=dx/.test(document.cookie)) {
           date.setTime(date.getTime()-1);
           document.cookie = "readmode=dx; expires="+date.toGMTString();
        }
       date.setTime(date.getTime()+30*60*1000);
       document.cookie = "readmode=zx; expires="+date.toGMTString();
	  }
	  dir.empty();
	  $.getJSON(menu_url,{chann_id:chann_id,opus_id:opus_id,order_by:orderby },function(d){
	       for(var i=0;i<d.list.length;i++){
			    var c = d.list[i];
			    var content_id=c.content_id;
				var content_name=c.content_name;
				var v = '<a href="javascript:return false;" onclick="authOrder('+content_id+',this) ">';
				/*if(  c.is_free=="1"){
				    v += '<li class="lock"  pid="'+content_id+'"><i></i>'+content_name+'</li>';
				}else{
				    v += '<li>'+content_name+'</li>';
				}*/
				if(  c.is_free=="1"){
				   if(limit){
				     v += '<li class="limit"><i></i>'+content_name+'</li>';		
					}
					else{
					 v += '<li class="lock"  pid="'+content_id+'"><i></i>'+content_name+'</li>';		
					} 
				}else{
				    v += '<li>'+content_name+'</li>';
				}
				
				
				v+='</a>';
				dir.append(v);				
			}
	       if(!hasBuyAll){
	    	   wrapHasBuy();
	       }else{
	    	   $('#dirlist li').addClass('ygm');
	       }
	  });
}
//政企专区返回所有目录记录
function zqzq_getMenuList(){	  
	  var btnSort = $('#btnSort');
	  var dir = $('#dirlist');
	  var opus_id = dm_getp('opus_id');
	  var chann_id = dm_getp('chann_id');
	  var date = new Date();/*设cookie用*/
	  if(orderby=='0'){
	      orderby = '1';
	      setVal('orderby','1');
          btnSort.html('<i></i>正序</a>');
          /*设cookie记忆*/          
          if (/readmode=zx/.test(document.cookie)) {
             date.setTime(date.getTime()-1);
             document.cookie = "readmode=zx; expires="+date.toGMTString();
          }
         date.setTime(date.getTime()+30*60*1000);
         document.cookie = "readmode=dx; expires="+date.toGMTString();
	  }else {
	      btnSort.html('<i></i>倒序</a>');
	      orderby = '0';
	      setVal('orderby','0');
	      /*设cookie记忆*/          
          if (/readmode=dx/.test(document.cookie)) {
             date.setTime(date.getTime()-1);
             document.cookie = "readmode=dx; expires="+date.toGMTString();
          }
         date.setTime(date.getTime()+30*60*1000);
         document.cookie = "readmode=zx; expires="+date.toGMTString();
	      
	  }
	  dir.empty();
	  $.getJSON(menu_url,{chann_id:chann_id,opus_id:opus_id,order_by:orderby },function(d){
	       for(var i=0;i<d.list.length;i++){
			    var c = d.list[i];
			    var content_id=c.content_id;
				var content_name=c.content_name;
				var v = '<a href="javascript:return false;" onclick="gov_authOrder('+content_id+',this,'+c.is_free+') ">';
//				if(  c.is_free=="1"){
//				    v += '<li class="lock"  pid="'+content_id+'"><i></i>'+content_name+'</li>';
//				}else{
//				    v += '<li>'+content_name+'</li>';
//				}
				v += '<li>'+content_name+'</li>';
				v+='</a>';
				dir.append(v);
			}
	       if(!hasBuyAll){
	    	   wrapHasBuy();
	       }else{
	    	   $('#dirlist li').addClass('ygm');
	       }
	  });
}
/**
 * 得到上一个页面url
 */
function getPrevurl(){
	 var referrer = document.referrer;
	    if (!referrer) {
	        try {
	            if (window.opener) {
	                referrer = window.opener.location.href;
	            }
	        } catch(e) {}
	    }
	    return referrer;
}
/**
 * 返回url上的参数字符串
 */
function getParams(){
	return window.location.search;
}
/**
 * 跳转到动画的订购界面
 */
function toCartoonOrderConfirm(contentId,isNeedAuth){
	var _time=new Date().getTime();
    var opusId = dm_getp('opus_id');
	var chann_id = dm_getp('chann_id');
	var type = "comicOnlinePlay";
	if(chann_id==4){
	   type = "videoOnlinePlay";
	}
	if(isNeedAuth){
	     window.location.href=order_con+'?chann_id='+chann_id+'&watch_type='+type+'&opus_id='+opusId+'&content_id='+contentId+'&quality=1'+'&ts='+_time+'&needAuth=1';
	}else{
	     window.location.href=order_con+'?chann_id='+chann_id+'&watch_type='+type+'&opus_id='+opusId+'&content_id='+contentId+'&quality=1'+'&ts='+_time;
	}
}
/**
 * 动画加载框隐藏
 */
function hide_l(){
    load_div.hide();
}
/**动画加载框显示*/
function load_l(){
    load_div.show();
}
/**
 * 设置跳转url，订购完成后回跳
 */
function markJump(){
	var _jump = window.location.href;
	setVal('_jump',_jump);
}
function getJump(){
	return getVal('_jump');
}
/**是否整部购买*/
function hasBuyWhole(isDir){
	var c = dm_getp('chann_id');
  	var p = dm_getp('opus_id');
  	/*var h = getVal('buyall-'+c+'-'+p);
  	if(h){
  		var btn =$('#btnBuyWhole');
        btn.addClass("gray_btn").removeClass("blue_btn");
   	 	btn.html("已购买");
   	 	btn.attr("disabled","disabled"); 
   	 	hasBuyAll = 1;
   	 	$('#dirlist li').addClass('ygm');
  	}else*/ 
  	if(!isDir){
	    $.ajax({url:whole_url,type:'get',dataType:'json',success:function(d){
	        if(d.is_whole_ordered=='1'){
	            var btn =$('#btnBuyWhole');
	            btn.addClass("gray_btn").removeClass("blue_btn");
	      	 	btn.html("已购买");
	      	 	btn.attr("disabled","disabled"); 
	      	 	hasBuyAll = 1;
	      	 	setVal('buyall-'+c+'-'+p,'1');
	      	 	$('#dirlist li').addClass('ygm');
	        }else{
	        	 wrapHasBuy();
	        }
	    },
        error:function (request, status, err) {
        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
	        setTimeout(function() {
	            $(".sq_tips").remove();
	        }, 1500);
        }
	    });
  	}else{
  		 wrapHasBuy();
  	}
}
/**进入整部购买*/
function toBuyAll(hwId,p1,p0,p2,p3,p4,p5){
    if(!p4)p4=1;
    if(!p5)p5=1;
    var url = query_spend_tip_url+'?product_type='+p4+'&isPoint='+p5+'&pmy='+p1+'&whole_product_price='+p2+'&product_id='+p0+'&opus_id='+dm_getp('opus_id')+'&chann_id='+dm_getp('chann_id')+"&fromLogin=1&hwId="+hwId;
    if(p3){
       url+='&whole_product_discount='+p3;
    }
    window.location.href=url;
}	
/**查看是否观看过*/
function getScanHis(){
	$.ajax({url:scan_opus_his_url+'?opus_id='+opusId,type:'get',dataType:'text',success:function(d){
        d =eval('('+d+')');
        if(d.list!=null){
	        var list = d.list;
	        if(list.length>0){
	            var btn = $('#btnRead');
	            btn.html('继续观看');
	            btn.click(function(){
	            	var op = list[0];
	            	//authOrder(list[0].content_id)
	            	var type = "comicOnlinePlay";
	            	auth_url=auth_url+'&chann_id='+op.chann_id+'&watch_type='+type+'&opus_id='+op.opus_id+'&content_id='+op.content_id+'&quality=1';
	            	if(op.page) auth_url+='&num='+op.page;
	            	window.location.href=auth_url;	
	            });
	        }
        }
    },
    error:function (request, status, err) {
    	$("body").append('<div class="sq_tips">请检查您的网络</div>');
        setTimeout(function() {
            $(".sq_tips").remove();
        }, 1500);
    }
	});
}
/**增加浏览记录*/
function addScan(page,con){
	  var opus_id = dm_getp('opus_id');
	  var chann_id = dm_getp('chann_id');
	  var content_id = dm_getp('content_id');
      if(con){
    	  content_id = con;
      }
	  $.ajax({url:add_url,type:'get',data:{chann_id:chann_id,opus_id:opus_id,content_id:content_id,page:page}});
}
/**评论提交*/
function subComment(){
	   var commentTxt = $('#rl_exp_input');
	   var txt = commentTxt.val();
	   var chann_id = dm_getp('chann_id');
	   if(txt==''){
	       layer.open({
	            content: '评论内容为空！',
	            style: 'background:rgba(0,0,0,.8); color:#fff; border:none;text-align:center',
	            time: 2
	        });
	   }else{
	       var opusId = dm_getp('opus_id');
	       $.ajax({url:comm_url,type:'post',dataType:'text',data:{
					chann_id:chann_id,
					comment_content:txt,
					opus_id:opusId,
					is_check:'1'
				},success:function(d){
				    var d = eval('('+d+')');
					if(d.sso){
					  var h = window.location.href+"&fromLogin=1";
					 var url = d.sso+'&service='+encodeURIComponent(h);
		              window.location.href=url;
					    return;
					}
				    if(d.code==0){
				       commentTxt.val('');
				    }
				     layer.open({
		                content:d.msg,
		                style: 'background:rgba(0,0,0,.8); color:#fff; border:none;text-align:center',
		                time: 2
		            });
				},
		        error:function (request, status, err) {
		        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
			        setTimeout(function() {
			            $(".sq_tips").remove();
			        }, 1500);
		        }
			});
			
	   }
}
/**设置继续订购url*/
function markOrderContinue(h){
	if(!h)
	 h =  window.location.href;
	 setVal('order_prev',h);
}
/**设置订购回退url*/
function markOrderback(h){
	if(!h)
	 h =  window.location.href;
	 setVal('order_back',h);
}
/**进入继续订购*/
function orderContinue(){
	  var prev = getVal('order_prev');
	  window.location.href=prev;
}
/**订购返回*/
function orderback(){
  var back = getVal('order_back');
  window.location.href=back;
}
/**
 * 主页menu高亮显示
 */
function indexMenuHighligh(){
	 var url = window.location.pathname;
     if(url.indexOf('comic/index')!=-1){
  	   $("#index_i2").addClass("cur");
     }else if(url.indexOf('cartoon/index')!=-1){
  	   $("#index_i3").addClass("cur");
     }else if(url.indexOf('brand/index')!=-1){
  	   $("#index_i4").addClass("cur");
     }else if(url.indexOf('hero/')!=-1){
  	   $("#index_i5").addClass("cur");
     }else if(url.indexOf('fun/index')!=-1){
  	   $("#index_i6").addClass("cur");
     }else if(url.indexOf('app/index')!=-1){
  	   $("#index_i7").addClass("cur");
     }else if(url.indexOf('edu/index')!=-1){
  	   $("#index_i8").addClass("cur");
     }else if(url.indexOf('ms/index')!=-1 || url.indexOf('zqzq/')!=-1){
  	   $("#index_i9").addClass("cur");
     }else if(url.indexOf('bout/index')!=-1){
  	   $("#index_i10").addClass("cur");
     }else if(url.indexOf('area/index')!=-1){
  	   $("#index_i11").addClass("cur");
     }
     else{
         $("#index_i1").addClass("cur");
     }
}
/**else if(url.indexOf('audio/index')!=-1){
  	   $("#index_i12").addClass("cur");
     }
 * 包月menu高亮显示
 */
function pkgMenuHighligh(){
	 var url = window.location.pathname;
     if(url.indexOf('info/dmb')!=-1){
  	   $("#b_index_1").addClass("cur");
     }else if(url.indexOf('info/dfb')!=-1){
  	   $("#b_index_2").addClass("cur");
     }else if(url.indexOf('info/dmzz')!=-1){
  	   $("#b_index_3").addClass("cur");
     }else if(url.indexOf('info/brand')!=-1){
  	   $("#b_index_4").addClass("cur");
     }
}
/**取消包月*/
function unsub(b,name){
     b = $(b);
    layer.open({
         title: [
             '退订包月',
             'background-color:#ff5000; color:#fff;width:100%'
         ],
         content: '您确定要退订'+name+'?',
         btn: ['确认', '取消'],
         style: 'width:80%;background-color:#fff; border:none;',
         yes: function(){
        	  
		       $.ajax({url:unsub_url,data:{product_id:b.attr('id'),product_type:b.attr('type')},
		               success:function(d){
		            	   layer.closeAll();
		            	  d = eval('('+d+')');
		            	  if(d.code==0){
		            		 layer.open({ content: d.msg});
		            	     history.go(0);
		            	  }else
		            		  layer.open({
		            			    content: '退订失败！原因:'+d.msg,
		            		  });
		               },
		   	        error:function (request, status, err) {
			        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
				        setTimeout(function() {
				            $(".sq_tips").remove();
				        }, 1500);
			        }
		       });
		    }
     });
    
 }
/**订购验证图形验证码或短信验证码*/
function suborder(){
	if($("#js_pic").css("display")=="block"){
		
		$.ajax({type:'post',url:validCode_url+'?valid_type=1&valid_code='+$('#code').val(),dataType:'text',
	        success:function(d){
	            d =eval('('+d+')');
	            var code = d.code;
	            var tips=0;
	            if(code == '1'){
	               $('#code').val("");
	               getValidCode();
	               $("body").append('<div class="sq_tips">验证码有误</div>');
		           setTimeout(function() {
		              $(".sq_tips").remove();
		           }, 1500);
		           return ;
	            }else{
	            	/*if(dm_getp('content_id')){
	        			addBuy(4,dm_getp('content_id'));
	        		}*/
	               form.submit();
	            }
	        },
	        error:function (request, status, err) {
	        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
		        setTimeout(function() {
		            $(".sq_tips").remove();
		        }, 1500);
	        }
		});
	}else if($("#js_msg").css("display")=="block"){
		//漫币订购界面需要if
		if($("#user_account").length>0 && $("#user_account").html()!=""){
			if($("#user_account").html().indexOf("@")!=-1){
				 $("body").append('<div class="sq_tips">暂不支持邮箱订购漫币</div>');
	             setTimeout(function() {
	                 $(".sq_tips").remove();
	             }, 1500);
	             return ;
			}
		}
		
		
		$.ajax({type:'post',url:validCode_url+'?valid_type=2&valid_code='+$('#msg_code').val(),dataType:'text',
	        success:function(d){
//	            d =eval('('+d+')');
	        	var c = d.split(",");
	            var code = c[0];
	            if(code == '1'){
	            	$("body").append('<div class="sq_tips">短信验证码有误</div>');
			           setTimeout(function() {
			              $(".sq_tips").remove();
			           }, 1500);
			       return ;
	            }else{
	            	/*if(dm_getp('content_id')){
        			addBuy(4,dm_getp('content_id'));
        			}*/
	               form.submit();
	            }
	        },
	        error:function (request, status, err) {
	        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
		        setTimeout(function() {
		            $(".sq_tips").remove();
		        }, 1500);
	        }
		});
	}else{
		/*if(dm_getp('content_id')){
		addBuy(4,dm_getp('content_id'));
		}*/
		form.submit();
	}
    
};
/**包月订购*/
function sub(b,tabnum){
    var f = $('form[name=f]');
    var btn = $(b);
	var id = btn.attr('id');
	var price = btn.attr('price');
	var type = btn.attr('type');
    f.find('input[name=id]').val(btn.attr('id'));
	f.find('input[name=type]').val(btn.attr('type'));
	f.find('input[name=price]').val(btn.attr('price'));
	if(tabnum){
		f.find('input[name=tabnum]').val(tabnum);
	}
	f.submit();
 }
/**增加购买记录*/
function addBuy(chann,content_id){
	var c2 = '';
	var c = dm_getp('chann_id');
	var p = dm_getp('opus_id');
	if(chann==4){
	   c2 = content_id;
	}else{
	   var f = dm_getp('free');
	   if(f=='0'){
		    c2 = dm_getp('content_id');
	   }
   }
   var local_p = getVal(c+'-'+p);
   if(!local_p){
      local_p = "";
   }
   if(local_p.indexOf(c2)==-1){
      setVal(c+'-'+p,local_p+'#'+c2);
   }
}
/**包裹已购买*/
function wrapHasBuy(){
   var c = dm_getp('chann_id');
   var p = dm_getp('opus_id');
   var local_p = getVal(c+'-'+p);
   if(local_p){
      $('#dirlist li').each(function(e){
           var s = $(this);
           if(s.attr('pid')){
	           if(local_p.indexOf(s.attr('pid'))!=-1){
	              s.addClass('ygm');
	           }
           }
      });
   }
}
/**
 * 本地设置变量   #xx#xxx格式 用于搜索过的历史记录
 */
function local_add(k,v){
	 var local_p = getVal(k);
	 if(!local_p){
	     local_p = "";
	 }
	 setVal(k,local_p+'#'+v);
}
function local_get(k){
	 var local_p = getVal(k);
	 if(!local_p){
	     local_p = "";
	 }
	 return local_p;
}
/**
 * 用于搜索过的历史记录
 */
function local_search_add(v){
	if(v){
	   var p = local_search_get();
	   var str = getVal('search-key');
	   if(p){
		   if(p.length>=8){
			   var s = '';
			   str = str.substring(str.indexOf('#',1));
			   setVal('search-key',str+'#'+v);
			   return;
		   }
	   }
	   local_add('search-key',v);
	}
}
function local_search_get(){
	var p = local_get('search-key');
	if(p!=''){
		var vs = p.split('#');
		vs=unique(vs);
		return vs;
	}
	return null;
}
/**
 * 清除搜索历史记录
 */
function clear_his(){
	setVal('search-key','');
	lay_his.hide();
}
/**
 * 把搜索历史记录 解析显示
 */
function splitHis(){
    var ks = local_search_get();
    record_his.empty();
    var keys = '';
    if(ks){
	       for(var i=ks.length-1;i>=0;i--) { 
			   var k = ks[i];
			   if(k){
	              keys += ' <li class="history" onclick = "clickToSearch3(this)"><i></i><span>'+k+'</span></li>';
	           }
		   } 
	   }
	   record_his.append(keys);
 }
/**搜索文字改变方法*/
function ch(self){
    var num=self.val().length;
    if(num>0)
    {
        var txt =self.val();
		record_asso.empty();
	    $.ajax({type:'post',url:asso_url,dataType:'json',data:{key_word:txt},
	        success:function(d){
	        	if(d.code=="0"){
	        		var list = d.list;
		            for(var i=0;i<list.length;i++){
		                var c = list[i];
		                var v='<li class="mag"  onclick = "clickToSearch3(this)"><i></i><span>'+c.recom_word+'</span></li>';
	                    record_asso.append(v);
		            }
	        	}else{
	        		$("body").append('<div class="sq_tips">'+d.msg+'</div>');
			        setTimeout(function() {
			            $(".sq_tips").remove();
			        }, 1500);
	        	}	            	            
	        }
	        /*,error:function (request, status, err) {
	        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
		        setTimeout(function() {
		            $(".sq_tips").remove();
		        }, 1500);
	        }*/
	    });
	    lay_asso.show(); 
       lay_his.hide(); 
    }else{
        splitHis();
        lay_his.show(); 
        lay_asso.hide(); 
    }
}

/**搜索点击*/
function clickSearch(s,cur_page,v){
	var key = "";
    if(v){
       key = v;
    }else{
       key = txt.val();
    }
    local_search_add(key);
    key = urlencode(urlencode(key));
    key = encode64(key);
	var btn = $(s);
	if(btn.html()=="点击加载更多"){
		btn.html("正在加载中...");
		search2(key,0,cur_page,20,1);
	 }
}
/**搜索方法*/
function search(v){
     try{
        var key = "";
         if(v){
            key = v;
         }else{
            key = txt.val();
         }
         local_search_add(key);
         key = urlencode(urlencode(key));
         key = encode64(key);
         search2(key,0,1,20);
     }catch(e){
       alert(e);
     }
    $("#all_list").hide();
    $("#layer_asso").hide(); 
    $("#layer_his").hide(); 
    $("#tabsearch").show();
    loadDj.attr("data-page",2).hide();
}
/**搜索内容*/
function search2(key,chann_id,cur_page,page_size,search_type){
	searchtext = key;
   var search_url = base_url+'?chann_id='+chann_id+'&cur_page='+cur_page+'&page_size='+page_size+'&key='+key;
   if(!search_type){
	   olist.empty();
   }
   var _loadHtml='<div class="wap_load"><p><s></s><em>正在努力加载中，请稍后...</em></p></div>';
   $("body").append(_loadHtml);
   $.ajax({type:'get',url:search_url,dataType:'json',
	        success:function(d){	 
	        	$(".wap_load").remove();
	        	if(d.code=="0"){
	        		count.html('('+d.sum_line+')');
		            sum_count = d.sum_page;
		            var list = d.list;
		            
		            for(var i=0;i<list.length;i++){
			            var c = list[i];
			            var v=document.createElement('dl');
						var content ='';
						if(typeof(c.is_third_content) != 'undefined'){
						  content+= '  <a href="'+c.opus_url+'" class="block">';
			            }else{
				            if(c.chann_id == 2){
				              content+= '  <a href="'+toComicURL+'&chann_id='+c.chann_id+'&opus_id='+c.opus_id+'" class="block">';
				            }else if(c.chann_id ==4){
				              content+= '  <a href="'+toCartoonURL+'&chann_id='+c.chann_id+'&opus_id='+c.opus_id+'" class="block">';
				            }
			            }
						content+='      <dt class="img">'+
						'          <img src="'+c.opus_url+'" alt="">'+
						'      </dt>'+
						'      <dd>'+
						'          <h3>'+c.opus_name+'</h3></dd>'+
						'      <dd><p class="limit_character">'+c.opus_desc+'</p></dd>';
						if(typeof(c.is_third_content) != 'undefined'){
						   content+= '<dd class="votes">'+c.third_content_source+'</dd>';
			            }else{
			               //console.dir(c.last_content_name);
			              content+= '<dd class="votes">'+c.last_content_name+'</dd>';
			            }
						content+='  </a>';
						v.innerHTML = content;
						olist.append(v);
						loadDj.html("点击加载更多");
			    	    if(cur_page>=sum_count){
			    	    	loadDj.hide();
			    	    }else{
			    	    	loadDj.show();
			    	    }
					  }
   
	        	}else{
	        		$("body").append('<div class="sq_tips">'+d.msg+'</div>');
			        setTimeout(function() {
			            $(".sq_tips").remove();
			        }, 1500);
	        	}
	            
	        },
	        error:function (request, status, err) {
	        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
		        setTimeout(function() {
		            $(".sq_tips").remove();
		        }, 1500);
	        }
   });
}

/**搜索内容*/
function search2page(key,chann_id,cur_page,page_size){
   var search_url = base_url+'?chann_id='+chann_id+'&cur_page='+cur_page+'&page_size='+page_size+'&key='+key;
   $.ajax({type:'get',url:search_url,dataType:'json',
	        success:function(d){
	            var list = d.list;
	            var htmls= []
              $.each(list,function(i,c){
              
                    var content ='<dl>';
					if(typeof(c.is_third_content) != 'undefined'){
					  content+= '  <a href="'+c.opus_url+'" class="block">';
		            }else{
			            if(c.chann_id == 2){
			              content+= '  <a href="'+toComicURL+'&chann_id='+c.chann_id+'&opus_id='+c.opus_id+'" class="block">';
			            }else if(c.chann_id ==4){
			              content+= '  <a href="'+toCartoonURL+'&chann_id='+c.chann_id+'&opus_id='+c.opus_id+'" class="block">';
			            }
		            }
					content+='      <dt class="img">'+
					'          <img src="'+c.opus_url+'" alt="">'+
					'      </dt>'+
					'      <dd>'+
					'          <h3>'+c.opus_name+'</h3></dd>'+
					'      <dd><p class="limit_character">'+c.opus_desc+'</p></dd>';
					if(typeof(c.is_third_content) != 'undefined'){
					   content+= '<dd class="votes">'+c.third_content_source+'</dd>';
		            }else{
		               //console.dir(c.last_content_name);
		              content+= '<dd class="votes">'+c.last_content_name+'</dd>';
		            }
					content+='  </a></dl>';
					htmls.push(content);
              });             
               olist.append(htmls.join(""));
	        },
	        error:function (request, status, err) {
	        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
		        setTimeout(function() {
		            $(".sq_tips").remove();
		        }, 1500);
	        }
   });
}
/**验证码方法  valid_img*/
function getValidCode(is_click){
    var img = $('#valid_img');
    var get_validCode_urlNew=get_validCode_url;
    if(is_click==1){
    	get_validCode_urlNew=get_validCode_url+"?is_click=1";
    }
    $.ajax({
        url:get_validCode_urlNew,type:'post',success:function(d){
        	var c = d.split(",");
            var statusCode = c[1];   
            var s = 'data:image/png;base64,'+c[0];
            switch(statusCode){
	            case "01":
	            	$("#confirm_btn").removeAttr("disabled");
	            	$("#confirm_btn").css({"color":"#ff5000","border":"1px solid #ff5000"});
	            	//$("#code").attr("disabled","false");
	            	$("#js_pic").show();
	            	$("#js_msg").hide();
	            	$(".codetip").hide();
	            	img.attr('src',s);
	            	$("input[name=valid_type]").val("1");
	            	break;
	            case "02":
	            	$("#confirm_btn").removeAttr("disabled");
	            	$("#confirm_btn").css({"color":"#ff5000","border":"1px solid #ff5000"});
	            	//$("#code").attr("disabled","false");
	            	$("#js_pic").hide();
	            	$("#js_msg").show();
	            	$("input[name=valid_type]").val("2");
	            	break;
	            case "03":	
	            	$("#confirm_btn").attr("disabled","true");
	            	$("#confirm_btn").css({"color":"#999","border":"1px solid #999"});
	            	//$("#code").attr("disabled","true");
	            	$("#js_pic").show();
	            	$("#js_msg").hide();
	            	$("#getNewPic").attr("disabled","true");
	            	$("#getNewPic").css("color","#999");
	            	$(".codetip").show();
	            	setTimeout(function(){
	            		$("#confirm_btn").removeAttr("disabled");
		            	$("#confirm_btn").css({"color":"#ff5000","border":"1px solid #ff5000"});
	            		$("#getNewPic").removeAttr("disabled");
	            		$("#getNewPic").css("color","#0081db");
	            		$("input[name=valid_type]").val("1");
	            	},600000);
	            	break;
            	default:
            		break;
            };                      
        },
        error:function (request, status, err) {
        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
	        setTimeout(function() {
	            $(".sq_tips").remove();
	        }, 1500);
        }
    });
}
/**下拉div点击搜索  用于联想词和历史记录*/
function clickToSearch3(self){
   var v = $(self);
   clickToSearch(v.find('span').html());
}
/**用于热词点击搜索*/
function clickToSearch2(self){
    var h = self.innerHTML;
    clickToSearch(h);
}

function clickToSearch(t){
    txt.val(t);
    record.hide();
    search(t);
}
/**注销*/
function dologout(){
	window.location.href=logout_url;
}
/**记录当前跳转LV 与doback()方法联用*/
function lv(l){
	setVal('_j'+l,window.location.href);
	while((l++)<20){
		setVal('_j'+l,'');
	}
}
/**返回按钮*/
function doback(lv){
	try{
		lv = lv-1;
        var url = getVal('_j'+lv);
        setVal('_j'+lv,'');
		while(url==null||url.trim()==''){
			lv -= 1;
			if(lv==-1){
			   break;
			}
			url = getVal('_j'+lv);
			 setVal('_j'+lv,'');
		}
		if(url==null||url.trim()==''){
			url = index_html;
			var l = 0;
			while((l++)<5){
				setVal('_j'+l,'');
			}
		}
		window.location.href=url;
	}catch(e){
		history.go(-1);
	}
}

/**记录当前跳转LV*/
function lv2(c,l){
	setVal('_'+c+l,window.location.href);
	while((l++)<5){
		setVal('_'+c+l,'');
	}
}
/**品牌馆专用跳转*/
function tolv2(c,lv){
	try{
		lv = lv-1;
        var url = getVal('_'+c+lv);
        setVal('_'+c+lv,'');
		while(url==null||url.trim()==''){
			lv -= 1;
			if(lv==-1){
			   break;
			}
			url = getVal('_'+c+lv);
			setVal('_'+c+lv,'');
		}
		window.location.href=url;
	}catch(e){
		history.go(-1);
	}
}
/**记录上一个url 主要用于搜索页  但不记录详情页，因为会死循环*/
function m_prev(loc){
	if(getPrevurl().indexOf('opus/detail')==-1)setVal(loc,getPrevurl());
}
/**取出   主要用于回跳url*/
function doprev(loc){
	var url = getVal(loc);
	if(url==null||url==''){
		url  =  index_html;
	}
	window.location.href=url;
}
/**
 * 评论加载
 */
function loadingComment(url,page,page_size,btn){
	var opusId = dm_getp('opus_id');
	var channId = dm_getp('chann_id');
	var commentlist = $('#comment-ul');
	isLoadCommentPending = 1;
	$.getJSON(url,{chann_id:channId,opus_id:opusId,cur_page:page,page_size:page_size},
	   function(data){
	       var list = data.list;
	       var commentArr = '';
	       for(var i=0;i<list.length;i++){
	           var c = list[i];
	           var user_url;
	           if(c.user_url==null || c.user_url==''){
	               user_url = default_img;
	           }else{
	           	   user_url = c.user_url;
	           }
				var user_name=c.user_name;
				var comment_time = c.comment_time;
				var comment_content=c.comment_content;
				//var mobile = c.mobile.substr(0,3)+'****'+c.mobile.substr(c.mobile.length-4,c.mobile.length);
			   var mobile = c.mobile;
			   var own_name = user_name==null?mobile:user_name;
	            var v='<li><div class="person">'+
							'        <span class="time fr">'+comment_time+'</span>'+
							'        <span class="img"><img src="'+user_url+'"></span>'+
							'        <span class="txt">'+own_name+'</span>'+
							'    </div>'+
							'    <p class="pl_text">'+comment_content+'</p></li>';
	            commentArr+= v;
			}
	       commentlist.append(commentArr);
	       $(".pl_text").each(function(){
	    	   var comment=rl_exp.parseComment($(this).html());
	    	   comment=parseClientComment(comment);
	    	   $(this).html(comment);
	    	   
	       });
	       isLoadCommentPending = 0;
	       hasLoadedComment = 1;
	       if(btn){
			   if((parseInt(comment_num/comment_page_size)+1)==page){
				   btn.hide();
			   }else{
				   btn.html("点击加载更多");
			   }
		   
	       }
	 	});
}
/**追加加载按钮*/
function appendLoadBtn(id,eventStr){
	  var p_div = $('#'+id);
	  p_div.append('<div class="loadmore"><button id="load" class="btn_red" onclick="'+eventStr+'">点击加载更多</button></div>');
	}
/**评论加载*/
function loadComment(page,page_size){ 
    if(!hasLoadedComment){
        loadingComment(get_url,page,page_size);
  	}
}
/**点击加载评论*/
function clickLoadComment(s){
    var btn = $(s);
    btn.html("正在加载中...");
    if(!isLoadCommentPending){
	    loadingComment(get_url,++dy_page,comment_page_size,btn);
    }
}  

/**评论文本转化为客户端表情*/
function getImgUrlMapObj(key,value){
    var imgUrlMapObj = {};
    imgUrlMapObj.key = key;
    imgUrlMapObj.value = value;
    return imgUrlMapObj;
}
var imgMap = [
    getImgUrlMapObj("[求打赏]","../../../images/client_facepic/mood1.png"),  
    getImgUrlMapObj("[酷]","../../../images/client_facepic/mood2.png"),
    getImgUrlMapObj("[泪流满面]","../../../images/client_facepic/mood3.png"),
    getImgUrlMapObj("[爱你]","../../../images/client_facepic/mood4.png"),
    getImgUrlMapObj("[生气]","../../../images/client_facepic/mood5.png"),
    getImgUrlMapObj("[卖萌]","../../../images/client_facepic/mood6.png"),
    getImgUrlMapObj("[大笑]","../../../images/client_facepic/mood7.png"),
    getImgUrlMapObj("[疑问]","../../../images/client_facepic/mood8.png"),
    getImgUrlMapObj("[震惊]","../../../images/client_facepic/mood9.png"),
    getImgUrlMapObj("[哭]","../../../images/client_facepic/mood10.png"),
    getImgUrlMapObj("[怒]","../../../images/client_facepic/mood11.png"),
    getImgUrlMapObj("[哈欠]","../../../images/client_facepic/mood12.png")
                 
];
function parseClientComment(comment){
	var commentStr = comment ;      	    
	    if(typeof(commentStr) != "undefined"){
	        if(commentStr.indexOf("[") != -1)
	        {
	            for(index in imgMap)
	            {
	                var imgKey ="\\"+imgMap[index].key;
	                var imgUrl = imgMap[index].value;
	                var imgDom = "<img src = '" + imgUrl + "' alt='"+imgKey+"' title='"+imgKey+"'/>";
	                var reg = new RegExp(imgKey,"g");
	                          
	                commentStr = commentStr.replace(reg,imgDom);               
	              
	                if(commentStr.indexOf("[") == -1)
	                {
	                    break;
	                }
	            }
	        }
	     }	        
	return commentStr ;
}


/**动态加载内容*/
function loadRank_new(url){
	var ranklist=$("#ranklist");
	var detailUrl;
	var sum_page=sum_count;
	//ranklist.html("<p style='margin:20px auto'>加载中，请稍后</p>");
	$.getJSON(url,function(json) {
		//var sum_page=json.sum_page;
		//var sum_page=sum_count;
		if(json.sum_page!=undefined){
			sum_page=json.sum_page;
		}
		var list=json.plist;
		var htmls=[];
		 if(url.indexOf("hero")!=-1){
            $.each(list,function(i,c){  
		    	var channid=c.chann_id;		    	
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+'<p class="list_free">免费</p>'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="update">投票：'+c.votecount+'</dd></a></dl>');
	        });
		}else{
		    $.each(list,function(i,c){
		    	var channid=c.chann_id;
		    	var detailUrl;
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'o_id='+c.content_id+'&chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="votes">'+c.last_content_name+'</dd></a></dl>');
	        });
		}
	    ranklist.html(htmls.join(""));
	    if(next_page>sum_page){
	    	$("#load").hide();
	    }else{
	    	$("#load").show();
	    }
	});
}
/**政企详情页动态加载内容*/
function loadZqRank_new(url){
	var ranklist=$("#ranklist");
	var detailUrl;
	var sum_page=sum_count;
	//ranklist.html("<p style='margin:20px auto'>加载中，请稍后</p>");
	$.getJSON(url,function(json) {
		//var sum_page=json.sum_page;
		//var sum_page=sum_count;
		if(json.sum_page!=undefined){
			sum_page=json.sum_page;
		}
		var list=json.plist;
		var htmls=[];
		if(url.indexOf("hero")!=-1){
            $.each(list,function(i,c){  
		    	var channid=c.chann_id;		    	
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'&chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="update">人气：'+c.opus_attention+'</dd></a></dl>');
	        });
		}else{
		    $.each(list,function(i,c){
		    	var channid=c.chann_id;
		    	var detailUrl;
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'&chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="votes">'+c.last_content_name+'</dd></a></dl>');
	        });
		}
	    ranklist.html(htmls.join(""));
	    if(next_page>sum_page){
	    	$("#load").hide();
	    }else{
	    	$("#load").show();
	    }
	});
}

function clickLoad(s,url){
	var btn = $(s);
	if(btn.html()=="点击加载更多"){
		btn.html("正在加载中...");
		var loc=window.location.href;

		if(loc.indexOf("/hero")!=-1 || loc.indexOf("/mytopic")!=-1){

			loadTopic(url,btn);
		}else{
			loadMoreContent(url,btn);
		}
		
	 }else{
		 
	 }
}
 
function loadMoreContent(url,btn){
	var ranklist=$("#ranklist");
	var detailUrl;
	var sum_page=sum_count;
	$.getJSON(url,function(json) {
		if(json.sum_page!=undefined){
			sum_page=json.sum_page;
		}
	
		var list=json.plist;
		var htmls=[];	
		var detailUrl;
		if(url.indexOf("brand")!=-1){
            detailUrl=brandDetailUrl;
 			$.each(list,function(i,c){
	                  
		        htmls.push("<a href='"+detailUrl+"brand_id="+c.brand_id+"'>");
		        htmls.push("<dl><dt class='img'><img src='.."+c.brand_url+"' alt='"+c.brand_name+"'></dt>");
		        htmls.push("<dd><h3>"+c.brand_name+"</h3></dd>");
		        htmls.push("<dd class='works_hua'>"+getDesc(c.brand_desc)+"</dd></dl></a>");
	        });
		}else if(url.indexOf("hero")!=-1){
            $.each(list,function(i,c){  
		    	var channid=c.chann_id;		    	
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="update">投票：'+c.votecount+'</dd></a></dl>');
	        });
		}else{
			$.each(list,function(i,c){  
		    	var channid=c.chann_id;		    	
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'o_id='+c.content_id+'&chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+'<p class="list_free">限免</p>'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="votes">'+c.last_content_name+'</dd></a></dl>');
	        });
		}
	   
	    ranklist.append(htmls.join(""));
	    btn.html("点击加载更多");
	    next_page++;
	    
	    if(next_page>sum_page){
	    	btn.hide();
	    }else{
	    	btn.show();
	    }
	});
} 
/**
 * 政企专区加载更多
 * @param s
 * @param url
 */
function clickZqLoad(s,url){
	var btn = $(s);
	
	if(btn.html()=="点击加载更多"){
		btn.html("正在加载中...");
		loadMoreZqContent(url,btn);
	 }else{
		 
	 }
}
function loadMoreZqContent(url,btn){
	var ranklist=$("#ranklist");
	var detailUrl;
	var sum_page=sum_count;
	$.getJSON(url,function(json) {
		
		//var sum_page=json.sum_page;
		//var sum_page=sum_count;
		if(json.sum_page!=undefined){
			sum_page=json.sum_page;
		}
	
		var list=json.plist;
		var htmls=[];	
		var detailUrl;
		if(url.indexOf("brand")!=-1){
            detailUrl=brandDetailUrl;
 			$.each(list,function(i,c){
	                  
		        htmls.push("<a href='"+detailUrl+"brand_id="+c.brand_id+"'>");
		        htmls.push("<dl><dt class='img'><img src='"+c.brand_url+"' alt='"+c.brand_name+"'></dt>");
		        htmls.push("<dd><h3>"+c.brand_name+"</h3></dd>");
		        htmls.push("<dd class='works_hua'>"+getDesc(c.brand_desc)+"</dd></dl></a>");
	        });
		}else if(url.indexOf("hero")!=-1){
            $.each(list,function(i,c){  
		    	var channid=c.chann_id;		    	
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="update">人气：'+c.opus_attention+'</dd></a></dl>');
	        });
		}else{
			$.each(list,function(i,c){  
		    	var channid=c.chann_id;		    	
			    if(channid=='2'){
			        detailUrl=comicDetailUrl;
			    }else{
			        detailUrl=cartoonDetailUrl;
			    }
	            htmls.push('<dl><a href="'+detailUrl+'&chann_id='+channid+'&opus_id='+c.opus_id+'&order_by=0&cur_page=1&page_size=20"><dt class="img">'+
	                  '<img src="'+c.opus_url+'" alt="">'+
	              '</dt>'+
	              '<dd>'+
	                  '<h3>'+c.opus_name+'</h3></dd>'+
	              '<dd><p class="limit_character">'+c.opus_desc+'</p></dd>'+
	              '<dd class="votes">'+c.last_content_name+'</dd></a></dl>');
	        });
		}
	   
	    ranklist.append(htmls.join(""));
	    btn.html("点击加载更多");
	    next_page++;
	    
	    if(next_page>sum_page){
	    	btn.hide();
	    }else{
	    	btn.show();
	    }
	});
} 
/*加载话题列表*/
function loadTopic(url){
	/*找url中的startId值*/
	var old_startId="";
	if(url.indexOf("startId")!=-1){
		var urlChi=url.split("?");
		var urlChiChi=urlChi[1].split("&");
		for(var k=0;k<urlChiChi.length;k++){
			if(urlChiChi[k].indexOf("startId")!=-1){
				var p=urlChiChi[k].split("=");
				old_startId=p[1];
				
				break;
			}
		}
	}

	$.getJSON(url,function (data) {		
		var list = data.list;
        startId = data.startId;
        
        var htmls = [];
        var guanzhu;
        var imgs="";  
        var locationUrl=window.location.href;

            $.each(list, function (i, c) {

				if(firstId==c.topic_id){
					$("#load").hide();
					return false;
				}
            	if(c.allowdelete==true){
            		guanzhu='<a href="" class="topic_notice js_delete" data-id="'+c.topic_id+'">删除</a>';
            	}else{

					if(c.isFllower==true){
						guanzhu='<a href="" class="topic_notice noticed js_notice" data-id="'+c.creartor+'">已关注</a>';
					}else{
						guanzhu='<a href="" class="topic_notice  js_notice" data-id="'+c.creartor+'">+关注</a>';
					}

				}
            	var topicDetail=topicDetailUrl;
            	topicDetail=topicDetail+'topic_id='+c.topic_id;
            	
            	if(c.img_url1 != null){
            		imgs+='<a href="'+c.img_url1+'"><img src="'+c.img_url1+'"></a>';
            	}
            	if(c.img_url2 !=null){
            		imgs+='<a href="'+c.img_url2+'"><img src="'+c.img_url2+'"></a>';
            	}
            	if(c.img_url3 !=null){
            		imgs+='<a href="'+c.img_url3+'"><img src="'+c.img_url3+'"></a>';
            	}
            	if(c.img_url4 !=null){
            		imgs+='<a href="'+c.img_url4+'"><img src="'+c.img_url4+'"></a>';
            	}
            	if(c.img_url5 !=null){
            		imgs+='<a href="'+c.img_url5+'"><img src="'+c.img_url5+'"></a>';
            	}
            	if(c.img_url6 !=null){
            		imgs+='<a href="'+c.img_url6+'"><img src="'+c.img_url6+'"></a>';
            	}
            	if(c.img_url7 !=null){
            		imgs+='<a href="'+c.img_url7+'"><img src="'+c.img_url7+'"></a>';
            	}
            	if(c.img_url8 !=null){
            		imgs+='<a href="'+c.img_url8+'"><img src="'+c.img_url8+'"></a>';
            	}
            	if(c.img_url9 !=null){
            		imgs+='<a href="'+c.img_url9+'"><img src="'+c.img_url9+'"></a>';
            	}            
            	var tags="";
            	if(c.tags!=null&c.tags.length!=0){
            		for(var j=0;j>c.tags.length;j++){
            			tags+='<a class="topic_tip'+(j+1)+'">'+c.tags[j]+'</a>';
            		}
            		
            	}
            	
            	if(locationUrl.indexOf("/mytopic")!=-1){
            		htmls.push('<div class="topic" style="padding-bottom:10px;border-bottom:1px solid #d9d9d9;">'+
	        		        '<div class="topic_main">'+
	    		            '<div class="topic_user clearfix">'+
	    		                '<a href="javascript:void(0);" class="user_icon">'+
	    		                    '<img src="../../../images/default.png">'+
	    		                '</a>'+
	    		                '<a href="javascript:void(0);" class="user_info">'+
	    		                    '<h5>'+c.creartorName+'</h5>'+
	    		                    '<p>'+c.create_time+'</p>'+
	    		                '</a>'+  		            	     		                    		                
	    		            '</div>'+    		          
	    		            '<a href="'+topicDetail+'" class="topic_text">'+c.topic_title+'</a>'+	                		            
	    		            '<a href="'+topicDetail+'" class="topic_text pl_text" style="margin-top:0;">'+c.topic_body+'</a>'+
	    		            '<div class="topic_img clearfix baguetteBox gallery">'+imgs+   						
	    		            '</div>'+
	    		            '<div class="topic_tip">'+tags+    		                  		               
	    		            '</div>'+
	    		        '</div>'+	    	
	    		    '</div>');
            	}else{            		            	
	                htmls.push('<div class="topic" style="padding-bottom:10px;border-bottom:1px solid #d9d9d9;">'+
	        		        '<div class="topic_main">'+
	    		            '<div class="topic_user clearfix">'+
	    		                '<a href="javascript:void(0);" class="user_icon">'+
	    		                    '<img src="../../../images/default.png">'+
	    		                '</a>'+
	    		                '<a href="javascript:void(0);" class="user_info">'+
	    		                    '<h5>'+c.creartorName+'</h5>'+
	    		                    '<p>'+c.create_time+'</p>'+
	    		                '</a>'+guanzhu+   		            	     		                    		                
	    		            '</div>'+    		          
	    		            '<a href="'+topicDetail+'" class="topic_text">'+c.topic_title+'</a>'+	                		            
	    		            '<a href="'+topicDetail+'" class="topic_text pl_text" style="margin-top:0;">'+c.topic_body+'</a>'+
	    		            '<div class="topic_img clearfix baguetteBox gallery">'+imgs+   						
	    		            '</div>'+
	    		            '<div class="topic_tip">'+tags+    		                  		               
	    		            '</div>'+
	    		        '</div>'+
	    		        '<div class="topic_bottom" style="">'+   			           
	    			       	'<a href="'+topicDetail+'" class="dz"><span></span><i class="js_dznum">'+c.emotion_num+'</i></a>'+        	            
	    		            '<a href="'+topicDetail+'" class="fx"><span></span>分享</a>'+
	    		            '<a href="'+topicDetail+'#rl_exp_input" class="pl js_pl"><span></span>'+c.coment_num+'</a>'+		            
	    		        '</div>'+
	    		    '</div>');
            	}
            });   
            $("#topic_list").append(htmls.join(""));
            if (startId !="none") {
            	$("#load").html("点击加载更多");  
            	var newUrl=url.replace(old_startId,startId);
            	$(".js_moreUrl").val(newUrl);
            	
            } else {
            	$("#load").hide();                           
            }
            
            /*关注及取消关注*/
            /*$(".js_notice").each(function(){
            	$(this).click(function(){
            		var self=$(this);
            		var index;
            		var flowerIdentiyId=self.attr("data-id");
            		$.get(ssoUrl,function(json){

            			var data = eval("("+json+")");
            			if(data.sso!=null){
            				var h = window.location.href+"&fromLogin=1";
            				h = h.replace("undefined", "");
            				h = h.replace(/ticket.+/,'');
            				var url = data.sso+'&service='+encodeURIComponent(h);
            				window.location.href=url;
            			    return;
            			}
            			if(self.hasClass('noticed')){
            				index=layer.open({
            					type:1,
            					title:false,						
            					shadeClose:true,
            					content:'<div class="score_box"><h2>提示</h2><p>您是否要取消关注</p><div class="btn"><a href="javascript:void(0);" class="cancel" id="cancel">取消</a><a href="javascript:void(0);" class="send" id="sure">确定</a></div></div>'
            				});
            			}else{
            				index=layer.open({
            					type:1,
            					title:false,						
            					shadeClose:true,
            					content:'<div class="score_box"><h2>提示</h2><p>您是否要关注</p><div class="btn"><a href="javascript:void(0);" class="cancel" id="cancel">取消</a><a href="javascript:void(0);" class="send" id="sure">确定</a></div></div>'
            				});		
            				
            				
            			}
            			$("#cancel").click(function() {
            				layer.close(index);
            			});
            			$("#sure").click(function(){
            				layer.close(index);
            				if(self.hasClass('noticed')){
            					$.ajax({
            						url:deletegzUrl+"flowerIdentiyId="+flowerIdentiyId,type:"get",success:function(result){
            							var data=eval('('+result+')');
            							//alert(data.code);
            							if(data.code=="0"){
            								self.removeClass('noticed');
            								self.html("+ 关注");	
            								$("body").append('<div class="sq_tips">取消关注成功</div>');
            							    setTimeout(function() {
            							        $(".sq_tips").remove();
            							    }, 1500);
            							}else{
            								$("body").append('<div class="sq_tips">取消关注失败</div>');
            							    setTimeout(function() {
            							        $(".sq_tips").remove();
            							    }, 1500);
            							}
            						}	,
            				        error:function (request, status, err) {
            				        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
            					        setTimeout(function() {
            					            $(".sq_tips").remove();
            					        }, 1500);
            				        }				
            					});
            								
            				}else{
            					$.ajax({
            						url:addgzUrl+"flowerIdentiyId="+flowerIdentiyId,type:"get",success:function(result){
            							var data=eval('('+result+')');
            							//alert(data.code);
            							if(data.code=="0"){
            								self.addClass("noticed");
            								self.html("已关注");
            								$("body").append('<div class="sq_tips">关注成功</div>');
            							    setTimeout(function() {
            							        $(".sq_tips").remove();
            							    }, 1500);
            							}else{
            								$("body").append('<div class="sq_tips">关注失败</div>');
            							    setTimeout(function() {
            							        $(".sq_tips").remove();
            							    }, 1500);
            							}
            						},
            				        error:function (request, status, err) {
            				        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
            					        setTimeout(function() {
            					            $(".sq_tips").remove();
            					        }, 1500);
            				        }					
            					});
            					
            				}
            				
            			});
            			
            		});			
            		return false;
            	});
            });*/
            
            /*圈子里的取消*/
            /* $(".js_delete").each(function(){
            	$(this).click(function(){
            		var self=$(this);
            		var thisid=self.attr("data-id");
            		var index;
            		if(self.hasClass('noticed')){
            			index=layer.open({
            				type:1,
            				title:false,
            						
            				shadeClose:true,
            				content:'<div class="score_box"><h2>提示</h2><p>您是否要取消关注</p><div class="btn"><a href="javascript:void(0);" class="cancel" id="cancel">取消</a><a href="javascript:void(0);" class="send" id="sure">确定</a></div></div>'
            			});
            		}else{
            			index=layer.open({
            				type:1,
            				title:false,
            						
            				shadeClose:true,
            				content:'<div class="score_box"><h2>提示</h2><p>您是否要删除该话题</p><div class="btn"><a href="javascript:void(0);" class="cancel" id="cancel">取消</a><a href="javascript:void(0);" class="send" id="sure">确定</a></div></div>'
            			});
            		}
            		$("#cancel").click(function() {
            			layer.close(index);
            		});
            		$("#sure").click(function(){
            			layer.close(index);
            			if(self.hasClass('noticed')){
            				$.ajax({
            					url:deletegzUrl+"flowerIdentiyId="+thisid,type:"get",success:function(result){
            						var data=eval('('+result+')');
            						//alert(data.code);
            						if(data.code=="0"){
            							self.parents(".topic").remove();		
            							$("body").append('<div class="sq_tips">取消关注成功</div>');
            						    setTimeout(function() {
            						        $(".sq_tips").remove();
            						    }, 1500);
            						}else{
            							$("body").append('<div class="sq_tips">取消关注失败</div>');
            						    setTimeout(function() {
            						        $(".sq_tips").remove();
            						    }, 1500);
            						}
            					},
            			        error:function (request, status, err) {
            			        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
            				        setTimeout(function() {
            				            $(".sq_tips").remove();
            				        }, 1500);
            			        }				
            				});
            						
            			}else{
            				$.ajax({
            					url:deletetpUrl+"topic_id="+thisid,type:"get",success:function(result){
            						var data=eval('('+result+')');
            						//alert(data.code);
            						if(data.code=="0"){
            							self.parents(".topic").remove();		
            							$("body").append('<div class="sq_tips">删除话题成功</div>');
            						    setTimeout(function() {
            						        $(".sq_tips").remove();
            						    }, 1500);
            						}else{
            							$("body").append('<div class="sq_tips">删除话题失败</div>');
            						    setTimeout(function() {
            						        $(".sq_tips").remove();
            						    }, 1500);
            						}
            					},
            			        error:function (request, status, err) {
            			        	$("body").append('<div class="sq_tips">请检查您的网络</div>');
            				        setTimeout(function() {
            				            $(".sq_tips").remove();
            				        }, 1500);
            			        }
            				});
            			}
            			
            		});
            		return false;
            	});
            	
            });*/
    });
}
/*过滤数组*/
function unique(dataArray){
	 var tem=[];
	 for(var i=0; i < dataArray.length; i++){
		 if(tem.indexOf(dataArray[i].replace(/\s/g,''))<0){
			tem.push(dataArray[i]); 
		 }
	 };
	 return tem; 
}

/**个人中心加载内容*/
function loadJf(id,url){
	var ranklist=id;
	$.getJSON(url,function(data) {
		if(data.sum_page!=undefined){
			sum_page=data.sum_page;
			
		}
		var list=data.list;
		var htmls=[];
		if(list.length==0){
			ranklist.append('<p class="nothing_tip">暂无数据</p>');
        }
		else{
		    $.each(list,function(i,c){
		    	var recharge_date=c.recharge_date;
				var type=c.type;
				if(type==null) type='';
				if(type=='积分兑换漫币'){
					  var v='<li><span class="date">'+c.recharge_date+'</span>'+type+'<span class="c_fe7e1d">'+c.num+'</span>积分</li>';  
				}
				else{
				  var v='<li><span class="date">'+c.recharge_date+'</span>'+type+'获得<span class="c_fe7e1d">'+c.num+'</span>积分</li>';	
				}
				 htmls.push(v); 
            });  
	     ranklist.html(htmls.join(""));
	    }
	    if(sum_page<2){
	    	ranklist.parent(".con").find(".loadDj").hide();
	    }else{
	    	ranklist.parent(".con").find(".loadDj").show();
	    }
	});
}

function clickJf(id,s,url){
	var btn = $(s);
	var id = id;
	if(btn.html()=="点击加载更多"){
		btn.html("正在加载中...");
		loadMoreJf(id,url,btn);	
	 }
}

function loadMoreJf(id,url,btn){
	var ranklist=id;
	$.getJSON(url,function(json) {
		if(json.sum_page!=undefined){
			sum_page=json.sum_page;
		}
		var list=json.list;
		var htmls=[];	
	    $.each(list,function(i,c){  
	    	var type=c.type;
			if(type==null) type='';
			if(type=='积分兑换漫币'){
			  var v='<li><span class="date">'+c.recharge_date+'</span>'+type+'<span class="c_fe7e1d">'+c.num+'</span>积分</li>';  
			}
			else{
			  var v='<li><span class="date">'+c.recharge_date+'</span>'+type+'获得<span class="c_fe7e1d">'+c.num+'</span>积分</li>';	
			}
		     htmls.push(v);  
        });
	    ranklist.append(htmls.join(""));
	    $(btn).html("点击加载更多");
	    if(_thispage>sum_page){
	    	$(btn).hide();
	    }else{
	    	$(btn).show();
	    }
	});
} 


//爱分享首页头部tab选项卡高亮显示
function sxafxMenuHighligh(){
	var url = window.location.pathname;
    if(url.indexOf('sxshare/comicenjoy')!=-1){
 	   $("#sx_i2").addClass("on");
    }else if(url.indexOf('sxshare/mydmby')!=-1 || url.indexOf('sxshare/mydmzz')!=-1){
 	   $("#sx_i3").addClass("on");
    }
    else{
        $("#sx_i1").addClass("on");
    }
}

//咪咕动漫客户端头部tab选项卡高亮显示
function hdmMenuHighligh(){
	var url = window.location.pathname;
    if(url.indexOf('bout/index.html')!=-1){
 	   $("#hdm2").addClass("current");
    }else if(url.indexOf('ms/index.html')!=-1){
 	   $("#hdm3").addClass("current");
    }else if(url.indexOf('area/index.html')!=-1){
 	   $("#hdm4").addClass("current");
    }
    else{
        $("#hdm1").addClass("current");
    }
}
//banner图切换
function addLi(indexSlide, pointer){
	var _slide=$(indexSlide), _ulLen=_slide.find("li").length, _htmlLi='';
	for(var i=0;i<_ulLen;i++){
		_htmlLi +="<li></li>";
	}
	_slide.parent().find(pointer).find("ul").append(_htmlLi);
	$(pointer).find("li:eq(0)").addClass("on");
};
	// 广告点击
	var ad_click=function(obj){
		event.stopPropagation();
		event.preventDefault();
		var self=$(obj),clickUrl=self.attr("data-url"),clickHurl=self.attr("data-href"), clickJCUrl=self.attr("href");
				var img = new Image();
				img.src = clickUrl; 
				
				var img_1 = new Image();
				img_1.src = clickHurl; 
				setTimeout(function(){
					window.location.href=clickJCUrl;
				},200);						
	};
	
















