import { MAX_LENGTH } from "../internal/constants.js";
import { re, t } from "../internal/re.js";
import SemVer from "../classes/semver.js";
import parseOptions from "../internal/parse-options.js";
const parse = (version, options) => {
	options = parseOptions(options);
	if (version instanceof SemVer) {
		return version;
	}
	if (typeof version !== 'string') {
		return null;
	}
	if (version.length > MAX_LENGTH) {
		return null;
	}
	const r = options.loose ? re[t.LOOSE] : re[t.FULL];
	if (!r.test(version)) {
		return null;
	}
	try {
		return new SemVer(version, options);
	}
	catch (er) {
		return null;
	}
};
export default parse;
