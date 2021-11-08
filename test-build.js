const assert = require("assert");
const JustFormsCore = require('./lib');
const JfQuestionnaire = require('./lib/domain/questionnaire.model')

const result = JustFormsCore.greet('HexFourty');
assert.equal(result, 'Jo moin HexFourty')
