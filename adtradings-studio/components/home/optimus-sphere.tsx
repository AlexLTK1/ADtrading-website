'use client'

import { useEffect, useRef } from 'react'

export function OptimusSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    // Dot-matrix globe treatment copied from the referenced template, recolored to
    // the existing brand cyan used throughout the hero.
    const characters = '·•'
    let angle = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      const bounds = canvas.getBoundingClientRect()
      canvas.width = bounds.width * ratio
      canvas.height = bounds.height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const render = () => {
      const bounds = canvas.getBoundingClientRect()
      context.clearRect(0, 0, bounds.width, bounds.height)
      const centerX = bounds.width / 2
      const centerY = bounds.height / 2
      const radius = 0.525 * Math.min(bounds.width, bounds.height)
      context.font = '12px monospace'
      context.textAlign = 'center'
      context.textBaseline = 'middle'

      const points: Array<{ x: number; y: number; z: number; char: string }> = []
      for (let longitude = 0; longitude < 2 * Math.PI; longitude += 0.15) {
        for (let latitude = 0; latitude < Math.PI; latitude += 0.15) {
          const x = Math.sin(latitude) * Math.cos(longitude + 0.5 * angle)
          const y = Math.sin(latitude) * Math.sin(longitude + 0.5 * angle)
          const z = Math.cos(latitude)
          const tilt = 0.3 * angle
          const tiltedX = x * Math.cos(tilt) - z * Math.sin(tilt)
          const tiltedZ = x * Math.sin(tilt) + z * Math.cos(tilt)
          const twist = 0.2 * angle
          const twistedY = y * Math.cos(twist) - tiltedZ * Math.sin(twist)
          const finalZ = y * Math.sin(twist) + tiltedZ * Math.cos(twist)
          const characterIndex = Math.floor(((finalZ + 1) / 2) * (characters.length - 1))
          points.push({
            x: centerX + tiltedX * radius,
            y: centerY + twistedY * radius,
            z: finalZ,
            char: characters[characterIndex],
          })
        }
      }

      points.sort((a, b) => a.z - b.z)
      points.forEach((point) => {
        const opacity = 0.16 + (point.z + 1) * 0.3
        context.fillStyle = `rgba(0, 159, 227, ${opacity})`
        context.fillText(point.char, point.x, point.y)
      })
      angle += 0.006
      frameRef.current = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    render()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" style={{ display: 'block' }} />
}
