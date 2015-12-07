/** * Bind the object with handler */ 
$(document).ready(function(){ 
	//alert("Test My Jquery Lib!"); 
	$("#cr").click(function(){ 
		if($("#cr").is(":checked")){ 
			alert("checkbox checked!"); 
		}else{ 
			alert("checkbox not checked!"); 
			} 
	});

	var $category = $("ul li:gt(5):not(:last)");
	$category.hide();
	var $toggleButton = $("div.ShowMore :button");
	$toggleButton.click(function(){
		if($category.is(":visible")){
			$category.hide();
			$toggleButton.val("显示全部品牌");
		}else{
			$category.show();
			$("ul li").filter(":contains('佳能'), :contains('索尼')").css("backgroundColor","#888");
            $toggleButton.val("显示部分品牌");
		}
	});
});