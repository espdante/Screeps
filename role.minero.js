

var roleMinero = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    
        var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
	}
};

module.exports = roleMinero;