// Logo Marquee — technology logos AUTOBIT builds with
// SVG logos inline — no external dependencies

const logos = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <circle cx="50" cy="50" r="8" fill="rgba(255,255,255,0.55)" />
        <ellipse cx="50" cy="50" rx="45" ry="17" stroke="rgba(255,255,255,0.40)" strokeWidth="4" fill="none" />
        <ellipse cx="50" cy="50" rx="45" ry="17" stroke="rgba(255,255,255,0.40)" strokeWidth="4" fill="none" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="45" ry="17" stroke="rgba(255,255,255,0.40)" strokeWidth="4" fill="none" transform="rotate(120 50 50)" />
      </svg>
    ),
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <path d="M50 5C30 5 22 14 22 28v10h28v4H18C8 42 4 52 4 62c0 18 10 28 24 28h8v-14c0-8 7-14 14-14h20c8 0 14-6 14-14V28C84 14 70 5 50 5zm-8 16a5 5 0 110 10 5 5 0 010-10z" fill="rgba(255,255,255,0.40)" />
        <path d="M58 95c20 0 28-9 28-23V62H58v-4h32c10 0 14-10 14-20 0-18-10-28-24-28h-8v14c0 8-7 14-14 14H38c-8 0-14 6-14 14v22C24 86 38 95 58 95zm8-16a5 5 0 110-10 5 5 0 010 10z" fill="rgba(255,255,255,0.25)" />
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <path d="M50 5L10 27v46l40 22 40-22V27L50 5zm0 12l28 15v8L50 25 22 40v-8L50 17zm0 16l20 11v22L50 77 30 66V44l20-11z" fill="rgba(255,255,255,0.40)" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <path d="M50 5L10 28v44l40 23 40-23V28L50 5zm0 10l32 18.5v37L50 89 18 70.5v-37L50 15z" fill="rgba(255,255,255,0.40)" />
        <path d="M50 30v40M35 38l15-8 15 8M35 62l15 8 15-8" stroke="rgba(255,255,255,0.40)" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <rect x="5" y="5" width="90" height="90" rx="8" fill="rgba(255,255,255,0.10)" />
        <text x="12" y="72" fontSize="52" fontWeight="900" fill="rgba(255,255,255,0.55)" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "Arduino",
    svg: (
      <svg viewBox="0 0 100 100" width="32" height="32" fill="none">
        <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,0.35)" strokeWidth="5" fill="none" />
        <path d="M28 50h18M54 50h18M35 43l-7 7 7 7M65 43l7 7-7 7" stroke="rgba(255,255,255,0.50)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 100 100" width="34" height="34" fill="none">
        <rect x="8" y="38" width="12" height="10" rx="2" fill="rgba(255,255,255,0.40)" />
        <rect x="24" y="38" width="12" height="10" rx="2" fill="rgba(255,255,255,0.40)" />
        <rect x="40" y="38" width="12" height="10" rx="2" fill="rgba(255,255,255,0.40)" />
        <rect x="24" y="24" width="12" height="10" rx="2" fill="rgba(255,255,255,0.40)" />
        <rect x="40" y="24" width="12" height="10" rx="2" fill="rgba(255,255,255,0.40)" />
        <rect x="40" y="10" width="12" height="10" rx="2" fill="rgba(255,255,255,0.40)" />
        <path d="M8 54c0 12 8 20 22 20h28c16 0 26-8 30-20H8z" fill="rgba(255,255,255,0.20)" />
        <circle cx="80" cy="42" r="5" fill="rgba(255,255,255,0.40)" />
        <path d="M85 46c4-2 6-6 6-10" stroke="rgba(255,255,255,0.40)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <path d="M50 8a30 30 0 00-14 57v10l14 17 14-17V65A30 30 0 0050 8zm0 10a20 20 0 0114 34.5V70l-14 17-14-17V52.5A20 20 0 0150 18z" fill="rgba(255,255,255,0.40)" />
        <circle cx="50" cy="38" r="8" fill="rgba(255,255,255,0.55)" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <ellipse cx="50" cy="25" rx="35" ry="15" stroke="rgba(255,255,255,0.40)" strokeWidth="4" fill="rgba(255,255,255,0.06)" />
        <path d="M15 25v25c0 8 16 15 35 15s35-7 35-15V25" stroke="rgba(255,255,255,0.40)" strokeWidth="4" fill="none" />
        <path d="M15 50v15c0 8 16 15 35 15s35-7 35-15V50" stroke="rgba(255,255,255,0.25)" strokeWidth="4" fill="none" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <path d="M50 10L95 90H5L50 10z" fill="rgba(255,255,255,0.45)" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 100 100" width="28" height="28" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M50 5a45 45 0 00-14.2 87.7c2.3.4 3.1-1 3.1-2.2v-8.5c-12.5 2.7-15.1-6-15.1-6-2-5.2-5-6.6-5-6.6-4.1-2.8.3-2.7.3-2.7 4.5.3 6.9 4.6 6.9 4.6 4 6.9 10.5 4.9 13.1 3.7.4-2.9 1.6-4.9 2.9-6-10-1.1-20.5-5-20.5-22.3 0-4.9 1.7-8.9 4.6-12.1-.5-1.1-2-5.7.4-11.9 0 0 3.8-1.2 12.4 4.6a43 43 0 0122.6 0c8.6-5.8 12.4-4.6 12.4-4.6 2.4 6.2.9 10.8.4 11.9 2.9 3.2 4.6 7.2 4.6 12.1 0 17.3-10.5 21.1-20.6 22.2 1.6 1.4 3.1 4.2 3.1 8.4v12.5c0 1.2.8 2.6 3.1 2.2A45 45 0 0050 5z" fill="rgba(255,255,255,0.45)" />
      </svg>
    ),
  },
];

const doubled = [...logos, ...logos];

const StatsBar = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "28px 0",
        position: "relative",
      }}
    >
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "160px",
          background: "linear-gradient(to right, #000000 40%, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "160px",
          background: "linear-gradient(to left, #000000 40%, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          animation: "logoMarquee 35s linear infinite",
        }}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              padding: "0 48px",
              opacity: 1,
              transition: "opacity 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = "1";
            }}
          >
            {logo.svg}
            <span
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.20)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                fontWeight: 500,
              }}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default StatsBar;
