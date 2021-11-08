export interface JustFormsCore {
  greet(name:string):string;
}

export class JustFormsCore {
  static greet(name: string) {
    return `Jo moin ${name}`;
  }
}
