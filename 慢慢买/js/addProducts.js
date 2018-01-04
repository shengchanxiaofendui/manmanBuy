$(function () {

	getShopName();

	getArea();

	getShop();

	shopClick();

	areaClick();
})

// 获取商店名
function getShopName() {

	$('.select .shopName a').on('click', function () {

		$.ajax({
			url: "http://127.0.0.1:9090/api/getgsshop",
			success: function (data) {
				console.log(data);
				var html = template('optionTmp', data);

				// 显示列表
				$('.shopName-options ul').html(html).parent().toggle().siblings().hide();
			}
		})


		// 改变小箭头
		// $('.select ul li a i').attr('class', 'glyphicon glyphicon-menu-down');
		$(this).find('i').toggleClass('glyphicon glyphicon-menu-down').toggleClass('glyphicon glyphicon-menu-up').parent().parent().siblings().find('i').attr('class','glyphicon glyphicon-menu-down');
	})

}

// 获取地区
function getArea() {

	$('.select .area a').on('click', function () {

		$.ajax({
			url: "http://127.0.0.1:9090/api/getgsshoparea",
			success: function (data) {

				console.log(data);
				var html = template('optionTmp', data);

				$('.area-options ul').html(html).parent().toggle().siblings().hide();

			}
		})


		// 改变小箭头
		$(this).find('i').toggleClass('glyphicon glyphicon-menu-down').toggleClass('glyphicon glyphicon-menu-up').parent().parent().siblings().find('i').attr('class','glyphicon glyphicon-menu-down');
	})
}

//获取商品
function getShop() {

	var shopId = $('.products-top .select ul li.shopName a').attr('data-id');
	var areaId = $('.products-top .select ul li.area a').attr('data-id');
	// console.log(shopId);


	$.ajax({
		url: "http://127.0.0.1:9090/api/getgsproduct",
		data: {
			shopid: shopId,
			areaid: areaId
		},
		success: function (data) {
			console.log(data);
			var html = template('shopTmp', data);
			$('.products-body .row').html(html);
		}
	})
}

//品牌的点击事件逻辑
function shopClick() {

	$('.options').on('click','.shopName-options ul li a', function () {

		var shopName = $(this).html();
		// console.log(shopName);
		$('.products-top .select ul li.shopName a').html(shopName+'&nbsp;<i class="glyphicon glyphicon-menu-down"></i>');
		$('.options .shopName-options').hide();

		// 获取当前的id
		var id = $(this).data('shopid');
		//  赋值给头部的a标签的自定义属性id
		$('.products-top .select ul li.shopName a').attr('data-id',id);
		// 渲染页面
		getShop();
	})

}

//区域点击逻辑
function areaClick() {

	$('.options').on('click','.area-options ul li a', function () {

		var areaName = $(this).html();
		areaName = areaName.slice(0,2);
		// console.log(areaName);
		$('.products-top .select ul li.area a').html(areaName+'&nbsp;<i class="glyphicon glyphicon-menu-down"></i>');
		$('.options .area-options').hide();

		// 获取当前的id
		var id = $(this).data('areaid');
		//  赋值给头部的a标签的自定义属性id
		$('.products-top .select ul li.area a').attr('data-id',id);
		// 渲染页面
		getShop();
	})

}