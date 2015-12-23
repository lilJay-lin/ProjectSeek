var dm = $(this);
var urls;
var preurl;
var nexturl;
var dx;

$(window).scroll(function() {
	/*if($(".mask").css("display") == "none") {
	  $(".header").hide();
	  $(".footer").hide();
	} else {
	  $(".header").show();
	  $(".footer").show();
	}*/
	$(".header").hide();
	$(".footer").hide();
	$(".progress").hide();
	$("#fangye").css("color", "#999");
	$("#fangye").find("img").attr("src", "../images/comic/yd_page.png");
	
});

$(function() {
	
		var w = $(window).width();
		var progressw = w * 0.7;
		
		urls = $("#cmepubdata").text();
		preurl=$(".preurl").text();
		nexturl=$(".nexturl").text();
		
		var url = location.search;
		var pagenum = 1;
		var pagenum2 = '';
		
		if (url.indexOf("?") != -1) {
		  var str = url.substr(1);
		  strstrs = str.split("&");
		
		  for (var i = 0; i < strstrs.length; i++) {
		    if (strstrs[i].indexOf("num=") >= 0) {
		      pagenum = strstrs[i].split("=")[1];
		    };
		  }
		}
		
		if (pagenum == 1) {
		  pagenum2 = '';
		} else {
		  pagenum2 = pagenum;
		}
		try{
		  var jzreg = /readmode=ft;/g;
		  if (jzreg.test(document.cookie)) {
		  	  $(".fy").addClass('active');
		      $(".jz").removeClass('active');
		        dm.JCPlayer({
		          urls: urls,
		          mode: 'horizontal',
		          dmNum: '.zys',
		          dmNow: '.dqy',
		          toNum: pagenum2,
		          pUnit:preurl,
		          nUnit:nexturl
		        });
		  } else {
		        $(".jz").addClass('active');
		        $(".fy").removeClass('active');
		        dm.JCPlayer({
		          urls:urls,
		          mode:'vertical',
		          dmNum:'.zys',
		          dmNow:'.dqy',
		          toNum: pagenum2,
		          pUnit:preurl,
		          nUnit:nexturl
		        });
		  }
	}catch(e){
		console.dir('错误' + e.message + '发生在' +   e.lineNumber + '行');
	}
		  
		setTimeout(function(){
		  $(window).bind("scroll",function(){
		      gdping();
		  });
		},1000);
		
		
		$(".mask").click(function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		});
		
		$(".footer").click(function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		});
		
		$(".patternT").click(function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		});
		
		$(".list").click(function(event){
		  event.preventDefault();
		  event.stopPropagation();
		});
		
		$(".list>ul").find("li").click(function() {
		  event.stopPropagation();
		});
		
		
		$(".p_mk").click(function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		  var add = $(this).attr('a');
			
	      var img = $(this).find("img");
	      var p = $(".p_mk").find("p");
	      img.attr("src", "../images/comic/yd_tipo.png");
		  
		  var numm = JCPlayer.JCPnow();
		  if (numm == undefined) {
		    numm = 1;
		  }
		  event.preventDefault();
		  var opusId = dm_getp('opus_id');
		  var contentId = dm_getp('content_id');
		  var page = numm;
		  $.get(add,{
			        content_id:contentId,
			        page:page,
					chann_id:2,
					quality:1,
					opus_id:opusId,
				},function(ret){ 
				   //console.dir(ret);
				   var data = eval('('+ret+')');
				   if(data.sso){
						 var h = window.location.href+"&fromLogin=1";
						 var url = data.sso+'&service='+encodeURIComponent(h);
			             window.location.href=url;
						 return;
					}
				   img.attr("src", "../images/comic/yd_tip.png");
				   if (data.code == 0) {
				      p.addClass("hcolor");
				      $(".success").show()
				      $(".success p").text("书签保存成功");
				    } else if (data.msg.indexOf('已添加')!=-1) {
				      p.addClass("hcolor");
				      $(".success").show()
				      $(".success p").text("书签已经添加");
					} else {
				      p.removeClass("hcolor");
				      $(".success").show()
				      $(".success p").text("对不起，系统忙，请稍后再试！");
				    }
				   stop();
		   });
		});

		$("#fangye").click(function(event) {
		  event.preventDefault();
		  event.stopPropagation();
		  
		  
		  var total = JCPlayer.JCPnum();
		  var nownum=JCPlayer.JCPnow();
		  dx = (nownum- 1) / total * progressw;
		  var offx = dx + "px";
		  $(".orange").css("width", dx + 5);
		  $("#target").css('-webkit-transform', 'translate3d(' + offx + ',0,0)');
		  $(".progress").toggle();
		
		  var imgsrc = $(this).find("img").attr("src");
		  if (imgsrc == "../images/comic/yd_page.png") {
		    $(this).find("p").addClass("hcolor");
		    $(this).find("img").attr("src", "../images/comic/yd_pageh.png");
		    
		  } else {
		    $(this).find("p").removeClass("hcolor");
		    $(this).find("img").attr("src", "../images/comic/yd_page.png");
		    
		  }
		  $("#menu").find("p").removeClass("hcolor");
		  $("#menu").find("img").attr("src", "../images/comic/yd_list.png");
		  $(".mask").hide();
		});
		
		$(".shouc").click(function(e) {
			 var add =  $(this).attr('a');
			 var canc =  $(this).attr('c');
			 var img = $(this).find("img");
			 var is_favor = img.attr('f');
			 var opusId = dm_getp('opus_id');
			 var p = $(".shouc").find("p");
			 var sctxt = p.text();
			 e.preventDefault();
			 
			 if(is_favor==0){
			   $.get(add,{
						chann_id:2,
						opus_id:opusId,
					},function(ret){ 
					   //console.dir(ret);
						var data = eval('('+ret+')');
						if(data.sso){
							 var h = window.location.href+"&fromLogin=1";
							 var url = data.sso+'&service='+encodeURIComponent(h);
				             window.location.href=url;
							 return;
						}
						$(".success").show();
				        $(".success p").text("已收藏");
				        p.addClass("hcolor");
				        p.text("已收藏");
					    img.attr('src','../images/comic/yd_favh.png');
					    img.attr('f','1');
			    });
			 }else{
				 $.get(canc,{
						chann_id:2,
						opus_id:opusId,
					},function(ret){ 
						//console.dir(ret);
						var data = eval('('+ret+')');
						 $(".success").show();
				         $(".success p").text("已取消");
				         p.removeClass("hcolor");
				         p.text("收藏");
						 img.attr('src','../images/comic/yd_fav.png');
						 img.attr('f','0');
				 });
			 }
			 stop();
		
		});
		/**
		$("#menu").click(function() {
		  var menuico = $(this).find("img").attr("src");	
			
		  $("#fangye").find("p").removeClass("hcolor");
		  
		  if (menuico == "../images/comic/yd_list.png") {
		    $(this).find("p").addClass("hcolor");
		    $(this).find("img").attr("src", "../images/comic/yd_listo.png");
		    JCPlayer.JCPtc("0");
			
		  } else {
		    $(this).find("p").removeClass("hcolor");
		    $(this).find("img").attr("src", "../images/comic/yd_list.png");
		    JCPlayer.JCPtc("1");
			
		  }
		
		  $("#fangye").find("img").attr("src", "../images/comic/yd_page.png");
		  $(".progress").hide();
		  $(".mask").toggle();
		  
		  event.stopPropagation();
		});
		*/
		
		$(".active1").closest("ul").removeClass("hidden");
		/*
		$(".jishu").click(function() {
		  $(".list ul").not($(this).next()).animate({height:0},500);
		  $(this).next().css("height","auto");
			
		  $(".or").not($(this).find(".or")).show();
		  $(".and").not($(this).find(".and")).hide();
		  $(this).find("span").toggle();
		});
		*/
});

function gdping(){
    
 /* if($(".mask").css("display") == "none") {
    $(".header").hide();
    $(".footer").hide();
  } else {
    $(".header").show();
    $(".footer").show();

  }*/
  $(".header").hide();
  $(".footer").hide();
  $(".progress").hide();
  $("#fangye").css("color", "#999");
  $("#fangye").find("img").attr("src", "../images/comic/yd_page.png");
  
}
function ft(event) {
  event.stopPropagation();
  $(".fy").addClass('active');
  $(".jz").removeClass('active');
  
    $(".patternT").hide();
    
    var pagenumm=$(".dqy").html();
    if(pagenumm==1){pagenumm=''}
    dm.JCPlayer({
      urls: urls,
      mode: 'horizontal',
      rm: '1',
      dmNum: '.zys',
      dmNow: '.dqy',
      toNum: pagenumm,
      pUnit:preurl,
      nUnit:nexturl
    });
  setTimeout(function(){
    $(window).bind("scroll",function(){
        gdping();
    });
  },1000);
 var date = new Date();
 if (/readmode=jz/.test(document.cookie)) {
    date.setTime(date.getTime()-1);
    document.cookie = "readmode=jz; expires="+date.toGMTString();
 }
date.setTime(date.getTime()+30*60*1000);
document.cookie = "readmode=ft; expires="+date.toGMTString();
 
}

function yemoshi() {
   var pagenumm=$(".dqy").html();
    if(pagenumm==1){pagenumm=''}
  dm.JCPlayer({
    urls: urls,
    mode: 'horizontal',
    rm: '1',
    dmNum: '.zys',
    dmNow: '.dqy',
    toNum: pagenumm,
    pUnit:preurl,
    nUnit:nexturl
  });
  $(".patternT li").removeClass("active");
  $(".patternT li").eq(0).addClass("active");
  $(".patternT").hide();

}

function zhenmoshi() {
   var pagenumm=$(".dqy").html();
    if(pagenumm==1){pagenumm=''}
  dm.JCPlayer({
    urls: urls,
    mode: 'horizontal',
    frame: '4',
    rm: '1',
    dmNum: '.zys',
    dmNow: '.dqy',
    toNum: pagenumm,
    pUnit:preurl,
    nUnit:nexturl
  });
  $(".patternT li").removeClass("active");
  $(".patternT li").eq(1).addClass("active");
  $(".patternT").hide();
   
}

function hunhemoshi() {
   var pagenumm=$(".dqy").html();
    if(pagenumm==1){pagenumm=''}
  dm.JCPlayer({
    urls: urls,
    mode: 'horizontal',
    frame: '3',
    rm: '1',
    dmNum: '.zys',
    dmNow: '.dqy',
    toNum: pagenumm,
    pUnit:preurl,
    nUnit:nexturl
  });

  $(".patternT li").removeClass("active");
  $(".patternT li").eq(2).addClass("active");
  $(".patternT").hide();
  
}

function jz(event) {
  event.stopPropagation();
   var pagenumm=$(".dqy").html();
    if(pagenumm==1){pagenumm=''}
  dm.JCPlayer({
    urls:urls,
    mode:'vertical',
    rm:'1',
    dmNum:'.zys',
    dmNow:'.dqy',
    toNum: pagenumm,
    pUnit:preurl,
    nUnit:nexturl
  });
  $(".patternT").hide();
  $(".patternT li").removeClass("active");
  $(".jz").addClass('active');
  $(".fy").removeClass('active');
 


 setTimeout(function(){
    $(window).bind("scroll",function(){
        gdping();
    });
  },1000);
 var date = new Date();
 if (/readmode=ft/.test(document.cookie)) {
    date.setTime(date.getTime()-1);
    document.cookie = "readmode=ft; expires="+date.toGMTString();
 }
date.setTime(date.getTime()+30*60*1000);
document.cookie = "readmode=jz; expires="+date.toGMTString();
}





function ajaxLogin(method, url) {
  $.post('/m/dm/isl', {}, function(result) {
    if ("true" == result) {
      var fun = new Function(method + "('" + url + "');");
      fun();
    } else if ("false" == result) {
      var msg = method + "___" + url;
      //$.post("/m/dm/smfs", {"msg": msg}, function() {});
      var ssoUrl = "http://wap.dm.10086.cn/auth/login?renew=1&display=pbs&service=";

      var service = window.location.href;
      var s = service.split(/ticket\=[^\&]*/);
      service = s[0] + s[1];
      service = service.replace("undefined", "");
      service = encodeURIComponent(service);
      ssoUrl += service;
	  if($('.dis_ssourl').val()=='discover'){
		window.location.href = ssoUrl+"&cc=15082128";
	  }else{
		window.location.href = ssoUrl;
	  }
    } else {
      alert(result);
    }
  });
}

function mk(url) {
  $.post(url, function(result) {

    if (result == "success") {
      $(".p_mk").find("p").addClass("hcolor");
      $(".p_mk img").attr("src", "../images/comic/yd_tip.png");
      $(".success").show()
      $(".success p").text("书签保存成功");
      stop();
    } else if (result == "fail") {
      $(".p_mk").find("p").removeClass("hcolor");
      $(".p_mk img").attr("src", "../images/comic/yd_tip.png");
      $(".success").show()
      $(".success p").text("保存失败！");
      stop();
    } else if (result == "exist") {
      $(".p_mk").find("p").addClass("hcolor");
      $(".p_mk img").attr("src", "../images/comic/yd_tip.png");
      $(".success").show()
      $(".success p").text("已保存");
      stop();
    }
  });
}


function shc(url) {

  event.preventDefault();
  var n_href = $(".shouc").attr("name");
  var v_href = $(".shouc").attr("value");

  $.ajax({
    type: "post",
    url: url,
    success: function(html) {

      var sctxt = $(".shouc").find("p").text();

      if (sctxt == "已收藏") {
        $(".success").show();
        $(".success p").text("已取消");
        $(".shouc").attr("href", v_href);
        $(".shouc").find("p").removeClass("hcolor");
		$(".shouc").find(".dis_ico").removeClass("dis_migu");
        $(".shouc img").attr("src", "../images/comic/yd_fav.png");
        $(".shouc p").text("收藏");
        stop();
      } else if (sctxt == "收藏") {
        $(".success").show();
        $(".success p").text("已收藏");
        $(".shouc").attr("href", n_href);
        $(".shouc").find("p").addClass("hcolor");
        $(".shouc img").attr("src", "../images/comic/yd_favo.png");
        $(".shouc p").text("已收藏");
        stop();
      }
    },
  });

}

function stop() {
  setTimeout(
    function() {
      $('.success').fadeOut();
    }, 1000);
}
function goback(h){
	if(JCPlayer)
	  addScan(JCPlayer.JCPnow());
	window.location.href=h;
}