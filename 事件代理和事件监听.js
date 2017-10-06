'use strict';
//js是事件驱动加回调的语言,事件触发,驱动回调函数程序运行;

//创建十个a标签, 点击弹出对应的序号;
//注意点: 利用自执行函数 的闭包特性  i变量被暂时保存缓存中;

//确保 在还没点击之前的i的每个值被保存下来,i不会被覆盖直接运行到10;

//正确姿势
let a;
for (let i = 0; i < 10; i++) {
	(() => {
		a = document.createElement('a');
		a.innerHTML += i + '<br>';
		//针对每一个a的dom元素,监听事件
		a.addEventListener('click', (e) => {
			e.preventDefault();
			alert(i);
		})
		document.body.appendChild(a);
	})(i)
}


//错误姿势
let a;
for (let i = 0; i < 10; i++) {

	a = document.createElement('a');
	a.innerHTML += i + '<br>';
	a.addEventListener('click', (e) => {
		e.preventDefault();
		alert(i);
	})
	document.body.appendChild(a);

}