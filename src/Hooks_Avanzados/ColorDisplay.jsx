import { useColor } from './ColorContext';

export const ColorDisplay = () => {
  const color = useColor();
  return (
    <div style={{ color, fontSize: '24px', margin: '20px' }}>
      Texto con color compartido: {color}
    </div>
  );
};