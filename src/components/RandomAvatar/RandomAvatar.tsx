import React, { useEffect, useRef } from "react";
import { createSquareAvatar, getRandomAvatar } from "../../utils";

interface RandomAvatarProps {
  size?: number;
  square?: boolean;
}

const RandomAvatar = ({ size = 40, square = false }: RandomAvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const innerSize = size / 10;

    createSquareAvatar(getRandomAvatar(), ctx, innerSize);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ borderRadius: square ? "0" : "50%" }}
    />
  );
};

export default RandomAvatar;
