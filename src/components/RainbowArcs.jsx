// export default function RainbowArcs({
//   sizeClass = "w-[360px] h-[360px] md:w-[420px] md:h-[420px]",
//   opacityClass = "opacity-35",
//   strokeWidth = 10,
//   segments = [70, 70, 70, 70],
//   offsets = [0, 8, 16, 24],
//   className = "",
// }) {
//   return (
//     <div
//       className={`pointer-events-none absolute inset-0 ${opacityClass} flex items-center justify-center ${className}`}
//     >
//       <svg viewBox="0 0 400 400" className={`${sizeClass}`} fill="none">
//         <defs>
//           <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#22d3ee" />
//             <stop offset="50%" stopColor="#a78bfa" />
//             <stop offset="100%" stopColor="#34d399" />
//           </linearGradient>
//         </defs>
//         <g strokeWidth={strokeWidth} strokeLinecap="round" transform="rotate(-90 200 200)">
//           {/* Outer Arc */}
//           <path
//             d="M60 300a140 140 0 1 1 280 0"
//             pathLength="100"
//             strokeDasharray={segments[0]}
//             strokeDashoffset={offsets[0]}
//             stroke="url(#grad1)"
//             opacity=".25"
//           />
//           {/* Second Arc */}
//           <path
//             d="M90 300a110 110 0 1 1 220 0"
//             pathLength="100"
//             strokeDasharray={segments[1]}
//             strokeDashoffset={offsets[1]}
//             stroke="#22d3ee"
//             opacity=".25"
//           />
//           {/* Third Arc */}
//           <path
//             d="M120 300a80 80 0 1 1 160 0"
//             pathLength="100"
//             strokeDasharray={segments[2]}
//             strokeDashoffset={offsets[2]}
//             stroke="#a78bfa"
//             opacity=".22"
//           />
//           {/* Inner Arc */}
//           <path
//             d="M150 300a50 50 0 1 1 100 0"
//             pathLength="100"
//             strokeDasharray={segments[3]}
//             strokeDashoffset={offsets[3]}
//             stroke="#34d399"
//             opacity=".20"
//           />
//         </g>
//       </svg>
//     </div>
//   );
// }



export default function RainbowArcs() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-35 flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-[360px] h-[360px] md:w-[420px] md:h-[420px]"
        fill="none"
      >
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />   {/* Cyan */}
            <stop offset="50%" stopColor="#a78bfa" /> {/* Purple */}
            <stop offset="100%" stopColor="#34d399" /> {/* Emerald */}
          </linearGradient>
        </defs>

        {/* Arcs */}
        <g strokeWidth="10" strokeLinecap="round" transform="rotate(-90 200 200)">
          <path
            d="M60 300a140 140 0 1 1 280 0"
            pathLength="100"
            strokeDasharray="70"
            strokeDashoffset="0"
            stroke="url(#grad1)"
            opacity=".25"
          />
          <path
            d="M90 300a110 110 0 1 1 220 0"
            pathLength="100"
            strokeDasharray="70"
            strokeDashoffset="8"
            stroke="#22d3ee"
            opacity=".25"
          />
          <path
            d="M120 300a80 80 0 1 1 160 0"
            pathLength="100"
            strokeDasharray="70"
            strokeDashoffset="16"
            stroke="#a78bfa"
            opacity=".22"
          />
          <path
            d="M150 300a50 50 0 1 1 100 0"
            pathLength="100"
            strokeDasharray="70"
            strokeDashoffset="24"
            stroke="#34d399"
            opacity=".20"
          />
        </g>
      </svg>
    </div>
  );
}
