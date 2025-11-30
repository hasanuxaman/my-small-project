import React, { useState, useEffect } from 'react';

// Counter component with all features
function Counter() {
  // Load initial count from local storage or start at 0
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved !== null ? JSON.parse(saved) : 0;
  });
  const [inputValue, setInputValue] = useState('');
  const minLimit = -10;
  const maxLimit = 10;

  // Save count to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  // Increase count without passing max limit
  const increase = () => {
    setCount(prev => Math.min(prev + 1, maxLimit));
  };

  // Decrease count without passing min limit
  const decrease = () => {
    setCount(prev => Math.max(prev - 1, minLimit));
  };

  // Reset count to zero
  const reset = () => {
    setCount(0);
  };

  // Double count on double click
  const double = () => {
    setCount(prev => {
      const doubled = prev * 2;
      if (doubled > maxLimit) return maxLimit;
      if (doubled < minLimit) return minLimit;
      return doubled;
    });
  };

  // Handle input change for setting count
  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  // Set count based on input value, respecting limits
  const setCountFromInput = () => {
    let val = parseInt(inputValue, 10);
    if (isNaN(val)) return;
    val = Math.min(maxLimit, Math.max(minLimit, val));
    setCount(val);
    setInputValue('');
  };

  // Determine if count is even or odd
  const evenOdd = count % 2 === 0 ? 'Even' : 'Odd';

  // Determine color based on count
  let color = 'black';
  if (count > 0) color = 'green';
  else if (count < 0) color = 'red';

  // Styles
  const style = {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Arial, sans-serif'
  };

  const countStyle = {
    fontSize: 48,
    color,
    margin: '20px 0'
  };

  const buttonStyle = {
    fontSize: 16,
    margin: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #999',
    transition: 'all 0.3s ease',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    width: '60px',
    textAlign: 'center',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <div style={style}>
      <h1>React Counter with Features</h1>
      <div style={countStyle}>{count}</div>
      <div>Count is <strong>{evenOdd}</strong></div>

      <div>
        <button
          style={buttonStyle}
          onClick={increase}
          onDoubleClick={reset}
          title="Click: Increase, Double-Click: Reset"
        >
          Increase
        </button>

        <button
          style={buttonStyle}
          onClick={decrease}
          onDoubleClick={double}
          title="Click: Decrease, Double-Click: Double"
        >
          Decrease
        </button>

        <button
          style={buttonStyle}
          onClick={reset}
          title="Reset to zero"
        >
          Reset
        </button>
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          style={inputStyle}
          type="number"
          placeholder="Set count"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          style={buttonStyle}
          onClick={setCountFromInput}
        >
          Set
        </button>
      </div>

      <div style={{ marginTop: 30, fontSize: 14, color: '#555' }}>
        <p>Limits: Min {minLimit} - Max {maxLimit}</p>
        <p>Local storage persists count on page reload</p>
      </div>
    </div>
  );
}

export default function App() {
  return <Counter />;
}
