import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 3),
      smooth: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
}
