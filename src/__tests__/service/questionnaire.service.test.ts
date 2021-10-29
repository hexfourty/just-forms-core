import { addSection, getStubQuestionnaire } from '../../service/questionnaire.service';
import { JfQuestionnaire } from '../../domain/questionnaire.model';
import { JfSection } from '../../domain/section.model';

test('dummy questionnaire is created', () => {
  const result = getStubQuestionnaire();
  expect(result).toBeInstanceOf(Object);
  expect(result.customData.size).toEqual(1);
  expect(result.customData.get('isDummy')).toBeTruthy();
});

test('add section should succeed', () => {
  const questionnaire = new JfQuestionnaire();
  const section1 = new JfSection();
  const section2 = new JfSection();
  addSection(questionnaire, section1);
  addSection(questionnaire, section2);

  expect(questionnaire.sections.length).toEqual(2);
  expect(questionnaire.sections[0].position).toEqual(0);
  expect(questionnaire.sections[1].position).toEqual(1);
});
