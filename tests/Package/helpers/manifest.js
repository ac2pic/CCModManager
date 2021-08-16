const ccmodManifest = {
	"id": "my-mod",
	"version": "1.0.0",
	"title": "My Mod",
	"description": "My first mod",
	"license": "MIT",
	"homepage": "",
	"keywords": [],
	"authors": [],
	"icons": {},
	"dependencies": {},
	"assets": [],
	"assetsDir": "",
	"main": "",
	"preload": "",
	"postload": "",
	"prestart": "",
	"poststart": ""
};

function copy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

const ManifestHelper = {
	copy: function(isLegacy = false) {
		if (isLegacy) {
			return;
		}
		return copy(ccmodManifest);
	}
};

export default ManifestHelper;