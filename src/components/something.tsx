import {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="text-h1 bg-brand-primary">
                test
            </div>
            <div style={{padding: '20px', border: '1px solid #ccc', borderRadius: '8px'}}>
                <p>Current Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </>
    );
}
