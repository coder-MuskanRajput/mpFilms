import sync, { cancelSync } from "framesync";
import { useEffect } from "react";
import { createExpoIn, reversed } from "@popmotion/easing";

// Version of Greensock's Quad ease out
export const powerOut4 = reversed(createExpoIn(4));

// Hook to use an animation loop
export const useAnimationLoop = callback => {
  useEffect(() => {
    sync.update(callback, true);
    return () => cancelSync.update(callback);
  }, [callback]);
};

// Center images using transforms
export const center = (_, generated) =>
  `translate(-50%, -50%) ${generated}`;

// Emulate slightly different image ratios by randomly generating size
const generateNumber = (base, range) => {
  return base - range / 2 + Math.round(Math.random() * range);
};
export const generateSize = () => ({
  height: generateNumber(312, 70),
  width: generateNumber(250, 50)
});

// Instead of using images just use color placeholders.
const placeholderColors = new Set();

for (let i = 0; i < 30; i++) {
  placeholderColors.add(`hsla(${Math.round(Math.random() * 360)},100%,70%,1)`);
}

export const colors = Array.from(placeholderColors);


const imageUrls = [
    "https://4.imimg.com/data4/LD/KW/MY-10072209/shooting-services-500x500.jpg",
    "https://images.picxy.com/cache/2019/8/23/47f4fe4e9264b6c5e90acbd3a99ffc2f.jpg",
    'https://www.nagpurtrends.com/uploads/pky6vA-film-shoot.1.639150.jpg',
    'https://previews.123rf.com/images/kuttipream/kuttipream1711/kuttipream171100388/89897051-film-crew-on-location-movie-shooting-film-shooting-on-top-hills.jpg',
    'https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203a32ba0cf162205f662b_videographer-shooting-a-scene.jpeg',
    'https://img.freepik.com/premium-photo/scenes-shooting-video-production-lighting-set-movie_549515-173.jpg',
    'https://thumbs.dreamstime.com/b/behind-scenes-movie-shooting-video-production-film-crew-team-camera-equipment-outdoor-location-151746971.jpg',
    'https://timesofindia.indiatimes.com/photo/msid-74027377/74027377.jpg?resizemode=4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBeG6rDZtYOoyOneeyHVwhN4t8cIsbUcFffQ&s',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202207/Telugu_film_shooting_stopped_1200x768.jpeg?VersionId=eLNxD5wk8D.zx.MjkxIoHQ626tKB7xU2',
    // Add more image URLs as needed
  ];
  
  export const images = imageUrls;
