import { useEffect, useRef } from "react";
import "./CanvasBackground.css";

const CanvasBackground = ({ isLight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    /* ---------- RESIZE ---------- */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- TAGS ---------- */
    const TAGS = [
      { text: "<header>", color: "#5b7cff" },
      { text: "<nav>", color: "#5b7cff" },
      { text: "<main>", color: "#5b7cff" },
      { text: "<section>", color: "#5b7cff" },
      { text: "class=", color: "#c28b3c" },
      { text: "id=", color: "#c28b3c" },
      { text: "\"container\"", color: "#4aa86b" },
      { text: "</div>", color: "#7a5fb0" },
      { text: "Hello World", color: "#556" }
    ];

    /* ---------- ITEMS ---------- */
    const items = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random(),
      baseSize: 12 + Math.random() * 8,
      speed: 0.2 + Math.random() * 0.5,
      data: TAGS[Math.floor(Math.random() * TAGS.length)]
    }));

    /* ---------- HELPERS ---------- */
    const hex = (h) => {
      const v = h.replace("#", "").match(/.{1,2}/g);
      return `${parseInt(v[0], 16)},${parseInt(v[1], 16)},${parseInt(v[2], 16)}`;
    };

    const drawTag = (t) => {
      const depth = 0.35 + t.z;
      ctx.font = `${t.baseSize * depth}px ui-monospace, monospace`;

      const alpha = isLight
        ? 0.18 + t.z * 0.25
        : 0.1 + t.z * 0.15;

      ctx.fillStyle = `rgba(${hex(t.data.color)},${alpha})`;
      ctx.fillText(t.data.text, t.x, t.y);
    };

    /* ---------- ANIMATE ---------- */
    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      items
        .sort((a, b) => a.z - b.z)
        .forEach((t) => {
          t.y -= t.speed * (0.5 + t.z);
          if (t.y < -40) {
            t.y = canvas.height + 40;
            t.x = Math.random() * canvas.width;
            t.z = Math.random();
          }
          drawTag(t);
        });

      rafId = requestAnimationFrame(animate);
    };

    animate();

    /* ---------- CLEANUP ---------- */
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, [isLight]);

  return <canvas ref={canvasRef} className="canvas-bg" />;
};

export default CanvasBackground;
