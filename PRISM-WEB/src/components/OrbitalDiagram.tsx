"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────
interface OrbitalNode {
  id: string;
  label: string; // use \n for line breaks
  color: string; // CSS gradient stops e.g. "#24519E, #239B82"
  delay: number; // orbit phase offset in seconds
}

interface OrbitalDiagramProps {
  nodes: OrbitalNode[];
  centerLabel?: string;
  centerGradient?: string; // CSS gradient stops
  orbitDuration?: number;
  nodeShape?: "circle" | "rect";
  nodeSize?: number;
  ringColor1?: string;
  ringColor2?: string;
  title?: string;
  subtitle?: string;
}

// ── Responsive hook ────────────────────────────────────────────────────────
function useContainerWidth(ref: React.RefObject<HTMLDivElement>) {
  const [width, setWidth] = useState(280);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [ref]);
  return width;
}

// ── OrbitingNode ───────────────────────────────────────────────────────────
function OrbitingNode({
  label,
  color,
  delay,
  orbitRadius,
  duration,
  shape = "circle",
  size = 70,
}: {
  label: string;
  color: string;
  delay: number;
  orbitRadius: number;
  duration: number;
  shape?: "circle" | "rect";
  size?: number;
}) {
  const isRect = shape === "rect";

  return (
    <motion.div
      className="absolute inset-0"
      style={{ transformOrigin: "center center" }}
      animate={{ rotateZ: 360, rotateX: 22 }}
      transition={{ duration, ease: "linear", repeat: Infinity, delay: -delay }}
    >
      <motion.div
        className="absolute"
        style={{
          top: `calc(50% - ${orbitRadius}px - ${size / 2}px)`,
          left: `calc(50% - ${size / 2}px)`,
          width: size,
          height: isRect ? "auto" : size,
        }}
        animate={{ rotateZ: -360 }}
        transition={{ duration, ease: "linear", repeat: Infinity, delay: -delay }}
        whileHover={{ scale: 1.1 }}
      >
        <div
          className="text-white font-medium flex items-center justify-center text-center leading-snug shadow-md cursor-default select-none"
          style={{
            width: size,
            height: isRect ? "auto" : size,
            minHeight: isRect ? 52 : undefined,
            borderRadius: isRect ? 10 : "50%",
            fontSize: isRect ? 9.5 : 10,
            padding: isRect ? "8px 10px" : 0,
            background: `linear-gradient(135deg, ${color})`,
          }}
        >
          {label.split("\n").map((line, i) => (
            <span key={i} className="block break-words text-center">
              {line}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── OrbitalDiagram ─────────────────────────────────────────────────────────
function OrbitalDiagram({
  nodes,
  centerLabel,
  centerGradient = "#24519E, #239B82",
  orbitDuration = 9,
  nodeShape = "circle",
  nodeSize = 78,
  ringColor1 = "rgba(36,81,158,0.3)",
  ringColor2 = "rgba(35,155,130,0.2)",
  title,
  subtitle,
}: OrbitalDiagramProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerWidth = useContainerWidth(wrapperRef as React.RefObject<HTMLDivElement>);

  // Scale scene size responsively: max 280, min 220
  const sceneSize = Math.min(280, Math.max(220, containerWidth - 20));
  const orbitRadius = sceneSize * 0.36; // ~100px at 280

  // Scale node size proportionally
  const scaledNodeSize = Math.round(nodeSize * (sceneSize / 280));

  return (
    <div ref={wrapperRef} className="flex flex-col items-center gap-4 w-full">
      <motion.div
        className="relative flex-shrink-0"
        style={{ width: sceneSize, height: sceneSize }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `1.5px solid ${ringColor1}` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 9, ease: "linear", repeat: Infinity }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute rounded-full"
          style={{ inset: 18, border: `1.5px solid ${ringColor2}` }}
          animate={{ rotate: -360 }}
          transition={{ duration: 13, ease: "linear", repeat: Infinity }}
        />

        {/* Satellite nodes */}
        {nodes.map((n) => (
          <OrbitingNode
            key={n.id}
            label={n.label}
            color={n.color}
            delay={n.delay}
            orbitRadius={orbitRadius}
            duration={orbitDuration}
            shape={nodeShape}
            size={scaledNodeSize}
          />
        ))}

        {/* Center node */}
        {centerLabel && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              className="text-white font-semibold text-center rounded-full flex items-center justify-center leading-snug select-none px-3"
              style={{
                width: Math.round(sceneSize * 0.29),
                height: Math.round(sceneSize * 0.29),
                fontSize: Math.round(sceneSize * 0.032),
                background: `linear-gradient(135deg, ${centerGradient})`,
                boxShadow:
                  "0 0 0 7px rgba(36,81,158,0.13), 0 0 0 14px rgba(35,155,130,0.07)",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="break-words text-center leading-tight">
                {centerLabel}
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Labels */}
      {(title || subtitle) && (
        <div className="text-center px-2 py-4">
          {title && (
            <p className="font-semibold tracking-wide text-[#24519E] leading-snug"
              style={{ fontSize: "clamp(12px, 2.8vw, 17px)" }}>
              {title}
            </p>
          )}
          {subtitle && (
            <p className="text-xs font-bold text-gray-900 mt-1">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────
const COME_AI_NODES: OrbitalNode[] = [
  { id: "hub",         label: "ComeAI Hub",          color: "#1a8fcc, #239B82", delay: 0 },
  { id: "collective",  label: "ComeAI Collective",    color: "#24519E, #3a7fd4", delay: 3 },
  { id: "partnership", label: "ComeAI Partnership",   color: "#335a8a, #239B82", delay: 6 },
];

const RIRD_NODES: OrbitalNode[] = [
  { id: "design",     label: "Designing agile & innovative regulations",          color: "#1f4e79, #2a6496", delay: 0 },
  { id: "codesign",   label: "Co-designing regulatory code of practice",          color: "#155a5a, #1e9b7a", delay: 4 },
  { id: "establish",  label: "Establishing purposes & outcomes",                  color: "#1e6b45, #239B82", delay: 8 },
  { id: "implement",  label: "Implementing Regulatory Delivery Models",           color: "#3a5a4a, #4a7a62", delay: 12 },
  { id: "building",   label: "Building evidence-based performance measurement",   color: "#2a4a6a, #3a7a82", delay: 16 },
];

// ── Page ───────────────────────────────────────────────────────────────────
export default function OrbitalDiagramAnimation() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start justify-items-center py-10 px-4 w-full max-w-4xl mx-auto">
      <OrbitalDiagram
        nodes={COME_AI_NODES}
        centerLabel="ComeAI Framework Ecosystem"
        centerGradient="#24519E, #239B82"
        orbitDuration={9}
        nodeShape="circle"
        nodeSize={90}
        title="ComeAI – Community Empowerment through AI"
        subtitle="(Bottom-up)"
      />

      <OrbitalDiagram
        nodes={RIRD_NODES}
        centerLabel=""
        centerGradient="#1e6b45, #239B82"
        orbitDuration={14}
        nodeShape="rect"
        nodeSize={120}
        ringColor1="rgba(35,155,130,0.3)"
        ringColor2="rgba(59,125,68,0.22)"
        title="Risk Informed Regulatory Delivery"
        subtitle="Top-down"
      />
    </div>
  );
}