import { FileAdapter } from './fileAdapter';
import { BatchAdapter } from './batchAdapter';
/**
 * FileAdapter is the file adapter for Casbin.
 * It can load policy from file or save policy to file.
 */
export declare class BatchFileAdapter extends FileAdapter implements BatchAdapter {
  /**
   * FileAdapter is the constructor for FileAdapter.
   * @param {string} filePath filePath the path of the policy file.
   */
  constructor(filePath: string);
  addPolicies(sec: string, ptype: string, rules: string[][]): Promise<void>;
  removePolicies(sec: string, ptype: string, rules: string[][]): Promise<void>;
}
