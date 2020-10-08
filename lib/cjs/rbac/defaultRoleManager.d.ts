import { RoleManager } from './roleManager';
declare type MatchingFunc = (arg1: string, arg2: string) => boolean;
export declare class DefaultRoleManager implements RoleManager {
  private allRoles;
  private maxHierarchyLevel;
  private hasPattern;
  private matchingFunc;
  /**
   * DefaultRoleManager is the constructor for creating an instance of the
   * default RoleManager implementation.
   *
   * @param maxHierarchyLevel the maximized allowed RBAC hierarchy level.
   */
  constructor(maxHierarchyLevel: number);
  /**
   * e.buildRoleLinks must be called after addMatchingFunc().
   * @param name
   * @param fn
   * @example ```javascript
   * await e.GetRoleManager().addMatchingFunc('matcher', util.keyMatch); await e.buildRoleLinks();
   * ```
   */
  addMatchingFunc(name: string, fn: MatchingFunc): Promise<void>;
  /**
   * addLink adds the inheritance link between role: name1 and role: name2.
   * aka role: name1 inherits role: name2.
   * domain is a prefix to the roles.
   */
  addLink(name1: string, name2: string, ...domain: string[]): Promise<void>;
  /**
   * clear clears all stored data and resets the role manager to the initial state.
   */
  clear(): Promise<void>;
  /**
   * deleteLink deletes the inheritance link between role: name1 and role: name2.
   * aka role: name1 does not inherit role: name2 any more.
   * domain is a prefix to the roles.
   */
  deleteLink(name1: string, name2: string, ...domain: string[]): Promise<void>;
  /**
   * getRoles gets the roles that a subject inherits.
   * domain is a prefix to the roles.
   */
  getRoles(name: string, ...domain: string[]): Promise<string[]>;
  /**
   * getUsers gets the users that inherits a subject.
   * domain is an unreferenced parameter here, may be used in other implementations.
   */
  getUsers(name: string, ...domain: string[]): Promise<string[]>;
  /**
   * hasLink determines whether role: name1 inherits role: name2.
   * domain is a prefix to the roles.
   */
  hasLink(name1: string, name2: string, ...domain: string[]): Promise<boolean>;
  /**
   * printRoles prints all the roles to log.
   */
  printRoles(): Promise<void>;
  private createRole;
  private hasRole;
}
export {};
