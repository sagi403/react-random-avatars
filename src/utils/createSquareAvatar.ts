export function createSquareAvatar(
  avatar: string[][],
  ctx: CanvasRenderingContext2D,
  size: number
): void {
  const avatarSize = avatar.length;
  const squareSize = size / avatarSize;
  const offset = 0.5; // Adjust this value to control the overlap

  avatar.forEach((row, i) => {
    row.forEach((value, j) => {
      ctx.fillStyle = value;
      ctx.fillRect(
        j * squareSize - offset,
        i * squareSize - offset,
        squareSize + 2 * offset,
        squareSize + 2 * offset
      );
    });
  });
}
