import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
       <h1>Simple Counter</h1>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increase</button>
       <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  );
}

export default App;
