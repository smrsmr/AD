import vDOM from './dom.js';

var ol = vDOM('div', { id: 'center', class: 'center' }, [
	vDOM('input',{ text: 'text', placeholder: 'Search'},[]),
	vDOM('ol', { id: 'ol-list' }, [
		vDOM('li', { class: 'item' }, [
			'Item 1',
			vDOM('b',{class: 'children-p'},['Item p'])
		]),
		vDOM('li', { class: 'item' }, ['Item 2']),
		vDOM('li', { class: 'item' }, ['Item 3'])
	]),
	vDOM('button', { id: 'btn' }, ['提交'])
]);

// var elemRoot = ol.render();
// eslint-disable-next-line no-undef
document.body.appendChild(ol.render());

// eslint-disable-next-line no-undef
var bClick = document.querySelector('.children-p');
bClick.addEventListener('click', () => {
	console.log(321);
});

