export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export const fadeInView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

export const scaleInView = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.3, delay },
})

export const staggerContainer = (staggerDelay = 0.05) => ({
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  },
})

export const scaleInChild = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

export const staggerOnMount = (staggerDelay = 0.03) => ({
  initial: 'hidden' as const,
  animate: 'visible' as const,
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  },
})
