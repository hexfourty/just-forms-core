import { JfQuestion } from './question.model';

export class JfSection {
  label: string = '';
  description: string = '';
  questions: JfQuestion[] = [];
  customData = new Map();
  position: number = 0;
}
