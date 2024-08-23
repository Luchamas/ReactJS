import { useEffect, useState } from "react";

function WidthButton({ width }: { width: number }) {
  const [widthAux, setWidthAux] = useState<number>(100);
  useEffect(() => {
    setWidthAux(width);
  }, [width]);
  return (
    <div>
      <button style={{ width: `${widthAux}px` }}>
        Largura Atual: {width} pixels
      </button>
    </div>
  );
}
export default WidthButton;
