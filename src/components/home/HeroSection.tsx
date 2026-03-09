import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorBends from "@/components/ColorBends";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const words = useMemo(
    () => ["automation.", "operations.", "intelligence.", "robotics.", "platforms."],
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % words.length), 2200);
    return () => clearTimeout(t);
  }, [index, words]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        background: "#000000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ColorBends living background */}
      <ColorBends
        className="color-bends-container"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
        colors={["#111111", "#1a1a1a", "#0d0d0d", "#181818"]}
        speed={0.12}
        rotation={35}
        transparent={true}
        warpStrength={0.75}
        frequency={0.85}
        mouseInfluence={0.35}
        parallax={0.25}
        noise={0.035}
      />

      {/* Top radial white glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(255,255,255,0.08), transparent 62%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Side glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 40% 60% at 0% 50%, rgba(255,255,255,0.025), transparent), radial-gradient(ellipse 40% 60% at 100% 50%, rgba(255,255,255,0.025), transparent)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.5,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%", maxWidth: "900px" }}>

        {/* Glass pill badge */}
        <a
          href="mailto:autobitofficial.ph@gmail.com"
          style={{
            marginBottom: "32px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: "7px 18px",
            fontSize: "12px",
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.10)";
            e.currentTarget.style.color = "rgba(255,255,255,0.80)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.color = "rgba(255,255,255,0.55)";
          }}
        >
          <span
            style={{
              height: "6px",
              width: "6px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.50)",
              display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          Start Something™
        </a>

        {/* Main headline — line 1 static */}
        <h1
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
            fontSize: "clamp(44px, 6.5vw, 84px)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.04,
            color: "#ffffff",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Systems engineered for
        </h1>

        {/* Animated cycling word — line 2 */}
        <div
          style={{
            height: "clamp(54px, 8vw, 100px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginTop: "4px",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                fontSize: "clamp(44px, 6.5vw, 84px)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.04,
                color: "rgba(255,255,255,0.55)",
                display: "block",
                textAlign: "center",
              }}
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 19px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            maxWidth: "500px",
            margin: "24px auto 0",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
          }}
        >
          AI agents, automation, web applications, and intelligent robotics — built and deployed in days.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", marginTop: "36px", flexWrap: "wrap" }}>
          <a
            href="mailto:autobitofficial.ph@gmail.com"
            style={{
              background: "#2997ff",
              color: "#ffffff",
              padding: "14px 32px",
              borderRadius: "980px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.25s ease",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
              boxShadow: "0 0 32px rgba(41,151,255,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 48px rgba(41,151,255,0.45)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 32px rgba(41,151,255,0.25)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Start a project
          </a>
          <a
            href="/projects"
            style={{
              background: "transparent",
              color: "#2997ff",
              padding: "14px 32px",
              borderRadius: "980px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.25s ease",
              fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(41,151,255,0.75)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#2997ff";
            }}
          >
            See our work →
          </a>
        </div>

        {/* Trust line */}
        <p
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.20)",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "0.03em",
          }}
        >
          50% deposit to start · Balance on delivery · No retainers
        </p>

        {/* Stats row inside hero — bottom */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            marginTop: "72px",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {[
            { value: "2–5d", label: "Average delivery" },
            { value: "$800+", label: "Starting price" },
            { value: "Patented", label: "Award-winning builds" },
            { value: "50%", label: "Deposit to start" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "24px 20px",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.30)",
                  marginTop: "6px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
