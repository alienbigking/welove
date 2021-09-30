window.onload = function() {
	//屏蔽键盘事件
	document.onkeydown = function() {
		var e = window.event || arguments[0];
		//F12
		if (e.keyCode == 123) {
			vm.show_popups = true;
			setTimeout(function() {
				vm.show_popups = false;
			}, 2000)
			return false;
			//Ctrl+Shift+I
		} else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
			vm.show_popups = true;
			setTimeout(function() {
				vm.show_popups = false;
			}, 2000)
			return false;
			return false;
			//Shift+F10
		} else if ((e.shiftKey) && (e.keyCode == 121)) {
			vm.show_popups = true;
			setTimeout(function() {
				vm.show_popups = false;
			}, 2000)
			return false;
			//Ctrl+U
		} else if ((e.ctrlKey) && (e.keyCode == 85)) {
			vm.show_popups = true;
			setTimeout(function() {
				vm.show_popups = false;
			}, 2000)
			return false;
		}
	};
	//屏蔽鼠标右键
	document.oncontextmenu = function() {
		vm.show_popups = true;
		setTimeout(function() {
			vm.show_popups = false;
		}, 2000)
		return false;
	}
}
