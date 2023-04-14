export function simpleHash(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0;
  }
  return Math.abs(hash);
}
