import { useEffect, useState } from "react";

function Courses() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  // useEffect: 마운트 된 이후 1번만 호출
  useEffect(() => {
    // 여기서 useEffect를 사용하지 않으면 상태 변화(list)로 인해 계속 호출이 됨
    fetch(`data/courses_${filter}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("✅데이터 조회 성공");
        setList(data);
      });

    // 소켓이나 리스너와 같은 연결이 있다면 return 을 해야한다 (클린업 함수)
    return () => {
      console.log("✅ 연결 해제!");
    };
  }, [filter]); // 빈 배열을 넘기면 1번만 실행됨

  return (
    <>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === "all"}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="all">전체</label>

      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === "favorite"}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default function AppEffect(props) {
  // 1) DOM 조작하기
  // useEffect(() => {
  //   const $h2 = document.querySelector("#title");
  //   console.log($h2); // useEffect 밖에서는 null이 나옴!!
  // }, []);

  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Courses />}
    </>
  );
}
