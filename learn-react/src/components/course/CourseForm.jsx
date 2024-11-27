// import { useState } from "react";
import { useImmer } from "use-immer";
import Card from "../Card";

export default function CourseForm(props) {
  const [form, updateForm] = useImmer({
    title: "리액트 강의",
    description: "리액트 기초부터 실전까지!",
    info: {
      level: 1,
      skill: "React",
    },
  });

  function handleCourseForm(e) {
    e.preventDefault();
  }

  // useImmer 사용
  // 인자(draft)로 위에서 설정했던 객체가 넘어옴
  const handleChange = (e) => {
    updateForm((draft) => {
      draft[e.target.name] = e.target.value;
    });
  };

  const handleSkillChange = (e) => {
    updateForm((draft) => {
      draft.info.skill = e.target.value;
    });
  };

  const handleLevelChange = (e) => {
    updateForm((draft) => {
      draft.info.level = e.target.value;
    });
  };

  // const handleChange = (e) => {
  //   console.log("e.target.name", e.target.name); // 제목 입력시: title, 내용 입력시: description
  //   setForm({
  //     ...form, // 전개 구문으로 기본의 값 유지
  //     // 객체의key를 괄호구문을 이용해 e.target.name을 받아서 입력되는 것을 동적을 받아옴
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSkillChange = (e) => {
  //   setForm({
  //     ...form,
  //     info: {
  //       ...form.info, // info도 객체이기 때문에 전개구문을 써줘야 함
  //       skill: e.target.value,
  //     },
  //   });
  // };

  // const handleLevelChange = (e) => {
  //   setForm({
  //     ...form,
  //     info: {
  //       ...form.info, // info도 객체이기 때문에 전개구문을 써줘야 함
  //       level: e.target.value,
  //     },
  //   });
  // };

  return (
    <>
      <Card title="강의 등록">
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleCourseForm}>
          <input name="title" type="text" placeholder="제목" value={form.title} onChange={handleChange} />
          <input name="description" type="text" placeholder="설명" value={form.description} onChange={handleChange} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="skill" style={{ width: "100px" }}>
              스킬
            </label>
            <input name="skill" id="skill" type="text" value={form.info.skill} onChange={handleSkillChange} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="level" style={{ width: "100px" }}>
              난이도
            </label>
            <select name="level" id="level" value={form.info.level} onChange={handleLevelChange}>
              <option value="0">입문</option>
              <option value="1">초급</option>
              <option value="2">중급</option>
            </select>
          </div>
          <input type="submit" value="등록" />
        </form>
        {(form.title || form.description) && ( // 둘 중 하나라도 존재한다면 true
          <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "#eee", borderRadius: "6px" }}>
            {form.title && <p>제목: {form.title}</p>}
            {form.description && <p>설명: {form.description}</p>}
            {form.info.skill && <p>스킬: {form.info.skill}</p>}
            {form.info.level && <p>난이도: {form.info.level}</p>}
          </div>
        )}
      </Card>
    </>
  );
}