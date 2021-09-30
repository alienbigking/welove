var vm = new Vue({
	el: "#app",
	data: {
		isShow: false, //默认不展示打字机内容
		startTime: "2021/09/24 08:00:00 GMT+0800", // 定义相识开始时间
		showTimes: false, //定义最开始隐藏倒计时
		layTime: 330, //定义打字速度
		doraTime: 1000, //定义时间fade显示时间延迟
		text1: '',
		text2: '',
		text3: '',
		text4: '',
		text5: '',
		text6: '',
		timeLeft: '',
		showBox: false,
		show_popups: false,
	},
	methods: {
		//第一行打字机开始
		list_1: function() {
			let that = this;
			let story = "二零二一年9月24号（相识纪念日），在这一天我很幸运遇见了你，我看见你的第一眼，我的大脑是那么的疯狂。";
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text1 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_2();
				}
			}, that.layTime)
		},
		list_2: function() {
			let that = this;
			let story = "我的心为你而跳，我的脚陪你走天涯海角，我的手拉着你幸福的走，我的眼看着你美丽永不回头，爱上了你，我很开心，愿意陪着你这样慢慢到老!";
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text2 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_3();
				}
			}, that.layTime)
		},
		list_3: function() {
			let that = this;
			let story = '你的微笑，是我这辈子见过最美的景色，我想收藏这样的风景一辈子。可以吗';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text3 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_4();
				}
			}, that.layTime)
		},
		list_4: function() {
			let that = this;
			let story = '平凡的相识，不平凡的相恋。平凡的相守，不平凡的相见。以后的以后，再平凡不过的生活，只要真心相爱，也能谱写一段美丽的爱情故事，让我们共同努力，亲爱滴!';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text4 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.showTime();
				}
			}, that.layTime)
		},
		//展示倒计时
		showTime: function() {
			let that = this;
			that.showTimes = true;
			setTimeout(function() {
				that.list_5();
			}, that.doraTime)
		},
		list_5: function() {
			let that = this;
			let story = '情书是我抄的，但我爱你是真的';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text5 = text;
				if (text.length == story.length) {
					clearInterval(time);
					that.list_6();
				}
			}, that.layTime)
		},
		list_6: function() {
			let that = this;
			let story = '. . . ';
			let i = 0;
			let time = setInterval(function() {
				let text = story.substring(0, i);
				i++;
				that.text6 = text;
				if (text.length == story.length) {
					i = 0;
				}
			}, that.layTime)
		},
		//计算剩余时间
		getTimeLeft: function(dateTime) {
			let time1 = new Date(dateTime).getTime(); //获取开始时间戳
			let time2 = new Date().getTime(); //获取此刻时间戳
			let mss = time2 - time1;
			let days = parseInt(mss / (1000 * 60 * 60 * 24));
			let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = parseInt((mss % (1000 * 60)) / 1000);
			return days + "天" + hours + "时" + minutes + "分" + seconds + "秒"
		},
		//关闭弹窗
		close_popup: function() {
			this.show_popups = false;
		},
	},
	mounted: function() {
		setInterval(() => {
			this.timeLeft = this.getTimeLeft(this.startTime);
		}, 1000);
		setTimeout(() => {
			this.showBox = true;
			this.list_1();
		}, 2000);
	}
})
