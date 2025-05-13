import { useRef, useEffect } from 'react';

export const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input 
      ref={inputRef} 
      placeholder="Autofocus input" 
      style={{ padding: '8px', margin: '10px' }}
    />
  );
};