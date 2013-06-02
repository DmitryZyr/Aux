var actions = {};

var GLOBAL_ID_COUNTER = 0;

var Entity = module.exports = Class.extend({
	initialize: function (id, type, kind) {
		this.setId(id);
		this.type = type;
		this.kind = kind;
		this.position = {x: 0, y: 0};
		this.angle = 0;
		this.animation = null;
		this.layer = undefined;
	},
	setId: function (id) {
		if (id === null) {
			GLOBAL_ID_COUNTER ++;
			this.id = GLOBAL_ID_COUNTER;
		} else {
			this.id = id;
		}
	},
	setPosition: function (x, y) {
		this.position.x = x;
		this.position.y = y;
	},
	getPosition: function () {
		return { x: this.position.x, y: this.position.y};
	},
	setAngle: function (a) {
		this.angle = a;
	},
	getAngle: function () {
		return this.angle;
	},
	update: function () {
	},
	scheduleAction: function (action, timeout, id) {
		if (timeout <= 0)
			process.nextTick(action);
		else {
			if (id in actions)
				clearTimeout(actions[id]);
			var timeoutId = setTimeout(action, timeout);
			if (id)
				actions[id] = timeoutId;
		}
	},
	onCollision: function () {
		return true;
	},
	getBaseState: function () {
		return {
			id: this.id,
			kind: this.kind,
			position: this.getPosition(),
			angle: this.getAngle(),
			animation: this.animation,
			layer: this.layer
		};
	}
});

return Entity;