import { JfQuestionnaire } from '../domain/questionnaire.model';
import { JfSection } from '../domain/section.model';

export function getStubQuestionnaire(): JfQuestionnaire {
  const questionnaire = new JfQuestionnaire();
  questionnaire.customData.set('isDummy', true);

  return questionnaire;
}

export function addSection(questionnaire: JfQuestionnaire, section: JfSection) {
  if(!section.position) { // add position if not set
    section.position = questionnaire.sections.length;
  }
  questionnaire.sections.push(section);
}
