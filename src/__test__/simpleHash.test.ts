import { simpleHash } from "../utils/simpleHash";

test("simpleHash creates a consistent hash for a given input", () => {
  const name = "John Doe";
  const hash1 = simpleHash(name);
  const hash2 = simpleHash(name);

  expect(hash1).toEqual(hash2);
});
