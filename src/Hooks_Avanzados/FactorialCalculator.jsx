import { useState, useMemo } from 'react';

export const FactorialCalculator = () => {
  const [number, setNumber] = useState(5);

  const factorial = useMemo(() => {
    console.log('Calculando factorial...');
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        min="0"
        style={{ padding: '8px', width: '60px' }}
      />
      <p>Factorial de {number} es: {factorial}</p>
    </div>
  );
};