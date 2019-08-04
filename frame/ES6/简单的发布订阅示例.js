class PubSub {
	constructor() {
		this.event = {};
	}

	//订阅事件
	sub(eventName,fn) {
		this.event[eventName] = this.event[eventName] || [];
		this.event[eventName].push(fn);
	}

	//发布事件
	pub(eventName, data) {
		if (this.event[eventName]) {
			this.event[eventName].forEach(fn => {
				fn(data);
			});
		}
	}
}
const pubsub = new PubSub();
pubsub.sub('smr', (data) => {
	console.log(`sub smr: ${data}`);
});
pubsub.pub('smr', 'hi, b3log 123'); // sub message: hi, b3log
