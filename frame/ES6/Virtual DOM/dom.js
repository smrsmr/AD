/**
 * Virtual DOM
 */
class Element {
	constructor(tagName, props, children) {
		this.tagName = tagName;
		this.props = props;
		this.children = children;
	}
	render() {
		// eslint-disable-next-line no-undef
		var el = document.createElement(this.tagName);
		var props = this.props;
		// 遍历子节点，依次设置子节点的属性
		for (var propName in props) {
			var propValue = props[propName];
			el.setAttribute(propName, propValue);
		}
		// 保存子节点
		var childrens = this.children || [];
		// 遍历子节点，使用递归的方式 渲染
		childrens.forEach(function (child) {
			var childEl = (child instanceof Element) ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
				// eslint-disable-next-line no-undef
				: document.createTextNode(child); // 如果是字符串的话，只构建文本节点
			el.appendChild(childEl);
		});
		return el;
	}
}


export default (tagName, props, children) => {
	return new Element(tagName, props, children);
};
