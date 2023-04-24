export function drawColorBlend(
  colors: string[],
  ctx: CanvasRenderingContext2D,
  size: number
): void {
  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size
  );
  colors.forEach((color, index) => {
    gradient.addColorStop(index / colors.length, color);
  });
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
}
