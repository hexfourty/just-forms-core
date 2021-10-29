import { JfSection } from './section.model';

export class JfQuestionnaire {
  sections: JfSection[] = [];
  version: number = 0;
  referenceId: string = '';
  customData = new Map();

  // OPTIONALS
}
