
function isValidId(id) {
	if (typeof id !== 'string') {
		return false;
	}
	return id.match(/^[a-zA-Z0-9_-]+$/) != null;
}


export class Package {
	/**
	 * @private
	 * @param {string} manifest 
	 * @param {string} folderName
	 * @returns
	 */
	static async loadCCMod(manifest) {
		const issues = [];
		if (!isValidId(manifest.id)) {
			issues.push('id does not match /^[a-zA-Z0-9_-]+$/');
		}
		const id = manifest.id;
		return {
			id,
			issues,
		};
	}
}