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

export default function RelatedTextWithTimer() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Search & Timer States
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // EFFECT 1: Live Timer (Only runs if logged in and active)
  useEffect(() => {
    let interval = null;
    if (isLoggedIn && isActive) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isLoggedIn]);

  // EFFECT 2: Input Box Search Logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setIsLoading(true);
    const delayDebounce = setTimeout(() => {
      const filtered = mockDatabase.filter(line =>
        line.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 3));
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  // Handle Login submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple demo validation (You can type any username/password)
    if (username.trim() && password.trim()) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Please enter both username and password.");
    }
  };

  // Handle Logout execution
  const handleLogout = () => {
    setIsLoggedIn(false);
    setQuery("");
    setResults([]);
    setUsername("");
    setPassword("");
  };

  // --- CONDITION 1: RENDER LOGIN PAGE ---
  if (!isLoggedIn) {
    return (
      <div style={{
        maxWidth: '350px',
        margin: '50px auto',
        padding: '30px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontFamily: 'sans-serif',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        <h2>Account Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px', fontSize: '15px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {loginError && <p style={{ color: 'red', fontSize: '13px', margin: 0 }}>{loginError}</p>}
          <button 
            type="submit"
            style={{
              padding: '10px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    );
  }

  // --- CONDITION 2: RENDER DASHBOARD (LOGGED IN) ---
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'sans-serif', 
      position: 'relative', 
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: '550px',
      margin: '20px auto',
      backgroundColor: '#fff'
    }}>
      
      {/* Top Right Control Block (Timer + Logout) */}
      <div style={{
        position: 'absolute', 
        top: '15px',
        right: '15px',
        backgroundColor: '#f0f0f0',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#555',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div>⏱️ Time: {seconds}s</div>
        <div style={{ marginTop: '5px', display: 'flex', gap: '5px' }}>
          <button onClick={() => setIsActive(true)} disabled={isActive} style={btnStyle(isActive, '#4CAF50')}>Start</button>
          <button onClick={() => setIsActive(false)} disabled={!isActive} style={btnStyle(!isActive, '#f44336')}>Stop</button>
        </div>
        <button 
          onClick={handleLogout}
          style={{
            marginTop: '8px',
            width: '100%',
            padding: '4px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px'
          }}
        >
          Logout
        </button>
      </div>

      <h3>Welcome, {username}!</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>Dashboard Search Engine</p>
      
      <input
        type="text"
        placeholder="Type here (e.g., 'react', 'hook')..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '55%', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <div style={{ marginTop: '20px' }}>
        {isLoading && <p style={{ color: '#666' }}>Searching...</p>}

        {!isLoading && results.length > 0 && (
          <div>
            <h4>Related Lines:</h4>
            <ul>
              {results.map((line, index) => (
                <li key={index} style={{ marginBottom: '8px', color: '#333', textAlign: 'left' }}>
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

// Small helper function for cleaner inline button styles
const btnStyle = (disabledCondition, activeColor) => ({
  padding: '2px 6px',
  fontSize: '11px',
  cursor: disabledCondition ? 'not-allowed' : 'pointer',
  backgroundColor: disabledCondition ? '#ccc' : activeColor,
  color: 'white',
  border: 'none',
  borderRadius: '3px'
});
