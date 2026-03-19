"use client";

export default function FallWobbleText({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @keyframes fall-wobble {
          0%   { transform: translateY(-80px) rotate(-6deg); opacity: 0; }
          55%  { transform: translateY(10px) rotate(3deg); opacity: 1; }
          70%  { transform: translateY(-5px) rotate(-1.5deg); }
          82%  { transform: translateY(3px) rotate(1deg); }
          91%  { transform: translateY(-2px) rotate(-0.4deg); }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
        .fall-wobble-text {
          display: inline-block;
          animation: fall-wobble 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.1s;
        }
      `}</style>
      <span className="fall-wobble-text" style={{ color: "#B89FF5" }}>{children}</span>
    </>
  );
}
