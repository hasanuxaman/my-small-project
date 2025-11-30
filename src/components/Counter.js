function Counter() {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('count');
        return saved !== null ? JSON.parse(saved) : 0;
    }







    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Simple Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrease</button>
        </div>
    );




}