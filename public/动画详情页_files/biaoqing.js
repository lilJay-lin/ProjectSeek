	var rl_exp = {
		baseUrl:	'../../../images/facepic/',
		pace:		200,
		dir:		['mr1','mr2','mr3','mr4'],
		text:[			/*表情包title文字，自己补充*/
			[
				'微笑','撇嘴','喜欢','哈欠','得意','流泪','害羞','闭嘴','睡','大哭','流汗','发怒','调皮','呲牙','惊讶'
			],
			[
				'难过','酷','冷汗','抓狂','吐','偷笑','可爱','白眼','傲慢','抱拳','困','惊恐','擦汗','憨笑','奋斗'
			],
			[
				'咒骂','疑问','嘘','晕','折磨','衰','敲打','再见','抠鼻','鼓掌','糗','鄙视','委屈','快哭了','阴险',
			],
			[
				'亲亲','吓','咖啡','可怜','胜利','NO','OK','强','弱','握手','蛋糕','饭','礼物','西瓜','猪头'
			]
		],
		num:		[15,15,15,15],
		isExist:	[0,0,0,0],
		bind:	function(i){
			$("#rl_bq .rl_exp_main").eq(i).find('.rl_exp_item').each(function(){
				$(this).on('click',function(){
					if($("#rl_exp_input").length>0){
						var srnum = $("#rl_exp_input").val().length;
						var synum = 75 - srnum-3;
						if(srnum < 75){
							$('.msg').html('还能输入'+synum + '个字');
							rl_exp.insertText(document.getElementById('rl_exp_input'),'/'+$(this).find('img').attr('title'));
						}
						else{
						  $('.msg').html('不能再输入更多的字');
						        $("body").append('<div class="sq_tips">评论最多只能输入75个字</div>');
						        //$(".sq_tips").css("margin-left", "-95px");
						        setTimeout(function() {
						            $(".sq_tips").remove();
						        }, 1500);
						}
					}else if($("#rl_exp_input2").length>0){
						var srnum = $("#rl_exp_input2").val().length;
						var synum = 150 - srnum-3;
						if(srnum < 150){
							$('.msg').html('还能输入'+synum + '个字');
							rl_exp.insertText(document.getElementById('rl_exp_input2'),'/'+$(this).find('img').attr('title'));
						}
						else{
						  $('.msg').html('不能再输入更多的字');
						        $("body").append('<div class="sq_tips">话题最多只能输入150个字</div>');
						        //$(".sq_tips").css("margin-left", "-95px");
						        setTimeout(function() {
						            $(".sq_tips").remove();
						        }, 1500);
						}
					}
						
					//$('#rl_bq').fadeOut(rl_exp.pace);   /******************************/
				});
			});
		},
		/*加载表情包函数*/
		loadImg:function(i){
			var node = $("#rl_bq .rl_exp_main").eq(i);
			for(var j = 0; j<rl_exp.num[i];j++){
				var domStr = 	'<li class="rl_exp_item">' + 
									'<img src="' + rl_exp.baseUrl + rl_exp.dir[i] + '/' + j + '.png" alt="' + rl_exp.text[i][j] + 
									'" title="' + rl_exp.text[i][j] + '" />' +
								'</li>';
				$(domStr).appendTo(node);
			}
			rl_exp.isExist[i] = 1;
			rl_exp.bind(i);
		},
		/*在textarea里光标后面插入文字*/
		insertText:function(obj,str){
			obj.focus();
			if (document.selection) {
				var sel = document.selection.createRange();
				sel.text = str;
			} else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
				var startPos = obj.selectionStart,
					endPos = obj.selectionEnd,
					cursorPos = startPos,
					tmpStr = obj.value;
				obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
				cursorPos += str.length;
				obj.selectionStart = obj.selectionEnd = cursorPos;
			} else {
				obj.value += str;
			}
		},
		init:function(){
			$("#rl_bq > ul.rl_exp_tab > li > a").each(function(i){
				$(this).bind('click',function(){
					if( $(this).hasClass('selected') )
						return;
					if( rl_exp.isExist[i] == 0 ){
						rl_exp.loadImg(i);
					}
					$("#rl_bq > ul.rl_exp_tab > li > a.selected").removeClass('selected');
					$(this).addClass('selected');
					$('#rl_bq .rl_selected').removeClass('rl_selected').hide();
					$('#rl_bq .rl_exp_main').eq(i).addClass('rl_selected').show();
				});
			});
			/*绑定表情弹出按钮响应，初始化弹出默认表情。*/
			$("#rl_exp_btn").bind('click',function(){				
				if($("#rl_bq").hasClass("aaa")){
					//$("#rl_bq").removeClass("aaa").fadeOut(500);
				}else{
					if( rl_exp.isExist[0] == 0 ){
						rl_exp.loadImg(0);
						
					}
					if( rl_exp.isExist[1] == 0 ){
						rl_exp.loadImg(1);
						
					}if( rl_exp.isExist[2] == 0 ){
						rl_exp.loadImg(2);
						
					}if( rl_exp.isExist[3] == 0 ){
						rl_exp.loadImg(3);
						
					}
					//$("#rl_bq").addClass("aaa").fadeIn(500);
					$("#rl_bq").fadeToggle(500);
				}
				
			});
			/*绑定document点击事件，对target不在rl_bq弹出框上时执行rl_bq淡出，并阻止target在弹出按钮的响应。***************/
			$(document).bind('click',function(e){
				var target = $(e.target);
				if( target.closest("#rl_exp_btn").length == 1 )
					return;
				if( target.closest("#rl_bq").length == 0 ){
					$('#rl_bq').fadeOut(rl_exp.pace);
				}
			});
		},
		/*评论文本转化为表情*/
		parseComment:function(comment){
			var commentStr=comment;
			if(typeof(commentStr) != "undefined"){
        		if(commentStr.indexOf("/") != -1){
        			for(var i=0;i<rl_exp.num.length;i++){
        				for(var j=0;j<rl_exp.text[i].length;j++){
        					var imgText1='/'+rl_exp.text[i][j];
        					var imgUrl=rl_exp.baseUrl+rl_exp.dir[i]+'/'+j+'.png';
        					var imgDom='<img src="'+imgUrl+'" alt="'+rl_exp.text[i][j]+'" title="'+rl_exp.text[i][j]+'">';        					
							var reg1 = new RegExp(imgText1,"g");
							commentStr=commentStr.replace(reg1,imgDom);
        					if(commentStr.indexOf("/") == -1)
			                {
			                    break;
			                }
        				}
        			}
        		}
        	}
        	return commentStr ;
		}
	};
$(function(){
	 $('textarea#rl_exp_input').bind('input propertychange', function() {
			var srnum = $(this).val().length;
			var synum = 75 - srnum;
			if(srnum < 75){
			$('.msg').html('还能输入'+synum + '个字');
			}
			else{
			  $('.msg').html('不能再输入更多的字');
			        $("body").append('<div class="sq_tips">评论最多只能输入75个字</div>');
			        setTimeout(function() {
			            $(".sq_tips").remove();
			        }, 1500);
			}
		});
	 $('textarea#rl_exp_input2').bind('input propertychange', function() {
			var srnum = $(this).val().length;
			var synum = 150 - srnum;
			if(srnum < 150){
			$('.msg').html('还能输入'+synum + '个字');
			}
			else{
			  $('.msg').html('不能再输入更多的字');
			        $("body").append('<div class="sq_tips">话题最多只能输入150个字</div>');
			        setTimeout(function() {
			            $(".sq_tips").remove();
			        }, 1500);
			}
		});
	/*
	*		参数说明
	*		baseUrl:	【字符串】表情路径的基地址
	*		pace:		【数字】表情弹出层淡入淡出的速度
	*		dir:		【数组】保存表情包文件夹名字
	*		text:		【二维数组】保存表情包title文字
	*		num:		【数组】保存表情包表情个数
	*		isExist:	【数组】保存表情是否加载过,对于加载过的表情包不重复请求。
	*/

	rl_exp.init();	//调用初始化函数。
	
	
});