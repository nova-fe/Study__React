import { useState } from "react";

export default function AppMovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e) => {
        // e.clientX, e.clientY -> 마우스의 좌표를 불러옴
        // ❌ position.x: e.clientX, -> 기존 객체값 변경 금지

        setPosition(
          // * 객체를 업데이트 하고 싶을 때는 기존 객체의 복사본을 만들어서 적용
          // 기존값을 절대 변경해선 안됨, 새로운 객체를 만들어서 setter에 넣어야 함
          {
            x: e.clientX,
            y: e.clientY,
          },
        );
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
