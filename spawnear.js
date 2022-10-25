var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(rol,newName) {
        
        var energy = Game.spawns.Spawn1.room.energyCapacityAvailable;
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        
	    if(rol == "harvester" && harvesters == 0){
	        energy = Game.spawns.Spawn1.room.energyAvailable;
	        if(energy >= 200){
    	        var numberOfParts = Math.floor(energy / 200);
                var cuerpo = [];
                //esto es una prueba
                for (let i = 0; i < numberOfParts; i++) {
                    cuerpo.push(WORK);
                }
                for (let i = 0; i < numberOfParts; i++) {
                    cuerpo.push(CARRY);
                }
                for (let i = 0; i < numberOfParts; i++) {
                    cuerpo.push(MOVE);
                }
	        }
	    }
	    
	    else if(rol == "harvester" || rol == "upgrader" || rol == "builder" || rol == "mula"){
	        var numberOfParts = Math.floor(energy / 200);
            var cuerpo = [];
            
            for (let i = 0; i < numberOfParts; i++) {
                cuerpo.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                cuerpo.push(CARRY);
            }
            for (let i = 0; i < numberOfParts; i++) {
                cuerpo.push(MOVE);
            }
	    }
	    
	    else if(rol == "minero"){
	        var numberOfParts = Math.floor(energy / 150);
            var cuerpo = [];
            
            for (let i = 0; i < numberOfParts; i++) {
                cuerpo.push(WORK);
            }
            for (let i = 0; i < numberOfParts; i++) {
                cuerpo.push(MOVE);
            }
	    }
	    
        
        Game.spawns['Spawn1'].spawnCreep(cuerpo, newName, 
            {memory: {role: rol}});
            
        if(Game.spawns['Spawn1'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
	}
};

module.exports = roleHarvester;