export default {
	typeOf,
	typeIs,
};

/**
 * Get entity raw type
 * @param {*} entity Entity
 * @returns {String} Raw type 'object', 'array', 'string'...
 */
export function typeOf(entity) {
	const type = Object.prototype.toString
		.call(entity)
		.replace(/^\[object (.+)\]$/, '$1')
		.toLowerCase();

	if (type === 'number') {
		if (isNaN(entity)) {
			return 'nan';
		}
	}
	return type;
}

/**
 * is entity includes type
 * @param {*} entity Entity
 * @param {String | String[]} variants Type or types
 * @returns {Boolean}
 */
export function typeIs(entity, variants) {
	return variants.includes(typeOf(entity));
}