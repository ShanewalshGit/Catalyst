import { useMemo, useRef, useState } from "react";
import { NODES } from "../data/nodes";

interface Props {
  onSelect: (nodeId: string) => void;
}

export function SearchBar({ onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return NODES.filter(
      (n) =>
        n.name.toLowerCase().includes(q) ||
        n.floor.toLowerCase().includes(q) ||
        n.desc.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  const choose = (id: string) => {
    onSelect(id);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="search">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search rooms, floors, encounters…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
      />
      {open && results.length > 0 && (
        <div className="search-results">
          {results.map((n) => (
            <button
              key={n.id}
              type="button"
              className="search-result"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(n.id)}
            >
              <span className="search-result-name">{n.name}</span>
              <span className="search-result-floor">{n.floor}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
