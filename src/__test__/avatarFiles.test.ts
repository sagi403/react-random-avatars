import * as avatarFiles from "../insertYourAvatarHere";
import fs from "fs";
import path from "path";

const isHexColor = (color: string): boolean =>
  /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);

const validateAvatarFile = (avatarFile: string[][]): void => {
  expect(avatarFile).toBeInstanceOf(Array);
  expect(avatarFile.length).toEqual(16);

  avatarFile.forEach(row => {
    expect(row).toBeInstanceOf(Array);
    row.forEach(color => {
      expect(typeof color).toBe("string");
      expect(isHexColor(color)).toBeTruthy();
    });
  });
};

test("All avatar files in insertYourAvatarHere meet the required standard", () => {
  Object.values(avatarFiles).forEach(avatarFile => {
    validateAvatarFile(avatarFile);
  });
});

test("All files in insertYourAvatarHere are TypeScript files", () => {
  const avatarFolderPath = path.join(__dirname, "..", "insertYourAvatarHere");
  const files = fs.readdirSync(avatarFolderPath);

  files.forEach(file => {
    const fileExtension = path.extname(file);
    expect(fileExtension).toBe(".ts");
  });
});

test("All files in insertYourAvatarHere are imported and exported in index.ts", () => {
  const avatarFolderPath = path.join(__dirname, "..", "insertYourAvatarHere");
  const files = fs.readdirSync(avatarFolderPath);

  const indexFilePath = path.join(avatarFolderPath, "index.ts");
  const indexFileContent = fs.readFileSync(indexFilePath, "utf8");

  files.forEach(file => {
    if (file === "index.ts") return;

    const fileNameWithoutExtension = path.basename(file, ".ts");
    const exportStatement = `export * from "./${fileNameWithoutExtension}";`;

    expect(indexFileContent).toContain(exportStatement);
  });
});
