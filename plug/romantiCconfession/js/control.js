var vm = new Vue({
	el: "#app",
	data: {
		isShow: false, //默认不展示打字机内容
		startTime: "2019/10/27 22:00:00 GMT+0800", // 定义相识开始时间
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
			let story = "在二零一九年十月二十七号晚22:00";
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
			let story = "  某某对着某某的微信";
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
			let story = '发了一句“那你吃饭没？”';
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
			let story = '直到今天，已经过去了';
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
			let story = '未完，待续';
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
