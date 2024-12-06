import "./App.css";
import PullUpPure from "./components/PullUpPure";

export default function AppPure(props) {
  return (
    <div>
      {/* counter 변수가 전역 변수로 되어있기 때문에, 전체에 영향을 줌.
          => 리액트에서 컴포넌트를 만들 때는 같은 인풋을 넣었을 때 같은 아웃풋이 나오도록 순수하게 컴포넌트를 만들어야 한다.
          => 순수하지 않은 컴포넌트라고 함
      */}
      {/* 나는 턱걸이를 12개 했습니다. */}
      {/* <PullUpImpure /> */}
      {/* 나는 턱걸이를 14개 했습니다. */}
      {/* <PullUpImpure /> */}
      {/* 나는 턱걸이를 16개 했습니다. */}
      {/* <PullUpImpure /> */}

      <PullUpPure counter={11} />
      <PullUpPure counter={12} />
      <PullUpPure counter={13} />
    </div>
  );
}
