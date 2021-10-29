const assert = require("assert");
const JustFormsCore = require('./lib');

const result = JustFormsCore.greet('HexFourty');
assert.equal(result, 'Jo moin HexFourty')
