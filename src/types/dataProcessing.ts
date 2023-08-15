/**
 * @description Shard the arraybuffer data
 * @param {ArrayBuffer} buffer
 * @param {number} fragmentSize
 * @param {function} callback
 * @returns {void}
 */
export type Fragmentation =  (buffer: ArrayBuffer, fragmentSize: number, callback: (fragment: ArrayBuffer, iterator: Iterator<ArrayBuffer>) => void) => void;