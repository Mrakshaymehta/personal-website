"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  className = "",
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let delay = deleting ? 45 : 90;

    if (!deleting && sub === current) {
      delay = 1600; // pause at full word
    } else if (deleting && sub === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && sub === current) {
        setDeleting(true);
      } else if (deleting && sub === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setSub((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [sub, deleting, index, words]);

  return (
    <span className={className}>
      {sub}
      <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] animate-pulse bg-accent-soft" />
    </span>
  );
}
