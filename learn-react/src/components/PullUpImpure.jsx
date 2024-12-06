let counter = 10;

export default function PullUpImpure(props) {
  counter = counter + 1;
  return <p>나는 턱걸이를 {counter}개 했습니다.</p>;
}
