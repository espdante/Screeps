var towers = {
    run: function(tower) {
        //prioritize attacking hostiles over repairing
        var Hostiles = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        var healer = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
            filter: function(object) {
               return object.getActiveBodyparts(HEAL)
            }
            });
        if (Hostiles) {
            if(healer){
            tower.attack(healer);
        }
            if(!healer){
                tower.attack(Hostiles);
            }
        }
        else {
            var Rampart = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                return (structure.structureType == STRUCTURE_RAMPART) &&
                                structure.hits < structure.hitsMax /4 
                }
                });
             var Repair = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => {
                return (structure.structureType == STRUCTURE_ROAD ) &&
                    // || structure.structureType == STRUCTURE_WALL) &&
                                structure.hits < structure.hitsMax 
                }
                });
            var healt = tower.pos.findClosestByRange(FIND_MY_CREEPS, {
                filter: function(object) {
                return object.hits < object.hitsMax;
                }
                });
            if(healt){
                tower.heal(healt);
            }
            if(Rampart) {
                    tower.repair(Rampart);
                }
                if(Repair){
                    tower.repair(Repair);
            }
        }
    }
};
module.exports = towers;

/*
var towers = {
    run: function(tower) {
        var tower = Game.rooms['E42N59'].find(FIND_MY_STRUCTURES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_TOWER)
            }
        });
        if (tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, 
            {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            //        if(closestDamagedStructure) {
            //            tower.repair(closestDamagedStructure);
            //        }
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            }
        }
    }
};
module.exports = towers;
var towers = {
    run: function(tower) {
        //prioritize attacking hostiles over repairing
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
        }
        else {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
        }
    }
};
module.exports = towers;
var towers = room.find(FIND_MY_STRUCTURES, {
    filter: (structure) => {
        return   (structure.structureType == STRUCTURE_TOWER);
    } 
});
for(var t in towers) {
    roleTowers.run(towers[t]);
}
*/