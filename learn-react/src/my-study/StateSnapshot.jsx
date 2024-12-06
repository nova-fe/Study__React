// 챌린지 도전하기: https://ko.react.dev/learn/state-as-a-snapshot
/**
 * [문제] 클릭 핸들러에 alert를 추가하세요. 신호등이 녹색이고 “걷기”라고 표시되면 버튼을 클릭하면 “다음은 정지입니다”라고 표시되어야 합니다.
 * 신호등이 빨간색이고 “중지”라고 표시되면 버튼을 클릭하면 “다음은 걷기입니다”라고 표시되어야 합니다.
 * alert를 setWalk 호출 전이나 후에 넣는 것이 차이가 있을까요?
 */

// * React는 렌더링의 이벤트 핸들러 내에서 state 값을 “고정”으로 유지합니다.

import { useState } from "react";

export default function StateSnapshot() {
  // 1) walk: true인 상태
  const [walk, setWalk] = useState(true);

  // 6) 이벤트 핸들러 실행
  function handleClick() {
    // alert(walk); // 이때의 walk는 true

    setWalk(!walk); // setWalk를 반대인 false로 바꿈

    // 스냅샷처럼 동작하기 때문에 이때의 walk는 아직 true 이다.
    alert(walk ? "다음은 정지입니다" : "다음은 걷기입니다"); // 다음은 정지입니다가 얼럿으로 뜸
  }

  return (
    <>
      {/* 5) onClick 을 클릭 */}
      <button onClick={handleClick}>
        {/* 2) 걷기가 true인 상태이므로 Stop 으로 표시 */}
        Change to {walk ? "Stop" : "Walk"}
      </button>
      {/* 3) 걷기가 true인 상태이므로 색상은 darkgreen */}
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {/* 4) 걷기가 true인 상태이므로 Walk 로 표시 */}
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
