import React, { useEffect, useRef } from "react";
import { createSquareAvatar, getRandomAvatar } from "../../utils";

interface RandomAvatarProps {
  size?: number;
  square?: boolean;
  name?: string;
  alt?: string;
}

const RandomAvatar = ({
  size = 40,
  square = false,
  name = "Default Name",
  alt = "Randomly generated avatar",
}: RandomAvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    createSquareAvatar(getRandomAvatar(name), ctx, size);
  }, [size]);

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
