export function createSquareAvatar(
  avatar: string[][],
  ctx: CanvasRenderingContext2D,
  size: number
): void {
  const avatarSize = avatar.length;
  const squareSize = size / avatarSize;

  avatar.forEach((row, i) => {
    row.forEach((value, j) => {
      ctx.fillStyle = value;
      ctx.fillRect(j * squareSize, i * squareSize, squareSize, squareSize);
    });
  });
}
