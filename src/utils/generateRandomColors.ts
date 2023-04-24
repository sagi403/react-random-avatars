import { simpleHash } from "./simpleHash";

export function generateRandomColors(name: string): string[] {
  const hash = simpleHash(name);
  let seed = hash;

  const seededRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const randomColor = () => {
    const randomHex = () =>
      Math.floor(seededRandom() * 256)
        .toString(16)
        .padStart(2, "0");
    return `#${randomHex()}${randomHex()}${randomHex()}`;
  };

  return Array.from({ length: 5 }, randomColor);
}
