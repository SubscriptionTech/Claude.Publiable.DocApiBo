import React, {useCallback, useEffect, useRef, useState} from 'react';

let pagefindInstance = null;

async function getPagefind() {
  if (pagefindInstance) return pagefindInstance;
  try {
    pagefindInstance = await import('/pagefind/pagefind.js');
    await pagefindInstance.options({excerptLength: 15});
  } catch {
    pagefindInstance = {search: async () => ({results: []})};
  }
  return pagefindInstance;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const search = useCallback(async (q) => {
    if (!q.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }
    const pf = await getPagefind();
    const raw = await pf.search(q);
    const resolved = await Promise.all(raw.results.slice(0, 8).map((r) => r.data()));
    setResults(resolved);
    setOpen(true);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => search(query), 200);
    return () => clearTimeout(t);
  }, [query, search]);

  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setOpen(true)}
        style={{
          height: '36px',
          width: '200px',
          background: 'var(--pad-search-input-bg)',
          border: '1px solid var(--pad-search-input-border)',
          borderRadius: '6px',
          color: 'var(--pad-text-on-dark)',
          fontSize: '0.8125rem',
          padding: '0 0.75rem',
          outline: 'none',
        }}
      />
      {open && results.length > 0 && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            width: '400px',
            maxHeight: '60vh',
            overflowY: 'auto',
            background: 'var(--pad-background-sidebar)',
            border: '1px solid var(--pad-search-input-border)',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            zIndex: 9999,
          }}
        >
          {results.map((r, i) => (
            <a
              key={i}
              href={r.url}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.6rem 1rem',
                borderBottom: '1px solid var(--pad-search-item-separator)',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  color: 'var(--pad-search-result-title)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  marginBottom: '0.2rem',
                }}
                dangerouslySetInnerHTML={{__html: r.meta?.title || r.url}}
              />
              <div
                style={{
                  color: 'var(--pad-search-excerpt)',
                  fontSize: '0.8125rem',
                  lineHeight: 1.5,
                }}
                dangerouslySetInnerHTML={{__html: r.excerpt}}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
