import { useEffect, useRef } from "react";

export function useDocumentTitle(title: string) {
  const previousTitle = useRef(document.title);
  useEffect(() => {
    const previous = previousTitle.current;
    document.title = title;

    return () => {
      document.title = previous;
    };
  }, [title]);
}
