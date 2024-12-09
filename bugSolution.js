```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when 'count' changes
    console.log('Component rendered with count:', count);
    // Cleanup function (optional, but good practice)
    return () => {
      console.log('Component unmounted');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
    </div>
  );
}
```