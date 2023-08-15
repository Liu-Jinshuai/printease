import { Fragmentation } from '@/types/dataProcessing'

function* bufferFragmentation(buffer: ArrayBuffer, fragmentSize: number) {
    let position = 0;
    while (position < buffer.byteLength) {
        const end = Math.min(position + fragmentSize, buffer.byteLength);
        yield buffer.slice(position, end);
        position = end;
    }
}

export const fetchCallback: Fragmentation = (buffer: ArrayBuffer, fragmentSize: number, callback: (fragment: ArrayBuffer, iterator: Iterator<ArrayBuffer>) => void) => {
    const iterator = bufferFragmentation(buffer, fragmentSize);
    const nextChunk = iterator.next();
    if (!nextChunk.done) {
        callback(nextChunk.value, iterator);
    } else {
        callback(new ArrayBuffer(0), iterator);
    }
}
