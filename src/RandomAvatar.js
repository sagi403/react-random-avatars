import { useEffect, useRef } from "react";
import createSquareAvatar from "./utils/createSquareAvatar";
import getRandomAvatar from "./utils/getRandomAvatar";

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

export default RandomAvatar;
