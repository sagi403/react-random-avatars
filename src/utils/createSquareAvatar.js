export function createSquareAvatar(avatar, ctx, innerSize) {
  return avatar.forEach((row, i) => {
    row.forEach((value, j) => {
      ctx.fillStyle = value;
      ctx.fillRect(j * innerSize, i * innerSize, innerSize, innerSize);
    });
  });
}
