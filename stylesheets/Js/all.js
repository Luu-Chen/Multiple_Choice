//至頂功能
$(function () {
	var $win = $(window);
	var $backToTop = $('.js-back-to-top');

	// 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
	$win.scroll(function () {
	  if ($win.scrollTop() > 50) {
		$backToTop.show();
	  } else {
		$backToTop.hide();
	  } 
	});
	// 當用戶點擊按鈕時，通過動畫效果返回頭部
	$backToTop.click(function () {
	  $('html, body').animate({scrollTop: 0}, 200);
	});
  });
/* Demo*/
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
$(".next").click(function(){
var QA =$('input:radio[name="question1"]:checked').val();
if(QA == null){
	alert('請選擇答案')
	return false;
}
if(animating) return false;
animating = true;

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show(); 
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale current_fs down to 80%
scale = 1 - (1 - now) * 0.2;
//2. bring next_fs from the right(50%)
left = (now * 50)+"%";
//3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next2").click(function(){
	var QA2 =$('input:radio[name="question2"]:checked').val();
	if(QA2 == null){
		alert('請選擇答案')
		return false;
	}
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next3").click(function(){
	var QA3 =$('input:checkbox[name="question3"]:checked').val();
	if(QA3 == null){
		alert('請選擇答案')
		return false;
	}	
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next4").click(function(){
	var QA4 =$('input:radio[name="question4"]:checked').val();
	if(QA4 == null){
		alert('請選擇答案')
		return false;
	}
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".next5").click(function(){
	var QA5 =$('input:radio[name="question5"]:checked').val();
	if(QA5 == null){
		alert('請選擇答案')
		return false;
	}
if(animating) return false;
animating = true;
current_fs = $(this).parent();
next_fs = $(this).parent().next();   
   //activate next step on progressbar using the index of next_fs
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");   
   //show the next fieldset
next_fs.show(); 
   //hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
   //as the opacity of current_fs reduces to 0 - stored in "now"
   //1. scale current_fs down to 80%
   scale = 1 - (1 - now) * 0.2;
   //2. bring next_fs from the right(50%)
   left = (now * 50)+"%";
   //3. increase opacity of next_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'transform': 'scale('+scale+')'});
next_fs.css({'left': left, 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
   //this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});
$(".previous").click(function(){
if(animating) return false;
animating = true;
current_fs = $(this).parent();
previous_fs = $(this).parent().prev();
//de-activate current step on progressbar
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
//show the previous fieldset
previous_fs.show(); 
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now, mx) {
//as the opacity of current_fs reduces to 0 - stored in "now"
//1. scale previous_fs from 80% to 100%
scale = 0.8 + (1 - now) * 0.2;
//2. take current_fs to the right(50%) - from 0%
left = ((1-now) * 50)+"%";
//3. increase opacity of previous_fs to 1 as it moves in
opacity = 1 - now;
current_fs.css({'left': left});
previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
}, 
duration: 800, 
complete: function(){
current_fs.hide();
animating = false;
}, 
//this comes from the custom easing plugin
easing: 'easeInOutBack'
});
});

var County = [];
var money =[];

$(".submit").click(function(){
	var testSelect = document.getElementById("mySelect")
	var index =testSelect.selectedIndex;
	var text = testSelect.options[index].text;
	var value = testSelect.options[index].value;
	switch(value){
		case "台北市":
		document.querySelector('.city-taipei').style.display='initial';
		document.querySelector('.city-taipei1').style.display='initial';
		break;
		case "新北市":
		document.querySelector('.city-newtaipei').style.display='initial';
		document.querySelector('.city-newtaipei1').style.display='initial';
		break;
		case "桃園市":
		document.querySelector('.city-taoyuan').style.display='initial';
		document.querySelector('.city-taoyuan1').style.display='initial';
		break;
		case "台中市":
		document.querySelector('.city-taichung').style.display='initial';
		document.querySelector('.city-taichung1').style.display='initial';
		break;
		case "台南市":
		document.querySelector('.city-tainan').style.display='initial';
		document.querySelector('.city-tainan1').style.display='initial';
		break;
		case "高雄市":
		document.querySelector('.city-kaohsiung').style.display='initial';
		document.querySelector('.city-kaohsiung1').style.display='initial';
		break;
		case "基隆市":
		document.querySelector('.city-keelung').style.display='initial';
		document.querySelector('.city-keelung1').style.display='initial';
		break;
		case "宜蘭市":
		document.querySelector('.city-yilan').style.display='initial';
		document.querySelector('.city-yilan1').style.display='initial';
		break;
		case "新竹市":
		document.querySelector('.city-hsinchu').style.display='initial';
		document.querySelector('.city-hsinchu1').style.display='initial';
		break;
		case "新竹縣":
		document.querySelector('.city-hsinchu-county').style.display='initial';
		document.querySelector('.city-hsinchu-county1').style.display='initial';
		break;
		case "苗栗縣":
		document.querySelector('.city-miaoli').style.display='initial';
		document.querySelector('.city-miaoli1').style.display='initial';
		break;
		case "彰化縣":
		document.querySelector('.city-changhua').style.display='initial';
		document.querySelector('.city-changhua1').style.display='initial';
		break;
		case "南投縣":
		document.querySelector('.city-nantou').style.display='initial';
		document.querySelector('.city-nantou1').style.display='initial';
		break;
		case "嘉義市":
		document.querySelector('.city-chiayi').style.display='initial';
		document.querySelector('.city-chiayi1').style.display='initial';
		break;
		case "嘉義縣":
		document.querySelector('.city-chiayi-county').style.display='initial';
		document.querySelector('.city-chiayi-county1').style.display='initial';
		break;
		case "雲林縣":
		document.querySelector('.city-yunlin').style.display='initial';
		document.querySelector('.city-yunlin1').style.display='initial';
		break;
		case "屏東縣":
		document.querySelector('.city-pingtung').style.display='initial';
		document.querySelector('.city-pingtung1').style.display='initial';
		break;
		case "花蓮縣":
		document.querySelector('.city-hualien').style.display='initial';
		document.querySelector('.city-hualien1').style.display='initial';
		break;
		case "台東縣":
		document.querySelector('.city-taitung').style.display='initial';
		document.querySelector('.city-taitung1').style.display='initial';
		break;
		case "澎湖縣":
		document.querySelector('.city-penghu').style.display='initial';
		document.querySelector('.city-penghu1').style.display='initial';
		break;
	}
	switch (text){
		case "台北市":
			document.querySelector('.Taipei').style.display='block';
			document.querySelector('.Taipei1').style.display='initial';
			break;
		case "新北市":
			document.querySelector('.NewTaipei').style.display='block';
			document.querySelector('.NewTaipei1').style.display='initial';
			break;
		case "桃園市":
			document.querySelector('.Taoyuan').style.display='block';
			document.querySelector('.Taoyuan1').style.display='initial';
			break;
		case "台中市":
			document.querySelector('.Taichung').style.display='block';
			document.querySelector('.Taichung1').style.display='initial';
			break;
		case "台南市":
			document.querySelector('.Tainan').style.display='block';
			document.querySelector('.Tainan1').style.display='initial';
			break;
		case "高雄市":
			document.querySelector('.Kaohsiung').style.display='block';
			document.querySelector('.Kaohsiung1').style.display='initial';
			break;
		case "基隆市":
			document.querySelector('.Keelung').style.display='block';
			document.querySelector('.Keelung1').style.display='initial';
			break;
		case "宜蘭市":
			document.querySelector('.Yilan').style.display='block';
			document.querySelector('.Yilan1').style.display='initial';
			break;
		case "新竹市":
			document.querySelector('.Hsinchu').style.display='block';
			document.querySelector('.Hsinchu1').style.display='initial';
			break;
		case "新竹縣":
			document.querySelector('.Hsinchu-County').style.display='block';
			document.querySelector('.Hsinchu-County1').style.display='initial';
			break;
		case "苗栗縣":
			document.querySelector('.Miaoli').style.display='block';
			document.querySelector('.Miaoli1').style.display='initial';
			break;
		case "彰化縣":
			document.querySelector('.Changhua').style.display='block';
			document.querySelector('.Changhua1').style.display='initial';
			break;	
		case "南投縣":
			document.querySelector('.Nantou').style.display='block';
			document.querySelector('.Nantou1').style.display='initial';
			break;
		case "嘉義市":
			document.querySelector('.Chiayi').style.display='block';
			document.querySelector('.Chiayi1').style.display='initial';
			break;
		case "嘉義縣":
			document.querySelector('.Chiayi-County').style.display='block';
			document.querySelector('.Chiayi-County1').style.display='initial';
			break;
		case "雲林縣":
			document.querySelector('.Yunlin').style.display='block';
			document.querySelector('.Yunlin1').style.display='initial';
			break;
		case "屏東縣":
			document.querySelector('.Pingtung').style.display='block';
			document.querySelector('.Pingtung1').style.display='initial';
			break;
		case "花蓮縣":
			document.querySelector('.Hualien').style.display='block';
			document.querySelector('.Hualien1').style.display='initial';
			break;
		case "台東縣":
			document.querySelector('.Taitung').style.display='block';
			document.querySelector('.Taitung1').style.display='initial';
			break;
		case "澎湖縣":
			document.querySelector('.Penghu').style.display='block';
			document.querySelector('.Penghu1').style.display='initial';
			break;	
	}
	County.push(value);
	money.push(text);
	// console.log(County);
	// console.log(money);
	if(testSelect.options[0].selected == true){
			alert('請選擇所在地')
		}else{
			alert('資料送出完成，開始分析')
			$(".newform").css("display", "none");
			$(".wrap").css("display", "block");
			$(document).ready(function(){
				jQuery.fn.anim_progressbar = function (aOptions) {
					// def values
					var iCms = 1000;
					var iMms = 60 * iCms;
					var iHms = 3600 * iCms;
					var iDms = 24 * 3600 * iCms;
					// def options
					var aDefOpts = {
						start: new Date(), // now
						finish: new Date().setTime(new Date().getTime() + 60 * iCms), // now + 60 sec
						interval: 100
					}
					var aOpts = jQuery.extend(aDefOpts, aOptions);
					var vPb = this;
					// each progress bar
					return this.each(
						function() {
							var iDuration = aOpts.finish - aOpts.start;
							// calling original progressbar
							$(vPb).children('.pbar').progressbar();
							// looping process
							var vInterval = setInterval(
								function(){
									var iLeftMs = aOpts.finish - new Date(); // left time in MS
									var iElapsedMs = new Date() - aOpts.start, // elapsed time in MS
										iDays = parseInt(iLeftMs / iDms), // elapsed days
										iHours = parseInt((iLeftMs - (iDays * iDms)) / iHms), // elapsed hours
										iMin = parseInt((iLeftMs - (iDays * iDms) - (iHours * iHms)) / iMms), // elapsed minutes
										iSec = parseInt((iLeftMs - (iDays * iDms) - (iMin * iMms) - (iHours * iHms)) / iCms), // elapsed seconds
										iPerc = (iElapsedMs > 0) ? iElapsedMs / iDuration * 100 : 0; // percentages
									// display current positions and progress
									$(vPb).children('.percent').html('<b>'+iPerc.toFixed(1)+'%</b>');
									// $(vPb).children('.elapsed').html(iDays+' days '+iHours+'h:'+iMin+'m:'+iSec+'s</b>');
									$(vPb).children('.pbar').children('.ui-progressbar-value').css('width', iPerc+'%');
									// in case of Finish
									if (iPerc >= 100) {
										clearInterval(vInterval);
										$(vPb).children('.percent').html('<b>100%</b>');
										$(vPb).children('.elapsed').html('Finished');
									}
								} ,aOpts.interval
							);
						}
					);
				}
				// from second #5 till 15
				var iNow = new Date().setTime(new Date().getTime() + 1 * 1000); // now plus 5 secs
				var iEnd = new Date().setTime(new Date().getTime() + 7 * 1000); // now plus 15 secs
				$('#progress2').anim_progressbar({start: iNow, finish: iEnd, interval: 100});
			});
			// $(".Loading").css("display", "block");
			$(".prediction").css("display", "none");
			$(".modal-backdrop").css("display", "none");
			$("#staticBackdrop").css("display",'none');
			$(".line-btn").css("display",'none');
			var loading = function(){
				// $(".Loading").css("display", "none");
				$(".wrap").css("display", "none");
				$(".wrap2").css("display", "block");
				$('.result').fadeIn('slow');
				$(".line-btn").css("display",'block');
				document.querySelector('.example').style.display='none'
				document.querySelector('.loading-time').style.display='none'
				$('div').removeClass('loading');
				AOS.init();
				};
				setTimeout(loading,7500);

		}
	return false
})

/*判斷answer1*/
$(function(){
	function checkAnswer(){
		for (var i=0; i<$('input:checked').length; i++) {
			var context = $('input:checked')[i].parentNode.parentNode;
			if ($('input:checked', context).val()=='1') {
				document.querySelector('.Divorce-agreement').style.display='block'
				document.querySelector('.Divorce-agreement-img').style.display='block'
				document.querySelector('.Divorce-agreement-text').style.display='block'
				document.querySelector('.Divorce-agreement-title').style.display='block'
				document.querySelector('.Divorce-proceedings').style.display='none'
				document.querySelector('.Divorce-proceedings-img').style.display='none'
				document.querySelector('.Divorce-proceedings-text').style.display='none'
				document.querySelector('.Divorce-proceedings-title').style.display='none'
				// document.querySelector('.answer2').style.display='none'
				$('.cde').removeClass('row-cols-md-3');
				$('.cde').addClass('row-cols-md-2');
				document.querySelector('.ans-2').style.display='none'
				document.querySelector('.ans1').style.display='block'
				document.querySelector('.ans1-1').style.display='block'
				document.querySelector('.ans3').style.display='block'
				document.querySelector('.ans2').style.display='none'
				document.querySelector('.ans2-2').style.display='none'
				document.querySelector('.ans4').style.display='none'
				document.querySelector('.ans0').style.display='none'
				document.querySelector('.ans0-0').style.display='none'
			} else if ($('input:checked', context).val()=='4' || $('input:checked', context).val()=='2') {
				document.querySelector('.Divorce-proceedings').style.display='block'
				document.querySelector('.Divorce-proceedings-img').style.display='block'
				document.querySelector('.Divorce-proceedings-text').style.display='block'
				document.querySelector('.Divorce-proceedings-title').style.display='block'
				document.querySelector('.Divorce-agreement').style.display='none'
				document.querySelector('.Divorce-agreement-img').style.display='none'
				document.querySelector('.Divorce-agreement-text').style.display='none'
				document.querySelector('.Divorce-agreement-title').style.display='none'
				// document.querySelector('.answer2').style.display='block'
				$('.cde').removeClass('row-cols-md-2');
				$('.cde').addClass('row-cols-md-3');
				document.querySelector('.ans0').style.display='block'
				document.querySelector('.ans0-0').style.display='block'
				document.querySelector('.ans-2').style.display='block'
				document.querySelector('.ans2').style.display='block'
				document.querySelector('.ans2-2').style.display='block'
				document.querySelector('.ans4').style.display='block'
				document.querySelector('.ans1').style.display='none'
				document.querySelector('.ans1-1').style.display='none'
				document.querySelector('.ans3').style.display='none'
			} else{

			}
		}
	}
	$('input:radio').each(function(){
		$(this).click(checkAnswer);
	})
})
/*判斷answer2*/
var ans =[];
$(".ShowAnswer").click(function(){
	var obj =document.getElementsByName('question3');
	var selected =[];
	var choose = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].checked){
			selected.push(obj[i].value);
			ans.push(obj[i].value);
			choose.push(obj[i].getAttribute("data-num"));
		}
		Array.prototype.max = function (){
			var max =this[0];
			this.forEach(function(ele,index,choose){
				if(ele>max){
					max=ele;
				}
			})
			return max;
		}
		document.getElementById('Options').innerHTML=selected.join();
		document.getElementById('Probability').innerHTML=choose.max()+"%";
	}
	// console.log(ans);
	switch(ans[0]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[1]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[2]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[3]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[4]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[5]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[6]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[7]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
	switch(ans[8]){
		case '配偶外遇':
			document.querySelector('.ans-s1').style.display='block'
			document.querySelector('.ans-0s1').style.display='block'
			break;
		case '無性生活':
			document.querySelector('.ans-s2').style.display='block'
			document.querySelector('.ans-0s2').style.display='block'
			break;
		case '賭博、酗酒':
			document.querySelector('.ans-s3').style.display='block'
			document.querySelector('.ans-0s3').style.display='block'
			break;
		case '遭遇家暴(並不限配偶)':
			document.querySelector('.ans-s4').style.display='block'
			document.querySelector('.ans-0s4').style.display='block'
			break;
		case '婆媳或岳婿問題':
			document.querySelector('.ans-s5').style.display='block'
			document.querySelector('.ans-0s5').style.display='block'
			break;
		case '配偶吸毒':
			document.querySelector('.ans-s6').style.display='block'
			document.querySelector('.ans-0s6').style.display='block'
			break;
		case '配偶失聯或雙方分居兩年以上':
			document.querySelector('.ans-s7').style.display='block'
			document.querySelector('.ans-0s7').style.display='block'
			break;
		case '沒有生活費用':
			document.querySelector('.ans-s8').style.display='block'
			document.querySelector('.ans-0s8').style.display='block'
			break;
		case '其他':
			
			document.querySelector('.ans-0s9').style.display='block'
			break;
	}
})

/*判斷answer3*/
var ans2 =[];
$(".child-btn").click(function(){
	var obj =document.getElementsByName('question4');
	var selected2 =[];
	var choose2 = [];
	for(var i=0;i<obj.length;i++){
		if(obj[i].checked){
			selected2.push(obj[i].value);
			ans2.push(obj[i].value);
		}
		Array.prototype.max = function (){
			var max =this[0];
			this.forEach(function(ele,index,choose){
				if(ele>max){
					max=ele;
				}
			})
			return max;
		}
	}
	// console.log(ans2);
	switch(ans2[0]){
		case '3':
			document.querySelector('.child').style.display='block'
			break;
		case '3.1':
			document.querySelector('.child').style.display='block'
			document.getElementById('nochild1').style.display='none'
			document.getElementById('nochild2').style.display='none'
			document.getElementById('nochild3').style.display='none'
			break;
		case '4':
			document.querySelector('.child').style.display='block'
			break;
	}
})

$(".hover").mouseleave(
	function () {
		$(this).removeClass("hover");
	}
);



/*重新整理*/ 
$('.formReset').click(function(){
	// alert('確定重新檢測，資料將不儲存')
	document.getElementById("msform").reset();
	// window.location.reload();
})
$(document).ready(function() {
	const $app = $('.app');
	const $img = $('.app__img');
	const $pageNav1 = $('.pages__item--1');
	const $pageNav2 = $('.pages__item--2');
	let animation = true;
	let curSlide = 1;
	let scrolledUp, nextSlide;
	
	let pagination = function(slide, target) {
		animation = true;
		if (target === undefined) {
			nextSlide = scrolledUp ? slide - 1 : slide + 1;
		} else {
			nextSlide = target;
		}
		
		$('.pages__item--' + nextSlide).addClass('page__item-active');
		$('.pages__item--' + slide).removeClass('page__item-active');
		
		$app.toggleClass('active');
		setTimeout(function() {
			animation = false;
		}, 1500)
	}
	
	let navigateDown = function() {
		if (curSlide > 1) return;
		scrolledUp = false;
		pagination(curSlide);
		curSlide++;
	}

	let navigateUp = function() {
		if (curSlide === 1) return;
		scrolledUp = true;
		pagination(curSlide);
		curSlide--;
	}

	setTimeout(function() {
		$app.addClass('initial');
	}, 500);

	setTimeout(function() {
		animation = false;
	}, 4500);
	
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		var delta = e.originalEvent.wheelDelta;
		if (animation) return;
		if (delta > 0 || e.originalEvent.detail < 0) {
			navigateUp();
		} else {
			navigateDown();
		}
	});

	$(document).on("click", ".pages__item:not(.page__item-active)", function() {
		if (animation) return;
		let target = +$(this).attr('data-target');
		pagination(curSlide, target);
		curSlide = target;
	});
});
