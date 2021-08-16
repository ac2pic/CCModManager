import validVersion from './lib/esm-semver/functions/valid.js';

function isValidId(id) {
	if (typeof id !== 'string') {
		return false;
	}
	return id.match(/^[a-zA-Z0-9_-]+$/) != null;
}


export class Package {
	/**
	 * @private
	 * @param {{id: string, version: string}} manifest 
	 * @param {string} folderName
	 * @returns {{id}}
	 */
	static async validateCCMod(manifest) {
		const issues = [];
		let id = manifest.id;
		if (!isValidId(id)) {
			id = 'a-mod';
			issues.push('id does not match /^[a-zA-Z0-9_-]+$/');
		}

		let version = manifest.version;
		if (!validVersion(version)) {
			version = '0.0.0';
			issues.push('invalid version detected');
		}

		return {
			id,
			issues,
		};
	}
}