function getRandomAvatar() {
  const avatarNames = require
    .context(`../insertYourAvatarHere`, false, /\.js?$/)
    .keys();
  const randomIndex = Math.floor(Math.random() * avatarNames.length);
  const randomAvatarName = avatarNames[randomIndex]
    .replace(/^\.\//, "")
    .replace(/\.js$/, "");
  return require(`../insertYourAvatarHere/${randomAvatarName}.js`)[
    randomAvatarName
  ];
}

export default getRandomAvatar;
