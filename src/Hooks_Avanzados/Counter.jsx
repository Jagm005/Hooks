import { useReducer } from 'react';
import { Button } from 'antd';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{ margin: '20px' }}>
      <p>Cuenta: {state.count}</p>
      <div className="Boton">
        <Button 
        onClick={() => dispatch({ type: 'INCREMENT' })}
        style={{ marginRight: '10px' }}
      >
        Incrementar
      </Button>
      
      
      <Button onClick={() => dispatch({ type: 'RESET' })}>
        Reiniciar
      </Button>
      </div>
    </div>
  );
};