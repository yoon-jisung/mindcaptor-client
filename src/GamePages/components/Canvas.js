import { useEffect, useRef, useState } from 'react';

export default function Canvas() {
  const canvas = useRef(null);
  const [ctx, setCts] = useState(undefined);
  const [tracking, setTracking] = useState([]);
  const [history, setHistory] = useState([]);
  const [isMouseDown, setIstMouseDown] = useState(false);

  useEffect(() => {
    setCts(canvas.current.getContext('2d'));
  }, []);

  const handleMouseMove = (e) => {
    if (ctx && isMouseDown) {
      var rect = canvas.current.getBoundingClientRect();
      ctx.fillStyle = 'black';
      ctx.fillRect(e.clientX - rect.left, e.clientY - rect.top, 5, 5);
    }
  };
  const handleReset = () => {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }
  };
  return (
    <div>
      <canvas
        className="canvas"
        ref={canvas}
        width={800}
        height={800}
        onMouseMove={handleMouseMove}
        onMouseDown={(e) => {
          setIstMouseDown(true);
        }}
        onMouseUp={(e) => {
          setIstMouseDown(false);
        }}
      />
      <button className="reset" onClick={handleReset}>
        초기화
      </button>
    </div>
  );
}
