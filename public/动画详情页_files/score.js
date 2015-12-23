var myscore=0;
var scoreflag=0;
$("#score").click(function(){
	scoreflag=0;
	if($("#score").attr("data-do")=="0"){
		if($(".my_score").val()<0){
			var url=$(".query_score").val()+"chann_id="+dm_getp('chann_id')+"&opus_id="+dm_getp('opus_id');
			$.get(url,function(json){			
				var data = eval("("+json+")");
				if(data.sso!=null){
				    //sso();
					 var h = window.location.href+"&fromLogin=1";
					 var url = data.sso+'&service='+encodeURIComponent(h);
		              window.location.href=url;
				    return;
				}
				var index=layer.open({
					type:1,
					title:false,
				
					shadeClose:true,
					content:'<div class="score_box"><h2>作品评分</h2><ul><li></li><li></li><li></li><li></li><li></li></ul><div class="btn"><a href="javascript:void(0);" class="cancel" id="cancel">取消</a><a href="javascript:void(0);" class="send" id="send">提交</a></div></div>'
				});
				$(".score_box li").each(function(i){
					$(this).on('click',function() {
						$(".score_box li").css("background","url(../../../images/grayStar.png) no-repeat");
						$(".score_box li").css("background-size",".54rem auto");
						for(var j=0;j<=i;j++){
							$(".score_box li").eq(j).css("background","url(../../../images/orangeStar.png) no-repeat");
							$(".score_box li").eq(j).css("background-size",".54rem auto");
						}
						myscore=2*(i+1);
						scoreflag=1;
					});
				});
				$("#cancel").click(function() {
					layer.close(index);
				});
				$("#send").click(function() {
					if(scoreflag==1){											
					var url=$(".score_url").val()+"chann_id="+dm_getp('chann_id')+"&opus_id="+dm_getp('opus_id')+"&scores="+myscore;
					$.get(url,function(json){
						var data = eval("("+json+")");
						if(data.code=="0"){
							var scores=data.totalScore;
							if(scores.indexOf(".")!=-1){
								var fenshu=scores.split(".");
								$(".integer").html(fenshu[0]);
	                            $(".decimal").html("."+fenshu[1].substring(0,1));
							}else{
								$(".integer").html(scores);
	                            $(".decimal").html("");
							}														
							layer.close(index);
                            
							$("#score").html("已评分");
						    $("#score").attr("data-do","1");
						    $("body").append('<div class="sq_tips">感谢您的评分</div>');
				            setTimeout(function() {
				                $(".sq_tips").remove();
				            }, 1500);
						}
					});	
					}else{
						  $("body").append('<div class="sq_tips" style="z-index:20000000">您还未评分</div>');
				            setTimeout(function() {
				                $(".sq_tips").remove();
				          }, 1500);
					}
				});
			});
		}else{
			$("body").append('<div class="sq_tips">您已评过分了</div>');
	        setTimeout(function() {
	            $(".sq_tips").remove();
	        }, 1500);
		}
		
	}else{
		$("body").append('<div class="sq_tips">您已评过分了</div>');
        setTimeout(function() {
            $(".sq_tips").remove();
        }, 1500);
	}
	return false;
});


