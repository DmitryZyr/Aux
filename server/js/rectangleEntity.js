var Entity = require('./entity'),	Constants = require('../../client/js/constants');var RectangleEntity = module.exports = Entity.extend({	init: function (id, world, entity) {		this._super(id, world, "RectangleEntity", Constants.Types.Entities.RectangleEntity);		var aabb = entity.body.m_fixtureList.m_aabb;		this.width = aabb.upperBound.x - aabb.lowerBound.x;		this.height = aabb.upperBound.y - aabb.lowerBound.y;	},	getBaseState: function () {		return {			position: this.GetPosition(),			width: this.width,			heigth: this.height,			type: Constants.Types.Entities.RectangleEntity		};	}});return RectangleEntity;