"use client";

import { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  isAccent: boolean;
  radius: number;
}

export function NeuralHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const mouse = { x: 0, y: 0, active: false };

    const NODE_COUNT = 34;
    const nodes: Node3D[] = Array.from({ length: NODE_COUNT }, (_, idx) => ({
      x: (Math.random() - 0.5) * 380,
      y: (Math.random() - 0.5) * 320,
      z: (Math.random() - 0.5) * 240,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      vz: (Math.random() - 0.5) * 0.35,
      isAccent: idx % 6 === 0,
      radius: idx % 6 === 0 ? 4.2 : 2.8,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left - width / 2) * 0.0008;
      mouse.y = (e.clientY - rect.top - height / 2) * 0.0008;
      mouse.active = true;
    };

    canvas.addEventListener("mousemove", onMouseMove);

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const focal = 460;

      if (!prefersReducedMotion) {
        angle += 0.0022;
      }

      const rotY = angle + (mouse.active ? mouse.x * 12 : 0);
      const rotX = mouse.active ? mouse.y * 10 : 0.15;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Draw subtle architectural orbital rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.strokeStyle = "rgba(185, 221, 245, 0.7)";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.min(width, height) * 0.38, Math.min(width, height) * 0.16, -0.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(16, 42, 67, 0.12)";
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.min(width, height) * 0.34, Math.min(width, height) * 0.14, 0.45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      const projected = nodes.map((node) => {
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          if (Math.abs(node.x) > 195) node.vx *= -1;
          if (Math.abs(node.y) > 165) node.vy *= -1;
          if (Math.abs(node.z) > 130) node.vz *= -1;
        }

        // Rotate around Y then X
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.z * cosY + node.x * sinY;
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + node.y * sinX;

        const scale = focal / (focal + z2 + 120);
        return {
          sx: cx + x1 * scale,
          sy: cy + y2 * scale,
          scale,
          z: z2,
          isAccent: node.isAccent,
          radius: node.radius,
        };
      });

      // Connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.hypot(dx, dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.55;
            const hasAccent = a.isAccent || b.isAccent;
            ctx.strokeStyle = hasAccent
              ? `rgba(255, 77, 0, ${alpha * 0.55})`
              : `rgba(16, 42, 67, ${alpha * 0.35})`;
            ctx.lineWidth = hasAccent ? 1.25 : 1;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Nodes
      projected
        .sort((a, b) => b.z - a.z)
        .forEach((p) => {
          const r = p.radius * p.scale;
          if (p.isAccent) {
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, r * 2.2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 77, 0, 0.14)";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
            ctx.fillStyle = "#FF4D00";
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(p.sx, p.sy, r + 1.5, 0, Math.PI * 2);
            ctx.fillStyle = "#B9DDF5";
            ctx.fill();

            ctx.beginPath();
            ctx.arc(p.sx, p.sy, r * 0.75, 0, Math.PI * 2);
            ctx.fillStyle = "#102A43";
            ctx.fill();
          }
        });

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-label="Interactive AI neural network and connected nodes visualization"
    />
  );
}
