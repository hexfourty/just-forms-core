import { JfQuestionnaire } from '../../domain/questionnaire.model';
import { JfSection } from '../../domain/section.model';

test('get correct number of sections in questionnaire', () => {
  const questionnaire = new JfQuestionnaire();
  const section1 = new JfSection();
  const section2 = new JfSection();
  const section3 = new JfSection();
  questionnaire.sections = [section1, section2, section3];

  expect(questionnaire.sections.length).toEqual(3);
});

test('get correct number of sections in questionnaire if sections are empty', () => {
  const questionnaire = new JfQuestionnaire();

  expect(questionnaire.sections.length).toEqual(0);
});
