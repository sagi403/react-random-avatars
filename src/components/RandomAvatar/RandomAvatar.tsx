import React, { useEffect, useRef } from "react";
import { createSquareAvatar, getRandomAvatar } from "../../utils";

interface RandomAvatarProps {
  size?: number;
  square?: boolean;
  name?: string;
}

const RandomAvatar = ({
  size = 40,
  square = false,
  name = "Default",
}: RandomAvatarProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const innerSize = size / 10;

    createSquareAvatar(getRandomAvatar(name), ctx, innerSize);
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
