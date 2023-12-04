declare module '@/utils/encoding' {
    export default function TextEncoder(encoding: string, str: string): Uint8Array;
}