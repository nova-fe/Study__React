import Card from "../Card";
import CourseItem from "./CourseItem";

export default function CourseListCard({ items }) {
  // items: 객체를 구조분해할당으로 가져옴
  const title = "강의 목록";

  // 배열을 구조분해할당으로 가져옴
  const [course1, course2, course3] = items;

  return (
    // style={{ backgroundColor: "black", color: "white" }}
    <Card title={title}>
      <div className="courses">
        <CourseItem {...course1} />
        <CourseItem {...course2} />
        <CourseItem {...course3} />
      </div>
    </Card>

    // <div className="card">
    //   <div className="card__header">{title}</div>
    //   <div className="card__body">
    //     <div className="courses">
    //       {/* course1 객체를 spread 문법으로 가져옴
    //           = title, description, thumbnail을 가져옴
    //       */}
    //       <CourseItem {...course1} />
    //       <CourseItem {...course2} />
    //       <CourseItem title={course3.title} description={course3.description} thumbnail={course3.thumbnail} />
    //     </div>
    //   </div>
    // </div>
  );
}
