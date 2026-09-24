import { useState, useEffect } from 'react';

const mockDatabase = [
  "React is a popular JavaScript library for building user interfaces.",
  "React uses a Virtual DOM to optimize rendering performance.",
  "Components are the core building blocks of a React application.",
  "Hooks like useState and useEffect manage state and side effects.",
  "JavaScript is the programming language powering the web.",
  "Web development involves frontend design and backend logic.",
  "State represents the parts of an app that can change over time."
];

export default function RelatedTextWithEffect() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect triggers whenever the 'query' state changes
  useEffect(() => {
    // If the input is empty, clear results and don't fetch
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    // Simulating an API call or background search delay (300ms)
    const delayDebounce = setTimeout(() => {
      const filtered = mockDatabase.filter(line =>
        line.toLowerCase().includes(query.toLowerCase())
      );
      
      // Limit to 2-3 lines
      setResults(filtered.slice(0, 3));
      setIsLoading(false);
    }, 300);

    // Cleanup function: clears the timeout if the user types again quickly
    return () => clearTimeout(delayDebounce);
  }, [query]); 

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Search with useEffect</h3>
      
      <input
        type="text"
        placeholder="Type here (e.g., 'react', 'hook')..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      <div style={{ marginTop: '20px' }}>
        {isLoading && <p style={{ color: '#666' }}>Searching...</p>}

        {!isLoading && results.length > 0 && (
          <div>
            <h4>Related Lines:</h4>
            <ul>
              {results.map((line, index) => (
                <li key={index} style={{ marginBottom: '8px', color: '#333' }}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isLoading && query && results.length === 0 && (
          <p style={{ color: '#888' }}>No related lines found.</p>
        )}
      </div>
    </div>
  );
}
