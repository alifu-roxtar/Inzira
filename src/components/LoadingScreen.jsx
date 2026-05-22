import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 900);
    const t2 = setTimeout(() => setShow(false), 1400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <img src={logo} alt="Inzira Technologies" className="h-24 w-auto animate-scale-in drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]" />
        <div className="h-1 w-48 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-1/3 rounded-full bg-gradient-primary animate-[loader_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`@keyframes loader { 0%{transform:translateX(-100%)} 100%{transform:translateX(300%)} }`}</style>
    </div>
  );
}
