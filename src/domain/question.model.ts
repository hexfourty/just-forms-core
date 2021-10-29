import { JfAnswerOption } from './answer-option.model';

export class JfQuestion {
  label: string = '';
  exportLabel: string = '';
  position: number = 0;
  answerOptions: JfAnswerOption[] = [];
  customData = new Map();

  // OPTIONALS
}
