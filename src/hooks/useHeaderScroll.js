import { useState, useEffect, useRef } from 'react'

export function useHeaderScroll() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const secondSectionTopRef = useRef(null)

  useEffect(() => {
    const recalcSecondSectionTop = () => {
      const secondSection = document.querySelector('.page-container > section:nth-of-type(2)')
      secondSectionTopRef.current = secondSection ? secondSection.offsetTop : null
    }

    const handleScroll = () => {
      const currentScrollY = Math.max(window.scrollY, 0)

      // Keep header visible near the top.
      if (currentScrollY <= 24) {
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true)
      }

      const secondSectionTop = secondSectionTopRef.current
      const passedToSecondSection =
        typeof secondSectionTop === 'number'
          ? currentScrollY >= Math.max(secondSectionTop - 100, 0)
          : currentScrollY > 0
      setIsScrolled(passedToSecondSection)

      lastScrollY.current = currentScrollY
    }

    recalcSecondSectionTop()
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', recalcSecondSectionTop, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', recalcSecondSectionTop)
    }
  }, [])

  return { isHeaderVisible, isScrolled }
}
