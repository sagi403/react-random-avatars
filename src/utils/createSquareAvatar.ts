export function createSquareAvatar(
  avatar: string[][],
  ctx: CanvasRenderingContext2D,
  innerSize: number
): void {
  avatar.forEach((row, i) => {
    row.forEach((value, j) => {
      ctx.fillStyle = value;
      ctx.fillRect(j * innerSize, i * innerSize, innerSize, innerSize);
    });
  });
}
