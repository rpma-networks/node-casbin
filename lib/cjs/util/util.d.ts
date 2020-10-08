declare function escapeAssertion(s: string): string;
declare function removeComments(s: string): string;
declare function arrayEquals(a?: string[], b?: string[]): boolean;
declare function array2DEquals(a?: string[][], b?: string[][]): boolean;
declare function arrayRemoveDuplicates(s: string[]): string[];
declare function arrayToString(a: string[]): string;
declare function paramsToString(...v: string[]): string;
declare function setEquals(a: string[], b: string[]): boolean;
declare function readFile(path: string, encoding?: string): any;
declare function writeFile(path: string, file: string, encoding?: string): any;
declare function hasEval(s: string): boolean;
declare function replaceEval(s: string, rule: string): string;
declare function getEvalValue(s: string): string[];
export {
  escapeAssertion,
  removeComments,
  arrayEquals,
  array2DEquals,
  arrayRemoveDuplicates,
  arrayToString,
  paramsToString,
  setEquals,
  readFile,
  writeFile,
  hasEval,
  replaceEval,
  getEvalValue
};
