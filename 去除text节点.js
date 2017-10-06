'use strict';

//es6 模块导出  对应的是es6 模块导入 import {del_space} from "xx";
export function del_space(elem) {
	let elem_child = elem.childNodes;
	for (let item of elem_child) {
		if (item.nodeName === "#text" && /\s/.test(item.nodeValue)) {
			elem.removeChild(item);
		}
	}
	return elem;
}


//nodejs 应用commonjs的js 模块规范
//对应的require("xx")引入;

module.export.del_space = async function(elem) {
	let elem_child = elem.childNodes;
	for (let item of elem_child) {
		if (item.nodeName === "#text" && /\s/.test(item.nodeValue)) {
			elem.removeChild(item);
		}
	}
	return elem;
}
