var buscarEnergia = 
{
    run:function(creep)
    { 
         //### VARIABLES ################################################
         var Suelo = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES,
            {filter: resource => resource.energy > creep.store.getFreeCapacity(RESOURCE_ENERGY)});
         var Ruinas = creep.pos.findClosestByRange(FIND_RUINS, 
            {filter: (structure) => structure.store[RESOURCE_ENERGY]});
         var Tumbas = creep.pos.findClosestByRange(FIND_TOMBSTONES, 
            {filter: (structure) => structure.store[RESOURCE_ENERGY]});
         var Containers = creep.pos.findClosestByRange(FIND_STRUCTURES,{
            filter:(structure) => {return (structure.structureType == STRUCTURE_CONTAINER) &&
                structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()
                }
            });
         var Recursos = creep.room.find(FIND_SOURCES);
         var Storage = creep.pos.findClosestByRange(FIND_STRUCTURES,{
                filter:(structure) => {return (structure.structureType == STRUCTURE_STORAGE) &&
                    structure.store[RESOURCE_ENERGY] > creep.store.getFreeCapacity()
                    }
                });
         
        
         //### VARIABLES ################################################
    //### ACCIONES ######################################################
    if(Tumbas || Suelo || Ruinas || Containers || Storage || Recursos)
        {
            
            if (Tumbas)
                {   creep.say('➕',{public: true});
                    if(creep.withdraw(Tumbas, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(Tumbas)
                    }
                }
            else if (Ruinas)
                {
                  if(creep.withdraw(Ruinas, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                    {
                          creep.moveTo(Ruinas)
                    }
                }
            else if(Suelo)
                {
                    if(creep.pickup(Suelo) == ERR_NOT_IN_RANGE)
                    {
                        creep.moveTo(Suelo)
                    }
                }
            else if (Containers)
            {
                if(creep.withdraw(Containers, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Containers)
                }
            }
            else if (Storage)
            {
                if(creep.withdraw(Storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(Storage)
                }
            }
            else if(Recursos){
                if(creep.harvest(Recursos[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Recursos[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else if (Recursos && creep.memory.role == 'mula')
            {
                if(creep.harvest(Recursos[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Recursos[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
        } 
    }
};
module.exports = buscarEnergia;