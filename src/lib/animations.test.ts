import { describe, it, expect } from 'vitest'
import { fadeUp, fadeInView, scaleInView, staggerContainer, scaleInChild, staggerOnMount } from './animations'

describe('fadeUp', () => {
  it('returns correct animation config with default delay', () => {
    const result = fadeUp()
    expect(result).toEqual({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: 0 },
    })
  })

  it('applies custom delay', () => {
    const result = fadeUp(0.3)
    expect(result.transition.delay).toBe(0.3)
  })
})

describe('fadeInView', () => {
  it('returns viewport-triggered animation config', () => {
    const result = fadeInView()
    expect(result).toEqual({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: 0 },
    })
  })

  it('applies custom delay', () => {
    const result = fadeInView(0.2)
    expect(result.transition.delay).toBe(0.2)
  })
})

describe('scaleInView', () => {
  it('returns scale-based viewport animation config', () => {
    const result = scaleInView()
    expect(result).toEqual({
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: true },
      transition: { duration: 0.3, delay: 0 },
    })
  })

  it('applies custom delay', () => {
    const result = scaleInView(0.1)
    expect(result.transition.delay).toBe(0.1)
  })
})

describe('staggerContainer', () => {
  it('returns viewport-triggered stagger config with default delay', () => {
    const result = staggerContainer()
    expect(result).toEqual({
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true },
      variants: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      },
    })
  })

  it('applies custom stagger delay', () => {
    const result = staggerContainer(0.1)
    expect(result.variants.visible.transition.staggerChildren).toBe(0.1)
  })
})

describe('scaleInChild', () => {
  it('has correct hidden and visible states', () => {
    expect(scaleInChild).toEqual({
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    })
  })
})

describe('staggerOnMount', () => {
  it('returns mount-based stagger config', () => {
    const result = staggerOnMount()
    expect(result).toEqual({
      initial: 'hidden',
      animate: 'visible',
      variants: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.03 } },
      },
    })
  })

  it('applies custom stagger delay', () => {
    const result = staggerOnMount(0.05)
    expect(result.variants.visible.transition.staggerChildren).toBe(0.05)
  })
})
