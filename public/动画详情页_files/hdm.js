$(function(){
	
	// 返回顶部
       window.onscroll=function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var deviceHeight = $(window).height();
        if(scrollTop >= deviceHeight/2){
            $("#goTop").parent().fadeIn();
        }
        else{
           $("#goTop").parent().fadeOut();
        }
     }
     $("#goTop").on("click",function(e){
            e.preventDefault();
            window.scrollTo(0,0);
    });
		
    // 首页导航弹出层滚动隐藏
     $(window).scroll(function(){
      var osTop= document.documentElement.scrollTop || document.body.scrollTop;
      if(osTop>1)
        {
         $(".nav_con").hide();
         $("#dialogToggle").find("i").removeClass("icon-xiangshang").addClass("icon-xiangxia");
       }
      })
//  点击弹出层以外空白地方关闭
    $("body > *").click(function(){
	   $(".nav_con").hide(); 
	   $("#dialogToggle").find("i").removeClass("icon-xiangshang").addClass("icon-xiangxia")
     });
     $(".nav_con").on("click",function(event){
    	 event.stopPropagation();
     });
     //导航栏目切换展示
     $("#dialogToggle").on("click",function(event) {
    	 event.stopPropagation();
          $(".nav_con").toggle();
          var arrowIcon=$(this).find("i");
           if(arrowIcon.hasClass("icon-xiangxia")){
             arrowIcon.removeClass("icon-xiangxia").addClass("icon-xiangshang")
           }else {
             arrowIcon.removeClass("icon-xiangshang").addClass("icon-xiangxia") 
            }
    }) 
    // 子头部目录显示隐藏
   $("#menu").on("click",function(event) {
	   event.stopPropagation();
      $(".nav_con").toggle();
    })   
});
