import { useEffect, useState } from "react";
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-with: 415px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener(listener);
    return () => media.removeEventListener(listener);
  }, [matches, query]);

  return matches;
}
