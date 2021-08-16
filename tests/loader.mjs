const specifierRedirect = new Map;


/**
 * @param {string} specifier
 * @param {{
 *   conditions: !Array<string>,
 *   parentURL: !(string | undefined),
 * }} context
 * @param {Function} defaultResolve
 * @returns {Promise<{ url: string }>}
 */
export async function resolve(specifier, context, defaultResolve) {
	const shouldOverride = specifier.match(/^@replace\/([@\w\d/]+):([@\w\d/]+)$/);
	if (shouldOverride) {
		specifierRedirect.set(shouldOverride[1], shouldOverride[2]);
		return defaultResolve('os', context, defaultResolve);
	}
	const shouldReset = specifier.match(/^@reset\/([@\w\d/]+)$/);

	if (shouldReset) {
		specifierRedirect.delete(shouldReset[1]);
		return defaultResolve('os', context, defaultResolve);
	}

	if (specifierRedirect.has(specifier)) {
		return defaultResolve(specifierRedirect.get(specifier), context, defaultResolve);
	}
	return defaultResolve(specifier, context, defaultResolve);
}