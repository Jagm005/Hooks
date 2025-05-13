import { useState, useMemo, useCallback } from 'react';

const sampleItems = [
  'Manzana', 'Banana', 'Naranja', 'Pera', 'Uva',
  'Kiwi', 'Melón', 'Sandía', 'Fresa', 'Mango'
];

export const SearchList = () => {
  const [query, setQuery] = useState('');

  const filteredItems = useMemo(() => {
    return sampleItems.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSearch = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <input 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Buscar frutas..."
        style={{ padding: '8px', width: '200px' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredItems.map((item, index) => (
          <li key={index} style={{ padding: '5px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};