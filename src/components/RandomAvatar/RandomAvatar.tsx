import React, { useEffect, useRef } from "react";
import {
  createSquareAvatar,
  drawColorBlend,
  generateRandomColors,
  getRandomAvatar,
} from "../../utils";

type AvatarMode = "random" | "pattern" | "colors";

interface RandomAvatarProps {
  size?: number;
  square?: boolean;
  name?: string;
  mode?: AvatarMode;
  pattern?: string[][];
}

const RandomAvatar = ({
  size = 40,
  square = false,
  name = "Default Name",
  pattern,
  mode = "random",
}: RandomAvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (mode === "pattern") {
      if (!pattern) {
        console.warn(
          "Pattern mode is selected, but no pattern is provided. Falling back to the 'random' avatar mode."
        );
      } else {
        return createSquareAvatar(pattern, ctx, size);
      }
    } else if (mode === "colors") {
      return drawColorBlend(generateRandomColors(name), ctx, size);
    }
    createSquareAvatar(getRandomAvatar(name), ctx, size);
  }, [size, mode, pattern]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ borderRadius: square ? "0" : "50%" }}
      data-testid="random-avatar"
      aria-label={`${name} avatar`}
    />
  );
};

export default RandomAvatar;
