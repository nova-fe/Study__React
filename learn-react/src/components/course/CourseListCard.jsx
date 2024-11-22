import CourseItem from "./CourseItem";

export default function CourseListCard() {
  const title = "강의 목록";
  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <div className="card__body">
        <div className="courses">
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </div>
      </div>
    </div>
  );
}
