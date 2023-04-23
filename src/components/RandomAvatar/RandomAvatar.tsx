import React, { useEffect, useRef } from "react";
import { createSquareAvatar, getRandomAvatar } from "../../utils";

interface RandomAvatarProps {
  size?: number;
  square?: boolean;
  name?: string;
  alt?: string;
  pattern?: string[][];
}

const RandomAvatar = ({
  size = 40,
  square = false,
  name = "Default Name",
  alt = "Randomly generated avatar",
  pattern,
}: RandomAvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const avatarPattern = pattern || getRandomAvatar(name);
    createSquareAvatar(avatarPattern, ctx, size);
  }, [size, pattern]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ borderRadius: square ? "0" : "50%" }}
      data-testid="random-avatar"
      aria-label={alt}
    />
  );
};

export default RandomAvatar;
