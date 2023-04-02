import { useEffect, useRef } from "react";
import { getRandomAvatar } from "./getRandomAvatar";

const RandomAvatar = ({ size, square }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
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

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createSquareAvatar(avatar, ctx, innerSize) {
  return avatar.forEach((row, i) => {
    row.forEach((value, j) => {
      ctx.fillStyle = value;
      ctx.fillRect(j * innerSize, i * innerSize, innerSize, innerSize);
    });
  });
}

export default RandomAvatar;
