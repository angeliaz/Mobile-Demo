(function (win, doc, $) {

	var Scroll =  {

		init: function () {
			
		},

		// 判断方向
		getDirection: function () {

		},

		eventBind: function () {
			var _this = this;
			var height = $(win).height();
			var $scroll = $('.scrollContent');
			var $word1 = $scroll.find('.word1');
			var $word2 = $scroll.find('.word2');
			var $word3 = $scroll.find('.word3');
			var $bgPart = $scroll.find('.bg');
			this.flag = false;
			this.direction = 'up';
			this.startX = this.startY = 0;

			$('.wrap').on('touchstart', function (e) {

				var touch = e.touches[0];
				_this.flag = true;
				_this.touchX = touch.pageX;
				_this.touchY = touch.pageY;

				setTimeout(function () {
					$bgPart.removeClass('bg-move');
					$word1.removeClass('word1-move');
					$word2.removeClass('word2-move');
					$word3.removeClass('word3-move');
				}, 200);

			});

			$('.wrap').on('touchmove', function (e) {

			});

			$('.wrap').on('touchend', function (e) {
				var top = parseInt($scroll.css("-webkit-transform").split(",")[1]);
				console.log(top - height);
				$scroll.css({
							"-webkit-transform" : "translate3d(0px, " + (top - height) + "px, 0px);"});
				$bgPart.addClass('bg-move');
				$word1.addClass('word1-move');
				$word2.addClass('word2-move');
				$word3.addClass('word3-move');

			});
		}

	};

	Scroll.eventBind();

})(window, document, Zepto);