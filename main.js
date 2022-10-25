var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleMinero = require('role.minero');
var roleMula = require('role.mula');
var crearCreep = require('spawnear');
var Towers= require('towers');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var mineros = _.filter(Game.creeps, (creep) => creep.memory.role == 'minero');
    var mulas = _.filter(Game.creeps, (creep) => creep.memory.role == 'mula');

    if(harvesters.length < 2) {
        var newName = 'Harvester' + Game.time;
        var rol = 'harvester';
        crearCreep.run(rol, newName);
    }
    else if(mineros.length < 1) {
        var newName = 'minero' + Game.time;
        var rol = 'minero';
        crearCreep.run(rol, newName);
    }
    else if(mulas.length < 1){
        var newName = 'mula' + Game.time;
        var rol = 'mula';
        crearCreep.run(rol, newName);
    }
    else if(upgraders.length < 1) {
        var newName = 'Upgrader' + Game.time;
        var rol = 'upgrader';
        crearCreep.run(rol, newName);
    }
    else if(builders.length < 1) {
        var newName = 'Builder' + Game.time;
        var rol = 'builder';
        crearCreep.run(rol, newName);
    }
    
    
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        else if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        else if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        else if(creep.memory.role == 'minero') {
            roleMinero.run(creep);
        }
        else if(creep.memory.role == 'mula') {
            roleMula.run(creep);
        }
    }
    
    
    let r = Game.rooms['sim']; //Cambiarlo por el nombre de mi city
    var towers = r.find(FIND_MY_STRUCTURES, 
	{
    filter: (structure) => {
        return   (structure.structureType == STRUCTURE_TOWER);
    	} 
		});
    for(var t in towers) {
        Towers.run(towers[t]);
    }
}