import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100, className = "" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  return (
    <div className={`overflow-hidden whitespace-nowrap w-full ${className}`}>
      <motion.div style={{ x }} className="flex gap-16 text-4xl sm:text-2xl md:text-7xl font-plaster font-bold uppercase text-blue-400">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="mx-4">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default ParallaxText;
