import { useState } from "react";
import Card from "../Card";

export default function CourseForm(props) {
  const [form, setForm] = useState({
    title: "리액트 강의",
    description: "리액트 기초부터 실전까지!",
  });

  function handleCourseForm(e) {
    e.preventDefault();
  }

  const handleChange = (e) => {
    console.log("e.target.name", e.target.name); // 제목 입력시: title, 내용 입력시: description
    setForm({
      ...form, // 전개 구문으로 기본의 값 유지
      // 객체의key를 괄호구문을 이용해 e.target.name을 받아서 입력되는 것을 동적을 받아옴
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Card title="강의 등록">
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleCourseForm}>
          <input name="title" type="text" placeholder="제목" value={form.title} onChange={handleChange} />
          <input name="description" type="text" placeholder="설명" value={form.description} onChange={handleChange} />
          <input type="submit" value="등록" />
        </form>
        {(form.title || form.description) && ( // 둘 중 하나라도 존재한다면 true
          <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "#eee", borderRadius: "6px" }}>
            {form.title && <p>제목: {form.title}</p>}
            {form.description && <p>설명: {form.description}</p>}
          </div>
        )}
      </Card>
    </>
  );
}