define(['player', 'simpleGameObject'], function(Player, SimpleGameObject) {
	var EntityFactory = {};

	EntityFactory.createEntity = function(kind, id) {
		if(!kind) {
			log.error("kind is undefined", true);
			return;
		}
		
		if(!_.isFunction(EntityFactory.builders[kind])) {
			throw Error(kind + " is not a valid Entity type");
		}
		
		var name;
		for(var property in Types.Entities) {
			if (Types.Entities[property] == kind){
				name = property;
				break;
			}
		}
		
		if (!name){
			throw Error(kind + " is not a valid Entity type");
		}
		
		return EntityFactory.builders[kind](id, name);
	};

	EntityFactory.builders = [];

	EntityFactory.builders[Types.Entities.PLAYER] = function(id, name) {
		return new Player(id, name);
	};
	
	for(var property in Types.Entities) {
		var index = Types.Entities[property];
		if (!EntityFactory.builders[index]){
			EntityFactory.builders[index] = function(id, name) {
				return new SimpleGameObject(id, name);
			};
		}
	}
	
	return EntityFactory;

});