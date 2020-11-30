/**
 * Returns an xpath condition for whether an html element has a given class or not
 * @param {string} name
 * @returns {string} of type : `contains(...@class..., " name " )`
 *
 * CAUTION - the returned string does include the ' character
 */
export function hasClass(name: string): string;
/**
 * Returns an xpath condition for whether an html element has all given classes or not
 * @param {string[]} names
 * @returns {string} of type : `contains(...@class..., " name[0] " ) and contains(...)` etc.
 *
 * CAUTION - the returned string does include the ' character
 */
export function hasAllClasses(names: string[]): string;
