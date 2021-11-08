import { JustFormsCore } from './JustFormsCore';
import { JfQuestionnaire } from './domain/questionnaire.model';
import { JfQuestion } from './domain/question.model';
import { JfAnswerOption } from './domain/answer-option.model';
import { JfSection } from './domain/section.model';

export default JustFormsCore;
Object.assign(module.exports, JustFormsCore);
Object.assign(module.exports, JfQuestionnaire);
Object.assign(module.exports, JfSection);
Object.assign(module.exports, JfQuestion);
Object.assign(module.exports, JfAnswerOption);
