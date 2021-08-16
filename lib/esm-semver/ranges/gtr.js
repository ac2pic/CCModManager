import outside from "./outside.js";
const gtr = (version, range, options) => outside(version, range, '>', options);
export default gtr;
