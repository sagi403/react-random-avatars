import * as avatarsContext from "../insertYourAvatarHere";
import { simpleHash } from "./simpleHash";

export function getRandomAvatar(name: string): string[][] {
  const avatarNames = Object.keys(avatarsContext);
  const hash = simpleHash(name);
  const index = hash % avatarNames.length;
  const avatarName = avatarNames[index];
  return avatarsContext[avatarName as keyof typeof avatarsContext];
}
