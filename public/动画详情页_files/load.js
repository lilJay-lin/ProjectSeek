/*点击加载更多*/
function clickmore(self,ajax_type, model, parentObj, selfClass, selectType){
	var cur_page=$(self).attr("data-page"), ajax_url=$(self).attr("data-url"), ajax_type=ajax_type,model=model,parentObj=parentObj,selfClass=selfClass,selectType=selectType;
	var obj="";
	switch(model){
		case 1 :obj=$(self).closest(".floor")[0].className.replace(/\s+(floor)/,'');break;
		case 2 :obj=$(self).closest(".xuanji")[0].className.replace(/\s+(xuanji)/,'');break;
		case 3 :obj=$(self).closest(".floor")[0].className.replace(/\s+(floor)/,'');break;
		case 4 :obj=$(self).closest(".comments")[0].className.replace(/\s+(comments)/,'');break;
		default:break;
	}
		
	$(self).closest(".loadmore").remove();
	loadContent_new(ajax_url,ajax_type,cur_page,obj,model, parentObj, selfClass, selectType);
}
/*ajax加载内容*/
function loadContent_new(ajax_url,ajax_type,cur_page,obj,model, parentObj, selfClass, selectType){
// ajax_url:请求地址 ,ajax_type 类型,cur_page 当前页,obj 存放内容对象,model 添加的html模式, parentObj 父类对象, selfClass 本身有的样式类, selectType:1为tab切换， 0为点击加载
	var _loadHtml='<div class="wap_load"><p><s></s><em>正在努力加载中，请稍后...</em></p></div>';
	if($("."+obj).length == 0){ // 添加对应的存放内容对象 
		switch(model){
			case 1:$(parentObj).append('<div class="' +obj +' '+selfClass+'"></div>');break;
			case 2:$(parentObj).append('<ul class="' +obj +' '+selfClass+'"></ul>');break;
			case 3:break;
			case 4:break;
			case 5:$(parentObj).append('<div class="' +obj +' '+selfClass+'"></div>');break;
			case 6:$(parentObj).append('<div class="' +obj +' '+selfClass+'"></div>');break;
			default:break;
		}
	}else{
		$("."+selfClass).hide();
		$("."+obj).show();
		if(selectType=="1"){
			return false;
		}
	}
	
	$("."+selfClass).hide();
	$("."+obj).show();
	$("body").append(_loadHtml);
	$.ajax({
			url:ajax_url+"&cur_page="+cur_page,
			type:ajax_type,
			success:function(data){
				$(".wap_load").remove();
				var resultJson=eval("("+data+")"), html="",sumpage=resultJson.sum_page, detailUrl;
				var result="";			
				if(resultJson.plist!=undefined){
					result=resultJson.plist;
				}else{
					result=resultJson.list;
				}
				if(result.length==0){
					html+="<p class='nothing_tip'>暂无数据</p>";
				}else{
						$.each(result,function(i, n){						
							switch(model){
								/*一般列表*/
								case 1:
									
									var channid=n.chann_id;		    	
								    if(channid=='2'){
								        detailUrl=comicDetailUrl;
								    }else{
								        detailUrl=cartoonDetailUrl;
								    }
								    if(n.opus_name){
								    	html+='<dl><a href="'+detailUrl+'o_id='+n.content_id+'&chann_id='+n.chann_id+'&opus_id='+n.opus_id+'&order_by=0&cur_page=1&page_size=20">'
											+ '<dt class="img"><img src="'+ n.opus_url +'" alt=""></dt><dd>'
											+ '<h3>'+ n.opus_name +'</h3></dd>'
											+ '<dd><p class="limit_character">作品简介：'+ n.opus_desc +'</p></dd><dd class="votes">'+ n.last_content_name +'</dd></a></dl>';	
								    }
									break;
								/*消费记录列表*/
								case 2:
								
									var buy_way=n.buy_way;
									var single_name="";
									if(n.single_name!="" && n.single_name!=undefined){
										single_name=n.single_name;
									}
									var buy_date=n.buy_date;
									var buy_type=n.buy_type;
									var buy_way=n.buy_way;
									var price = "";
									if(n.price!="" && n.price!=undefined){
										price="￥"+n.price;
									}
									if(n.opus_name){
										html+= '<li><h3><span class="c_ff5000 fr">'+price+'</span><span class="title_width">'+n.opus_name+'&nbsp;<label>'+single_name+'</label></span></h3>'+
				                           '<p class="gray"><span class="fr">'+n.buy_date+'</span>'+n.buy_type+'</p></li>';
									}
									break;	
								/*赛事列表 不要更新数据要投票数*/
								case 3:
									var channid=n.chann_id;		
									var votecount=0;
									if(n.votecount!=""){
										votecount=n.votecount;
									}
								    if(channid=='2'){
								        detailUrl=comicDetailUrl;
								    }else{
								        detailUrl=cartoonDetailUrl;
								    }
									html+='<dl><a href="'+detailUrl+'o_id='+n.content_id+'&chann_id='+n.chann_id+'&opus_id='+n.opus_id+'&order_by=0&cur_page=1&page_size=20">'
											+ '<dt class="img"><img src="'+ n.opus_url +'" alt=""></dt><dd>'
											+ '<h3>'+ n.opus_name +'</h3></dd>'
											+ '<dd><p class="limit_character">作品简介：'+ n.opus_desc +'</p></dd><dd class="votes">投票：'+ votecount +'</dd></a></dl>';						
									break;
								/*打赏结果页最近打赏*/
								case 4:		
									var avatar="../images/default.png";
									if(n.avatar!=""){
										avatar=n.avatar;
									}
									if(n.opus_name){
										html+='<li>'+
										          '<div class="person">'+
										              '<span class="time fr">'+n.buy_date+'</span>'+
										              '<span class="img"><img src="'+avatar+'"></span>'+
										              '<span class="txt">'+n.nickName+'</span>'+
									              '</div>'+
									              '<p>'+n.product_name+'x'+n.product_num+'('+n.price+'元)'+'：'+n.product_desc+'</p>'+
								              '</li>';		
									}
									break;
								
								/* 次元英雄点赞 */
								case 5:
									if(n.chann_id=='2'){
								        detailUrl=comicDetailUrl;
										var listType='漫画';
								    }else{
								        detailUrl=cartoonDetailUrl;
										var listType='动画';
								    }
									if(n.opus_name){
									html+='<dl>'
										+ '<a href="'+detailUrl+'o_id='+n.content_id+'&chann_id='+n.chann_id+'&opus_id='+n.opus_id+'&order_by=0" class="block">' 
						                + '<dt class="img"> ' 
						                + '<img name="'+ n.opus_url+ '" /></dt>' 
						                + '<dd><h3>'+n.opus_name+ ' </h3></dd>' 
						                + '<dd class="limit_character" style="font-size:12px;color:#999">'+ listType +'</dd>' 
										+ '<dd><p class="limit_character">'+ n.opus_desc +'</p></dd>' 
						                + '</a></dl>';
									}
									break;
									
									/*打赏排行版列表*/
									case 6:
										var channid=n.chann_id;		    	
									    if(channid=='2'){
									        detailUrl=comicDetailUrl;
									    }else{
									        detailUrl=cartoonDetailUrl;
									    }
									    if(n.opus_name){
											html+='<dl><a href="'+detailUrl+'chann_id='+n.chann_id+'&opus_id='+n.opus_id+'&order_by=0&cur_page=1&page_size=20">'
													+ '<dt class="img"><img src="'+ n.opus_url +'" alt=""></dt><dd>'
													+ '<h3>'+ n.opus_name +'</h3></dd>'
													+ '<dd><p class="limit_character">作品简介：'+ n.opus_desc +'</p></dd>'
													+'<dd class="ds_money"><i></i>'+ n.total_fee +'元</dd>'
													+'<dd class="zpzz">作者：'+n.author_name+'</dd>'
													+'</a></dl>';						
											break;
									    }
									
							}
						});	
					}				
					//$("."+selfClass).hide();
					//$("."+obj).show().append(html);
					$("."+obj).append(html);
					cur_page++;
					console.log(cur_page+",,,"+sumpage);
					if(cur_page<=sumpage){
						$("."+obj).append('<div class="loadmore"><button class="btn_red js_btn_red" style="" data-url="'+ ajax_url +'" data-page="'+cur_page+'" >点击加载更多</button></div>');
						
					}				
			},
			error:function (request, status, err) {
				$(".wap_load").hide();
				$("body").append('<div class="sq_tips">请检查您的网络</div>');
				setTimeout(function() {
					$(".sq_tips").remove();
				}, 1500);
		    }

		});
	
}