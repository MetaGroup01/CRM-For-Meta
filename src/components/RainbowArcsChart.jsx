import { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function RainbowArcsChart({
  percents = [95, 65, 40, 25],
  sizeClass = 'w-[420px] h-[420px] md:w-[520px] md:h-[520px]',
  opacityClass = 'opacity-35',
  className = '',
  rotateDeg = 0,
}) {
  // clamp 0..100
  const p = percents.map((v) => Math.max(0, Math.min(100, v)))

  const data = useMemo(() => {
    const baseRot = [-90, -82, -74, -66]
    return {
      // one label is enough; legend will be hidden anyway
      labels: ['arc', 'gap'],
      datasets: [
        // Outer to inner
        {
          data: [p[0], 100 - p[0]],
          backgroundColor: [
            'rgba(34, 211, 238, 0.25)', // cyan
            'rgba(0,0,0,0)',
          ],
          borderWidth: 0,
          borderRadius: 12,
          cutout: '62%',       // inner radius
          circumference: (p[0] / 100) * 360,
          rotation: baseRot[0] + rotateDeg,       // start at right with user rotation
          radius: '100%',      // outer radius
          weight: 1,
        },
        {
          data: [p[1], 100 - p[1]],
          backgroundColor: [
            'rgba(34, 211, 238, 0.25)',
            'rgba(0,0,0,0)',
          ],
          borderWidth: 0,
          borderRadius: 12,
          cutout: '58%',
          circumference: (p[1] / 100) * 360,
          rotation: baseRot[1] + rotateDeg, // slight offset + user rotation
          radius: '86%',
          weight: 1,
        },
        {
          data: [p[2], 100 - p[2]],
          backgroundColor: [
            'rgba(167, 139, 250, 0.22)', // purple
            'rgba(0,0,0,0)',
          ],
          borderWidth: 0,
          borderRadius: 12,
          cutout: '44%',
          circumference: (p[2] / 100) * 360,
          rotation: baseRot[2] + rotateDeg,
          radius: '72%',
          weight: 1,
        },
        {
          data: [p[3], 100 - p[3]],
          backgroundColor: [
            'rgba(52, 211, 153, 0.20)', // emerald
            'rgba(0,0,0,0)',
          ],
          borderWidth: 0,
          borderRadius: 12,
          cutout: '30%',
          circumference: (p[3] / 100) * 360,
          rotation: baseRot[3] + rotateDeg,
          radius: '58%',
          weight: 1,
        },
      ],
    }
  }, [p, rotateDeg])

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
      animation: { duration: 0 },
    }),
    []
  )

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${opacityClass} flex items-center justify-center ${className}`}
    >
      <div className={`${sizeClass}`}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}
