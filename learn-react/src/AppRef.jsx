import { forwardRef, useEffect, useRef, useState } from "react";

// let counter = 0;
function ButtonCounter() {
  const countRef = useRef(0);
  // const [count, setCount] = useState(0);
  // console.log(countRef); // {current: 0} // 단일객체

  // console.log("✅ 리렌더링!"); // 처음 1번만 표시됨 (useEffect와 다른 부분)
  // ! let 대신 쓰는 이유? => 화면이 리렌더링이 되었을 때 let은 초기화가 되지만 useRef는 값을 저장하고 있다.
  // let num = 0; => 이렇게 let으로 선언한 경우, 1씩 잘 증가는 하지만 리렌더링이 발생하면 다시 0이 된다.

  const handleClick = () => {
    countRef.current++;
    console.log("counrRef: ", countRef.current); // 1씩 증가한 숫자
    // useRef 사용 할 경우, 각 버튼의 카운터가 각각 올라감
    // (let을 사용한 경우는 어느 버튼을 눌러도 숫자가 공유되어서 숫자가 이어서 올라감)

    // counter++;
    // console.log("counter: ", counter);
    // setCount(count + 1);
  };

  return <button onClick={handleClick}>count</button>;
}

const MyForm = forwardRef((props, ref) => {
  const [form, setForm] = useState({
    title: "제목",
    author: "Nova",
    content: "",
  });

  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("DOM: ", titleInputRef.current); // 제목 input 태그를 가져옴
    // 빈 부분이 있으면 해당 부분으로 focus
    if (!form.title) {
      titleInputRef.current.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current.focus();
      return;
    }
    if (!form.content) {
      contentTextareaRef.current.focus();
      return;
    }
    console.log("✅저장 성공");
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name); // title, author, content 등 입력폼에 입력되면 해당 name을 가져옴
    setForm({
      ...form,
      // 동적 프로퍼티 사용
      [name]: value,
    });
  };

  // 화면이 렌더링 되어있을 때 값이 없는 입력폼에 focus
  const [isChanged, setIsChanged] = useState(false);
  // 변경되기 전 데이터는 렌더링 항목에 포함하지 않음 = useRef
  const prevForm = useRef(null);

  useEffect(() => {
    // 서버 API fetch => useEffect 사용!
    prevForm.current = { ...form };
  }, []);

  useEffect(() => {
    const hasChanged =
      prevForm.current.title !== form.title ||
      prevForm.current.author !== form.author ||
      prevForm.current.content !== form.content;
    setIsChanged(hasChanged);
  }, [form]);

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <fieldset>
        <legend>글쓰기</legend>
        <input
          ref={titleInputRef}
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleForm}
        />
        <hr />
        <input
          ref={authorInputRef}
          name="author"
          placeholder="작성자"
          value={form.author}
          onChange={handleForm}
        />
        <hr />
        <textarea
          ref={contentTextareaRef}
          name="content"
          placeholder="내용"
          value={form.content}
          onChange={handleForm}
        />
        <hr />
        <button disabled={!isChanged}>전송</button>
      </fieldset>
    </form>
  );
});

export default function AppRef(props) {
  const myFormRef = useRef(null);

  return (
    <>
      <h2>Count</h2>
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <MyForm ref={myFormRef} />
    </>
  );
}
