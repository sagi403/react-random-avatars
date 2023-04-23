import { getRandomAvatar } from "../utils/getRandomAvatar";

const isHexColor = (color: string) =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);

test("getRandomAvatar returns a valid avatar design for a given name", () => {
  const name = "John Doe";
  const avatar = getRandomAvatar(name);

  // Test if the returned avatar is a valid design by checking its type and content
  expect(avatar).toBeInstanceOf(Array);
  expect(avatar.length).toEqual(16);

  avatar.forEach(row => {
    expect(row).toBeInstanceOf(Array);
    row.forEach(color => {
      expect(typeof color).toBe("string");
      expect(isHexColor(color)).toBeTruthy();
    });
  });
});
