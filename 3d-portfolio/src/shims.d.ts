declare module 'maath/random/dist/maath-random.esm' {
  export function inSphere(buffer: Float32Array, sphere?: { radius?: number; center?: number[] }): Float32Array;
  export function inBox(buffer: Float32Array, box?: { side?: number }): Float32Array;
}