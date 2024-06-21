export const containrVatiants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.8,
      delay: 0.4,
    },
  },
};

export const titileVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.6,
      delay: 0.2,
    },
  },
};

export const imageVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export const rotateVariants = {
  offscreen: {
    opacity: 0,
    rotate: -90,
  },
  onscreen: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export const skewVariants = {
  offscreen: {
    opacity: 0,
    skew: 10,
  },
  onscreen: {
    opacity: 1,
    skew: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.5,
    },
  },
};

export const fadeInUpVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.3,
    },
  },
};

export const fadeInDownVariants = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.3,
    },
  },
};
