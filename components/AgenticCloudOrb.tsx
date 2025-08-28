"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function AgenticCloudOrb() {
  return (
    <div className="relative flex items-center justify-center select-none">
      <div className="relative w-[213px] h-[213px] flex items-center justify-center">
        <PulsingBorder
          colors={["#00FFFF", "#FF1493", "#00CED1", "#FF69B4", "#40E0D0", "#FF6347", "#00BFFF"]}
          colorBack="#00000000"
          speed={0.6}
          roundness={1}
          thickness={0.08}
          softness={0.4}
          intensity={2.5}
          spotsPerColor={6}
          spotSize={0.15}
          pulse={0.4}
          smoke={0.3}
          smokeSize={3}
          scale={0.9}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            filter: "blur(0px)",
          }}
        />

        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 4 === 0 ? "#00FFFF" : i % 4 === 1 ? "#FF1493" : i % 4 === 2 ? "#FFFFFF" : "#40E0D0",
              filter: "blur(0.2px)",
              boxShadow: `0 0 ${Math.random() * 8 + 3}px currentColor`,
            }}
            animate={{
              x: [
                Math.cos((i * 2.4 * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.cos(((i * 2.4 + 120) * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.cos(((i * 2.4 + 240) * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.cos((i * 2.4 * Math.PI) / 180) * (10 + Math.random() * 80),
              ],
              y: [
                Math.sin((i * 2.4 * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.sin(((i * 2.4 + 120) * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.sin(((i * 2.4 + 180) * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.sin(((i * 2.4 + 270) * Math.PI) / 180) * (10 + Math.random() * 80),
                Math.sin((i * 2.4 * Math.PI) / 180) * (10 + Math.random() * 80),
              ],
              opacity: [0.2, 0.8, 0.4, 0.2],
              scale: [0.3, 1, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}

        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`bg-${i}`}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "1px",
              height: "1px",
              background: "#FFFFFF",
              filter: "blur(0.1px)",
              opacity: 0.6,
            }}
            animate={{
              x: [
                Math.cos((i * 4.5 * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.cos(((i * 4.5 + 90) * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.cos(((i * 4.5 + 180) * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.cos(((i * 4.5 + 270) * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.cos((i * 4.5 * Math.PI) / 180) * (5 + Math.random() * 90),
              ],
              y: [
                Math.sin((i * 4.5 * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.sin(((i * 4.5 + 90) * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.sin(((i * 4.5 + 180) * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.sin(((i * 4.5 + 270) * Math.PI) / 180) * (5 + Math.random() * 90),
                Math.sin((i * 4.5 * Math.PI) / 180) * (5 + Math.random() * 90),
              ],
              opacity: [0.1, 0.6, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.02,
              ease: "linear",
            }}
          />
        ))}

        <motion.div
          className="absolute w-3 h-3 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
            filter: "blur(4px)",
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
