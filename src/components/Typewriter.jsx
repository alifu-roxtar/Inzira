import { useEffect, useState } from "react";

export function Typewriter({ words, speed = 80, pause = 1400, className = "" }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        ),
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] align-middle bg-current ml-1 animate-pulse" />
    </span>
  );
}
