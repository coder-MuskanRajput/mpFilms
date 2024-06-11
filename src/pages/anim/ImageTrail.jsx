import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { mix, distance, wrap } from "@popmotion/popcorn";
import {
  colors,
  images,
  center,
  powerOut4,
  generateSize,
  useAnimationLoop
} from "./util";
import "./style.css";

const ImagePlaceholder = ({ position, img }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (!position) return;
    const { xOrigin, x, yOrigin, y } = position;
    controls.start({
      x: [xOrigin, x, x],
      y: [yOrigin, y, y],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.2],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.7, 1]
      }
    });
  }, [position, controls]); // Ensure controls are included as a dependency

  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={controls}
      transformTemplate={center}
      src={img}
      className="placeholder w-38 object-cover"
      alt=""
    />
  );
};

const TrailImages = ({ distanceThreshold = 140 }) => {
  const mouseInfo = useRef({
    now: { x: 0, y: 0 },
    prev: { x: 0, y: 0 },
    prevImage: { x: 0, y: 0 }
  }).current;

  const imagePositions = useRef([]);

  const [index, setIndex] = useState(0);

  useAnimationLoop(() => {
    const mouseDistance = distance(mouseInfo.now, mouseInfo.prevImage);

    mouseInfo.prev = {
      x: mix(mouseInfo.prev.x || mouseInfo.now.x, mouseInfo.now.x, 0.1),
      y: mix(mouseInfo.prev.y || mouseInfo.now.y, mouseInfo.now.y, 0.1)
    };

    if (mouseDistance > distanceThreshold) {
      const newIndex = index + 1;
      const imageIndex = wrap(0, colors.length - 1, newIndex);

      imagePositions.current[imageIndex] = {
        xOrigin: mouseInfo.prev.x,
        yOrigin: mouseInfo.prev.y,
        x: mouseInfo.now.x,
        y: mouseInfo.now.y,
        style: {
          ...generateSize(),
          zIndex: imageIndex
        }
      };

      mouseInfo.prevImage = mouseInfo.now;

      setIndex(newIndex);
    }
  });

  return (
    <div
      className="absolute z-50 top-0 left-0 right-0 bottom-0"
      onMouseMove={(e) => (mouseInfo.now = { x: e.pageX, y: e.pageY })}
    >
      {images.map((img, i) => (
        <ImagePlaceholder
          position={imagePositions.current[i]}
          key={i}
          img={img}
        />
      ))}
    </div>
  );
};

export default TrailImages;
