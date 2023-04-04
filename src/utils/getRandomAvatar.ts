import * as avatarsContext from "../insertYourAvatarHere";

export function getRandomAvatar(): string[][] {
  const avatarNames = Object.keys(avatarsContext);
  const randomIndex = Math.floor(Math.random() * avatarNames.length);
  const randomAvatarName = avatarNames[randomIndex];
  return avatarsContext[randomAvatarName as keyof typeof avatarsContext];
}
